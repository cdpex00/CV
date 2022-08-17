import React from "react";
import { useSelector } from "react-redux";
import "./Hero.scss";

const Hero = () => {
  const { hero } = useSelector((state) => state.cv);
  
  return (
    <><div className="hero">
    <h1>
        {hero.name} {hero.lastName}
    </h1>
      <img className="hero-jj" src={hero.image} alt="yo" />
    </div>
      <div className="hero-boxes">
        <a title="Linkedin" href="www.linkedin.com/in/chris-depedro">
          <img src="./images/link.png" alt="Linkedin" target="_blank" />
        </a>
        <a title="Github" href="https://github.com/cdpex00" >
          <img src="./images/git.png" alt="Github" target="_blank" />
        </a>
        <a title="Github" href={"mailto:" + hero.email}>
          <img src="./images/gmail.png" alt="Mail" target="_blank" />
        </a>
          <a title="Telefono" href="tel:+34608402706">
          <img src="./images/telef.png" alt="Telef" target="_blank" />
        </a>
      </div></>
    
  );
};

export default Hero;
