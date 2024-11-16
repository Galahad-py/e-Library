document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('resetForm');
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('emailError');

    form.addEventListener('submit', function (event) {
        const emailValue = emailInput.value.trim();
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        emailError.textContent = '';

        if (!emailPattern.test(emailValue)) {

            event.preventDefault();
            emailError.textContent = 'Please enter a valid email address.';
            emailInput.style.border = '2px solid red';
        } else {
            emailInput.style.border = '';
        }
    });

    emailInput.addEventListener('input', function (){
        emailError.textContent = '';
        emailInput.style.border = '';
    });
});