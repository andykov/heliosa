let isHidden = function (elem) {
  var style = window.getComputedStyle(elem);
  return style.display === 'none';
};

let getSiblings = function (e) {
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
};

let setCurrentIndexSLide = function (slider, newIndex = 0) {
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
};

let onMountedHideArrowsSlider = function (slider) {
  if (slider.length <= slider.options.perPage) {
    slider.root.classList.add('arrows-hide');
    let arrows = slider.root.querySelector('.splide__arrows');

    arrows.style.display = 'none';
  }
};

let overlayVisibility = function (display) {
  let overlay = document.querySelector('.overlay'),
    body = document.querySelector('body');
  if (overlay && display === true) {
    overlay.classList.add('show');
    body.classList.add('scroll-off');
  } else if (overlay && display === false) {
    overlay.classList.remove('show');
    body.classList.remove('scroll-off');
  }
};

let isOutSideClick = function (event, selector) {
  const nodeElem = document.querySelector(selector);
  const isClickInsideElement = nodeElem.contains(event.target);
  if (!isClickInsideElement) return true;
  else return false;
};

export {
  isHidden,
  isOutSideClick,
  getSiblings,
  setCurrentIndexSLide,
  onMountedHideArrowsSlider,
  overlayVisibility,
};
