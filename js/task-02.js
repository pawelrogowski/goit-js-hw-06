const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];

//search for ul#ingredients
const ul = document.querySelector("ul#ingredients");

//create new array, which contains li elements created from ingredients array.
const items = ingredients.map((ingredient) => {
  const li = document.createElement("li");
  li.textContent = ingredient;
  li.classList.add("item");
  return li;
});

//append the list of li elements in the items array to the ul element.
ul.append(...items);
