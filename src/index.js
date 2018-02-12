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

// ========================================

ReactDOM.render(
  <Square />,
  document.getElementById('root')
);
