import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const certificates = [
  {
    provider: "IARCO",
    year: "2025",
    title: "International Academic Research Competition",
    description:
      "Qualified for participation in the Senior Category of the International Academic Research Competition 2025 by achieving an 80%+ score.",
    image: "/assets/certificates/International Academic Research Competition.jpg",
  },
  {
    provider: "Climate Science Olympiad",
    year: "2024",
    title: "Climate Science Olympiad 2024",
    description:
      "Became Semi Finalist at Climate Science Olympiad 2024.",
    image:
      "/assets/certificates/Semi Finalist at ClimateScience Olympiad 24.jpg",
  },
  {
    provider: "National Robo Fest",
    year: "2026",
    title: "Project Showcase Segment",
    description:
      "Participated in Project Showcase Segment in National Robofest at EWU.",
    image: "/assets/certificates/Project Showcase at Robofest.jpg",
  },
];

const Certificates = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  useEffect(() => {
    if (!selectedCertificate) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedCertificate(null);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedCertificate]);

  return (
    <section id="certificates" className="certificates-section c-space">
      <div className="certificates-heading">
        <div>
          <p className="section-eyebrow">Credentials</p>
          <h2 className="text-heading">Certificates and Achivements</h2>
        </div>
        <p className="certificates-heading-copy">
          A selection of academic and technical achievements.
        </p>
      </div>

      <div className="certificate-grid">
        {certificates.map((certificate, index) => (
          <motion.button
            type="button"
            key={certificate.provider}
            className="certificate-card"
            onClick={() => setSelectedCertificate(certificate)}
            whileHover={{ y: -6 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.08, duration: 0.35 }}
          >
            <div className="certificate-preview">
              <img src={certificate.image} alt="" />
              <span className="certificate-open">View certificate</span>
            </div>
            <div className="certificate-card-content">
              <div className="certificate-meta">
                <span>{certificate.provider}</span>
                <span>{certificate.year}</span>
              </div>
              <h3>{certificate.title}</h3>
              <p>{certificate.description}</p>
            </div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {selectedCertificate && (
          <motion.div
            className="certificate-modal-backdrop"
            role="presentation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCertificate(null)}
          >
            <motion.div
              className="certificate-modal"
              role="dialog"
              aria-modal="true"
              aria-labelledby="certificate-modal-title"
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              transition={{ duration: 0.25 }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="certificate-modal-header">
                <div>
                  <p className="certificate-modal-provider">
                    {selectedCertificate.provider} · {selectedCertificate.year}
                  </p>
                  <h2 id="certificate-modal-title">
                    {selectedCertificate.title}
                  </h2>
                </div>
                <button
                  type="button"
                  className="certificate-modal-close"
                  onClick={() => setSelectedCertificate(null)}
                  aria-label="Close certificate preview"
                >
                  <img src="/assets/close.svg" alt="" />
                </button>
              </div>
              <div className="certificate-modal-image">
                <img
                  src={selectedCertificate.image}
                  alt={`${selectedCertificate.title} certificate`}
                />
              </div>
              <p className="certificate-modal-description">
                {selectedCertificate.description}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certificates;
