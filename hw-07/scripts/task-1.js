'use strict';

const itemsAmount = document.querySelectorAll('.item').length;

console.log(`В списке ${itemsAmount} категории`);

const items = document.querySelectorAll('.item');
items.forEach(elem => {
  const title = elem.querySelector('h2').textContent;
  const itemsLength = elem.querySelectorAll('li').length;
  console.log(`
  Категория: ${title} 
  Количество элементов: ${itemsLength}`);
});
