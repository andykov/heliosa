import { setCurrentIndexSLide, optimizedResize } from '../utils/helpers';

const sliderHistoryElem = document.querySelector('.js-history');
if (sliderHistoryElem) {
  let sliderHistory = new Splide(sliderHistoryElem, {
    perPage: 1,
    perMove: 1,
    gap: 88,
    pagination: false,
    padding: {
      left: setPaddingSlider() + 'px',
      right: setPaddingSlider() + 'px',
    },
    breakpoints: {
      1240: {
        gap: 80,
        padding: {
          left: setPaddingSlider() + 'px',
          right: '260px',
        },
      },
      991: {
        gap: 40,
      },
    },
  });

  sliderHistory.mount();
  sliderHistory.on('mounted', setCurrentIndexSLide(sliderHistory));
  if (
    (window.innerWidth >= 640 && window.innerWidth <= 991) ||
    (window.innerWidth >= 992 && window.innerWidth <= 1239)
  ) {
    sliderHistory.on('mounted', setPaddingSlider(sliderHistory, 2));
  }

  if (window.innerWidth >= 1240) {
    sliderHistory.on('mounted', setPaddingSlider(sliderHistory, 3));
  }

  sliderHistory.on('move', function (newIndex) {
    setCurrentIndexSLide(sliderHistory, newIndex);
  });
}

function setPaddingSlider(slider, perPage) {
  let widthWindow =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

  let container = document.querySelector('.container');
  let containerStyle = getComputedStyle(container);
  let containerWidth =
    container.clientWidth -
    (parseInt(containerStyle.paddingLeft) +
      parseInt(containerStyle.paddingRight));

  let calcPadding = (widthWindow - containerWidth) / 2;

  // Без этого криво работает пролистывание, если в опции perpage
  // указано кл-во слайдов меньше чем есть на самом деле.
  // Пролистывание работает путем имитации опции perPage через вычисления ширины окна и контейнера
  // за исключением одного слайда и дальнейшей установкой padding-right.
  if (slider && perPage) {
    let gap = slider.options.gap * (perPage - 1);
    let paddingRight = containerWidth - (containerWidth - gap) / perPage;
    slider.options.padding.right = calcPadding + paddingRight + 'px';
  }
  return calcPadding;
}
