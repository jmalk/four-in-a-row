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

// TODO Destructure props.
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

Column.propTypes = {
  onClick: PropTypes.func,
  squares: PropTypes.array,
};

export default Column;
