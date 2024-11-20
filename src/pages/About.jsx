import aboutSvg from "../assets/about.svg";
import SectionTitle from "./componets/SectionTitle";
import { FcSearch } from "react-icons/fc";
import ModalAbout from "./componets/modalAbout";
import { useState } from "react";

const About = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <section className=" bg-white py-20" id="about">
      <div className="align-element grid  md:grid-cols-2 items-center gap-16">
        <img src={aboutSvg} className="w-full h-64" />
        <article>
          <SectionTitle text="O mnie" />
          <p className="text-slate-600 mt-8 leading-loose text-lg md:text-xl">
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
              className="cursor-pointer hover:shadow-md hover:shadow-sky-300 rounded-md"
            />
            <button className="bg-sky-300 p-1 rounded-lgbg-sky-300 shadow-sm shadow-sky-300 rounded-lg text-black text-sm text-center px-3 mx-3  capitalize underline  hover:bg-sky-50   duration-300">
              Pobierz CV
            </button>
          </div>
        </article>
      </div>
      {openModal && (
        <div className="absolute top-0 left-0 min-h-full  bg-black/85 p-4 flex flex-col ">
          <button
            className="bg-black text-white text-sm p-2 border border-white mr-2 mb-2  rounded-md self-end hover:bg-white hover:text-black duration-300"
            onClick={() => setOpenModal(!openModal)}
          >
            Zamknij
          </button>
          <ModalAbout />
        </div>
      )}
    </section>
  );
};
export default About;
