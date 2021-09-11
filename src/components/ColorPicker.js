import React from "react";
import PropTypes from "prop-types";

function ColorPicker({ name, value, onChange, label }) {
  return (
    <div className="color-picker">
      <input
        type="color"
        className="color-picker-input"
        id={name}
        name={name}
        value={value}
        onChange={onChange}
      ></input>
      <label htmlFor={name}>{label}</label>
    </div>
  );
}

ColorPicker.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  label: PropTypes.string,
};

export default ColorPicker;
