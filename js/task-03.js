const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

// Create a new stylesheet
const sheet = document.createElement("style");

// Add the CSS rules to the stylesheet
sheet.innerHTML = `
  .image {
    width: 100%;
    padding: 6px;
  }
  .gallery {
    list-style: none;
    display:flex;
    flex-direction: column;
  }
  body {
    background: black;
  }
`;

// Append the stylesheet to the <head> element
document.head.appendChild(sheet);

// Query the .gallery class selector on the page.
const gallery = document.querySelector(".gallery");

// Map the images array to create an array of li elements containing img elements for each image with a class .image.
const items = images
  .map((image) => {
    return `<li><img class="image" src="${image.url}" alt="${image.alt}"></li>`;
  })
  .join("");

// Add the list of li elements to the .gallery element on the page.
gallery.insertAdjacentHTML("beforeend", items);
