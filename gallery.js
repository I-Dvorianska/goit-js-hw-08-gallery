import galleryItems from "./gallery-items.js";

const galleryListEl = document.querySelector(".gallery");
const lboxContainerEl = document.querySelector(".lightbox");
const overlayEl = document.querySelector(".lightbox__overlay");
const lboxContentEl = document.querySelector(".lightbox__content");
const lboxImage = document.querySelector(".lightbox__image");
const closeModalBtn = document.querySelector(".lightbox__button");
const imagesMarkup = createGallery(galleryItems);

function createGallery(galleryItems) {
  return galleryItems
    .map(({ original, preview, description }) => {
      return `
      <li class="gallery__item">
          <a
            class="gallery__link"
            href=${original}
          >
          <img
              class="gallery__image"
              src=${preview}
              data-source=${original}
              alt=${description} />
          </a>
          </li>`;
    })
    .join("");
}
galleryListEl.insertAdjacentHTML("beforeend", imagesMarkup);