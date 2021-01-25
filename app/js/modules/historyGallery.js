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
        perPage: 2,
        gap: 80,
        padding: {
          // left: (window.screen.width - 960) / 2 + 'px',
          right: '240px',
        },
      },
      991: {
        perPage: 2,
        gap: 40,
        padding: {
          // left: (window.screen.width - 960) / 2 + 'px',
          right: 0,
        },
      },
      639: {
        perPage: 1,
      },
    },
    // breakpoints: {
    //   1240: {
    //     perPage: 2,
    //     gap: 80,
    //   },
    //   991: {
    //     perPage: 2,
    //     gap: 40,
    //   },
    //   639: {
    //     perPage: 1,
    //     gap: 0,
    //   },
    // },
  });
  sliderHistory.mount();
  sliderHistory.on('mounted', setCurrentIndexSLide(sliderHistory));
  sliderHistory.on('move', function (newIndex) {
    setCurrentIndexSLide(sliderHistory, newIndex);
  });
}
