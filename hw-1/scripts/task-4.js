'use strict';

const credits = 23580;
const pricePerDroid = 3000;
let totalPrice;
const input = prompt('Количество ремонтных дроидов');

if (input === null) {
  alert('Отменено пользователем!');
} else {
  const quantity = Number(input);
  totalPrice = quantity * pricePerDroid;

  if (totalPrice > credits) {
    alert('Недостаточно средств на счету!');
  } else {
    const rest = credits - totalPrice;
    alert(`Вы купили ${quantity} дроидов, на счету осталось ${rest} кредитов.`);
  }
}
