import "./Dropdown.css";
import React, { useState } from "react";

const Dropdown = ({ title, choices, OnChange, selectedOption }) => {
  const [selOption, setSelOption] = useState(selectedOption);
  const options = choices;
  const handleOptionChange = (event) => {
    setSelOption(event.target.value);
    OnChange(event.target.value);
  };

  return (
    <div>
      <div className="dropdown-title">
        <label>{title}</label>
      </div>
      <div className="dropdown-options">
        <select id="dropdown" value={selOption} onChange={handleOptionChange}>
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Dropdown;
