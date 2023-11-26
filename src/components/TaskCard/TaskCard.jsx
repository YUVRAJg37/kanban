import "./TaskCard.css";

function TaskCard({ title, description }) {
  return (
    <div className="card">
      <div className="content">
        <h5 style={{ color: "grey" }}>{title}</h5>
        <h5>{description}</h5>
      </div>
      <div className="footer">
        <div>...</div>
        <div className="tag">Tag</div>
      </div>
    </div>
  );
}

export default TaskCard;
