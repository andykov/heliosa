let bannerCollectionElem = document.querySelector('.js-banner-collections');
if (bannerCollectionElem) {
  let splide = new Splide(bannerCollectionElem, {
    autoplay: false,
  });

  splide.on('autoplay:playing', function (rate) {
    console.log(rate); // 0-1
  });

  splide.mount();
}
