import React from "react";

export default function List(props) {
  return (
    <div className="person">
      <img src={props.src} alt="" />
      <div>
        <h4>{props.name}</h4>
        <p>{props.age}</p>
      </div>
    </div>
  );
}
