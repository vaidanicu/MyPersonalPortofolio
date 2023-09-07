import React from "react";
import { FaHtml5, FaCss3, FaJava, FaReact, FaGithub } from "react-icons/fa";

const Skills = () => {
  return (
    <div id="skills" className="max-w-[1040px] m-auto md:pl-20 p-4 pt-16">
      <h1 className="text-4xl  pb-5 font-bold text-center text-[#001b5e]">
        Skills
      </h1>

      <div className="grid sm:grid-cols-4 gap-12 ">
        <div>
          <FaHtml5 size={80} color="blue" />
          <h1>HTML</h1>
        </div>

        <div>
          <FaCss3 size={80} color="orange" />
          <h1>CSS</h1>
        </div>

        <div>
          <FaJava size={80} color="red" />
          <h1>JavaScript</h1>
        </div>

        <div>
          <FaReact size={80} color="blue" />
          <h1>ReactJS</h1>
        </div>
      </div>
    </div>
  );
};

export default Skills;
