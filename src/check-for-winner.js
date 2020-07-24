export default function checkForWinner (boardSnapshot) {
  let aRowHasFourMatching = false;
  let aColumnHasFourMatching = false;

  for (let column = 0; column < boardSnapshot.length - 3; column++) {
    for (let row = 0; row < boardSnapshot[column].length - 3; row++) {
      const rowSum = (
        boardSnapshot[column][row] +
        boardSnapshot[column + 1][row] +
        boardSnapshot[column + 2][row] +
        boardSnapshot[column + 3][row]
      );

      if (rowSum === 4 || rowSum === -4) {
        aRowHasFourMatching = true;
      }

      const columnSum = (
        boardSnapshot[column][row] +
        boardSnapshot[column][row + 1] +
        boardSnapshot[column][row + 2] +
        boardSnapshot[column][row + 3]
      );

      if (columnSum === 4 || columnSum === -4) {
        aColumnHasFourMatching = true;
      }
    }
  }

  const ret = aColumnHasFourMatching || aRowHasFourMatching;
  // console.log("checkForWinner -> ret", ret)
  return ret;
}
