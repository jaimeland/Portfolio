// Select the button and the body element
const toggleButton = document.querySelector('.dark-mode-toggle');
const body = document.querySelector('body');

// Check if dark mode is already applied (for persistence)
if (localStorage.getItem('darkMode') === 'enabled') {
  body.classList.add('dark-mode');
}

// Toggle dark mode on button click
toggleButton.addEventListener('click', () => {
  // Toggle dark mode class on body
  body.classList.toggle('dark-mode');

  // Save preference to localStorage
  if (body.classList.contains('dark-mode')) {
    localStorage.setItem('darkMode', 'enabled');
  } else {
    localStorage.removeItem('darkMode');
  }
});


function handleSubmit(event) {
  event.preventDefault(); // Prevent the default form submission

  if (validateForm()) {
      sendEmail();
  }
}

function validateForm() {
  const email = document.getElementById('email-box').value.trim();
  const subject = document.getElementById('subject-box').value.trim();
  const description = document.getElementById('description-box').value.trim();

  // Check if any of the required fields are empty
  if (!email || !subject || !description) {
      displayError('Please fill in all required fields.');
      return false;
  }

  // Basic email format validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
      displayError('Please enter a valid email address.');
      return false;
  }

  // Clear error message if validation passes
  clearError();
  return true;
}

function sendEmail() {
  const email = document.getElementById('email-box').value.trim();
  const subject = document.getElementById('subject-box').value.trim();
  const description = document.getElementById('description-box').value.trim();

  const mailtoLink = `jaime.landau19@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(description + '\n\n' + email)}`;

  // Open the default email client
  window.location.href = mailtoLink; // Use window.location.href to navigate to the mailto link
}

function displayError(message) {
  const errorMessageElement = document.getElementById('error-message');
  errorMessageElement.textContent = message; // Display error message
}

function clearError() {
  const errorMessageElement = document.getElementById('error-message');
  errorMessageElement.textContent = ''; // Clear error message
}