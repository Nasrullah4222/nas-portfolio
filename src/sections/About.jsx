import { motion } from "motion/react";
import CopyEmailButton from "../components/CopyEmailButton.jsx";
import { CONTACT_EMAIL, mySocials } from "../constants";

const educationItems = [
  {
    institution: "East West University, Bangladesh",
    logo: "/assets/socials/EWU.png",
    program: "B.Sc. in Computer Science and Engineering",
    date: "Graduation: December 2026",
    result: "CGPA: 3.10/4.00",
  },
  {
    institution: "Ideal College, Dhanmondi",
    logo: "/assets/socials/Ideal College.png",
    program: "Higher Secondary Certificate (HSC), Subject Field: Science",
    date: "2021",
    result: "GPA: 5.00/5.00",
  },
];

const channelItems = [
  ...["Github", "Linkedin", "WhatsApp"].map((name) =>
    mySocials.find((social) => social.name === name),
  ),
  { name: "Email", href: `mailto:${CONTACT_EMAIL}`, icon: "/assets/copy.svg" },
];

const About = () => {
  return (
    <section id="about" className="section-spacing c-space">
      <div className="about-columns">
        <div className="about-column">
          <div className="about-intro">
            <h2>About Me</h2>
            <div className="about-copy">
              <p>Greetings!</p>
              <p>
                I am a graduating Computer Science and Engineering student at
                East West University, with an academic specialisation in
                Intelligent Systems and Machine Learning.
              </p>
              <p>
                Currently, I am focused on strengthening my expertise in Backend
                Engineering, System Design, and DevOps, while maintaining the
                foundational Frontend skills necessary to contribute across the
                development stack.
              </p>
              <p>
                Looking ahead, I aspire to pursue graduate studies in Systems
                and Control Engineering, Perception Engineering, or Computer
                Vision and Intelligent Systems. For now, my priority is to apply
                my skills, expand my engineering experience, and contribute
                meaningfully to professional teams.
              </p>
              <p className="font-bold text-orange-700">
                I believe everything begins with Curiosity, grows through
                Adversity, and ultimately leads to Innovation.
              </p>
            </div>
          </div>
        </div>

        <div className="about-right-column">
          <div className="education-section">
            <div className="education-heading">
              <p className="about-label">Academic journey</p>
              <h2>Education</h2>
            </div>
            <div className="education-timeline">
              {educationItems.map(
                ({ institution, logo, program, date, result }, index) => (
                  <motion.article
                    key={institution}
                    className="group education-item"
                    initial="rest"
                    whileHover="hover"
                    variants={{ rest: {}, hover: {} }}
                  >
                    <span className="education-dot" />
                    <motion.img
                      src={logo}
                      alt={`${institution} logo`}
                      className="education-logo"
                      variants={{
                        rest: {
                          scale: 1,
                          filter: "drop-shadow(0 0 0 rgba(204, 96, 51, 0))",
                        },
                        hover: {
                          scale: 1.06,
                          filter:
                            "drop-shadow(0 0 14px rgba(204, 96, 51, 0.8))",
                        },
                      }}
                    />
                    <div className="education-content">
                      <div className="education-title-row">
                        <motion.h3
                          className="education-title"
                          variants={{
                            rest: { color: "#ffffff" },
                            hover: { color: "#cc6033" },
                          }}
                        >
                          {institution}
                        </motion.h3>
                        <p className="education-date">{date}</p>
                      </div>
                      <p className="education-program">{program}</p>
                      <p className="education-result">{result}</p>
                    </div>
                    <span className="education-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </motion.article>
                ),
              )}
            </div>
          </div>

          <div className="about-channels">
            <p className="about-label">Direct channels</p>
            <div className="channel-grid">
              {channelItems.map(({ name, href, icon }) =>
                name === "Email" ? (
                  <CopyEmailButton
                    key={name}
                    className="direct-channel direct-channel-button"
                    channelStyle
                  />
                ) : (
                  <motion.a
                    key={name}
                    href={href || "#contact"}
                    target={href ? "_blank" : undefined}
                    rel={href ? "noreferrer" : undefined}
                    className="direct-channel"
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <img src={icon} alt="" />
                    <span>{name}</span>
                    <img
                      src="/assets/arrow-up.svg"
                      alt=""
                      className="channel-arrow"
                    />
                  </motion.a>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
