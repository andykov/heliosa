import { onMountedHideArrowsSlider } from '../utils/helpers';

const sliderCompareElem = document.querySelector('.js-compare-gallery');
if (sliderCompareElem) {
  let galleryCompare = new Splide(sliderCompareElem, {
    perPage: 4,
    perMove: 1,
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
        gap: 15,
      },
    },
  });

  galleryCompare.mount();
  let specListCells = document.querySelectorAll('.spec-list__cells');
  let collectionsCells = [];

  specListCells.forEach((list, i) => {
    collectionsCells.push([...list.children]);
  });

  galleryCompare.on('mounted', onMountedHideArrowsSlider(galleryCompare));
  galleryCompare.on('hidden', function (slide) {
    collectionsCells.forEach(function (collection) {
      collection[slide.index].style.display = 'none';
    });
  });
  galleryCompare.on('visible', function (slide) {
    collectionsCells.forEach(function (collection) {
      collection[slide.index].style.display = 'block';
      collection[slide.index].animate(
        [
          { transform: 'translateX(5%)', opacity: 0 },
          { transform: 'translateX(0px)', opacity: 1 },
        ],
        {
          easing: 'ease-out',
          duration: 500,
        }
      );
    });
  });
}
