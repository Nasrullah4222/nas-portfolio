import { motion, useReducedMotion } from "motion/react";
import { CALENDLY_URL, RESUME_URL } from "../constants";

const reveal = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
};

function HeroPhoto() {
  return (
    <figure className="hero-animation">
      <img
        src="/assets/WhatsApp Image 2026-11-04 at 12.17.00 PM.jpeg"
        alt="Nasrullah Kaisher Sijan"
      />
    </figure>
  );
}

const Hero = () => {
  const shouldReduceMotion = useReducedMotion();
  const animationProps = shouldReduceMotion
    ? {}
    : { variants: reveal, initial: "hidden", animate: "visible" };

  return (
    <section id="home" className="hero-section c-space">
      <div className="hero-content">
        <motion.div
          className="hero-heading"
          {...animationProps}
          transition={{ duration: 0.55 }}
        >
          <p className="text-4xl font-serif">Hi, I am</p>
          <strong>Nasrullah Kaisher Sijan</strong>
          <i className="hero-heading-line" aria-hidden="true" />
        </motion.div>

        <div className="hero-visual">
          <HeroPhoto />
        </div>

        <motion.div
          className="hero-copy"
          {...animationProps}
          transition={{ duration: 0.55, delay: shouldReduceMotion ? 0 : 0.12 }}
        >
          <p>
            A passionate software engineer focused on building intelligent,
            scalable, and meaningful digital experiences. I work across backend
            development, computer vision, and AI/ML, turning curiosity into
            experiments and experiments into engineered solutions.
          </p>
          <div className="hero-actions">
            <a
              href={RESUME_URL}
              download="Nasrullah_Sijan_CV.pdf"
              className="hero-button hero-button-primary"
            >
              Resume
            </a>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noreferrer"
              className="hero-button hero-button-secondary"
            >
              Let&apos;s Meet
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
