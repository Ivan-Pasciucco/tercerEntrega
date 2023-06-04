const addToCartButtons = document.querySelectorAll(".addToCartBtn");

addToCartButtons.forEach((button) => {
  button.addEventListener("click", addToCart);
});

function addToCart(event) {
  const productId = event.target.dataset.product;

  if (sessionStorage.getItem("userLoggedIn")) {
    let cart = JSON.parse(sessionStorage.getItem("cart"));

    if (!cart) {
      cart = [];
    }

    cart.push(productId);

    sessionStorage.setItem("cart", JSON.stringify(cart));

    alert("Producto agregado al carrito exitosamente");
  } else {
    alert("Debes iniciar sesión para agregar productos al carrito");
  }
}
