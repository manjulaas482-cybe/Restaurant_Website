// ==========================
// Customer Review System
// ==========================

let selectedRating = 0;

const reviewStars = document.querySelectorAll(".star-rating span");
const submitReview = document.getElementById("submitReview");


// ⭐ Select Rating
reviewStars.forEach(function(star) {

    star.addEventListener("click", function() {

        selectedRating = Number(star.dataset.rating);

        reviewStars.forEach(function(s) {

            if (Number(s.dataset.rating) <= selectedRating) {
                s.style.color = "gold";
            } else {
                s.style.color = "#ccc";
            }

        });

    });

});


// 📝 Submit Review
submitReview.addEventListener("click", function() {

    const name = document.getElementById("reviewName").value.trim();

    const message = document.getElementById("reviewMessage").value.trim();


    if (name === "") {
        alert("⚠️ Please enter your name.");
        return;
    }

    if (message === "") {
        alert("⚠️ Please write your review.");
        return;
    }

    if (selectedRating === 0) {
        alert("⭐ Please select a rating.");
        return;
    }


    // Create stars
    let ratingStars = "";

    for (let i = 1; i <= 5; i++) {

        if (i <= selectedRating) {
            ratingStars += "⭐";
        } else {
            ratingStars += "☆";
        }

    }


    // Create new review card
    const newReview = document.createElement("div");

    newReview.className = "review-card";

    newReview.innerHTML = `
        <h3>${ratingStars}</h3>
        <p>"${message}"</p>
        <h4>- ${name}</h4>
    `;


    // Add review before Write a Review box
    const addReviewBox = document.querySelector(".add-review");

    document
        .querySelector(".reviews")
        .insertBefore(newReview, addReviewBox);


    // Clear inputs
    document.getElementById("reviewName").value = "";

    document.getElementById("reviewMessage").value = "";


    // Reset rating
    selectedRating = 0;

    reviewStars.forEach(function(star) {
        star.style.color = "#ccc";
    });


    alert("✅ Thank you for your review!");

});