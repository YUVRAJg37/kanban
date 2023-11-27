import React from "react";
import "./TaskCard.css";
import userImage from "./../../static/userImage.jpg";

function TaskCard({ title, description, groupChoice, priorityColor }) {
  const cardStyle = {
    border: `2px solid ${priorityColor}`, // Set the border color to the priority color
    borderRadius: "8px", // Adjust border-radius as needed
    borderImage: `#priorityColor`, // Set a linear gradient for the background
    padding: "10px", // Adjust padding as needed
  };

  return (
    <div className="card" style={cardStyle}>
      <div>
        <div className="content">
          <h5 style={{ color: "grey" }}>{title}</h5>
          <h5>{description}</h5>
        </div>
        <div className="footer">
          <div>...</div>
          <div className="tag">
            <h5> Feature Request</h5>
          </div>
        </div>
      </div>
      {groupChoice !== "users" ? (
        <div className="image">
          <img
            src={userImage}
            alt="User Profile"
            style={{ width: "25px", height: "25px", borderRadius: "50%" }}
          />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default TaskCard;
