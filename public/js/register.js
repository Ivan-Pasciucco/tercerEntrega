document.addEventListener("DOMContentLoaded", function () {
  var registerForm = document.getElementById("registerForm");
  var successMessage = document.getElementById("successMessage");

  registerForm.addEventListener("submit", function (event) {
    event.preventDefault();

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    var user = {
      name: name,
      email: email,
      password: password,
    };

    sessionStorage.setItem("user", JSON.stringify(user));

    successMessage.style.display = "block";

    setTimeout(function () {
      window.location.href = "index.html";
    }, 3000);
  });
});
