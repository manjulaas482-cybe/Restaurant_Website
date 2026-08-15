// ==========================
// Checkout
// ==========================

const checkoutForm = document.getElementById("checkoutForm");

checkoutForm.addEventListener("submit", function(event) {

    event.preventDefault();

    // Get customer details
    const name = checkoutForm
        .querySelector("input:nth-of-type(1)").value;

    const phone = checkoutForm
        .querySelector("input:nth-of-type(2)").value;

    const address = checkoutForm
        .querySelector("input:nth-of-type(3)").value;

    // Get payment method
    const payment = checkoutForm
        .querySelector("select").value;


    // Get cart details
    const cartItems = JSON.parse(
        localStorage.getItem("cartItems")
    ) || [];

    const total =
        localStorage.getItem("cartTotal") || 0;


    // Create food name
    let foodNames = "Food Order";

    if (cartItems.length > 0) {

        foodNames = cartItems
            .map(item => item.name)
            .join(", ");

    }


    // Create order
    const newOrder = {

        name: name,
        phone: phone,
        address: address,
        payment: payment,
        food: foodNames,
        total: total,
        date: new Date().toLocaleString()

    };


    // Get old orders
    const orders = JSON.parse(
        localStorage.getItem("orders")
    ) || [];


    // Add new order
    orders.push(newOrder);


    // Save orders
    localStorage.setItem(
        "orders",
        JSON.stringify(orders)
    );


    // Success
    alert(
        "✅ Thank You! Your Order Has Been Placed Successfully!"
    );


    // Go to Order History
    window.location.href = "order-history.html";

});