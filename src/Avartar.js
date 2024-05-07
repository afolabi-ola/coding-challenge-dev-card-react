import React from "react";

function Avartar(props) {
  return (
    <div className="avartar-cont">
      <img src={props.image} alt={props.avatar} className="avartar" />
    </div>
  );
}

export default Avartar;
