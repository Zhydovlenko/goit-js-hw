'use strict';

let country = prompt('Укажите страну доставки');

if (country !== null) {
  country = country.toLowerCase();
}

let cost;

switch (country) {
  case 'китай':
    cost = 100;
    break;

  case 'чили':
    cost = 250;
    break;

  case 'австралия':
    cost = 170;
    break;

  case 'индия':
    cost = 80;
    break;

  case 'ямайка':
    cost = 120;
    break;

  default:
    cost = 0;
}
if (cost !== 0) {
  country = country[0].toUpperCase() + country.slice(1).toLowerCase();
  alert(`Доставка в ${country} будет стоить ${cost} кредитов`);
} else {
  alert('В вашей стране доставка не доступна');
}
