export default function SudokuBoard() {
  this.row1 = [];
  this.row2 = [];
  this.row3 = [];
  this.col1 = [];
  this.col2 = [];
  this.col3 = [];
}

SudokuBoard.prototype.checkRow = function(rowNum) {
  let tempArray = [];
  for (let i=0; i<9; i++) {
    if (tempArray.includes(rowNum[i])) {
      return false;
    }
    tempArray.push(rowNum[i]);
  }
  return true;
};

SudokuBoard.prototype.checkColumn = function(colNum) {
  let tempArray = [];
  for (let i=0; i<9; i++) {
    if (tempArray.includes(colNum[i])) {
      return false;
    }
    tempArray.push(colNum[i]);
  }
  return true;
}

// SudokuBoard.prototype.checkGrid = function(row1, row2, row3) {
//   let rowArray = [];
//   let tempArray = [];
//   rowArray.push(row1,row2,row3)
//   rowArray.forEach(function(rowNum) {
//     for (let i=0; i<3; i++) {
//       if (tempArray.includes(rowNum[i])) {
//         return false;
//       }
//       tempArray.push(rowNum[i]);
//     }
//     return true;
//   });
// };



// function makeGridArray() {
//   for (let i=0; i < 3; i++) {
//     seg1Array.push(entireRow[i]);
//   }
//   for (let i=3; i < 6; i++) {
//     seg2Array.push(entireRow[i]);
//   }
//   for (let i=6; i < 9; i++) {
//     seg3Array.push(entireRow[i]);
//   }
// };




// entireRow1 = [123456789];
// entireRow2 = [456123789];
// entireRow3 = [789123456];

// seg1of1Array = [1,2,3]
// seg1of2Array = [4,5,6]
// seg1of3Array = [7,8,9]

// seg2of1Array = [4,5,6]
// seg3of1Array = [7,8,9]

// for (let i=0; i < 3; i++) {
//   seg1of1Array.push(entireRow[i]);
//   // row1.shift(i);
// }
// for (let i=3; i < 6; i++) {
//   seg2of1Array.push(entireRow[i]);
//   // row1.shift(i);
// }
// for (let i=6; i < 3; i++) {
//   seg3of1Array.push(entireRow[i]);
//   // row1.shift(i);
// }