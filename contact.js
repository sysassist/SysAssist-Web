
// Initialize EmailJS with your user ID
emailjs.init("ER-9KiuOjuOkAjI7w");

// Generate a random 4-digit CAPTCHA code
const captchaCode = Math.floor(Math.random() * 9000) + 1000;

// Display the CAPTCHA code
document.getElementById('captchaCode').textContent = captchaCode;

// Handle form submission
document.getElementById('myForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const userInput = document.getElementById('captcha').value;

    if (userInput === captchaCode.toString()) {
        console.log('CAPTCHA verified! Proceed with sending the email.');
        // Handle form submission
        document.getElementById("myForm").addEventListener("submit", function (event) {
            event.preventDefault();
            const formData = new FormData(event.target);
            const templateParams = {
                firstName: formData.get("first-name"),
                lastName: formData.get("last-name"),
                email: formData.get("email"),
                contactNumber: formData.get("contact-number"),
                message: formData.get("message")
            };

            // Send the form data via EmailJS
            emailjs.send("service_mz84ua7", "template_mo0i5wi", templateParams)
                .then(function (response) {
                    console.log("Email sent successfully!", response);
                    event.target.reset();
                    window.alert("Thank you! Your message has been sent.");
                })
                .catch(function (error) {
                    console.error("Error sending email:", error);
                });
        });
    } else {
        // Display an error message 
        window.alert("Incorrect CAPTCHA. Please try again.");
    }
});