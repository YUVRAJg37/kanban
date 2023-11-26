import CardGroupHeader from "../CardGroupHeader/CardGroupHeader";
import TaskCard from "../TaskCard/TaskCard";
import "./CardGroup.css";

function CardGroup({ tickets, userId, title }) {
  return (
    <div className="myDiv">
      <CardGroupHeader title={title} />
      {tickets.map((item, index) => (
        <TaskCard key={index} title={item.id} description={item.title} />
      ))}
    </div>
  );
}

export default CardGroup;
