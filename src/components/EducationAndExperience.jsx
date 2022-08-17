import React from "react";
import EducationAndExperienceEl from "./EducationAndExperienceEl";
import "./EducationAndExperience.scss";
import { useSelector } from "react-redux";

const EducationAndExperience = () => {
  const sectionInfo = useSelector(state => state.cv.sectionInfo);

  return (
    <div className="educationAndExperience">
      {sectionInfo?.map((ed, i) => {
        return <EducationAndExperienceEl edAndEx={ed} key={i} />;
      })}
    </div>
  );
};

export default EducationAndExperience;
