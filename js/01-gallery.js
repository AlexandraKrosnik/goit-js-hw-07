import { galleryItems } from './gallery-items.js';

// Change code below this line

const galleryEl = document.querySelector(".gallery");

const gallery = makeGalery(galleryItems);

let instance;

galleryEl.innerHTML = gallery;

galleryEl.addEventListener("click", onOpenModalWindow);



function makeGalery(items) {
    return items.map(item => `
   <div class="gallery__item">
        <a class="gallery__link" href="${item.original}">
            <img
            class="gallery__image"
            src="${item.preview}"
            data-source="${item.original}"
            alt="${item.description}"
            />
        </a>
    </div>
    `).join("");
}

function findOriginSrc(src) {
    return galleryItems.find(img => img.preview === src).original;   
}

function onModelClose(e) {
    if (e.code !== "Escape")
    {
        return;
    }
    instance.close();

    window.removeEventListener("keydown", onModelClose);
}

function onOpenModalWindow(event) {
    event.preventDefault();
    if (event.target.nodeName !== "IMG")
    {
        return;    
    }
    let imageOriginalSrc = findOriginSrc(event.target.src);
    instance = basicLightbox.create(`<img src="${imageOriginalSrc}" alt ="${event.target.alt}">`);
   
    instance.show();  

    window.addEventListener("keydown", onModelClose);
}


