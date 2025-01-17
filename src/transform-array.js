const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!");
  const newArr = [];
  const discarded = {};

  arr.forEach((value, index) => {
    if (typeof value === "string" && value.startsWith("--")) {
      switch (value) {
        case "--discard-next":
          discarded[index + 1] = true;
          break;
        case "--discard-prev":
          if (newArr[newArr.length - 1] && !discarded[index - 1]) {
            discarded[index - 1] = true;
            newArr.pop();
          }
          break;
        case "--double-next":
          if (arr[index + 1]) newArr.push(arr[index + 1]);
          break;
        case "--double-prev":
          if (newArr[newArr.length - 1] && !discarded[index - 1]) newArr.push(newArr[newArr.length - 1]);
          break;
        default:
          if (!discarded[index]) newArr.push(value);
          break;
      }
    } else if (!discarded[index]) {
      newArr.push(value);
    }
  });
  return newArr
}

module.exports = {
  transform
};
