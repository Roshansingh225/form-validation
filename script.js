document.addEventListener('DOMContentLoaded', () => {
    const phoneInput = document.getElementById('phone');
    const form = document.getElementById('validationForm');
    const successMessage = document.getElementById('successMessage');

    // Only allow digits and limit to 10 characters
    phoneInput.addEventListener('input', () => {
        phoneInput.value = phoneInput.value.replace(/\D/g, ''); // Remove non-digits
        if (phoneInput.value.length > 10) {
            phoneInput.value = phoneInput.value.slice(0, 10); // Trim to 10 digits
        }
    });

    // Optional: Show/hide password toggle logic
    const toggleButtons = document.querySelectorAll('.toggle-password');
    toggleButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targets = button.getAttribute('data-target').split(',');
            targets.forEach(selector => {
                const field = document.querySelector(selector.trim());
                if (field.type === "password") {
                    field.type = "text";
                    button.textContent = "Hide";
                } else {
                    field.type = "password";
                    button.textContent = "Show";
                }
            });
        });
    });

    // Optional: Simple form submission message
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (phoneInput.value.length !== 10) {
            document.getElementById('phoneError').textContent = "Phone number must be 10 digits.";
            document.getElementById('phoneError').style.display = "block";
            return;
        } else {
            document.getElementById('phoneError').style.display = "none";
        }
        successMessage.textContent = "Form submitted successfully!";
        successMessage.style.display = "block";
    });
});
