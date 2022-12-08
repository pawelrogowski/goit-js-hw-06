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

// query the .gallery class selector
const gallery = document.querySelector(".gallery");

// add inline styles to .gallery
gallery.setAttribute("style", "display: flex; flex-direction: column; align-items:center;");

//Map the images array to create an array of li elements containing img elements for each image.
//Add some styles
const items = images
  .map((image) => {
    return `<li><img src="${image.url}" alt="${image.alt}" style="width: 90vh; padding: 46px; display: block; border:solid #000 1px;"></li>`;
  })
  .join("");

gallery.insertAdjacentHTML("beforeend", items);
