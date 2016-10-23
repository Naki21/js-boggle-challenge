'use strict';

// const mapBoard = function(tray){
//   let thisBoard = board;
//   let box = Math.sqrt(tray.length);
//
//   for (let i = 0; i <= tray.length; i++) {
//     thisBoard.push(tray.splice(0, box));
//   }
// };
// const getCoord = function(list) {
//     let letter = [];
//
//     for (let i = 0; i < list.length; i++) {
//       let x = list[i][0];
//       let y = list[i][1];
//       letter.push(board[x][y]);
//       }
//     };
let board = [];

const mapBoard = function(tray){
    let box = Math.sqrt(tray.length);

    for (let i = 0; i < tray.length; i++) {
      board[i] = (tray.splice(0, box));
    }
    return board;
  };
  let letter = [];
  const getCoord = function(list) {

    letter = [];
    for (let i = 0; i < list.length; i++) {
      let x = list[i][0];
      let y = list[i][1];
      letter.push(board[x][y]);
    }
    letter = letter.join('');
};
// const resetBoard = function (){
//     board = [];
// };

const boggle = function boggle(tray, list) {
mapBoard(tray);
getCoord(list);
return letter;
};

const bigBoggle = function bigBoggle(tray, list) {
mapBoard(tray);
getCoord(list);
return letter;
};

const superBigBoggle = function superBigBoggle(tray, list) {
  mapBoard(tray);
  getCoord(list);
  return letter;
};


module.exports = {
  boggle,
  bigBoggle,
  superBigBoggle,
};
