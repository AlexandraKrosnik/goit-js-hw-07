import { galleryItems } from './gallery-items.js';

// Change code below this line

const galleryEl = document.querySelector(".gallery");

const gallery = makeGalery(galleryItems);

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

const instance = basicLightbox.create(`<img src="" alt ="">`, {
    onShow: (instance) => {
        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", onModelClose);
    },
    onClose: (instance) => {
        document.body.style.overflow = "visible";
        window.removeEventListener("keydown", onModelClose);
    }
    });

function onModelClose(e) {   
    if (e.code !== "Escape")
    {
        return;
    }

    instance.close();          
}

function onOpenModalWindow(event) {

    event.preventDefault();

    if (event.target.nodeName !== "IMG")
    {
        return;    
    }

    let imageOriginalSrc = event.target.dataset.source;
    instance.element().querySelector('img').src = imageOriginalSrc;
    instance.element().querySelector('img').alt = event.target.alt;
  
    instance.show(); 

}


