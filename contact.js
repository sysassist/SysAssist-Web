// Initialize EmailJS with your user ID
emailjs.init("jJdukrBzTRT7Bm3Vh");

// Function to generate a random 4-digit CAPTCHA code
function generateCaptcha() {
    return Math.floor(Math.random() * 9000) + 1000;
}

// Function to update the CAPTCHA code
function updateCaptcha() {
    const captchaCode = generateCaptcha();
    document.getElementById('captchaCode').textContent = captchaCode;
    return captchaCode;
}

// Initialize CAPTCHA code
let captchaCode = updateCaptcha();

// Handle form submission
document.getElementById('myForm').addEventListener('submit', function (event) {
    event.preventDefault(); 

    const userInput = document.getElementById('captcha').value.trim();

    
    if (userInput === captchaCode.toString()) {
        console.log('CAPTCHA verified! Proceeding with sending the email.');

        // Disable the submit button and show a loading message
        const submitButton = event.target.querySelector('button[type="submit"]');
        submitButton.disabled = true;
        submitButton.textContent = "Sending...";

        // Get form data
        const formData = new FormData(event.target);
        const templateParams = {
            firstName: formData.get("first-name"),
            lastName: formData.get("last-name"),
            email: formData.get("email"),
            contactNumber: formData.get("contact-number"),
            message: formData.get("message")
        };

        // Send the form data via EmailJS
        emailjs.send("service_0cnbcci", "template_y6hpoyb", templateParams)
            .then(function (response) {
                console.log("Email sent successfully!", response);
                window.alert("Thank you! Your message has been sent.");

                // Reset CAPTCHA code
                event.target.reset();
                captchaCode = updateCaptcha();
            })
            .catch(function (error) {
                console.error("Error sending email:", error);
                window.alert("An error occurred while sending your message. Please try again later.");
            })
            .finally(function () {
                // Re-enable the submit button 
                submitButton.disabled = false;
                submitButton.innerHTML = 'Submit Enquiry <i class="fa-solid fa-angle-right"></i>';
            });
    } else {
        // error message for incorrect CAPTCHA
        window.alert("Incorrect CAPTCHA. Please try again.");
    }
});

// Function to validate  form inputs
function validateName() {
    const firstInput = document.getElementById('first-name');
    firstInput.value = firstInput.value.replace(/[^a-zA-Z\s]/g, '');  // Allow spaces in names

    const lastInput = document.getElementById('last-name');
    lastInput.value = lastInput.value.replace(/[^a-zA-Z\s]/g, '');  // Allow spaces in names

    const contactInput = document.getElementById('contact-number');
    contactInput.value = contactInput.value.replace(/[^0-9-]/g, '');  // Allow numbers and hyphens
}
