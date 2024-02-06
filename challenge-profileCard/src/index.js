import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
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
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <div>
      <img className="avatar" src="avater/ocean.jpg" alt="ocean" />
    </div>
  );
}

function Intro() {
  return (
    <div>
      <h2>Kenshin Himura</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut repellat
        consequuntur, laborum sapiente dolor non commodi ipsum sequi totam dicta
        explicabo!
      </p>
    </div>
  );
}

function SkillList() {
  const skillSets = skills;
  // const skillSets = [];
  const skillSetsLength = skillSets.length;
  return (
    <div className="skill-list">
      {skillSetsLength > 0
        ? skillSets.map((skill) => <Skill skillObj={skill} />)
        : "You should have skill."}
    </div>
  );
}
// <Skill skill="Html+CSS ❤" color="skyblue" />
// <Skill skill="Javascript ❤" color="orangered" />
// <Skill skill="Web Design ❤" color="yellow" />
// <Skill skill="Git and Github ❤" color="brown" />
// <Skill skill="React ❤" color="cyan" />
// <Skill skill="Svelte ❤" color="orange" />

function Skill({ skillObj }) {
  return (
    <div className="skill" style={{ backgroundColor: skillObj.color }}>
      <li>
        {skillObj.skill}{" "}
        {skillObj.level === "beginner"
          ? "👶"
          : skillObj.level === "intermediate"
          ? "👍"
          : "💪"}
      </li>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
