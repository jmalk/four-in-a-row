export default function checkForWinner (boardSnapshot) {
  const columnHasFourMatching = boardSnapshot.map((column) => {
    for (let i=0; i<3; i++) {
      const sum = column[i] + column[i + 1] + column[i + 2] + column[i + 3];
      if (sum === 4 || sum === -4) {
        return true;
      }
    }
    return false;
  })
  const aColumnHasFourMatching = columnHasFourMatching.some(Boolean);

  let aRowHasFourMatching = false;

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
    }
  }

  const ret = aColumnHasFourMatching || aRowHasFourMatching;
  // console.log("checkForWinner -> ret", ret)
  return ret;
}
