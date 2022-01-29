const generateBoard = function (whiteQueen, blackQueen) {
  const board = []
  for (let i = 0; i < 8; i++) {
    board[i] = []
    for (let j = 0; j < 8; j++) {
      if (i === whiteQueen[0] && j === whiteQueen[1]) {
        board[i][j] = 1
      }
      else if (i === blackQueen[0] && j === blackQueen[1]) {
        board[i][j] = 1
      }
      else {
        board[i][j] = 0
      }
    }
  }
  return board
};

const queenThreat = function (generateBoard) {
  const queen = []
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (generateBoard[i][j] === 1) {
        queen.push(i + j)
      }
    }
  }

  if (queen[0] === queen[1]) {
    return true
  }
  else {
    return false
  }

}


let whiteQueen = [0, 0];
let blackQueen = [5, 7];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));
