// Select elements
const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');
const valueElement = document.getElementById("value");

// Define increment and decrement functions
function increment() {
  counterValue += 1;
  valueElement.textContent = counterValue;
}

function decrement() {
  counterValue -= 1;
  valueElement.textContent = counterValue;
}

// Add click listeners to buttons
decrementButton.addEventListener("click", decrement);
incrementButton.addEventListener("click", increment);

// Initialize counter value
let counterValue = 0;
