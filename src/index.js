import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Square
// Column
// Board
// Game

function Square (props) {
  return (
    <div className={`square ${props.colorClass || ''}`}></div>
  );
}

class Column extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
        squares: Array(6).fill(null)
    }
  }

  render () {
    return (
      <div className="column" onClick={() => this.setState({squares: ['red', null, null, null, null, null]})}>
        <Square colorClass={this.state.squares[5]}/>
        <Square colorClass={this.state.squares[4]}/>
        <Square colorClass={this.state.squares[3]}/>
        <Square colorClass={this.state.squares[2]}/>
        <Square colorClass={this.state.squares[1]}/>
        <Square colorClass={this.state.squares[0]}/>
      </div>
    );
  }
}

function Board (props) {
  return (
    <div className="board">
      <Column />
      <Column />
      <Column />
      <Column />
      <Column />
      <Column />
      <Column />
    </div>
  )
}

// ========================================

ReactDOM.render(
  <Board />,
  document.getElementById('root')
);
