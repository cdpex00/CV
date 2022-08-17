
import { useSelector } from "react-redux";
import "./More.scss";

const More = () => {
  const { skills, languages } = useSelector(state => state.cv);
  
  return (
    <div className="more">
      <div className="more__lang">
        <h3>Idiomas</h3>
        <div>
          {languages.map((language, i) => {
            return <p key={i}>{language}</p>;
          })}
        </div>
      </div>
      <div className="more__skills">
        <h3>Tecnologías</h3>
        <div className="more__skills--tags">
          {skills.map((skill, i) => {
            return <p key={i}>{skill}</p>;
          })}
        </div>
        
      </div>
    </div>
  );
};

export default More;
