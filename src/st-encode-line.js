import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine( str ) {
  if (str === '') return '';
  const arr = str.split('')
  let result = '';
  let prevChar = arr[0];
  let charCounter = 1;

  function writeCode() {
    if (charCounter > 1) {
      result += charCounter;
    }
    result += prevChar;
  }

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] == prevChar) {
      charCounter++;
    } else {
      writeCode();
      prevChar = arr[i];
      charCounter = 1;
    }
  }
  writeCode();

  return result
}
