// Select elements
const inputElement = document.getElementById("name-input");
const outputElement = document.getElementById("name-output");

// Add input event listener
inputElement.addEventListener("input", () => {
  if (inputElement.value === "") {
    // Set output to "Anonymous" if input is empty
    outputElement.textContent = "Anonymous";
  } else {
    // Set output to current input value
    outputElement.textContent = inputElement.value;
  }
});
