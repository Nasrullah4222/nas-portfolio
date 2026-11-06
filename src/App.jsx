import About from "./sections/About";
import Contact from "./sections/Contact";
import Certificates from "./sections/Certificates";
import Experiences from "./sections/Experience";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import Projects from "./sections/Projects";
import Statistics from "./sections/Statistics";
import Skills from "./sections/Skills";
import Volunteering from "./sections/Volunteering";
function App() {
  return (
    <div className="mx-auto w-full max-w-7xl">
      <Navbar />
      <Hero />
      <Statistics />
      <About />
      <Projects />
      <Skills />
      <Experiences />
      <Certificates />
      <Volunteering />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
