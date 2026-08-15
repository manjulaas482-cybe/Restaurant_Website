// Show / Hide Password
const togglePassword = document.getElementById("togglePassword");
const password = document.getElementById("password");

togglePassword.addEventListener("click", function () {

    if (password.type === "password") {
        password.type = "text";
        togglePassword.classList.remove("fa-eye");
        togglePassword.classList.add("fa-eye-slash");
    } else {
        password.type = "password";
        togglePassword.classList.remove("fa-eye-slash");
        togglePassword.classList.add("fa-eye");
    }

});

// Login
document.getElementById("loginForm").addEventListener("submit", function (e) {

    e.preventDefault();

    const username = document.getElementById("username").value;
    const pass = document.getElementById("password").value;

    // Get data from Local Storage
    const savedUsername = localStorage.getItem("username");
    const savedPassword = localStorage.getItem("password");

    if (username === savedUsername && pass === savedPassword) {

        alert("✅ Login Successful!");

        window.location.href = "index.html";

    } else {

        alert("❌ Invalid Username or Password");

    }

});