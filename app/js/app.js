// import $ from 'jquery'; window.jQuery = $; window.$ = $ // import module example (npm i -D jquery)
// require('./other_script.js') // Require Other Script(s) from app/js folder Example
import ready from './utils/documentReady';
import './modules/modules';

import Dropdown from './modules/dropdown-native';
import './modules/tabs';
// import './vendor/tabbis.es6';

// const mediaQuery = window.matchMedia('(max-width: 639px)');

// function handleTabletChange(e) {
//   if (e.matches) {
//     mobileDropdownTabsInit(e.matches);
//   } else {
//     mobileDropdownTabsInit(e.matches);
//   }
// }

// mediaQuery.addListener(handleTabletChange);
// handleTabletChange(mediaQuery);

const mediaQueryMD = window.matchMedia('(max-width: 639px)');

function getSiblings(e) {
  let siblings = [];

  if (!e.parentNode) {
    return siblings;
  }

  let sibling = e.parentNode.firstChild;

  // collecting siblings
  while (sibling) {
    if (sibling.nodeType === 1 && sibling !== e) {
      siblings.push(sibling);
    }
    sibling = sibling.nextSibling;
  }
  return siblings;
}

const dropdowns = document.querySelectorAll('[data-toggle="dropdown"]');
if (dropdowns.length) {
  dropdowns.forEach((elem) => {
    let DropdownInit = new Dropdown(elem);
    DropdownInit.dispose();
    // DropdownInit.getSelected();
  });
}

// function mobileDropdownTabsInit(mq) {

//   const dropdowns = document.querySelectorAll('[data-toggle="dropdown"]');
//   if (dropdowns.length) {
//     dropdowns.forEach((elem) => {

//       let DropdownInit = new Dropdown(elem);
//       if (!mq) {
//         DropdownInit.dispose();
//       }
//       getLabelActiveTab(elem);
//       // elem.parentNode.addEventListener(
//       //   'show.bs.dropdown',
//       //   function (event) {

//       //   },
//       //   false
//       // );
//       elem.parentNode.addEventListener('hide.bs.dropdown', function (event) {

//         getLabelActiveTab(elem);
//         // elem.textContent = tabActive.textContent;
//       });
//       // DropdownInit.getSelected();
//     });
//   }
// }

// function getLabelActiveTab(elem) {
//   if (!elem) {
//     return false;
//   }
//   const parent = elem.parentNode;
//   const tabActive = parent.querySelector('.nav-tab.active');
//   if (tabActive) {
//     elem.textContent = tabActive.textContent;
//   }
// }

// отмена закрытия бутстраповского дропдауна с чекбоксами
// document.querySelectorAll('.field-drop-checkboxes').forEach((link) => {
//   link.addEventListener('click', (event) => {
//     event.stopPropagation();
//   });
// });
// $(document).on('click', '.dropdown-drop', function(e) {
//   e.stopPropagation();
// });

// let imagesWatch = document.querySelectorAll('img.is-loaded');
// imagesWatch.forEach(function (img) {
//   img.addEventListener('load', function (e) {

//     this.classList.add('load');
//   });
// });
// banner-collections slider init
let bannerCollection = document.querySelector('.js-banner-collections');
if (bannerCollection) {
  var splide = new Splide('.js-banner-collections', {
    autoplay: false,
  });

  splide.on('autoplay:playing', function (rate) {
    console.log(rate); // 0-1
  });

  splide.mount();
}

let specBtn = document.querySelectorAll('.spec-list__btn');
if (specBtn) {
  specBtn.forEach(function (btn) {
    btn.addEventListener('click', function (event) {
      event.stopPropagation();
      let stopItem = btn.parentNode.querySelector('[data-spec-stop]');
      // stopItem.toggleAttribute('data-spec-stop');
      stopItem.setAttribute(
        'data-spec-stop',
        stopItem.getAttribute('data-spec-stop') === 'true' ? 'false' : 'true'
      );
      this.classList.toggle('active');
      // let state = stopItem.dataset.specStop;
      // if (state && state === 'true') {
      //   stopItem.dataset.specStop = false;
      // } else {
      //   stopItem.dataset.specStop = true;
      // }

      // if (state)
      // stopItem.dataset.specStop = false;
    });
  });
}

let accordion = document.querySelectorAll('.accordion'),
  accordionSectionHead = document.querySelectorAll('.accordion__head');
if (accordion) {
  accordionSectionHead.forEach(function (item) {
    item.addEventListener('click', function (event) {
      let target = event.currentTarget;
      target.parentElement.classList.toggle('opened');
    });
  });
}

import { cube, foo } from './modules/my-module';

// var Button = require('bootstrap.native');

// var myBtnInit = new Button('#myBtnID');
// ready(function () {

// });
// document.addEventListener('DOMContentLoaded', () => {
//   // Custom JS

// });

function isHidden(el) {
  var style = window.getComputedStyle(el);
  return style.display === 'none';
}

// Gallery
const galleryTabs = document.querySelectorAll('[data-catalog-tabs] button');
const galleryItems = document.querySelectorAll('[data-catalog-item]');

// init first gallery
const productGalleryOptions = {
  perPage: 3,
  perMove: 1,
  pagination: false,
  gap: 30,
  autoplay: true,
  // arrows: false,
  breakpoints: {
    1200: {
      perPage: 3,
      // arrows: false,
    },
    991: {
      perPage: 2,
      // arrows: false,
    },
    639: {
      perPage: 1,
      // arrows: false,
    },
  },
};
if (galleryItems[0]) {
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

function setCurrentIndexSLide(slider, newIndex = 0) {
  let content = `${newIndex + 1} / ${slider.length}`;
  let prevArrow = slider.Components.Elements.arrows.prev;
  let arrowsParent = prevArrow.parentNode;
  let span = arrowsParent.querySelector('span');
  if (span === null) {
    let span = document.createElement('span');
    span.textContent = content;
    arrowsParent.insertBefore(span, prevArrow.nextSibling);
  } else {
    span.textContent = content;
    arrowsParent.insertBefore(span, prevArrow.nextSibling);
  }
}

// Product quantity
function incrementValue(e) {
  e.preventDefault();
  var fieldName = e.target.dataset.field;
  var parent = e.target.parentNode;

  var currentVal = parseInt(
    parent.querySelector('input[name=' + fieldName + ']').value,
    10
  );

  if (!isNaN(currentVal)) {
    parent.querySelector('input[name=' + fieldName + ']').value =
      currentVal + 1;
  } else {
    parent.querySelector('input[name=' + fieldName + ']').value = 0;
  }
}

function decrementValue(e) {
  e.preventDefault();
  var fieldName = e.target.dataset.field;
  var parent = e.target.parentNode;
  var currentVal = parseInt(
    parent.querySelector('input[name=' + fieldName + ']').value,
    10
  );

  if (!isNaN(currentVal) && currentVal > 0) {
    parent.querySelector('input[name=' + fieldName + ']').value =
      currentVal - 1;
  } else {
    parent.querySelector('input[name=' + fieldName + ']').value = 0;
  }
}
const fieldsQuantitys = document.querySelectorAll('.field-quantity');
for (const field of fieldsQuantitys) {
  field.addEventListener('click', function (event) {
    if (event.target.className === 'field-quantity__plus') {
      incrementValue(event);
    }
    if (event.target.className === 'field-quantity__minus') {
      decrementValue(event);
    }
  });
}

function onMountedHideArrowsSlider(slider) {
  if (slider.length <= slider.options.perPage) {
    slider.root.classList.add('arrows-hide');
    let arrows = slider.root.querySelector('.splide__arrows');

    arrows.style.display = 'none';
  }
}

// nav mobile visible
function mobileNavVisibility() {}

let mobileNavTrigger = document.querySelector('.mobile-nav-trigger'),
  mobileNavClose = document.querySelector('.mobile-nav-close');

if (mobileNavTrigger && mobileNavClose) {
  mobileNavTrigger.addEventListener('click', function (e) {
    e.stopPropagation();
    let nav = document.querySelector('.nav');
    nav.classList.add('opened');
    overlayVisibility(true);
  });

  mobileNavClose.addEventListener('click', function (e) {
    e.stopPropagation();
    let nav = document.querySelector('.nav');
    nav.classList.remove('opened');
    overlayVisibility(false);
  });
}

function overlayVisibility(display) {
  let overlay = document.querySelector('.overlay'),
    body = document.querySelector('body');
  if (overlay && display === true) {
    overlay.classList.add('show');
    body.classList.add('scroll-off');
  } else if (overlay && display === false) {
    overlay.classList.remove('show');
    body.classList.remove('scroll-off');
  }
}

// const toggle = event => {
//   event.stopPropagation();

//   if (!event.target.closest('.box')) {
//     console.log('Click outside');

//     box.classList.toggle('active');

//     box.classList.contains('active')
//       ? document.addEventListener('click', toggle)
//       : document.removeEventListener('click', toggle);
//   } else {
//     console.log('Click inside');
//   }
// }
var ignoreClickOnMeElement = document.querySelector('.nav');

document.addEventListener('click', function (e) {
  if (isOutSideClick(e, '.nav')) {
    let nav = document.querySelector('.nav');
    nav.classList.remove('opened');
    overlayVisibility(false);
  }
});

function isOutSideClick(event, selector) {
  const nodeElem = document.querySelector(selector);
  const isClickInsideElement = nodeElem.contains(event.target);
  if (!isClickInsideElement) return true;
  else return false;
}
