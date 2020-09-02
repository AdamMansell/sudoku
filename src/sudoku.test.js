import SudokuBoard from './../src/sudokuBoard.js';

describe('SudokuBoard', () => {

  test('should return true when checking if numbers 1-9 are not repeated in row', () => {
    const board = new SudokuBoard();
    const row1 = [1,2,3,4,5,6,7,8,9];
    expect(board.checkRow(row1)).toEqual(true);
  });

  test('should return false when checking if numbers 1-9 are not repeated in row', () => {
    const board = new SudokuBoard();
    const row1 = [1,2,3,4,5,5,7,8,9];
    expect(board.checkRow(row1)).toEqual(false);
  });

  test('should return true when checking if numbers 1-9 are not repeated in col', () => {
    const board = new SudokuBoard();
    const col1 = [1,2,3,4,5,6,7,8,9];
    expect(board.checkColumn(col1)).toEqual(true);
  });

  test('should return false when checking if numbers 1-9 are not repeated in col', () => {
    const board = new SudokuBoard();
    const col1 = [1,2,3,4,5,5,7,8,9];
    expect(board.checkColumn(col1)).toEqual(false);
  });
});