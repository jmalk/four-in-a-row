import checkForWinner from '../check-for-winner';

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

const fourRedInAColumn = [
  [1, 1, 1, 1, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
];

test('should return true for four red in one column', () => {
  expect(checkForWinner(fourRedInAColumn)).toBe('red');
});

const fourBlueInAColumn = [
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [-1, -1, -1, -1, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
];

test('should return true for four blue in one column', () => {
  expect(checkForWinner(fourBlueInAColumn)).toBe('blue');
});

const fourBlueInAColumnFurtherUp = [
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [1, 1, -1, -1, -1, -1],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
];

test('should return true for four blue in one column even if not at the bottom', () => {
  expect(checkForWinner(fourBlueInAColumnFurtherUp)).toBe('blue');
});

const fourBlueInTheFurthestColumn = [
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [-1, -1, -1, -1, null, null],
];

test('should return true for four blue in one column even if not at the bottom', () => {
  expect(checkForWinner(fourBlueInTheFurthestColumn)).toBe('blue');
});

const fourRedInARow = [
  [null, null, null, null, null, null],
  [1, null, null, null, null, null],
  [1, null, null, null, null, null],
  [1, null, null, null, null, null],
  [1, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
];

test('should return true for four red in a row', () => {
  expect(checkForWinner(fourRedInARow)).toBe('red');
});
