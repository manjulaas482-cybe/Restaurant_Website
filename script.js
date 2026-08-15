// ==========================
// Welcome Message
// ==========================

console.log("Foodie's Restaurant Website Loaded Successfully!");

// ==========================
// Order Now Button
// ==========================

const orderButton = document.querySelector(".order-btn");

orderButton.addEventListener("click", function () {
    alert("🍔 Thank you for choosing Foodie's Restaurant!");
});

// ==========================
// Contact Form Validation
// ==========================

const form = document.getElementById("contactForm");

form.addEventListener("submit", function(event){

    event.preventDefault();

    const name = document.querySelector("input[type='text']").value;

    const email = document.querySelector("input[type='email']").value;

    const message = document.querySelector("textarea").value;

    if(name==="" || email==="" || message==="")
    {
        alert("Please fill all the fields.");
    }
    else
    {
        alert("Your message has been sent successfully!");

        form.reset();
    }

});
// Hamburger Menu

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});
// ==========================
// Search Food
// ==========================

const search = document.getElementById("search");

search.addEventListener("keyup", function () {

    const value = search.value.toLowerCase();

    const cards = document.querySelectorAll(".card");

    cards.forEach(function(card){

        const foodName = card.querySelector("h3").textContent.toLowerCase();

        if(foodName.includes(value)){
            card.style.display = "";
        }else{
            card.style.display = "none";
        }

    });

});
// ==========================
// Shopping Cart
// ==========================



let cartCount = 0;
let total = 0;

const cartButtons = document.querySelectorAll(".add-cart");
const cartDisplay = document.getElementById("cart-count");
const cartItems = document.getElementById("cart-items");
const totalDisplay = document.getElementById("total");

let cartData = [];

if (cartItems) {
    cartItems.innerHTML = "";
}

cartButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        cartCount++;

        cartDisplay.textContent = cartCount;

        const card = button.parentElement;

        const foodName = card.querySelector("h3").textContent;

        const price = parseInt(
            card.querySelector("p").textContent.replace("₹", "")
        );

        total += price;

        totalDisplay.textContent = total;


        // Save food
        cartData.push({
            name: foodName,
            price: price
        });

        localStorage.setItem(
            "cartItems",
            JSON.stringify(cartData)
        );

        localStorage.setItem(
            "cartTotal",
            total
        );


        // Create cart item
        const item = document.createElement("div");

        item.classList.add("cart-item");

        item.innerHTML = `
            <span>${foodName}</span>

            <div class="quantity">
                <button class="minus">-</button>
                <span class="qty">1</span>
                <button class="plus">+</button>
            </div>

            <span class="price">₹${price}</span>

            <button class="remove-btn">Remove</button>
        `;

        if (!cartItems || !totalDisplay) {
            return;
        }

        cartItems.appendChild(item);


        // Quantity
        const plusBtn = item.querySelector(".plus");
        const minusBtn = item.querySelector(".minus");
        const qtyText = item.querySelector(".qty");

        let qty = 1;


        // Plus
        plusBtn.addEventListener("click", function() {

            qty++;

            qtyText.textContent = qty;

            total += price;

            totalDisplay.textContent = total;

            localStorage.setItem("cartTotal", total);

        });


        // Minus
        minusBtn.addEventListener("click", function() {

            if (qty > 1) {

                qty--;

                qtyText.textContent = qty;

                total -= price;

                totalDisplay.textContent = total;

                localStorage.setItem("cartTotal", total);
            }

        });


        // Remove
        const removeBtn = item.querySelector(".remove-btn");

        removeBtn.addEventListener("click", function() {

            item.remove();

            cartCount--;

            cartDisplay.textContent = cartCount;

            total -= price * qty;

            totalDisplay.textContent = total;


            localStorage.setItem("cartTotal", total);


            if (cartItems.children.length === 0) {

                cartItems.innerHTML =
                    "<p>Your cart is empty.</p>";

                cartData = [];

                localStorage.removeItem("cartItems");
                localStorage.setItem("cartTotal", 0);
            }

        });

    });

});
// Dark Mode

const darkBtn = document.getElementById("dark-mode-btn");

darkBtn.addEventListener("click", function(){

    document.body.classList.toggle("dark-mode");

});
// Favorite Button

const favorites = document.querySelectorAll(".favorite i");

favorites.forEach(function(icon){

    icon.addEventListener("click", function(){

        icon.classList.toggle("fa-regular");
        icon.classList.toggle("fa-solid");
        icon.classList.toggle("active");

    });

});
const hearts = document.querySelectorAll(".favorite i");

hearts.forEach((heart) => {
    heart.addEventListener("click", () => {
        heart.classList.toggle("fa-solid");
        heart.classList.toggle("fa-regular");
        heart.style.color = heart.classList.contains("fa-solid") ? "red" : "gray";
    });
});

const user = localStorage.getItem("username");

if (user) {
    document.getElementById("welcomeUser").innerHTML = "👤 Welcome, " + user;

    document.getElementById("loginBtn").style.display = "none";
    document.getElementById("logoutBtn").style.display = "inline-block";
}

document.getElementById("logoutBtn").addEventListener("click", function () {
    localStorage.removeItem("username");
    localStorage.removeItem("email");
    localStorage.removeItem("password");

    alert("Logged Out Successfully!");

    window.location.href = "login.html";
});
const ratings = document.querySelectorAll(".rating");

ratings.forEach((rating) => {

    const stars = rating.querySelectorAll("i");

    stars.forEach((star, index) => {

        star.addEventListener("click", () => {

            stars.forEach((s, i) => {

                if(i <= index){
                    s.classList.remove("fa-regular");
                    s.classList.add("fa-solid");
                    s.classList.add("active");
                }
                else{
                    s.classList.remove("fa-solid");
                    s.classList.add("fa-regular");
                    s.classList.remove("active");
                }

            });

        });

    });

});
// ==========================
// Customer Rating
// ==========================

const stars = document.querySelectorAll(".star-rating span");

let selectedRating = 0;

stars.forEach(function(star) {

    star.addEventListener("click", function() {

        selectedRating = Number(star.getAttribute("data-rating"));

        stars.forEach(function(s) {

            const rating = Number(s.getAttribute("data-rating"));

            if (rating <= selectedRating) {
                s.classList.add("active");
            } else {
                s.classList.remove("active");
            }

        });

    });

});


// ==========================
// Submit Review
// ==========================

const submitReview = document.getElementById("submitReview");

submitReview.addEventListener("click", function() {

    const name = document.getElementById("reviewName").value;
    const message = document.getElementById("reviewMessage").value;

    if (name === "" || message === "" || selectedRating === 0) {

        alert("Please enter your name, review and rating ⭐");

        return;
    }

    alert(
        "✅ Review Submitted Successfully!\n\n" +
        "Name: " + name + "\n" +
        "Rating: " + selectedRating + "/5\n" +
        "Review: " + message
    );

    document.getElementById("reviewName").value = "";
    document.getElementById("reviewMessage").value = "";

    stars.forEach(function(star) {
        star.classList.remove("active");
    });

    selectedRating = 0;

});
