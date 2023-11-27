import "./App.css";
import { useState } from "react";
import Header from "./components/Header/Header";
import TaskFetcher from "./components/TaskFetcher/TaskFetcher";

function App() {
  const [groupChoice, setGroupChoice] = useState("priority");
  const [sortChoice, setSortChoice] = useState("title");
  const groupChoices = ["priority", "users", "status"];
  const sortChoices = ["title", "priority"];

  function OnGroupChoiceChange(choice) {
    setGroupChoice(choice);
  }

  function OnSortChoiceChange(choice) {
    setSortChoice(choice);
  }

  return (
    <div>
      <Header
        groupChoices={groupChoices}
        sortChoices={sortChoices}
        OnGroupChoiceChange={OnGroupChoiceChange}
        OnSortChoiceChange={OnSortChoiceChange}
      />
      <TaskFetcher groupChoice={groupChoice} sortChoice={sortChoice} />
    </div>
  );
}

export default App;
