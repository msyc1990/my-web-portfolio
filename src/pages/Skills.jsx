import { skills } from "../data";
import SectionTitle from "./componets/SectionTitle";
import SkillsCard from "./componets/SkillsCard";

const Skills = () => {
  return (
    <section className=" bg-sky-50/15 py-20 align-element" id="skills">
      <SectionTitle text="Umiejętności" />
      <div className="py-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill) => {
          return <SkillsCard key={skill.id} {...skill} />;
        })}
      </div>
    </section>
  );
};
export default Skills;
