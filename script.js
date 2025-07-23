$(document).ready(function() {
    $('#validationForm').on('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        // Clear previous messages
        $('.error-message').hide();
        $('#successMessage').hide();

        // Validate inputs
        let isValid = true;

        // Email validation
        const email = $('#email').val();
        if (!validateEmail(email)) {
            $('#emailError').text('Please enter a valid email address.').show();
            isValid = false;
        }

        // Phone number validation
        const phone = $('#phone').val();
        if (!validatePhone(phone)) {
            $('#phoneError').text('Phone number must be exactly 10 digits.').show();
            isValid = false;
        }

        // Password validation
        const password = $('#password').val();
        if (!validatePassword(password)) {
            $('#passwordError').text('Password must be at least 8 characters long and include uppercase, lowercase, and numbers.').show();
            isValid = false;
        }

        // If all validations pass
        if (isValid) {
            $('#successMessage').text('Form submitted successfully!').show();
            // Here you can add code to actually submit the form if needed
        }
    });

    // Toggle password visibility
    $('#togglePassword').on('click', function() {
        const passwordField = $('#password');
        const type = passwordField.attr('type') === 'password' ? 'text' : 'password';
        passwordField.attr('type', type);
        $(this).text(type === 'password' ? 'Show' : 'Hide');
    });
});

// Email validation function
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Phone number validation function
function validatePhone(phone) {
    return /^\d{10}$/.test(phone);
}

// Password validation function
function validatePassword(password) {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return regex.test(password);
}
