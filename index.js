// Get a reference to the main element
const main = document.getElementById('main');

// Remove the main element from the DOM
main.remove();

// Create a new h1 element
const newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.textContent = 'YOUR-NAME is the champion';

// Replace "YOUR-NAME" with your name
newHeader.textContent = newHeader.textContent.replace('YOUR-NAME', 'John Doe');

// Append the new h1 element to the body
document.body.appendChild(newHeader);