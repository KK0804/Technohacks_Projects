function validateForm() {
    let isValid = true;

    // Clear previous error messages
    document.querySelectorAll('.error-message').forEach(el => el.textContent = '');

    // Validate Username
    const username = document.getElementById('username').value;
    if (username.trim() === '') {
        document.getElementById('username-error').textContent = 'Username is required';
        isValid = false;
    }

    // Validate Email
    const email = document.getElementById('email').value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.trim() === '') {
        document.getElementById('email-error').textContent = 'Email is required';
        isValid = false;
    } else if (!emailPattern.test(email)) {
        document.getElementById('email-error').textContent = 'Invalid email address';
        isValid = false;
    }

    // Validate Password
    const password = document.getElementById('password').value;
    if (password.trim() === '') {
        document.getElementById('password-error').textContent = 'Password is required';
        isValid = false;
    } else if (password.length < 8) {
        document.getElementById('password-error').textContent = 'Password must be at least 8 characters long';
        isValid = false;
    }

    // Validate Confirm Password
    const confirmPassword = document.getElementById('confirm-password').value;
    if (confirmPassword.trim() === '') {
        document.getElementById('confirm-password-error').textContent = 'Please confirm your password';
        isValid = false;
    } else if (confirmPassword !== password) {
        document.getElementById('confirm-password-error').textContent = 'Passwords do not match';
        isValid = false;
    }

    return isValid;
}
