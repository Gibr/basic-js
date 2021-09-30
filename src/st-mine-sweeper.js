import { NotImplementedError } from '../extensions/index.js';

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
export default function minesweeper ( matrix ) {
  return matrix.map( (row, rowIndex) => {
    return row.map( (val, columnIndex) => {
      let sum = 0;
      for (let i = rowIndex > 0 ? rowIndex - 1 : 0; i <= (rowIndex < matrix.length - 1 ? rowIndex + 1 : rowIndex); i++) {
        for (let j = columnIndex > 0 ? columnIndex - 1 : 0; j <=(columnIndex < row.length - 1 ? columnIndex + 1 : columnIndex); j++) {
          if (matrix[i][j]) sum++;
        }
      }
      return val ? sum - 1 : sum;
    })
  })
}
