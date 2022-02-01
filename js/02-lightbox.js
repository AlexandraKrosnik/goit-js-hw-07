import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryEl = document.querySelector(".gallery");

const galleryImg = makeGalery(galleryItems);

galleryEl.innerHTML = galleryImg;

openLightBox();

function makeGalery(items) {
    return items.map(item => `   
        <a class="gallery__item" href="${item.original}">
            <img
            class="gallery__image"
            src="${item.preview}"            
            alt="${item.description}"            
            />
        </a>    
    `).join("");
}

function openLightBox() {
  new SimpleLightbox('.gallery a', {
    captionDelay: 250,
    captionsData: 'alt',
    close: true,   
});   
}   




