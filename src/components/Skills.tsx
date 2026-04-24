import Languages from "./Languages";
import TechnicalSkills from "./TechnicalSkills";
import SoftSkills from "./SoftSkills";

function Skills() {
  return (
    <>
      <Languages />
      <div className="skills-container">
        <TechnicalSkills />
        <SoftSkills />
      </div>
    </>
  );
}

export default Skills;