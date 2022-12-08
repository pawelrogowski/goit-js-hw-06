// Select elements
const inputElement = document.getElementById("font-size-control");
const textElement = document.getElementById("text");
// Set initial font size
textElement.style.fontSize = `${inputElement.value}px`;
// Add input event listener
inputElement.addEventListener("input", () => {
  // Update text font-size on slider inpuit
  textElement.style.fontSize = `${inputElement.value}px`;
});
