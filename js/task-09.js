function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
// Select elements
const bodyElement = document.querySelector("body");
const colorSpan = document.querySelector(".color");
const buttonElement = document.querySelector(".change-color");

// Add click event listener
buttonElement.addEventListener("click", () => {
  // Generate random color
  const randomColor = getRandomHexColor();

  // Update body background color
  bodyElement.style.backgroundColor = randomColor;

  // Update color span text
  colorSpan.textContent = randomColor;
});
