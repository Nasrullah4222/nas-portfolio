import { motion, useReducedMotion } from "motion/react";

const statistics = [
  ["05+", "Projects Built", "Web, Backend & AI/ML Projects"],
  ["02+", "AI/ML Models", "Preprocessing, Fine-tuning & Comparative Evaluation"],
  ["80%", "Engineering", "DSA, Systems & Hardware"],
  ["100%", "Suffering", "Obstacles, Obstacles and Obstacles!"],
];

const Statistics = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="statistics"
      className="statistics-section c-space"
      aria-label="Achievements"
    >
      <div className="statistics-grid">
        {statistics.map(([value, label, description], index) => (
          <motion.article
            className="statistic"
            key={label}
            initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.45, delay: shouldReduceMotion ? 0 : index * 0.08 }}
          >
            <strong>{value}</strong>
            <h2>{label}</h2>
            <p>{description}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Statistics;
