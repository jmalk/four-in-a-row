import React from 'react';
import Square from './Square';

function getColor(number) {
  if (number === 1) {
    return 'red';
  } else if (number === -1) {
    return 'blue';
  } else {
    return null;
  }
}

function Column(props) {
  return (
    <div className="column" onClick={props.onClick}>
      <Square colorClass={getColor(props.squares[5])} />
      <Square colorClass={getColor(props.squares[4])} />
      <Square colorClass={getColor(props.squares[3])} />
      <Square colorClass={getColor(props.squares[2])} />
      <Square colorClass={getColor(props.squares[1])} />
      <Square colorClass={getColor(props.squares[0])} />
    </div>
  );
}

export default Column;