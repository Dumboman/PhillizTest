document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");
    const successMessage = document.getElementById("successMessage");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Stop default form submission

        const formData = new FormData(contactForm);

        fetch("http://localhost/Philliz%27s%20HTML/connect.php", {
            method: "POST",
            body: formData
        })
            .then(response => response.text())
            .then(data => {
                console.log("✅ Server response:", data);

                // Show message and set success feedback
                successMessage.textContent = data;
                successMessage.classList.add("show");
                contactForm.reset();
            })
            .catch(error => {
                console.error("❌ Fetch error:", error);
                successMessage.textContent = "❌ Could not connect to the server.";
                successMessage.classList.add("show");
            });
    });
});
