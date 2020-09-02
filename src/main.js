import SudokuBoard from './sudokuBoard.js';

let board = new SudokuBoard();

$(document).ready(function() {
  $("form#").submit(function(event) {
    event.preventDefault();
    for (let i=1; i<=9; i++) {
      board.row1.push($("input#rowOne"+i).val());
    }
    for (let i=1; i<=9; i++) {

    }
    board.row1.push(5);
    board.row1.push(3);
    board.row1.push($("input#").val());
    board.row1.push($("input#").val());
    board.row1.push(7);
    board.row1.push($("input#").val());
    board.row1.push($("input#").val());
    board.row1.push($("input#").val());
    board.row1.push($("input#").val());
    board.row2.push(6);
    board.row2.push($("input#").val());
    board.row2.push($("input#").val());
    board.row2.push(1);
    board.row2.push(9);
    board.row2.push(5);
    board.row2.push($("input#").val());
    board.row2.push($("input#").val());
    board.row2.push($("input#").val());
    board.row3.push($("input#").val());
    board.row3.push(9);
    board.row3.push(8);
    board.row3.push($("input#").val());
    board.row3.push($("input#").val());
    board.row3.push($("input#").val());
    board.row3.push($("input#").val());
    board.row3.push(6);
    board.row3.push($("input#").val());
    board.row4.push(8);
    board.row4.push($("input#").val());
    board.row4.push($("input#").val());
    board.row4.push($("input#").val());
    board.row4.push(6);
    board.row4.push($("input#").val());
    board.row4.push($("input#").val());
    board.row4.push($("input#").val());
    board.row4.push(3);
    board.row5.push(4);
    board.row5.push($("input#").val());
    board.row5.push($("input#").val());
    board.row5.push(8);
    board.row5.push($("input#").val());
    board.row5.push(3);
    board.row5.push($("input#").val());
    board.row5.push($("input#").val());
    board.row5.push(1);
    board.row6.push(7);
    board.row6.push($("input#").val());
    board.row6.push($("input#").val());
    board.row6.push($("input#").val());
    board.row6.push(2);
    board.row6.push($("input#").val());
    board.row6.push($("input#").val());
    board.row6.push($("input#").val());
    board.row6.push(6);
    board.row7.push($("input#").val());
    board.row7.push(6);
    board.row7.push($("input#").val());
    board.row7.push($("input#").val());
    board.row7.push($("input#").val());
    board.row7.push($("input#").val());
    board.row7.push(2);
    board.row7.push(8);
    board.row7.push($("input#").val());
    board.row8.push($("input#").val());
    board.row8.push($("input#").val());
    board.row8.push($("input#").val());
    board.row8.push(4);
    board.row8.push(1);
    board.row8.push(9);
    board.row8.push($("input#").val());
    board.row8.push($("input#").val());
    board.row8.push(5);
    board.row9.push($("input#").val());
    board.row9.push($("input#").val());
    board.row9.push($("input#").val());
    board.row9.push($("input#").val());
    board.row9.push(8);
    board.row9.push($("input#").val());
    board.row9.push($("input#").val());
    board.row9.push(7);
    board.row9.push(9);


  });
});