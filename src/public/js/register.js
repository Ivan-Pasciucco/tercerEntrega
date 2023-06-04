document.addEventListener("DOMContentLoaded", () => {
  const registerForm = document.getElementById("registerForm");
  const successMessage = document.getElementById("successMessage");

  registerForm.addEventListener("submit", function (event) {
    event.preventDefault(); // evitando que el formulario se envíe y la página se recargue.

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const user = {
      name: name,
      email: email,
      password: password,
    };

    sessionStorage.setItem("user", JSON.stringify(user)); // Guardando el usuario en el sessionStorage

    successMessage.style.display = "block";

    setTimeout(() => {
      window.location.replace("index.html");
    }, 3000);
  });
});
