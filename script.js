$(document).ready(function () {
    $('#validationForm').on('submit', function (e) {
        e.preventDefault();

        const phone = $('#phone').val();
        const password = $('#password').val();
        const confirmPassword = $('#confirmPassword').val();
        let isValid = true;

        // Phone Validation - digits only and length 10
        const phoneRegex = /^\d{10}$/;
        if (!phoneRegex.test(phone)) {
            $('#phoneError').text('Phone number must be exactly 10 digits and contain only numbers.').show();
            isValid = false;
        } else {
            $('#phoneError').hide();
        }

        // Password Validation
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,15}$/;
        if (!passwordRegex.test(password)) {
            $('#passwordError').text('Password must be 8-15 characters, include at least 1 uppercase letter, 1 number, and 1 special character.').show();
            isValid = false;
        } else {
            $('#passwordError').hide();
        }

        // Confirm Password Match
        if (password !== confirmPassword) {
            $('#confirmPasswordError').text('Passwords do not match.').show();
            isValid = false;
        } else {
            $('#confirmPasswordError').hide();
        }

        if (isValid) {
            $('#successMessage').text('Form submitted successfully!').show();
        } else {
            $('#successMessage').hide();
        }
    });

    // Restrict phone input to digits only while typing
    $('#phone').on('input', function () {
        this.value = this.value.replace(/\D/g, '').slice(0, 10); // Allow only digits and max 10
    });

    // Toggle password visibility
    $('.toggle-password').on('click', function () {
        const targets = $(this).data('target').split(',');
        targets.forEach(id => {
            const input = $(id.trim());
            if (input.attr('type') === 'password') {
                input.attr('type', 'text');
                $(this).text('Hide');
            } else {
                input.attr('type', 'password');
                $(this).text('Show');
            }
        });
    });
});
