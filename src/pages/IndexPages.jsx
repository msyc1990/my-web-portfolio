import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

const IndexPages = () => {
  return (
    <main className="overflow-x-hidden  min-h-full">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
};
export default IndexPages;
