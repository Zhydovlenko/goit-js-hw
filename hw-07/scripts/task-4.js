'use strict';

let counterValue = 0;

const value = document.querySelector('#value');
value.textContent = counterValue;

const decrement = document.querySelector('button[data-action="decrement"]');
const increment = document.querySelector('button[data-action="increment"]');

function updateValue(button) {
  if (button === increment) {
    counterValue += 1;
  } else if (button === decrement) {
    counterValue -= 1;
  }
  value.textContent = counterValue;
}

decrement.addEventListener('click', () => updateValue(decrement));
increment.addEventListener('click', () => updateValue(increment));
