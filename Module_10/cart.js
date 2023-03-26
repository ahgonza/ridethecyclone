var groceries = [{
    name: "apple",
    price: 1.50
  }, {
    name: "orange",
    price: 2.50
  }, {
    name: "bread",
    price: 2.50
  }, {
    name: "Lamborghini",
    price: 2000000
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
    console.log(groceryItemData);
    cart.push(groceryItemData);
}

var groceryItemsEl = document.getElementById("grocery-items");
function displayProducts() {
  for (let i = 0; i < groceries.length; i++) {
    const groceryItemHTML = `
    <div onClick="handleClick(event);" class="grocery-item" data-grocery-item='{"name":"${groceries[i].name}", "price":${groceries[i].price}}'>
      <div>
        <strong>Name:</strong>${groceries[i].name} 
      </div>
      <div>
        <strong>Price:</strong>${groceries[i].price}
      </div>
    </div>
    `
    groceryItemsEl.innerHTML += groceryItemHTML;
  }
} 
displayProducts();

var cartItemsEl = document.querySelector(".cart-items");

function renderCartView() {
  groceryItemsEl.style.display = "none";
  document.querySelector(".items-heading").style.display = "none";
  cartItemsEl.style.display = "block";
  for (let i = 0; i < cart.length; i++) {
    const cartItemHTML = `
    <div onClick="handleClick(event);" class="cart-item" data-cart-item='{"name":"${cart[i].name}", "price":${cart[i].price}}'>
      <div>
        <strong>Name:</strong>${cart[i].name} 
      </div>
      <div>
        <strong>Price:</strong>${cart[i].price}
      </div>
    </div>
    `
    cartItemsEl.innerHTML += cartItemHTML;
  }
} 

/* function boxShadow() {
  document.querySelector(".grocery-item").style.background-color = "#135a10";
}

document.querySelector(".grocery-item").addEventListener("click", boxShadow()); */

