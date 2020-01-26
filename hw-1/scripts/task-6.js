'use strict';

let input;
let total = 0;

while (input !== null) {
  input = prompt('Введите число:');

  if (input !== null) {
    const userNumber = Number(input);

    if (Number.isNaN(userNumber)) {
      alert('Было введено не число, попробуйте еще раз');
    } else {
      total += userNumber;
    }
  }
}

alert(`Общая сумма чисел равна ${total}`);
