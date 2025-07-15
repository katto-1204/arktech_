import React from "react";
import "../CSS/Carousel.css";

const Carousel = () => {
  const logos = [
    "https://upload.wikimedia.org/wikipedia/en/a/a2/FIRST_Logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/BAE_Systems_logo.svg/2560px-BAE_Systems_logo.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/1/1d/PTC_logo.svg",
    "https://media.licdn.com/dms/image/C4E0BAQGY9Dev4YNovQ/company-logo_200_200/0/1630578110063/rev_robotics_logo?e=2147483647&v=beta&t=ocL5BXkuVOSReZHAXjGXnksXBt9BkGbT-SvNrBqnjqw",
  ];

  return (
    <div className="carousel">
      {logos.concat(logos).map((logo, index) => (
        <img
          key={index}
          className="logo"
          src={logo}
          alt={`Logo ${index + 1}`}
        />
      ))}
    </div>
  );
};

export default Carousel;
