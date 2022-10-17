const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const DNSStat = {};

  domains.forEach((url) => {
    const domainArr = url.split('.').reverse();
    let prevDomain = '';

    domainArr.forEach((domain) => {
      const newDomain = prevDomain + '.' + domain;
      if (DNSStat[newDomain]) {
        DNSStat[newDomain]++;
      } else {
        DNSStat[newDomain] = 1;
      }
      prevDomain = newDomain;
    })

  })

  return DNSStat
}

module.exports = {
  getDNSStats
};
