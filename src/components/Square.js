import React from "react";
import PropTypes from "prop-types";

function Square({ colorClass }) {
  // TODO: Make the merge of classNames nicer, see egghead.io course.
  return <div className={`square ${colorClass || ""}`}></div>;
}

Square.propTypes = {
  colorClass: PropTypes.string,
};

export default Square;
