import { skills } from "@/data";
import { ChevronDown, CodeXml } from "lucide-react";

const mobileSkills = [
  { name: "Android Development", detail: "Build mobile interfaces for Android." },
  { name: "Kotlin", detail: "Write application code for Android and shared mobile modules." },
  { name: "Jetpack Compose", detail: "Build Android screens with declarative, reusable UI." },
  { name: "Kotlin Multiplatform", detail: "Share code across Android and iOS." },
];

const Skills = () => {
  return (
    <section id="skills" className="portfolio-section stack-section">
      <div className="portfolio-shell stack-layout">
        <div>
          <p className="portfolio-kicker">02 / Skills</p>
          <h2 className="portfolio-heading">My <em>toolkit.</em></h2>
          <p className="stack-intro">Android UI, shared mobile code, and a background in frontend web development.</p>
          <div className="stack-art" aria-hidden="true">
            <div /><div /><div /><div><CodeXml size={36} strokeWidth={2.5} /></div>
          </div>
        </div>
        <div className="stack-content">
          <h3 className="portfolio-kicker">Mobile development</h3>
          <div className="skill-rows">
            {mobileSkills.map((skill, index) => (
              <details key={skill.name} name="mobile-skills" open={index === 0}>
                <summary>
                  <span className="skill-index">0{index + 1}</span>
                  {skill.name}
                  <ChevronDown className="skill-toggle" size={17} aria-hidden="true" />
                </summary>
                <p>{skill.detail}</p>
              </details>
            ))}
          </div>
          <details className="web-skills">
            <summary>
              Frontend development
              <ChevronDown className="skill-toggle" size={17} aria-hidden="true" />
            </summary>
            <ul>
              {skills.map((skill) => <li key={skill}>{skill}</li>)}
            </ul>
          </details>
        </div>
      </div>
    </section>
  );
};

export default Skills;
