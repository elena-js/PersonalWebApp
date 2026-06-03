import Languages from "./Languages";
import TechnicalSkills from "./TechnicalSkills";
import SoftSkills from "./SoftSkills";
import "../styles/Skills.css";

function Skills() {
  return (
    <div className="skills">
      <Languages />
      <div className="skills-container">
        <TechnicalSkills />
        <SoftSkills />
      </div>
    </div>
  );
}

export default Skills;