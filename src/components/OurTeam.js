import React, { useState } from "react";
import "../CSS/OurTeam.css";

import Arnado from "../assets/arnado-id.png";
import Palicte from "../assets/palicte-id.png";
import Cabije from "../assets/cabije-id.png";
import Ogsoc from "../assets/ogsoc-id.png";
import HCDCBG from "../assets/HCDCBG.png";

const OurTeam = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const teamMembers = [
    {
      name: "Arnado",
      position: "Developer",
      contribution: "Lead Frontend",
      img: Arnado,
    },
    {
      name: "Palicte",
      position: "Designer",
      contribution: "UI/UX",
      img: Palicte,
    },
    {
      name: "Cabije",
      position: "Backend Developer",
      contribution: "API Integration",
      img: Cabije,
    },
    {
      name: "Ogsoc",
      position: "Project Manager",
      contribution: "Team Coordination",
      img: Ogsoc,
    },
  ];

  const handleCardChange = (direction) => {
    if (direction === "next") {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % teamMembers.length);
    } else if (direction === "prev") {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + teamMembers.length) % teamMembers.length
      );
    }
  };

  return (
    <div className="our-team">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${HCDCBG})` }}
      ></div>
      <h1>MEET THE TEAM</h1>
      <h2 className="team-title">THE ARKITECHS</h2>
      <div className="cards-container">
        {teamMembers.map((member, index) => {
          const isSelected = index === currentIndex;

          return (
            <div key={index} className={`card ${isSelected ? "selected" : ""}`}>
              <img className="card-img" src={member.img} alt={member.name} />
              <div className="card-info">
                <h3>{member.name}</h3>
                <p>Position: {member.position}</p>
                <p>Contribution: {member.contribution}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="buttons-container">
        <button onClick={() => handleCardChange("prev")}>Previous</button>
        <button onClick={() => handleCardChange("next")}>Next</button>
      </div>
    </div>
  );
};

export default OurTeam;
