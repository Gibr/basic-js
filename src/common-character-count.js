const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let hash = {};
  let counter = 0;

  s1.split('').forEach((elem) => {
    if (!hash[elem]) {
      hash[elem] = 1;
    } else {
      hash[elem]++;
    }
  })

  s2.split('').forEach((elem) => {
    if (hash[elem] && hash[elem] > 0) {
      hash[elem]--;
      counter++;
    }
  })

  return counter;
}

module.exports = {
  getCommonCharacterCount
};
