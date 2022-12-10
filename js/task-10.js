function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Select elements from the DOM
const inputElement = document.querySelector("input");
const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");
const boxesElement = document.querySelector("#boxes");

function createBoxes(amount) {
  // set the starting size
  const lastBoxSize = boxesElement.lastChild ? boxesElement.lastChild.offsetWidth + 10 : 30;
  // Define a function named "createBoxes" that takes an "amount" parameter
  for (let i = 0; i < amount; i++) {
    // Loop through the specified number of times
    // Create a "div" element
    const boxElement = document.createElement("div");

    // Set the width and height of the "div" element to be a function of the loop index, and set its background color to a random hexadecimal value
    boxElement.style.width = `${lastBoxSize + i * 10}px`;
    boxElement.style.height = `${lastBoxSize + i * 10}px`;
    boxElement.style.backgroundColor = getRandomHexColor();

    // Add the "div" element to the "boxes" container
    boxesElement.appendChild(boxElement);
  }
}

function destroyBoxes() {
  // Clear the HTML content of the "boxes" container
  boxesElement.innerHTML = "";
}

createButton.addEventListener("click", () => {
  // When the "create" button is clicked, call the "createBoxes" function and pass the value of the input element as an argument
  createBoxes(inputElement.value);
});

// Add an event listener for the "click" event on the "destroy" button
destroyButton.addEventListener("click", () => {
  // When the "destroy" button is clicked, call the "destroyBoxes" function
  destroyBoxes();
});
