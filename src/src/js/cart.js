let cartItems = [];

const addToCart = (product) => {
  cartItems.push(product);
  updateCartItems();
};

const updateCartItems = () => {
  const cartItemsContainer = document.getElementById("cartItemsContainer");
  cartItemsContainer.innerHTML = "";

  cartItems.forEach((product) => {
    const cartItem = document.createElement("div");
    cartItem.textContent = product.name;
    cartItemsContainer.appendChild(cartItem);
  });
};

const addToCartButton = document.createElement("button");
addToCartButton.textContent = "Agregar al carrito";
addToCartButton.classList.add("btn", "btn-primary", "btn-sm");
addToCartButton.addEventListener("click", () => {
  addToCart(product);
});
product.appendChild(addToCartButton);

const checkoutButton = document.getElementById("checkoutButton");
checkoutButton.addEventListener("click", () => {
  cartItems = [];
  updateCartItems();
  alert("Gracias por su compra");
});

function openAddToCartModal(product) {
  addToCart(product);
  renderCartItems();
  $("#cartModal").modal("show");
}

function renderCartItems() {
  const cartItemsContainer = document.getElementById("cartItemsContainer");
  cartItemsContainer.innerHTML = "";

  cartItems.forEach((product) => {
    const cartItem = document.createElement("div");
    cartItem.textContent = product.name;
    cartItemsContainer.appendChild(cartItem);
  });
}
