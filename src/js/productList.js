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
}
const updateCartItems = () => {
  const cartItemsContainer = document.getElementById("cartItemsContainer");
  cartItemsContainer.innerHTML = ""; // Clear the cart items container before adding/updating the items in the cart

  cartItems.forEach((item) => {

  });
};









async function loadProducts() {
  try {
    const response = await fetch("./../../data/products.json"); // Fetch the products from the JSON file
    const data = await response.json();

    data.forEach((product) => {
      const productItem = document.createElement("div");
      productItem.classList.add("product", "col-md-4", "mb-4"); // Create a wrapper element for each product and add the classes to it (line 5

      const productImage = document.createElement("img");
      productImage.src = product.img;
      productImage.alt = product.name;
      productItem.appendChild(productImage); // Add the image to the wrapper element (productItem) we created earlier in the function (line 5) and add the image to it (line 10)

      const productName = document.createElement("h2");
      productName.textContent = product.name;
      productItem.appendChild(productName); // Add the name to the wrapper element (productItem) we created earlier in the function (line 5) and add the name to it (line 14)

      const productPrice = document.createElement("p");
      productPrice.textContent = product.price;
      productItem.appendChild(productPrice); // Add the price to the wrapper element (productItem) we created earlier in the function (line 5) and add the price to it (line 18)

      const productDescription = document.createElement("p");
      productDescription.textContent = product.description;
      productItem.appendChild(productDescription); // Add the description to the wrapper element (productItem) we created earlier in the function (line 5) and add the description to it (line 22)
   
      const addToCartButton = document.createElement("button");
      addToCartButton.textContent = "Agregar al carrito";
      addToCartButton.classList.add("btn", "btn-primary");
      addToCartButton.addEventListener("click", () => {
        openAddToCartModal(product);
      });
      productItem.appendChild(addToCartButton); // Add the addToCartButton to the wrapper element (productItem) we created earlier in the function (line 5) and add the addToCartButton to it (line 26)
      productContainer.appendChild(productItem); // Add the productItem to the productContainer (line 3) we created earlier in the function (line 5) and add the productItem to it (line 26)    
    });
  } catch (error) {
    throw new Error("Error loading products", error);
  }
}
loadProducts();
