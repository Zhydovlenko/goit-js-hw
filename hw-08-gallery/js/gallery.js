'use strict';

import images from './gallery-items.js';

function createGallery({ preview, original, description }) {
  return `<li class="gallery__item">
  <a
    class="gallery__link"
    href="${original}"
  >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    >
  </a>
</li>`;
}

const galleryItems = images.map(image => createGallery(image)).join('');
const refs = {
  galleryList: document.querySelector('.js-gallery'),
  lightbox: document.querySelector('.js-lightbox'),
  fullSizeImg: document.querySelector('img.lightbox__image'),
  closeBtn: document.querySelector(
    '.lightbox button[data-action="close-lightbox"]',
  ),
  overlay: document.querySelector('.lightbox__content'),
};

refs.galleryList.insertAdjacentHTML('beforeend', galleryItems);

refs.galleryList.addEventListener('click', handleGalleryClick);
refs.closeBtn.addEventListener('click', handleClose);
refs.overlay.addEventListener('click', handleOverlay);

function handleGalleryClick(event) {
  event.preventDefault();

  if (event.currentTarget === event.target) {
    return;
  }

  refs.lightbox.classList.add('is-open');
  const originalImgURL = event.target.dataset.source;
  const originalImgAlt = event.target.getAttribute('alt');
  generateOriginalImg(originalImgURL, originalImgAlt);
  window.addEventListener('keydown', handleKeyPressClose);
}

function generateOriginalImg(url, alt) {
  const image = refs.fullSizeImg;
  image.setAttribute('src', url);
  image.setAttribute('alt', alt);
}

function handleClose() {
  refs.lightbox.classList.remove('is-open');
  refs.fullSizeImg.removeAttribute('src');
  window.removeEventListener('keydown', handleKeyPressClose);
}

function handleKeyPressClose(event) {
  if (event.code !== 'Escape') {
    return;
  }
  handleClose();
}

function handleOverlay(event) {
  if (event.target !== event.currentTarget) {
    return;
  }

  handleClose();
}
