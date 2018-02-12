import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Square
// Column
// Board
// Game

function Square (props) {
  // TODO: Make the merge of classNames nicer, see egghead.io course.
  return (
    <div className={`square ${props.colorClass || ''}`}></div>
  );
}

function Column (props) {
  return (
    <div className="column" onClick={props.onClick}>
      <Square colorClass={props.squares[5]}/>
      <Square colorClass={props.squares[4]}/>
      <Square colorClass={props.squares[3]}/>
      <Square colorClass={props.squares[2]}/>
      <Square colorClass={props.squares[1]}/>
      <Square colorClass={props.squares[0]}/>
    </div>
  );
}

class Board extends React.Component {
  constructor (props) {
    super(props);
    // Represent board as a nested array of 7 columns of 6 spaces each.
    this.state = {
      board: Array(7).fill(Array(6).fill(null)),
      redPlayersTurn: true
    };
  }

  handleClick (column) {
    let boardSnapshot = this.state.board.map((element) => element.slice());

    for (let i = 0; i < boardSnapshot[column].length; i++ ) {
      if (boardSnapshot[column][i] === null) {
        boardSnapshot[column][i] = this.state.redPlayersTurn ? 'red' : 'blue';
        break;
      }
    }

    this.setState({
      board: boardSnapshot,
      redPlayersTurn: !this.state.redPlayersTurn
    });
  }

  render () {
    return (
      <div className="board">
        <Column squares={this.state.board[0]} onClick={() => {this.handleClick(0)}}/>
        <Column squares={this.state.board[1]} onClick={() => {this.handleClick(1)}}/>
        <Column squares={this.state.board[2]} onClick={() => {this.handleClick(2)}}/>
        <Column squares={this.state.board[3]} onClick={() => {this.handleClick(3)}}/>
        <Column squares={this.state.board[4]} onClick={() => {this.handleClick(4)}}/>
        <Column squares={this.state.board[5]} onClick={() => {this.handleClick(5)}}/>
        <Column squares={this.state.board[6]} onClick={() => {this.handleClick(6)}}/>
      </div>
    )
  }
}

// ========================================

ReactDOM.render(
  <Board />,
  document.getElementById('root')
);
