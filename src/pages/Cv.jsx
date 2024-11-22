import imgCv from "../assets/imgCv.png";
import TitleCv from "./componets/TitleCv";
import { cvContent } from "../data";
import { useEffect } from "react";

const Cv = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  const {
    name,
    job,
    text,
    contact,
    professionalExperience,
    education,
    personSkills,
    programmingSkills,
    language,
    hoby,
  } = cvContent;

  return (
    <section className=" w-full flex flex-col p-2 text-white md:flex-row mx-auto lg:w-3/4">
      {/* left side */}
      <div className=" bg-gray-950 rounded-md p-4">
        <div className="w-2/3  mx-auto p-6">
          <img src={imgCv} className="rounded-3xl" />
        </div>
        <div>
          <TitleCv title="Dane kontaktowe" color="text-slate-200" />
          {contact.map((conatct) => (
            <>
              <div
                key={conatct.id}
                className="flex items-center gap-x-3 my-2 text-sm text-slate-400 tracking-wide"
              >
                <span>{conatct.icon}</span>
                <span>{conatct.text}</span>
              </div>
            </>
          ))}
        </div>
        <div>
          <TitleCv title="Umiejętności" color="text-slate-200" />
          <ul className="list-disc pl-4">
            {personSkills.map((skill) => (
              <>
                <li
                  key={skill.id}
                  className="text-sm mb-2 tracking-wide text-slate-400"
                >
                  {skill.text}
                </li>
              </>
            ))}
          </ul>
        </div>
      </div>

      {/* right-side */}
      <div className=" bg-slate-200 flex flex-col p-2">
        <header className=" md:flex md:justify-between md:flex-row-reverse">
          <div className="p-2 text-center my-2">
            <span className="text-gray-800 text-4xl capitalize font-sans font-thin ">
              curriculum vitae
            </span>
          </div>
          <div className="w-max border-b-2 border-black/55 pr-8">
            <h1 className="text-black text-5xl font-bold">{name}</h1>
            <h2 className="text-gray-700 text-2xl py-2">{job}</h2>
          </div>
        </header>
        <article className="my-2 bg-gray-500/10 rounded-md">
          <p className="text-black p-1">{text}</p>
        </article>

        <article className="my-2">
          <TitleCv title="Doświadczenie zawodowe" color="text-gray-900" />
          <div>
            <h2 className="text-gray-900 font-semibold text-lg">
              {professionalExperience.title}
            </h2>
            <p className="text-gray-500">{professionalExperience.date}</p>
          </div>
          <div className="pl-6">
            <ul className="text-gray-700 list-disc">
              {professionalExperience.experience.map((exp) => (
                <>
                  <li key={exp.id} className="my-2">
                    {exp.text}
                  </li>
                </>
              ))}
            </ul>
          </div>
        </article>
        <article className="my-2">
          <TitleCv title="Wykształcenie" color="text-gray-900" />
          <div className="flex gap-x-4">
            <div className="text-gray-900 font-bold">{education.date}</div>
            <div>
              <h3 className="text-gray-700 text-lg">{education.title}</h3>
              <p className="text-gray-700 font-semibold">
                Specjalizacja:{" "}
                <span className="font-medium">{education.specialization}</span>
              </p>
              <p className="text-gray-700 font-semibold">
                Poziom wykształcenia:{" "}
                <span className="font-medium">{education.level}</span>
              </p>
            </div>
          </div>
        </article>
        <article className="my-2">
          <TitleCv title="Umiejętności programistyczne" color="text-gray-900" />
          <div>
            {programmingSkills.map((skill) => (
              <>
                <h2 className="text-gray-900 font-semibold">{skill.title}</h2>
                <p className="text-gray-700 p-1">{skill.text}</p>
              </>
            ))}
          </div>
        </article>

        <article className="my-2">
          <TitleCv title="Języki obce" color="text-gray-900" />
          <div className="flex gap-x-2">
            <h2 className="text-gray-900 font-semibold">{language.name}</h2>
            <p className="text-gray-700">{language.level}</p>
          </div>
        </article>

        <article className="my-2">
          <TitleCv title="Zainteresowania" color="text-gray-900" />
          <p className="text-gray-700">{hoby}</p>
        </article>
      </div>
    </section>
  );
};
export default Cv;
