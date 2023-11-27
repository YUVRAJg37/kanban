import { useEffect, useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import "./Header.css";

function Header({
  groupChoices,
  sortChoices,
  OnGroupChoiceChange,
  OnSortChoiceChange,
}) {
  const [display, setDisplay] = useState(false);
  const [selectedGroupOption, setSelectedGroupOption] = useState("");
  const [selectedSortOption, setSelectedSortOption] = useState("");

  const toggleDisplay = () => {
    setDisplay(!display);
  };

  const handleGroupChange = (value) => {
    setSelectedGroupOption(value);
    OnGroupChoiceChange(value);
  };

  const handleSortChange = (value) => {
    setSelectedSortOption(value);
    OnSortChoiceChange(value);
  };

  return (
    <div className="header-container">
      <button className={display ? "click" : ""} onClick={toggleDisplay}>
        Display
      </button>
      {display && (
        <div className="dropdown-container active">
          <Dropdown
            title={"Grouping"}
            choices={groupChoices}
            OnChange={handleGroupChange}
            selectedOption={selectedGroupOption}
          />
          <Dropdown
            title={"Sorting"}
            choices={sortChoices}
            OnChange={handleSortChange}
            selectedOption={selectedSortOption}
          />
        </div>
      )}
    </div>
  );
}

export default Header;
