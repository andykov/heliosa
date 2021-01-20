// import $ from 'jquery'; window.jQuery = $; window.$ = $ // import module example (npm i -D jquery)
// require('./other_script.js') // Require Other Script(s) from app/js folder Example
import ready from './utils/documentReady';
import { isOutSideClick, overlayVisibility } from './utils/helpers';
// import './modules/modules';

// function setCurrentIndexSLide(slider, newIndex = 0) {
//   let content = `${newIndex + 1} / ${slider.length}`;
//   let prevArrow = slider.Components.Elements.arrows.prev;
//   let arrowsParent = prevArrow.parentNode;
//   let span = arrowsParent.querySelector('span');
//   if (span === null) {
//     let span = document.createElement('span');
//     span.textContent = content;
//     arrowsParent.insertBefore(span, prevArrow.nextSibling);
//   } else {
//     span.textContent = content;
//     arrowsParent.insertBefore(span, prevArrow.nextSibling);
//   }
// }

import Dropdown from './modules/dropdown-native';
import './modules/mobileNav';
import './modules/tabs';
import './modules/bannerCollection';
import './modules/photoGallery';
import './modules/galleryRecommend';
import './modules/galleryTabs';
import './modules/productQuantity';

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

// let imagesWatch = document.querySelectorAll('img.is-loaded');
// imagesWatch.forEach(function (img) {
//   img.addEventListener('load', function (e) {

//     this.classList.add('load');
//   });
// });
// banner-collections slider init

let specBtn = document.querySelectorAll('.product-spec__btn');
if (specBtn) {
  specBtn.forEach(function (btn) {
    btn.addEventListener('click', function (event) {
      event.stopPropagation();
      let stopItem = btn.parentNode.querySelector('[data-spec-stop]');
      stopItem.setAttribute(
        'data-spec-stop',
        stopItem.getAttribute('data-spec-stop') === 'true' ? 'false' : 'true'
      );
      this.classList.toggle('active');
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

let inputFromColors = document.querySelectorAll(
  'input[type="radio"][data-color-from]'
);

if (inputFromColors.length) {
  inputFromColors.forEach(function (input) {
    let img = document.querySelector('img[data-color-to]');
    if (!img) return false;
    if (input.checked) {
      img.src = input.dataset.colorFrom;
    }
    input.addEventListener('change', function (e) {
      const target = e.target;
      img.src = target.dataset.colorFrom;
    });
  });
}

document.addEventListener('click', function (e) {
  if (isOutSideClick(e, '.nav')) {
    let nav = document.querySelector('.nav');
    nav.classList.remove('opened');
    overlayVisibility(false);
  }
});