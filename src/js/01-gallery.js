import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);
console.log(SimpleLightbox);

const listGallery = document.querySelector('.gallery');

const groupImages = listGalleryItems(galleryItems);

listGallery.insertAdjacentHTML('beforeend', groupImages);

function listGalleryItems(galleryItems) {
  return galleryItems
    .map(
      ({ preview, original, description }) =>
        `<a class="gallery__link" href="${original}">
    <img
    class="gallery__image"
    src="${preview}"
    alt="${description}"
    />
    </a>`
    )
    .join('');
}

new SimpleLightbox('.gallery__link ', 
{
  captionsData: 'alt',
  captionDelay: '250',
  enableKeyboard: 'true',
});
