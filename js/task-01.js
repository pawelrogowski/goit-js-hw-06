// get all li.item elements within the ul#categories
const liItems = document.querySelectorAll("ul#categories li.item");

console.log(`Number of categories: ${liItems.length}`);

// use map to create an array of h2 elements within each item.
const h2s = Array.from(liItems).map((item) => item.querySelector("h2"));

/*
  use forEach to iterate over the array and log the text content of each h2 element,
  as well as the number of li elements within its parent li.item element. 
  */
h2s.forEach((h2) => {
  const listItemNumber = h2.parentElement.querySelectorAll("li").length;
  console.log(`Category: ${h2.textContent}\nElements: ${listItemNumber}`);
});
