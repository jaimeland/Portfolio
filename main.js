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