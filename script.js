document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission for validation

    // Clear any previous error messages
    document.getElementById('emailError').style.display = 'none';
    document.getElementById('passwordError').style.display = 'none';

    // Get form values
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    // Flag to track if there are any errors
    let hasError = false;

    // Validate email
    if (email === '') {
        document.getElementById('emailError').style.display = 'block';
        hasError = true;
    }

    // Validate password
    if (password === '') {
        document.getElementById('passwordError').style.display = 'block';
        hasError = true;
    }

    // If no errors, simulate successful login
    if (!hasError) {
        alert('Login successful!');
    }
});
