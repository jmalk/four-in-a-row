import React from "react";

// TODO: PropTypes?

function ColorPicker({ name, value, onChange, label }) {
  return (
    <div>
      <input
        type="color"
        id={name}
        name={name}
        value={value}
        onChange={onChange}
      ></input>
      <label htmlFor={name}>{label}</label>
    </div>
  );
}

export default ColorPicker;
