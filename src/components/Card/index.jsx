import React from "react";
// import { useNavigate } from "react-router-dom";

// My css
import "./styles.css";

const Card = (props) => {
  // const navigate = useNavigate();

  return (
    <div className="card-outer-div" onClick={props.onClick}>
      <p className="card-text">{props.text}</p>
      {/* {props.children} */}
    </div>
  );
};

export default Card;
