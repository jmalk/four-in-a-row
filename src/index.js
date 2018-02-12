import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Square
// Column
// Board
// Game

function Square (props) {
  return (
    <div className="square"></div>
  );
}

function Column (props) {
  return (
    <div className="column">
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
    </div>
  )
}

// ========================================

ReactDOM.render(
  <Column />,
  document.getElementById('root')
);
