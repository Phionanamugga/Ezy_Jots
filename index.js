document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    const usernameInput = document.getElementById("username");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirm-password");

    form.addEventListener("submit", function(event) {
        let valid = true;
        clearErrors();

        if (usernameInput.value.trim() === "") {
            showError(usernameInput, "Username is required");
            valid = false;
        }

        if (emailInput.value.trim() === "") {
            showError(emailInput, "Email is required");
            valid = false;
        } else if (!isValidEmail(emailInput.value.trim())) {
            showError(emailInput, "Enter a valid email address");
            valid = false;
        }

        if (passwordInput.value.trim() === "") {
            showError(passwordInput, "Password is required");
            valid = false;
        }

        if (confirmPasswordInput.value.trim() === "") {
            showError(confirmPasswordInput, "Confirm password is required");
            valid = false;
        } else if (passwordInput.value.trim() !== confirmPasswordInput.value.trim()) {
            showError(confirmPasswordInput, "Passwords do not match");
            valid = false;
        }

        if (!valid) {
            event.preventDefault();
        }
    });

    function showError(input, message) {
        const formGroup = input.parentElement;
        formGroup.classList.add("error");

        const error = document.createElement("small");
        error.classList.add("error-message");
        error.innerText = message;
        formGroup.appendChild(error);
    }

    function clearErrors() {
        const errorMessages = document.querySelectorAll(".error-message");
        errorMessages.forEach(message => message.remove());

        const errorInputs = document.querySelectorAll(".error");
        errorInputs.forEach(input => input.classList.remove("error"));
    }

    function isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});
