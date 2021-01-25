import { setCurrentIndexSLide } from '../utils/helpers';
// 1200 - container width

// 1200 - это ширина общего контейнера
const sliderHistoryElem = document.querySelector('.js-history');
if (sliderHistoryElem) {
  let sliderHistory = new Splide(sliderHistoryElem, {
    perPage: 3,
    perMove: 1,
    gap: 88,
    pagination: false,
    padding: {
      left: (window.screen.width - 1230) / 2 + 'px',
      right: (window.screen.width - 1230) / 2 + 'px',
    },
    breakpoints: {
      1240: {
        perPage: 3,
        gap: 88,
      },
      991: {
        perPage: 2,
        gap: 80,
      },
      639: {
        perPage: 1,
        gap: 40,
      },
    },
  });
  sliderHistory.mount();
  sliderHistory.on('mounted', setCurrentIndexSLide(sliderHistory));
  sliderHistory.on('move', function (newIndex) {
    setCurrentIndexSLide(sliderHistory, newIndex);
  });
}
