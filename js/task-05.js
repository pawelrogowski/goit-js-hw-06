// Select elements
const inputElement = document.getElementById("name-input");
const outputElement = document.getElementById("name-output");

function updateOutput() {
  // Set output to current input value, or "Anonymous" if input is empty
  outputElement.textContent = inputElement.value || "Anonymous";
}

// Add input event listener
inputElement.addEventListener("input", updateOutput);
