"use strict";
function minDigit(x) {
  const digits = String(x).split('').map((digit) => parseInt(digit));
  let minValue = 9;

  if (typeof x !=='number' || x < 0) {
    throw new Error('Опять? Опять отрицательное число?')
  }

  for (let i = 0; i < digits.length; i++) {
      if (digits[i] < minValue) {
          minValue = digits[i];
      }
  }

  return minValue;
}

console.log('minDigit(' + [3456789] + ') = ' + minDigit(3456789));
console.log('minDigit(' + [-26789] + ') = ' + minDigit(-26789)); 
console.log('minDigit(' + [0] + ') = ' + minDigit(0));