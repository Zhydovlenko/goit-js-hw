'use strict';

const fontSizeControl = document.querySelector('#font-size-control');
const text = document.querySelector('#text');
console.log(text);

fontSizeControl.addEventListener('input', () => {
  text.style.fontSize = `${fontSizeControl.value}px`;
});
