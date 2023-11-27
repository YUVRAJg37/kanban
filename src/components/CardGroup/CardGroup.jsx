import CardGroupHeader from "../CardGroupHeader/CardGroupHeader";
import TaskCard from "../TaskCard/TaskCard";
import "./CardGroup.css";

const priorityColorMap = {
  "No Priority": "#808080", // Gray
  Low: "#34eb40", // Green
  Medium: "#ffcc00", // Yellow
  High: "#ff7e39", // Orange
  Urgent: "#ff3737", // Red
};

function CardGroup({ tickets, userId, title, groupChoice }) {
  const priorityColor =
    groupChoice === "priority" ? priorityColorMap[title] : "white";
  return (
    <div className="myDiv">
      <CardGroupHeader title={title} groupChoice={groupChoice} />
      {tickets.map((item, index) => (
        <TaskCard
          key={index}
          title={item.id}
          description={item.title}
          groupChoice={groupChoice}
          priorityColor={priorityColor}
        />
      ))}
    </div>
  );
}

export default CardGroup;
