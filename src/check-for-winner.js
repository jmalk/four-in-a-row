export default function checkForWinner (boardSnapshot) {
  const columnHasFourMatching = boardSnapshot.map((column) => {
    for (let i=0; i<3; i++) {
      if (
        (
          column[i] === 'red' &&
          column[i] === column[i] &&
          column[i] === column[i + 1] &&
          column[i] === column[i + 2] &&
          column[i] === column[i + 3]
        ) || (
          column[i] === 'blue' &&
          column[i] === column[i] &&
          column[i] === column[i + 1] &&
          column[i] === column[i + 2] &&
          column[i] === column[i + 3]
        )
      ) {
        return true;
      }
    }
    return false;
  })
  const aColumnHasFourMatching = columnHasFourMatching.some(Boolean);
  return aColumnHasFourMatching;
}
