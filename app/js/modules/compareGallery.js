import { onMountedHideArrowsSlider } from '../utils/helpers';

const sliderCompareElem = document.querySelector('.js-compare-gallery');
if (sliderCompareElem) {
  let galleryCompare = new Splide(sliderCompareElem, {
    perPage: 4,
    perMove: 1,
    gap: 50,
    pagination: false,
    breakpoints: {
      1240: {
        perPage: 3,
        gap: 70,
      },
      991: {
        perPage: 2,
        gap: 25,
      },
      480: {
        perPage: 2,
        gap: 15,
      },
    },
  });

  galleryCompare.mount();
  galleryCompare.on('mounted', onMountedHideArrowsSlider(galleryCompare));
}
