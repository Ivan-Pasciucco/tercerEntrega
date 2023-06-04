document.addEventListener("DOMContentLoaded", function () {
  var loginForm = document.getElementById("loginForm");

  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    var storedUser = sessionStorage.getItem("user");

    if (storedUser) {
      var user = JSON.parse(storedUser);

      if (email === user.email && password === user.password) {
        sessionStorage.setItem("userLoggedIn", true);

        window.location.href = "index.html";
        document.getElementById("authLinksContainer").style.display = "none";

        var logoutContainer = document.getElementById("logoutContainer");

        var logoutButton = document.createElement("button");
        logoutButton.textContent = "Cerrar sesión";

        logoutButton.addEventListener("click", function () {
          sessionStorage.removeItem("userLoggedIn");

          window.location.href = "login.html";
        });

        logoutContainer.appendChild(logoutButton);
      } else {
        showError("Credenciales incorrectas. Por favor, intenta nuevamente.");
      }
    } else {
      showError("El usuario no existe. Por favor, regístrate primero.");
    }
  });

  function showError(message) {
    var errorContainer = document.getElementById("errorContainer");
    errorContainer.textContent = message;
    errorContainer.style.display = "block";
  }
});
