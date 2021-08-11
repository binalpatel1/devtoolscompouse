import React from "react";
import Avtar from "./Avtar.jsx";
import Detail from "./Detail.jsx";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <Avtar img={props.img} />
      </div>
      <div>
        <div className="bottom">
          <Detail detailinfo={props.tel} />

          <Detail detailinfo={props.email} />
        </div>
      </div>
    </div>
  );
}

export default Card;
