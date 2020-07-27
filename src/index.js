import React from 'react';
import ReactDOM from 'react-dom';
import checkForWinner from './check-for-winner';
import Column from './components/Column';
import './index.css';

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
    return (
      <div className="board">
        {this.state.winner ? <div className="winner-announce-background"><h1 className="winner-announce">{this.state.winner} wins!</h1></div> : null}
        {[0, 1, 2, 3, 4, 5, 6].map((i) => {
          return (
            <Column
            key={i}
            squares={this.state.board[i]}
            onClick={() => {
              this.handleClick(i);
            }}
            />
            );
          })}

        <h2 className="turn-label">
          {this.state.redPlayersTurn ? 'Red' : 'Blue'}'s turn
        </h2>
      </div>
    );
  }
}

ReactDOM.render(<Board className="board" />, document.getElementById('root'));
