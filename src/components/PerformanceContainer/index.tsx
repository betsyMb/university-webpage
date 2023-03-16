// Components
import PerformanceSpinner from "../PerformanceSpinner";

const skills: Array<string> = [
  "performance",
  "Accessibility",
  "Best Practices",
  "SEO",
];

export default function PerformanceContainer() {
  return (
    <div className="d-flex justify-content-evenly ">
      {skills.map((skill) => (
        <div className="d-flex flex-column align-items-center">
          <p>{skill}</p>
          <PerformanceSpinner />
        </div>
      ))}
    </div>
  );
}
