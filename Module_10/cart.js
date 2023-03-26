var groceries = [{
    name: "mom",
    price: 1
  }, {
    name: "dad",
    price: 2
  }, {
    name: "sister",
    price: 3
  }, {
    name: "brother",
    price: 4
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
  cartItemsEl.style.display = "block";
  for (let i = 0; i < cart.length; i++) {
    const cartItemHTML = `
    <h1> Cart</h1>
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


