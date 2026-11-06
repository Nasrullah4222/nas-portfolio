import { Frameworks } from "../components/Frameworks";

const skillGroups = [
  {
    name: "Languages",
    skills: [
      ["JavaScript", "/assets/logos/javascript.svg"],
      ["Python", "/assets/logos/python-icon.svg"],
      ["C++", "/assets/logos/cpp-icon.svg"],
      ["Go", "/assets/logos/golang-icon.svg"],
    ],
  },
  {
    name: "Frameworks",
    skills: [
      ["Node.js", "/assets/logos/nodejs-icon.svg"],
      ["Express.js", "/assets/logos/expressjs-icon.svg"],
      ["React", "/assets/logos/react.svg"],
      ["Gin", "/assets/logos/Gin--Streamline-Svg-Logos.svg"],
    ],
  },
  {
    name: "Databases",
    skills: [
      ["MySQL", "/assets/logos/mysql-icon.svg"],
      ["PostgreSQL", "/assets/logos/postgresql-icon.svg"],
      ["MongoDB", "/assets/logos/mongodb.svg"],
    ],
  },
  {
    name: "DevOps",
    skills: [
      ["Docker", "/assets/logos/docker-icon.svg"],
      ["Kubernetes", "/assets/logos/kubernetes-icon.svg"],
      ["Nginx", "/assets/logos/nginx-icon.svg"],
      ["Git", "/assets/logos/git.svg"],
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="c-space compact-section-spacing"
      aria-labelledby="skills-title"
    >
      <div className="skills-layout">
        <div className="skills-content">
          <p className="section-eyebrow">Toolbox</p>
          <h2 id="skills-title">What I build with</h2>
          <div className="skills-groups">
            {skillGroups.map(({ name, skills }) => (
              <div className="skills-group" key={name}>
                <p className="skills-group-label">{name}</p>
                <div className="skills-group-items">
                  {skills.map(([skill, icon]) => (
                    <div className="skill-chip" key={skill}>
                      <img src={icon} alt="" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid-default-color grid-5 skills-orbit-card">
          <div className="skills-orbit">
            <Frameworks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
