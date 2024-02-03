import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
            for each web dev skill that you have,
            customized with props */}
        {/* <SkillList skill="Html+CSS ❤" />
        <SkillList skill="Javascript ❤" />
        <SkillList skill="Web Design ❤" />
        <SkillList skill="Git and Github ❤" />
        <SkillList skill="React ❤" />
        <SkillList skill="Svelte ❤" /> */}
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
        explicabo! Provident quidem ea accusantium tempore voluptate aliquam
        minus corrupti.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="Html+CSS ❤" color="skyblue"/>
      <Skill skill="Javascript ❤" color="orangered"/>
      <Skill skill="Web Design ❤" color="yellow"/>
      <Skill skill="Git and Github ❤" color="brown"/>
      <Skill skill="React ❤" color="cyan"/>
      <Skill skill="Svelte ❤" color="orange"/>
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{backgroundColor:props.color}}>
      <li>{props.skill}</li>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
