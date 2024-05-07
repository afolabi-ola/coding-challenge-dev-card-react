import React from "react";

function SkillList(props) {
  const background = {
    backgroundColor: props.background,
  };
  return (
    <ul className="skill-list">
      <li className="skill" style={background}>
        {props.skill}
      </li>
    </ul>
  );
}
export default SkillList;
