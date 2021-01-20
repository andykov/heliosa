import {
  getSiblings,
  setCurrentIndexSLide,
  isHidden,
  onMountedHideArrowsSlider,
} from '../utils/helpers';

const galleryTabs = document.querySelectorAll('[data-catalog-tabs] button');
const galleryItems = document.querySelectorAll('[data-catalog-item]');

// init first gallery
const productGalleryOptions = {
  perPage: 3,
  perMove: 1,
  pagination: false,
  gap: 30,
  autoplay: true,
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
};

if (galleryItems.length) {
  let firstItemGallery = new Splide(
    galleryItems[0].children[0],
    productGalleryOptions
  );

  galleryTabs[0].classList.add('active');
  firstItemGallery.mount();
  firstItemGallery.on('mounted', onMountedHideArrowsSlider(firstItemGallery));
  firstItemGallery.on('mounted', setCurrentIndexSLide(firstItemGallery));

  firstItemGallery.on('move', function (newIndex) {
    setCurrentIndexSLide(firstItemGallery, newIndex);
  });

  // init gallery on tab click
  galleryTabs.forEach(function (tab, i) {
    tab.addEventListener('click', (e) => {
      e.stopPropagation();
      let target = e.target;

      let galleryWrap = galleryItems[i];

      let gallery = galleryWrap.querySelector('.splide');
      let isActive = gallery.classList.contains('is-active');

      if (isHidden(galleryWrap)) {
        galleryWrap.style.display = 'block';
        target.classList.add('active');

        if (!isActive) {
          let g = new Splide(gallery, productGalleryOptions);
          g.mount();
          g.on('mounted', onMountedHideArrowsSlider(g));
        }
      }

      // remove
      let siblingsTabs = getSiblings(target);

      siblingsTabs.forEach(function (item) {
        item.classList.remove('active');
      });

      // hidden prev display gallery
      let siblingsPanes = getSiblings(galleryWrap);
      siblingsPanes.forEach(function (item) {
        item.style.display = 'none';
      });
    });
  });
}
