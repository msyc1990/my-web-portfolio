import aboutSvg from "../assets/about.svg";
import SectionTitle from "./componets/SectionTitle";
import { FcSearch } from "react-icons/fc";
import { useState } from "react";
import Cv from "./Cv";

const About = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <section className=" bg-white py-20" id="about">
      <div className="align-element grid  md:grid-cols-2 items-center gap-16">
        <img src={aboutSvg} className="w-full h-64" />
        <article>
          <SectionTitle text="O mnie" />
          <p className="text-slate-600 mt-8 leading-loose  md:text-xl">
            Jestem frontend developerem z pasją do projektowania nowoczesnych,
            responsywnych stron i aplikacji. Dzięki połączeniu estetyki z
            funkcjonalnością pomagam firmom budować silną obecność online.
            Stawiam na czysty kod, szybkość działania i dbałość o detale, aby
            każdy projekt nie tylko spełniał oczekiwania, ale je przewyższał.
            Razem możemy stworzyć coś wyjątkowego.
          </p>
          <div className="flex gap-1 items-center mt-4 justify-end">
            <FcSearch
              onClick={() => setOpenModal(true)}
              size={35}
              className="cursor-pointer hover:shadow-md rounded-md"
            />
            <button className="bg-sky-300 p-1 rounded-lgbg-sky-300 shadow-sm shadow-sky-300 rounded-lg text-black text-sm text-center px-3 mx-3  capitalize underline  hover:bg-sky-50   duration-300">
              Pobierz CV
            </button>
          </div>
        </article>
      </div>
      {openModal && (
        <div className="absolute top-0 left-0 w-full min-h-full flex flex-col   bg-black/85 ">
          <button
            className="bg-black text-white  text-sm p-2 m-3 border border-white  rounded-md self-end hover:bg-white hover:text-black duration-300"
            onClick={() => setOpenModal(!openModal)}
          >
            Zamknij
          </button>
          <Cv />
        </div>
      )}
    </section>
  );
};
export default About;
