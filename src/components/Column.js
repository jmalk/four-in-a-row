import React from "react";
import PropTypes from "prop-types";
import Square from "./Square";

function getColor(number) {
  if (number === 1) {
    return "player-one";
  } else if (number === -1) {
    return "player-two";
  } else {
    return null;
  }
}

function Column({ onClick, squares }) {
  return (
    <div className="column" onClick={onClick}>
      <Square colorClass={getColor(squares[5])} />
      <Square colorClass={getColor(squares[4])} />
      <Square colorClass={getColor(squares[3])} />
      <Square colorClass={getColor(squares[2])} />
      <Square colorClass={getColor(squares[1])} />
      <Square colorClass={getColor(squares[0])} />
    </div>
  );
}

Column.propTypes = {
  onClick: PropTypes.func,
  squares: PropTypes.array,
};

export default Column;
