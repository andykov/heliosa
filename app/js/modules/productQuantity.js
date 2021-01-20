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

if (fieldsQuantitys.length) {
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
}
