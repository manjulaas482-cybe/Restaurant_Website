document.getElementById("registerForm").addEventListener("submit", function(e){

    e.preventDefault();

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if(password !== confirmPassword){
        alert("❌ Passwords do not match!");
        return;
    }

    // Save user details in Local Storage
    localStorage.setItem("username", username);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    alert("✅ Registration Successful!");

    // Go to Login Page
    window.location.href = "login.html";

});