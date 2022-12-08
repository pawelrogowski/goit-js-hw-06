function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
// Select elements
const inputElement = document.querySelector("input");
const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");
const boxesElement = document.querySelector("#boxes");

function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    // Create box element
    const boxElement = document.createElement("div");

    // Set box size and random background color
    boxElement.style.width = `${30 + i * 10}px`;
    boxElement.style.height = `${30 + i * 10}px`;
    boxElement.style.backgroundColor = getRandomHexColor();

    // Add box element to boxes container
    boxesElement.appendChild(boxElement);
  }
}

function destroyBoxes() {
  // Clear boxes container
  boxesElement.innerHTML = "";
}

// Add create button click event listener
createButton.addEventListener("click", () => {
  // Create boxes
  createBoxes(inputElement.value);
});

// Add destroy button click event listener
destroyButton.addEventListener("click", () => {
  // Destroy boxes
  destroyBoxes();
});
