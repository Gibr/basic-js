const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const array = n.toString().split('');

  return array.reduce((max, val, index, arr) => {
    let newNumber = [...arr];
    newNumber.splice(index, 1);
    newNumber = +newNumber.join('');
    return newNumber > max ? newNumber : max
  }, 0)
}

module.exports = {
  deleteDigit
};
