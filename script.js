'use strict';
const dateInput = document.getElementById('date');
const numInput = document.getElementById('lucky-number');
const form = document.querySelector('.form');
const outputEl = document.querySelector('.output > p');

function areInputsValid(dateValue, numValue) {
  if (dateValue === '') return false;
  if (numValue <= 0) {
    numInput.classList.add('error');
    return false;
  }

  numInput.classList.remove('error');
  return true;
}

// Event handlers
function formSubmitHandler(e) {
  e.preventDefault();

  const dateValue = dateInput.value;
  const numValue = Number.parseInt(numInput.value);

  if (!areInputsValid(dateValue, numValue)) return;

  const dateArray = dateValue.split('-').flatMap((num) => num.split(''));
  const dateSum = dateArray.reduce((sum, el) => sum + Number.parseInt(el), 0);

  outputEl.innerText =
    dateSum % numValue === 0
      ? 'Yes, you are lucky! 🥳'
      : 'No, you are not lucky! 😶';
}

// Event Listeners
form.addEventListener('submit', formSubmitHandler);
