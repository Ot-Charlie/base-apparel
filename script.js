// Get references to all necessary elements
const form = document.getElementById('form');
const emailInput = document.getElementById('email');
const errorMessage = document.getElementById('error-message');
const errorIcon = document.getElementById('error-icon');
const inputContainer = document.querySelector('.input-container');

// Function to validate email format
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Function to handle showing the error state
function showValidationError() {
    errorMessage.classList.add('active');
    errorIcon.classList.add('active');
    inputContainer.classList.add('error-state');
}

// Function to handle clearing the error state
function clearValidationError() {
    errorMessage.classList.remove('active');
    errorIcon.classList.remove('active');
    inputContainer.classList.remove('error-state');
}

// Event listener for form submission
form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const emailValue = emailInput.value.trim();
    
    // Check if email is empty or invalid format
    if (emailValue === '' || !isValidEmail(emailValue)) {
        showValidationError();
    } else {
        clearValidationError();
        console.log('Form submitted successfully with:', emailValue);
    }
});

// Event listener to hide error messages when user types
emailInput.addEventListener('input', function() {
    if (emailInput.value.trim() !== '') {
        clearValidationError();
    }
});

// Show error when user clicks away from invalid email
emailInput.addEventListener('blur', function() {
    const emailValue = emailInput.value.trim();
    
    if (emailValue !== '' && !isValidEmail(emailValue)) {
        showValidationError();
    }
});

// Suppress default browser validation UI
emailInput.addEventListener('invalid', function(e) {
    e.preventDefault();
});