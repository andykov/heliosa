import { setCurrentIndexSLide } from '../utils/helpers';

const galleryRecommendElem = document.querySelector('.js-gallery-recommends');
if (galleryRecommendElem) {
  let galleryRecommend = new Splide(galleryRecommendElem, {
    gap: 30,
    rewind: true,
    autoplay: false,
    pagination: false,
    perPage: 3,
    perMove: 1,
    breakpoints: {
      1200: {
        perPage: 3,
      },
      991: {
        perPage: 2,
      },
      639: {
        perPage: 1,
      },
    },
  }).mount();

  galleryRecommend.mount();
  galleryRecommend.on('mounted', setCurrentIndexSLide(galleryRecommend));
  galleryRecommend.on('move', function (newIndex) {
    setCurrentIndexSLide(galleryRecommend, newIndex);
  });
}
