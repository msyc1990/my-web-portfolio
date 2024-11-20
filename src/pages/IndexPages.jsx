import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Cv from "./Cv";

const IndexPages = () => {
  return (
    <div className="overflow-x-hidden  min-h-full">
      {/* <Cv /> */}
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};
export default IndexPages;
