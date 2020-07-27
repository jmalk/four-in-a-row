import checkForWinner from '../check-for-winner';

// playerOne: pieces represented by 1
// playerTwo: pieces represented by -1

const emptyBoard = Array(7).fill(Array(6).fill(null));

test('should return false for an empty board', () => {
  expect(checkForWinner(emptyBoard)).toBe(false);
});

const onePiece = [
  [1, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
];

test('should return false for one piece', () => {
  expect(checkForWinner(onePiece)).toBe(false);
});

const fourPositiveInAColumn = [
  [1, 1, 1, 1, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
];

test('should return playerOne for four positive in one column', () => {
  expect(checkForWinner(fourPositiveInAColumn)).toBe('playerOne');
});

const fourNegativeInAColumn = [
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [-1, -1, -1, -1, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
];

test('should return playerTwo for four negative in one column', () => {
  expect(checkForWinner(fourNegativeInAColumn)).toBe('playerTwo');
});

const fourNegativeInAColumnFurtherUp = [
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [1, 1, -1, -1, -1, -1],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
];

test('should return playerTwo for four negative in one column even if not at the bottom', () => {
  expect(checkForWinner(fourNegativeInAColumnFurtherUp)).toBe('playerTwo');
});

const fourNegativeInTheFurthestColumn = [
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [-1, -1, -1, -1, null, null],
];

test('should return playerTwo for four negative in furthest column', () => {
  expect(checkForWinner(fourNegativeInTheFurthestColumn)).toBe('playerTwo');
});

const fourPositiveInARow = [
  [null, null, null, null, null, null],
  [1, null, null, null, null, null],
  [1, null, null, null, null, null],
  [1, null, null, null, null, null],
  [1, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
];

test('should return playerOne for four positive in a row', () => {
  expect(checkForWinner(fourPositiveInARow)).toBe('playerOne');
});

const fourPositiveInFurthestRow = [
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, 1],
  [null, null, null, null, null, 1],
  [null, null, null, null, null, 1],
  [null, null, null, null, null, 1],
];

test('should return playerOne for four positive in furthest row', () => {
  expect(checkForWinner(fourPositiveInFurthestRow)).toBe('playerOne');
});
