// Select input element
const inputElement = document.getElementById("validation-input");

// Add blur event listener
inputElement.addEventListener("blur", () => {
  // Get required length from data-length attribute
  const requiredLength = Number(inputElement.dataset.length);

  // Check if input value has correct length
  if (inputElement.value.length === requiredLength) {
    // Add valid class and remove invalid class from input element
    inputElement.classList.add("valid");
    inputElement.classList.remove("invalid");
  } else {
    // Add invalid class and remove valid class from input element
    inputElement.classList.add("invalid");
    inputElement.classList.remove("valid");
  }
});
