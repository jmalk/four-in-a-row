export default function checkForWinner(boardSnapshot) {
  for (let column = 0; column < boardSnapshot.length - 3; column++) {
    for (let row = 0; row < boardSnapshot[column].length - 3; row++) {
      const rowSum =
        boardSnapshot[column][row] +
        boardSnapshot[column + 1][row] +
        boardSnapshot[column + 2][row] +
        boardSnapshot[column + 3][row];

      if (rowSum === 4) return 'red';
      if (rowSum === -4) return 'blue';

      const diagonalSum =
        boardSnapshot[column][row] +
        boardSnapshot[column + 1][row + 1] +
        boardSnapshot[column + 2][row + 2] +
        boardSnapshot[column + 3][row + 3];

      if (diagonalSum === 4) return 'red';
      if (diagonalSum === -4) return 'blue';

      const reverseDiagonalSum =
        boardSnapshot[column + 3][row] +
        boardSnapshot[column + 2][row + 1] +
        boardSnapshot[column + 1][row + 2] +
        boardSnapshot[column][row + 3];

      if (reverseDiagonalSum === 4) return 'red';
      if (reverseDiagonalSum === -4) return 'blue';
    }
  }

  // Check all columns
  for (let column=0; column < boardSnapshot.length; column++) {
    for (let row = 0; row < boardSnapshot[column].length - 3; row++) {
      const columnSum =
      boardSnapshot[column][row] +
      boardSnapshot[column][row + 1] +
      boardSnapshot[column][row + 2] +
      boardSnapshot[column][row + 3];

    if (columnSum === 4) return 'red';
    if (columnSum === -4) return 'blue';
    }
  }

  return false;
}
