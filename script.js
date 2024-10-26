document.addEventListener("DOMContentLoaded", function() {
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    
    const emailError = document.getElementById("email-error");
    const passwordError = document.getElementById("password-error");
    
    const emailSuccess = document.getElementById("email-success");
    const passwordSuccess = document.getElementById("password-success");

    emailInput.addEventListener("change", function() {
        const emailValue = emailInput.value;

        if (emailValue.length > 3 && emailValue.includes("@") && emailValue.includes(".")) {
            emailError.textContent = "";
            emailSuccess.textContent = "All good to go!";
        } else {
            emailError.textContent = "Invalid email. Must contain '@' and '.' and be more than 3 characters.";
            emailSuccess.textContent = "";
        }
    });

    passwordInput.addEventListener("change", function() {
        const passwordValue = passwordInput.value;

        if (passwordValue.length > 8) {
            passwordError.textContent = "";
            passwordSuccess.textContent = "All good to go!";
        } else {
            passwordError.textContent = "Password must be more than 8 characters.";
            passwordSuccess.textContent = "";
        }
    });

    document.getElementById("signup-form").addEventListener("submit", function(event) {
        event.preventDefault(); 
        if (emailSuccess.textContent === "All good to go!" && passwordSuccess.textContent === "All good to go!") {
            const confirmSignup = confirm("Are you sure you want to sign up?");
            
            if (confirmSignup) {
                alert("Successful signup!");

                this.reset(); 
                emailError.textContent = "";
                passwordError.textContent = "";
                emailSuccess.textContent = "";
                passwordSuccess.textContent = "";
            } else {
                this.reset(); 
            }
        } else {
            alert("Please fix the errors before submitting.");
        }
    });
});