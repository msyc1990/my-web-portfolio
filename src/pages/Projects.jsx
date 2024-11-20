import ProjectsCard from "./componets/ProjectsCard";
import { projects } from "../data";
import SectionTitle from "./componets/SectionTitle";
const Projects = () => {
  return (
    <section className=" bg-white py-20 align-element" id="projects">
      <SectionTitle text="Projekty" />
      <div className="py-16 grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {projects.map((project) => {
          return <ProjectsCard key={project.id} {...project} />;
        })}
      </div>
    </section>
  );
};
export default Projects;
