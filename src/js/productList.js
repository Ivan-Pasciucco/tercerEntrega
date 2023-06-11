let cartItems = [];

const addToCart = (product) => {
  if (sessionStorage.getItem("userLoggedIn")) {
    cartItems.push(product);
    sessionStorage.setItem("cart", JSON.stringify(cartItems));
    alert("Producto agregado al carrito exitosamente");
    updateCartItems();
  } else {
    alert("Debes iniciar sesión para agregar productos al carrito");
  }
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

async function loadProducts() {
  try {
    const response = await fetch("./../../data/products.json");
    const data = await response.json();

    data.forEach((product) => {
      const productItem = document.createElement("div");
      productItem.classList.add("product", "col-md-4", "mb-4");
      const productImage = document.createElement("img");
      productImage.src = product.img;
      productImage.alt = product.name;
      productItem.appendChild(productImage);
      productName.textContent = product.name;
      productItem.appendChild(productName);

      const productPrice = document.createElement("p");
      productPrice.textContent = product.price;
      productItem.appendChild(productPrice);
      const productDescription = document.createElement("p");
      productDescription.textContent = product.description;
      productItem.appendChild(productDescription);

      const addToCartButton = document.createElement("button");
      addToCartButton.textContent = "Agregar al carrito";
      addToCartButton.classList.add("btn", "btn-primary");
      addToCartButton.addEventListener("click", () => {
        addToCart(product);
      });
      productItem.appendChild(addToCartButton);
      productContainer.appendChild(productItem);
    });
  } catch (error) {
    throw new Error("Error loading products", error);
  }
}
loadProducts();
