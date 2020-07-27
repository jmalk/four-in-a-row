import React from "react";
import ReactDOM from "react-dom";
import checkForWinner from "./check-for-winner";
import Column from "./components/Column";
import "./index.css";

class Board extends React.Component {
  constructor(props) {
    super(props);
    // Represent board as a nested array of 7 columns of 6 spaces each.
    this.state = {
      board: Array(7).fill(Array(6).fill(null)),
      playerOnesTurn: true,
      winner: false,
      playerOneColor: "#ff0000",
      playerTwoColor: "#0000ff",
    };

    this.resetGame = this.resetGame.bind(this);
    this.changePlayerOneColor = this.changePlayerOneColor.bind(this);
    this.changePlayerTwoColor = this.changePlayerTwoColor.bind(this);
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
        boardSnapshot[columnIndex][i] = this.state.playerOnesTurn ? 1 : -1;
        break;
      }
    }

    const winner = checkForWinner(boardSnapshot);

    this.setState({
      board: boardSnapshot,
      playerOnesTurn: !this.state.playerOnesTurn,
      winner,
    });
  }

  // Don't reset colors so players get to keep their choices between games.
  resetGame() {
    this.setState({
      board: Array(7).fill(Array(6).fill(null)),
      playerOnesTurn: true,
      winner: false,
    });
  }

  changePlayerOneColor(event) {
    this.setState({
      playerOneColor: event.target.value,
    });

    const root = document.querySelector(":root");
    root.style.setProperty("--player-one-color", event.target.value);
  }

  changePlayerTwoColor(event) {
    this.setState({
      playerTwoColor: event.target.value,
    });

    const root = document.querySelector(":root");
    root.style.setProperty("--player-two-color", event.target.value);
  }

  // TODO: Feels like there could be a better set of components to define this board.
  render() {
    return (
      <div className="board">
        {this.state.winner ? (
          <div className="winner-announce-background" onClick={this.resetGame}>
            <h1 className="winner-announce">
              {this.state.winner === "playerOne"
                ? "Player one wins!"
                : this.state.winner === "playerTwo"
                ? "Player two wins!"
                : null}
            </h1>
            <p>Click anywhere to play again</p>
          </div>
        ) : null}
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

        {!this.state.winner ? (
          <h2 className="turn-label">
            {this.state.playerOnesTurn ? "Player one" : "Player two"}'s turn
          </h2>
        ) : null}

        {/* TODO: Extract color pickers as components */}
        <div>
          <input
            type="color"
            id="player-one-color-picker"
            name="player-one-color-picker"
            value={this.state.playerOneColor}
            onChange={this.changePlayerOneColor}
          ></input>
          <label htmlFor="player-one-color-picker">Player One color</label>
        </div>

        <div>
          <input
            type="color"
            id="player-two-color-picker"
            name="player-two-color-picker"
            value={this.state.playerTwoColor}
            onChange={this.changePlayerTwoColor}
          ></input>
          <label htmlFor="player-two-color-picker">Player Two color</label>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Board className="board" />, document.getElementById("root"));
