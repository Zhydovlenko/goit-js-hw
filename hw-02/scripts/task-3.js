'use strict';

const findLongestWord = function(string) {
  let array = string.split(' ');
  let wordLength = 0;
  let longestWord;

  for (let i = 0; i < array.length; i += 1) {
    wordLength = array[1].length;

    if (array[i].length > wordLength) {
      longestWord = array[i];

      return longestWord;
    }
  }
};
/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'
