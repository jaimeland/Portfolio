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







// document.getElementById('contact-form').addEventListener('submit', function(event) {
//   event.preventDefault(); // Prevent the default form submission

//   // Check if form validation passes
//   if (validateForm()) {
//       sendEmail();
//   }
// });

// function validateForm() {
//   const email = document.getElementById('email-box').value.trim();
//   const subject = document.getElementById('subject-box').value.trim();
//   const description = document.getElementById('description-box').value.trim();

//   // Check if any of the required fields are empty
//   if (!email || !subject || !description) {
//       displayError('Please fill in all required fields.');
//       return false;
//   }

//   // Basic email format validation
//   const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   if (!emailPattern.test(email)) {
//       displayError('Please enter a valid email address.');
//       return false;
//   }

//   // Clear error message if validation passes
//   clearError();
//   return true;
// }

// function sendEmail() {
//   const emailParams = {
//       user_email: document.getElementById('email-box').value.trim(),
//       subject: document.getElementById('subject-box').value.trim(),
//       message: document.getElementById('description-box').value.trim()
//   };

//   emailjs.send("service_4qcjh6h", template_dvm68hk, to_name, from_name, message)
//   .then(function(response) {
//       console.log('SUCCESS!', response.status, response.text);
//       alert('Email sent successfully!');
//   }, function(error) {
//       console.log('FAILED...', error);
//       alert('Failed to send email. Please try again later.');
//   });
// }

// function displayError(message) {
//   const errorMessageElement = document.getElementById('error-message');
//   errorMessageElement.textContent = message; // Display error message
// }

// function clearError() {
//   const errorMessageElement = document.getElementById('error-message');
//   errorMessageElement.textContent = ''; // Clear error message
// }








// Listen for form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission behavior

  // Check if form validation passes
  if (validateForm()) {
      sendEmail(); // Call sendEmail function if validation is successful
  }
});

// Validate form inputs
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
  return true; // Form is valid
}

// Function to send the email using EmailJS
function sendEmail() {
  const emailParams = {
      user_email: document.getElementById('email-box').value.trim(),
      subject: document.getElementById('subject-box').value.trim(),
      message: document.getElementById('description-box').value.trim()
  };

  // Send the email using EmailJS
  emailjs.send("service_4qcjh6h", "template_dvm68hk", emailParams)
  .then(function(response) {
      console.log('SUCCESS!', response.status, response.text);
      alert('Email sent successfully!');
  }, function(error) {
      console.log('FAILED...', error);
      alert('Failed to send email. Please try again later.');
  });
}

// Function to display error messages
function displayError(message) {
  const errorMessageElement = document.getElementById('error-message');
  errorMessageElement.textContent = message; // Display error message
}

// Function to clear error messages
function clearError() {
  const errorMessageElement = document.getElementById('error-message');
  errorMessageElement.textContent = ''; // Clear error message
}