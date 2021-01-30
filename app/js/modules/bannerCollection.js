let bannerCollectionElem = document.querySelector('.js-banner-collections');
if (bannerCollectionElem) {
  let splide = new Splide(bannerCollectionElem, {
    autoplay: false,
  });

  splide.mount();
}
