var groceries = [{
    name: "apple",
    price: 1.50,
    img: "<img src='images/apple.jpg' width='200px' height='185px'>"
  }, {
    name: "orange",
    price: 2.50,
    img: "<img src='images/orange.jpg' width='200px' height='185px'>"
  }, {
    name: "bread",
    price: 2.50,
    img: "<img src='images/'bread.jpg' width='200px' height='185px'>"
  }, {
    name: "Lamborghini",
    price: 2000000,
    img: "<img src='images/lambo.jpg' width='300px' height='185px'>"
  }, {
    name: "Mazda",
    price: 25000
  }, {
    name: "cigarettes",
    price: 5
  }, {
    name: "wall",
    price: 40000
  }, {
    name: "police officer",
    price: 0
  }, {
    name: "friend",
    price: 1000000000
  }, {
    name: "basketball",
    price: 10
  }, {
    name: "skateboard",
    price: 200
  }, {
    name: "sea shell",
    price: 9
  }
];

var cart = [];
function handleClick(event) {
    const groceryItemData = JSON.parse(event.currentTarget.getAttribute('data-grocery-item'));
    cart.push(groceryItemData);

}

var groceryItemsEl = document.getElementById("grocery-items");

function displayProducts() {
  document.querySelector('.app').style.display = 'block';
  document.querySelector(".deliver").style.display = 'none';
  document.querySelector(".pickup").style.display = 'none';
  console.log("yeah it ran -- displayproducts");
  for (let i = 0; i < groceries.length; i++) {
    const groceryItemHTML = `
    <div onClick="handleClick(event);" class="grocery-item" data-grocery-item='{"name":"${groceries[i].name}", "price":${groceries[i].price}}'>
      <div>
        <strong>Name:</strong>${groceries[i].name} 
      </div>
      <div>
        <strong>Price:</strong>${groceries[i].price}
      </div>
      ${groceries[i].img}
    </div>
    `
    groceryItemsEl.innerHTML += groceryItemHTML;
  }
} 
function displayLessProducts() {
  document.querySelector('.app').style.display = 'block';
  document.querySelector(".deliver").style.display = 'none';
  document.querySelector(".pickup").style.display = 'none';
  for (let i = 0; i < 9; i++) {
    const groceryItemHTML = `
    <div onClick="handleClick(event);" class="grocery-item" data-grocery-item='{"name":"${groceries[i].name}", "price":${groceries[i].price}}'>
      <div>
        <strong>Name:</strong>${groceries[i].name} 
      </div>
      <div>
        <strong>Price:</strong>${groceries[i].price}
      </div>
      ${groceries[i].img}
    </div>
    `
    groceryItemsEl.innerHTML += groceryItemHTML;
  }
}


var cartItemsEl = document.querySelector(".cart-element");
var cartItems = document.querySelector(".cart-item");
var groceryItemHeading = document.querySelector(".items-heading");
var cartItemHeading = document.querySelector('.heading-cart');

function renderCartView() {
  if (cart.length === 0) {
    alert("Cart is empty!");
    return;
  }
  document.querySelector('.checkout-button').style.display = "none";
  groceryItemsEl.style.display = "none";
  groceryItemHeading.style.display = "none";
  cartItemHeading.style.display = "block";
  console.log(cartItemHeading.style);
  cartItemsEl.style.display = "flex";
  for (let i = 0; i < cart.length; i++) {
    const cartItemHTML = `
    <div class="cart-item" onClick="handleClick(event);" data-cart-item='{"name":"${cart[i].name}", "price":${cart[i].price}}'>
      <div>
        <strong>Name:</strong>${cart[i].name} 
      </div>
      <div>
        <strong>Price:</strong>${cart[i].price}
      </div>
    </div>
    `;
    cartItemsEl.innerHTML += cartItemHTML;
    
  }
  var subtotal = 0;
  var deliveryFee = 9.99;
  for (let i = 0; i < cart.length; i++) {
    subtotal += cart[i].price;
  }
  var total = subtotal + Math.round(subtotal * 0.07) + deliveryFee;  

  cartItemsEl.innerHTML += `
  <div class="total">
    <p> Subtotal: $${subtotal}</p>
    <p> Delivery Fee: ${deliveryFee}</p>
    <p> Total: $${total}</p>
  </div>
  `;

  document.querySelector('.final-button').style.display = "block";
} 
var estimatedTime = document.querySelector('.other-exit');

function checkout() {
  cartItemHeading.style.display = "none";
  cartItemsEl.style.display = "none";
  document.querySelector('.exit-ticket').style.display = "block";
  document.querySelector('.final-button').style.display = "none";
  
  const waitTime = `
    <p>It will arrive in ${Math.round(Math.random() * 1000)} minutes
    </p>
    `;
    estimatedTime.innerHTML += waitTime;
}




