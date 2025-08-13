document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent actual form submission

    // Get form values
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    // Get error message elements
    let nameError = document.getElementById("nameError");
    let emailError = document.getElementById("emailError");
    let messageError = document.getElementById("messageError");
    let successMessage = document.getElementById("successMessage");

    // Regex for email validation
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Reset error messages
    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";
    successMessage.textContent = "";

    let isValid = true;

    // Validate Name
    if (name === "") {
        nameError.textContent = "Name is required";
        isValid = false;
    }

    // Validate Email
    if (email === "") {
        emailError.textContent = "Email is required";
        isValid = false;
    } else if (!emailPattern.test(email)) {
        emailError.textContent = "Enter a valid email address";
        isValid = false;
    }

    // Validate Message
    if (message === "") {
        messageError.textContent = "Message is required";
        isValid = false;
    }

    // If valid, show success message
    if (isValid) {
        successMessage.textContent = "Form submitted successfully!";
        document.getElementById("contactForm").reset();
    }
});
