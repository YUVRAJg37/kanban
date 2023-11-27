import userImage from "./../../static/userImage.jpg";
import wifi from "./../../static/wifi.png";
import green from "./../../static/green.png";

import "./CardGroupHeader.css";

function CardGroupHeader({ title, groupChoice }) {
  const imageUrl =
    groupChoice === "users"
      ? userImage
      : groupChoice === "priority"
      ? wifi
      : green;

  return (
    <div className="container">
      <div className="logo">
        <img
          src={imageUrl}
          alt="User Profile"
          style={{ width: "25px", height: "25px", borderRadius: "50%" }}
        />
      </div>
      <div className="title">
        <h5>{title}</h5>
      </div>
      <div className="add">+</div>
      <div className="more">...</div>
    </div>
  );
}

export default CardGroupHeader;
