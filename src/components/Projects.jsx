import React from "react";
import ProjectItme from "./ProjectItme";
import sport from "../assets/E-sport.png";
import Aurassrl from "../assets/Aurassrl2.png";
import MontyHouseAgentcy from "../assets/MontyHouseAgency.png";
import ProjectSocial from "../assets/ProjectSocial.png";
import TaskManager from "../assets/TaskManager.png";
import QuizGame from "../assets/Quiz-Game.png";
const SiteData = [
  {
    id: 0,
    name: "e-sport",
    site: "https://vaidanicu.github.io/e-sport.github.io/"
  },
  {
    id: 1,
    name: "e-sport",
    site: "https://vaidanicu.github.io/e-sport.github.io/"
  },
  {
    id: 2,
    name: "e-sport",
    site: "https://vaidanicu.github.io/e-sport.github.io/"
  },
  {
    id: 3,
    name: "e-sport",
    site: "https://vaidanicu.github.io/e-sport.github.io/"
  },
  {
    id: 4,
    name: "e-sport",
    site: "https://vaidanicu.github.io/e-sport.github.io/"
  },
  {
    id: 5,
    name: "Aurassrl.com",
    site: "https://aurassrl.com/"
  }
];

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 pt-16">
      <h1 className="text-4xl pb-5 font-bold text-center text-[#001b5e]">Projects</h1>

      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItme img={sport} title="Sport" />
        <ProjectItme img={MontyHouseAgentcy} title="MontyHouseAgentcy" />
        <ProjectItme img={ProjectSocial} title="ProjectSocial" />
        <ProjectItme img={TaskManager} title="TaskManager" />
        <ProjectItme img={Aurassrl} title="Aurassrl.com" />
        <ProjectItme img={QuizGame} title="Quiz-Game" />
      </div>
    </div>
  );
};

export default Projects;
