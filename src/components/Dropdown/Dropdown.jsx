import React, { useState } from "react";

const Dropdown = ({ choices, OnChange }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const options = choices;
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    OnChange(event.target.value);
  };

  return (
    <div>
      <select
        id="dropdown"
        value={selectedOption}
        onChange={handleOptionChange}
      >
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
