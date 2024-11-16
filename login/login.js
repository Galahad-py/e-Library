document.addEventListener('DOMContentLoaded', function() {
    const togglePassword = document.querySelector('#togglePassword');
    const password = document.querySelector('#password');
    const passwordError = document.querySelector('#passwordError');
    const form = document.querySelector('form');

    function validatePassword(password) {
        const minLength = password.length >= 10;
        const hasLowerCase = /[a-z]/.test(password);
        const hasUpperCase = /[A-Z]/.test(password);

        let errorMessage = [];

        if (!minLength) {
            errorMessage.push("Password must be at least 10 characters long");
        }
        if (!hasLowerCase) {
            errorMessage.push("Password must contain at least one lowercase letter");
        }
        if (!hasUpperCase) {
            errorMessage.push("Password must contain at least one uppercase letter");
        }

        return {
            isValid: minLength && hasLowerCase && hasUpperCase,
            message: errorMessage.join('<br>')
        };
    }

    togglePassword.addEventListener('click', function() {
        
        const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
        password.setAttribute('type', type);
        
        this.classList.toggle('fa-eye');
        this.classList.toggle('fa-eye-slash');
    });

    password.addEventListener('input', function() {
        const validation = validatePassword(this.value);
        passwordError.innerHTML = validation.message;

        if (validation.isValid) {
            password.style.borderColor = 'rgb(34, 197, 94)';
            passwordError.style.color = 'rgb(34, 197, 94)';
        } else {
            password.style.borderColor = 'rgb(239, 68, 68)';
            passwordError.style.color = 'rgb(239, 68, 68)';
        }

        if (this.value === '') {
            password.style.borderColor = 'rgb(108, 207, 239)';
            passwordError.innerHTML = '';
        }
    });


    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const validation = validatePassword(password.value);

        if (!validation.isValid) {
            passwordError.innerHTML = validation.message;
            return false;
        }

        
    })
});

