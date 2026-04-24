import University from "./University";
import Courses from "./Courses";
import "../styles/Education.css";

function Education() {
  return (
    <div className="education">
      <University/>
      <Courses/>
    </div>
  );
}

export default Education;