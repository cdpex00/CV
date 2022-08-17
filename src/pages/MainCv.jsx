import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import { useEffect } from "react";
import More from "../components/More";
import About from "../components/About";
import EducationAndExperience from "../components/EducationAndExperience";

const MainCv = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Hero />
      <About />
      <Navbar />
      <EducationAndExperience />
      <More />
    </div>
  );
};

export default MainCv;
