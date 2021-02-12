let bannerCollectionElem = document.querySelector('.js-banner-collections');
if (bannerCollectionElem) {
  let splide = new Splide(bannerCollectionElem, {
    type: 'loop',
    autoplay: true,
  });

  splide.mount();

  let arrows = splide.Components.Arrows.arrows.next.parentNode;
  let arrowNext = splide.Components.Arrows.arrows.next;
  let pagination = splide.Components.Pagination.data.list;
  let w = arrowNext.clientWidth * 2 + (pagination.clientWidth + 40);

  if (window.screen.width < 992) {
    arrows.style.maxWidth = `${w}px`;
  }
}
