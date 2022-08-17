import React from "react";
import "./EducationAndExperience.scss";

const EducationAndExperienceEl = ({ edAndEx }) => {
  return (
    <div className="educationAndExperience__container">
      <div className="educationAndExperience__container--date">
        <p>{edAndEx.date}</p>
      </div>
      <div className="educationAndExperience__container--text">
        <p className="educationAndExperience__container--name">
          {edAndEx.name}
        </p>
        <p>{edAndEx.where}</p>
        {edAndEx.description && (
          <p className="educationAndExperience__container--desc">
            {edAndEx.description}
          </p>
        )}{" "}
      </div>
    </div>
  );
};

export default EducationAndExperienceEl;
