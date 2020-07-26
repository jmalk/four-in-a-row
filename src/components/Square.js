import React from 'react';

function Square(props) {
  // TODO: Make the merge of classNames nicer, see egghead.io course.
  return <div className={`square ${props.colorClass || ''}`}></div>;
}

export default Square;