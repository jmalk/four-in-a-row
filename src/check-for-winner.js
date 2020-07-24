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
  return aColumnHasFourMatching;
}
