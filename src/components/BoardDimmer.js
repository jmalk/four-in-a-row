import React from "react";
import PropTypes from "prop-types";

function BoardDimmer({ winner, clickHandler }) {
  debugger;
  return (
    <div
      className={`winner-announce-background${!winner ? " hidden" : ""}`}
      onClick={clickHandler}
    >
      <h1 className="winner-announce">
        {winner === "playerOne"
          ? "Player one wins!"
          : winner === "playerTwo"
          ? "Player two wins!"
          : null}
      </h1>
      <p>Click anywhere to play again</p>
    </div>
  );
}

BoardDimmer.propTypes = {
  winner: PropTypes.string,
  clickHandler: PropTypes.func,
};

export default BoardDimmer;
