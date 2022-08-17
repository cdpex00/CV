import React from "react";
import { useSelector } from "react-redux";
import './About.scss'

const About = () => {
  const aboutMe = useSelector(state => state.cv.hero.aboutMe);

  return (
    <div className="about">
      <h3 className="about">SOBRE MÍ</h3>
      <p className="about">{aboutMe}</p>
    </div>
  );
};

export default About;
