import "./CardGroupHeader.css";

function CardGroupHeader({ title }) {
  return (
    <div className="container">
      <div className="logo">O</div>
      <div className="title">{title}</div>
      <div className="add">+</div>
      <div className="more">...</div>
    </div>
  );
}

export default CardGroupHeader;
