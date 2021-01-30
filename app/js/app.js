import { isOutSideClick, overlayVisibility } from './utils/helpers';

import Dropdown from './modules/dropdown-native';
import './modules/mobileNav';
import './modules/tabs';
import './modules/bannerCollection';
import './modules/photoGallery';
import './modules/historyGallery';
import './modules/compareGallery';
import './modules/galleryRecommend';
import './modules/galleryTabs';
import './modules/productQuantity';

const dropdownsInit = document.querySelectorAll('[data-toggle="dropdown"]');
if (dropdownsInit.length) {
  let filters;
  dropdownsInit.forEach((elem) => {
    filters = new Dropdown(elem);
  });

  let btnClear = document.querySelector('.js-filters-clear');
  btnClear.addEventListener('click', function (e) {
    filters.clear();
  });
}

const filterMobile = document.querySelector('.js-filter-mobile');
if (filterMobile) {
  filterMobile.addEventListener('click', function () {
    filterMobile.parentNode.classList.toggle('show');
  });
}

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
MicroModal.init({
  onShow: function (modal) {
    if (modal.id == 'modal-auth') {
      MicroModal.close('modal-login');
    }
    if (modal.id == 'modal-login') {
      MicroModal.close('modal-auth');
    }
  },
  // onClose: onCloseModal,
  openTrigger: 'data-micromodal-trigger',
  closeTrigger: 'data-micromodal-close',
  disableScroll: true,
  disableFocus: false,
  awaitOpenAnimation: false,
  awaitCloseAnimation: false,
  debugMode: true,
});
