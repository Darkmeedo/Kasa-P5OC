import React from 'react';
import "./Flat.sass";
import { NavLink } from "react-router-dom";

function Flat(props) {
  console.log("Flat ID:", props.id);  

  return (
    <div className="Flat">
      
      <NavLink to={`/flat/${props.id}`}>
        <img src={props.imageUrl} alt="flat" />
        <div className="Flat__Name">{props.title}</div>
      </NavLink>
    </div>
  );
}

export default Flat;
