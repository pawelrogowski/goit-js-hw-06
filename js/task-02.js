const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];

// Search for the ul#ingredients element on the page.
const ul = document.querySelector("ul#ingredients");

// Create a new array of li elements, one for each ingredient in the ingredients array.
const items = ingredients.map((ingredient) => {
  // Create a new li element.
  const li = document.createElement("li");

  // Set the text of the li element to the name of the ingredient.
  li.textContent = ingredient;

  // Add the "item" class to the li element.
  li.classList.add("item");

  // Return the li element.
  return li;
});

// Append the list of li elements in the items array to the ul element.
ul.append(...items);
