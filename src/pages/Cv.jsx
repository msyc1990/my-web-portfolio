import imgCv from "../assets/imgCv.png";
import TitleCv from "./componets/TitleCv";
import { contact, cvSkilss, skills } from "../data";

const Cv = () => {
  return (
    <section className=" w-full flex flex-col p-2 text-white md:flex-row mx-auto ">
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
            {cvSkilss.map((skill) => (
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
            <h1 className="text-black text-5xl font-bold">Michał Syc</h1>
            <h2 className="text-gray-700 text-2xl py-2">Technik Informatyk</h2>
          </div>
        </header>
        <article className="my-2 bg-gray-500/10 rounded-md">
          <p className="text-black p-1">
            Jestem zdeterminowanym samoukiem, który z pasją rozwija swoje
            umiejętności programistyczne, wierząc, że nauka to proces ciągły i
            niekończący się. Moim celem jest rozpoczęcie kariery jako
            programista front-end, gdzie będę mógł łączyć kreatywność z
            umiejętnością rozwiązywania problemów technicznych. W swojej
            dotychczasowej pracy zdobyłem cenne doświadczenie w pracy
            zespołowej, efektywnej organizacji zadań i dbałości o szczegóły,
            które pragnę przenieść na nowe wyzwania w branży IT. Jestem
            zmotywowany, by stale podnosić swoje kompetencje i z entuzjazmem
            podchodzę do każdego projektu, widząc w nim szansę na rozwój
            zawodowy i osobisty.
          </p>
        </article>
        <article className="my-2">
          <TitleCv title="Doświadczenie zawodowe" color="text-gray-900" />
          <div>
            <h2 className="text-gray-900 font-semibold text-lg">
              Shock Bath - Lakiernik form, pracownik produkcji
            </h2>
            <p className="text-gray-500">Czerwiec 2014 - Obecnie</p>
          </div>
          <div className="pl-6">
            <ul className="text-gray-700 list-disc">
              <li className="my-2">
                10 lat doświadczenia w precyzyjnej produkcji form i wykończeniu
                produktów.
              </li>
              <li className="my-2">
                Współpraca w zespołach produkcyjnych, realizacja projektów
                zgodnie z harmonogramem.
              </li>
              <li className="my-2">
                Odpowiedzialność za jakość wykończenia i zgodność z wymaganiami
                technicznymi.
              </li>
            </ul>
          </div>
        </article>
        <article className="my-2">
          <TitleCv title="Wykształcenie" color="text-gray-900" />
          <div className="flex gap-x-4">
            <div className="text-gray-900 font-bold">09.2006 - 05.210</div>
            <div>
              <h3 className="text-gray-700 text-lg">
                Technikum Informatyczne w I ZSZ im. S.Staszica
              </h3>
              <p className="text-gray-700 font-semibold">
                Specjalizacja:{" "}
                <span className="font-medium">Zarządzanie sieciami</span>
              </p>
              <p className="text-gray-700 font-semibold">
                Poziom wykształcenia:{" "}
                <span className="font-medium">Zawodowe</span>
              </p>
            </div>
          </div>
        </article>
        <article className="my-2">
          <TitleCv title="Umiejętności programistyczne" color="text-gray-900" />
          <div>
            {skills.map((skill) => (
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
            <h2 className="text-gray-900 font-semibold">Angielski:</h2>
            <p className="text-gray-700">poziom podstawowy</p>
          </div>
        </article>

        <article className="my-2">
          <TitleCv title="Zainteresowania" color="text-gray-900" />
          <p className="text-gray-700">
            Wolny czas poświęcam na rozwijanie i zdobywanie nowych umiejętności
            z dziedziny IT. Również oddaje się wszelkim sportom. Osobiście
            trenuje KickBoxing i uwielbiam jazdę na nartach.
          </p>
        </article>
      </div>
    </section>
  );
};
export default Cv;
