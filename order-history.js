// ==========================
// Order History
// ==========================

const orderHistory = document.getElementById("orderHistory");

const orders = JSON.parse(
    localStorage.getItem("orders")
) || [];

const statusList = [
    "Order Placed",
    "Preparing",
    "Out for Delivery",
    "Delivered"
];

if (orders.length === 0) {

    orderHistory.innerHTML = `
        <p>No orders yet.</p>
    `;

} else {

    orderHistory.innerHTML = "";

    orders.forEach(function(order, index) {

        // Old orders-ku status இல்லையென்றால் 0
        if (order.status === undefined) {
            order.status = 0;
        }

        const orderCard = document.createElement("div");

        orderCard.classList.add("order-card");

        orderCard.innerHTML = `
            <h3>Order #${index + 1}</h3>

            <p><strong>Name:</strong> ${order.name}</p>

            <p><strong>Phone:</strong> ${order.phone}</p>

            <p><strong>Address:</strong> ${order.address}</p>

            <p><strong>Food:</strong> ${order.food}</p>

            <p><strong>Total:</strong> ₹${order.total}</p>

            <p><strong>Payment:</strong> ${order.payment}</p>

            <p><strong>Date:</strong> ${order.date}</p>

            <div class="order-status">

                <div class="status ${order.status >= 0 ? "active" : ""}">
                    📦
                    <span>Order Placed</span>
                </div>

                <div class="status ${order.status >= 1 ? "active" : ""}">
                    👨‍🍳
                    <span>Preparing</span>
                </div>

                <div class="status ${order.status >= 2 ? "active" : ""}">
                    🚚
                    <span>Out for Delivery</span>
                </div>

                <div class="status ${order.status >= 3 ? "active" : ""}">
                    ✅
                    <span>Delivered</span>
                </div>

            </div>

            <button class="next-status-btn">
                Next Status →
            </button>

            <p class="current-status">
                Current Status:
                <strong>${statusList[order.status]}</strong>
            </p>

            <hr>
        `;

        orderHistory.appendChild(orderCard);

        // Next Status button
        const nextButton =
            orderCard.querySelector(".next-status-btn");

        nextButton.addEventListener("click", function() {

            if (order.status < 3) {

                order.status++;

                // Save updated orders
                localStorage.setItem(
                    "orders",
                    JSON.stringify(orders)
                );

                // Refresh page
                location.reload();

            } else {

                alert("✅ Order Already Delivered!");

            }

        });

        // Delivered ஆனதும் button disable
        if (order.status === 3) {

            nextButton.textContent = "✅ Delivered";
            nextButton.disabled = true;

        }

    });

    // Save status for old orders
    localStorage.setItem(
        "orders",
        JSON.stringify(orders)
    );
}


// ==========================
// Clear Orders
// ==========================

function clearOrders() {

    localStorage.removeItem("orders");

    alert("Order History Cleared!");

    location.reload();
}