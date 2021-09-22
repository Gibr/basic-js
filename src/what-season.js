import { NotImplementedError } from '../extensions/index.js';

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
export default function getSeason(date) {
  
  if (date === undefined) return "Unable to determine the time of year!";
  if (!(date instanceof Date) || Number.isNaN(date)) throw new Error('Invalid date!');
  if (Object.keys(date).length > 0) throw new Error('Invalid date!');
  
  const seasons = 
  ["winter", "winter",
   "spring", "spring", "spring",
   "summer", "summer", "summer",
   "autumn", "autumn", "autumn",
   "winter"];

  const month = date.getMonth();
  return seasons[month];
}
