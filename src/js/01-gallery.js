// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

//console.log(galleryItems);

const reference = {
  gallery: document.querySelector('.gallery'),
  cardGallery: createCards(galleryItems),
};

reference.gallery.insertAdjacentHTML('afterbegin', reference.cardGallery);

function createCards(img) {
  return img
    .map(
      image =>
        `<div class="gallery__item">
            <a class="gallery__link" href="${image.original}" onclick="return false;">
            <img
                class="gallery__image"
                src="${image.preview}"
                data-source="${image.original}"
                alt="${image.description}"
            />
            </a>
            </div>
        `
    )
    .join('');
}

//reference.gallery.addEventListener('click', openImg);

// function openImg(event) {
//   event.preventDefault();

//   if (event.target.nodeName !== 'IMG') {
//     return;
//   }

//   const instance = basicLightbox.create(`
//     <img src="${event.target.dataset.source}" width="800" height="600">`);

//   instance.show();

//   reference.gallery.addEventListener('keydown', event => {
//     if (event.code === 'Escape') {
//       instance.close();
//     }
//   });
// }

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
