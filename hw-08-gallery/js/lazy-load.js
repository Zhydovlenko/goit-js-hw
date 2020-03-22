const lazyLoad = target => {
  const options = {
    rootMargin: '50px 0px',
    treshold: 0.01,
  };

  const io = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        const imgURL = img.dataset.lazy;

        img.setAttribute('src', imgURL);
        img.classList.add('fade-in');

        observer.disconnect();
      }
    });
  }, options);

  io.observe(target);
};

const images = document.querySelectorAll('.gallery__image');

images.forEach(image => {
  lazyLoad(image);
});
