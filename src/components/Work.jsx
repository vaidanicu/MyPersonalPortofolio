import React from "react";
import WorkItem from "./WorkItem";

const data = [
  {
    year: 2015,
    title: "Bisenthal Transport (Deutchland)",
    duration: "1 years",
    details: "Lkw Fahrer",
  },
  {
    year: 2016,
    title: "Abfallwirtschaft und Stadtreinigung Freiburg GmbH",
    duration: "5 years",
    details: "Kehrmaschine fahrer",
  },

  {
    year: 2021,
    title: "NAVIOSPED Company SRL",
    duration: "",
    details: "Sofer",
  },
];

const Work = () => {
  return (
    <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl  pb-5 font-bold text-center text-[#001b5e]">
        Work
      </h1>
      {data.map((item, idx) => (
        <WorkItem
          key={idx}
          year={item.year}
          title={item.title}
          duration={item.duration}
          details={item.details}
        />
      ))}
    </div>
  );
};

export default Work;
