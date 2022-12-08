// Select form and inputs
const formElement = document.querySelector(".login-form");
const emailInput = formElement.elements.email;
const passwordInput = formElement.elements.password;

// Add submit event listener
formElement.addEventListener("submit", (event) => {
  // Prevent form submission
  event.preventDefault();

  // Check if inputs are empty
  if (emailInput.value === "" || passwordInput.value === "") {
    // Show error message
    alert("All fields are required!");
  } else {
    // Get form data as object
    const formData = {
      email: emailInput.value,
      password: passwordInput.value,
    };

    // Log form data
    console.log(formData);

    // Reset form
    formElement.reset();
  }
});
