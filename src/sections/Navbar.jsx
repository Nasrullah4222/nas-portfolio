import { motion } from "motion/react";
import { useState } from "react";
import CopyEmailButton from "../components/CopyEmailButton";

const routes = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Projects", "#projects"],
  ["Skills", "#skills"],
  ["Experience", "#experience"],
  ["Certificates", "#certificates"],
  ["Contact", "#contact"],
];

const NavigationRoute = ({ onNavigate }) => (
  <ul className="nav-ul">
    {routes.map(([label, href]) => (
      <li className="nav-li" key={label}>
        <motion.a
          className="nav-link"
          href={href}
          onClick={onNavigate}
          whileHover={{ y: -2 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
        >
          {label}
        </motion.a>
      </li>
    ))}
  </ul>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="site-header">
      <div className="site-nav c-space">
        <a href="#home" className="site-logo" aria-label="Nasrullah Sijan home">
          <span className="site-logo-mark">N</span>
          <span>Nasrullah Sijan</span>
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <NavigationRoute />
        </nav>
        <span className="nav-divider" aria-hidden="true">
          |
        </span>
        <CopyEmailButton />
        <button
          type="button"
          className="menu-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <img src={isOpen ? "assets/close.svg" : "assets/menu.svg"} alt="" />
        </button>
      </div>
      {isOpen && (
        <motion.nav
          className="mobile-nav"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          aria-label="Mobile navigation"
        >
          <NavigationRoute onNavigate={closeMenu} />
        </motion.nav>
      )}
    </header>
  );
};

export default Navbar;
