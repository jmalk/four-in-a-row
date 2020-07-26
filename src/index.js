import React from 'react';
import ReactDOM from 'react-dom';
import checkForWinner from './check-for-winner';
import Square from './components/Square';
import './index.css';

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

class Board extends React.Component {
  constructor(props) {
    super(props);
    // Represent board as a nested array of 7 columns of 6 spaces each.
    this.state = {
      board: Array(7).fill(Array(6).fill(null)),
      redPlayersTurn: true,
      winner: false,
    };
  }

  handleClick(columnIndex) {
    // Make a copy of the array
    let boardSnapshot = this.state.board.map((element) => element.slice());
    const column = boardSnapshot[columnIndex];
    const columnFull = !!column[column.length - 1];
    if (columnFull) {
      return;
    }

    for (let i = 0; i < boardSnapshot[columnIndex].length; i++) {
      if (boardSnapshot[columnIndex][i] === null) {
        boardSnapshot[columnIndex][i] = this.state.redPlayersTurn ? 1 : -1;
        break;
      }
    }

    const winner = checkForWinner(boardSnapshot);

    this.setState({
      board: boardSnapshot,
      redPlayersTurn: !this.state.redPlayersTurn,
      winner,
    });
  }

  render() {
    return this.state.winner ? (
      <h1>{this.state.winner} wins!</h1>
    ) : (
      <div className="board">
        <Column
          squares={this.state.board[0]}
          onClick={() => {
            this.handleClick(0);
          }}
        />
        <Column
          squares={this.state.board[1]}
          onClick={() => {
            this.handleClick(1);
          }}
        />
        <Column
          squares={this.state.board[2]}
          onClick={() => {
            this.handleClick(2);
          }}
        />
        <Column
          squares={this.state.board[3]}
          onClick={() => {
            this.handleClick(3);
          }}
        />
        <Column
          squares={this.state.board[4]}
          onClick={() => {
            this.handleClick(4);
          }}
        />
        <Column
          squares={this.state.board[5]}
          onClick={() => {
            this.handleClick(5);
          }}
        />
        <Column
          squares={this.state.board[6]}
          onClick={() => {
            this.handleClick(6);
          }}
        />
        <h2 className="turn-label">
          {this.state.redPlayersTurn ? 'Red' : 'Blue'}'s turn
        </h2>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(<Board className="board" />, document.getElementById('root'));
