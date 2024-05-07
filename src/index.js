import React from "react";
import ReactDom from "react-dom/client";
import "./index.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "Javascript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
  },
];

function App() {
  return (
    <div className="overall">
      <div className="card">
        <Avartar image="afolabi.jpg" />
        <div className="data">
          <Intro text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus excepturi fugit atque recusandae neque ad ipsa labore tempora delectus, accusantium possimus, sequi, deleniti eius dolor. Aut reprehenderit vel consequatur soluta." />
        </div>
        <SkillList />
      </div>

      <div className="card">
        <Avartar image="jonas.png" />
        <div className="data">
          <Intro text="Full-stack web developer and teacher at Udemy. When not coding or preparing a course, I like to play board games, to cook (and eat), or to just enjoy Portuguese sun at sun at the beach. " />
        </div>
        <SkillList />
      </div>
    </div>
  );
}

function Avartar(props) {
  return (
    <div>
      <img src={props.image} alt={props.avatar} className="avartar" />
    </div>
  );
}

function Intro(props) {
  return <div>{props.text}</div>;
}

function SkillList() {
  const skillArray = skills;

  return (
    <ul className="skill-list">
      {skillArray.map((skill) => (
        <Skill skillObj={skill} />
      ))}
    </ul>
  );
}
function Skill({ skillObj }) {
  const background = {
    backgroundColor: skillObj.color,
  };
  return (
    <li className="skill" style={background}>
      <span>{skillObj.skill}</span>
      <span>{`${skillObj.level === "advanced" ? "💪" : ""}`}</span>
      <span>{`${skillObj.level === "intermediate" ? "👍" : ""}`}</span>
      <span>{`${skillObj.level === "beginner" ? "👶" : ""}`}</span>
    </li>
  );
}

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<App />);
