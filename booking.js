const bookingForm = document.getElementById("bookingForm");

bookingForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("bookingName").value;
    const email = document.getElementById("bookingEmail").value;
    const phone = document.getElementById("bookingPhone").value;
    const date = document.getElementById("bookingDate").value;
    const time = document.getElementById("bookingTime").value;
    const guests = document.getElementById("guests").value;

    alert(
        "✅ Table Booked Successfully!\n\n" +
        "Name: " + name + "\n" +
        "Date: " + date + "\n" +
        "Time: " + time + "\n" +
        "Guests: " + guests
    );

    bookingForm.reset();

});