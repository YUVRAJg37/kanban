import Dropdown from "../Dropdown/Dropdown";
import "./Header.css";

function Header({
  groupChoices,
  sortChoices,
  OnGroupChoiceChange,
  OnSortChoiceChange,
}) {
  return (
    <div className="header-container">
      <Dropdown choices={groupChoices} OnChange={OnGroupChoiceChange} />
      <Dropdown choices={sortChoices} OnChange={OnSortChoiceChange} />
    </div>
  );
}

export default Header;
