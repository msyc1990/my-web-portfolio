import SectionTitle from "./componets/SectionTitle";
import contactSvg from "../assets/contact.svg";
import mesageSvg from "../assets/mesage.svg";
import { useState } from "react";
const Contact = () => {
  const [mesage, setMesage] = useState(false);
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section className="bg-sky-50/15 py-20" id="contact">
      <div className="align-element grid  md:grid-cols-2 items-center gap-16 ">
        <div className="bg-sky-400 shadow-md  rounded-3xl  ">
          <img
            src={contactSvg}
            className="w-full h-64 origin-center rotate-3 bg-white rounded-3xl  shadow-xl lg:h-80"
          />
        </div>

        <article>
          <SectionTitle text="Kontakt" />
          <p className="text-slate-600 mt-8 leading-loose text-md md:text-lg">
            Masz pomysł na projekt lub szukasz wsparcia przy tworzeniu aplikacji
            webowej? Chętnie pomogę! Skontaktuj się ze mną, a razem stworzymy
            coś wyjątkowego. Bez względu na to, czy potrzebujesz pomocy przy
            frontendzie, czy chcesz omówić swój pomysł – jestem do Twojej
            dyspozycji!
          </p>
          {mesage ? (
            <div className="w-full   bg-sky-400 rounded-3xl p-1 mt-4">
              <div className=" flex flex-col shadow-md origin-center -rotate-3 rounded-3xl bg-white">
                <img
                  src={mesageSvg}
                  className="w-full h-48  bg-white rounded-3xl md:rounded-es-3xl md:rounded-s-3xl  shadow-xl "
                />
                <div className="p-3 flex flex-col justify-center items-center rotate-3">
                  <p className="text-lg font-medium my-4 text-center">
                    Dziękuje za Twoją wiadomość! Odpowiem tak szybko, jak to
                    możliwe. Miłego dnia
                  </p>
                  <button
                    onClick={() => setMesage(false)}
                    className="w-max bg-white text-gray-800 font-bold rounded border-b-2 border-sky-200 hover:border-sky-300 hover:bg-sky-400 hover:text-white shadow-md py-2 px-6 inline-flex items-center duration-300"
                  >
                    Zamknij
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="outline-4  mx-auto py-2 mt-4 border rounded-xl shadow-md border-gray-300 text-center max-w-xl ">
              <h1 className="text-center text-2xl text-gray-800">
                Zostaw wiadomość
              </h1>
              <form
                onSubmit={handleSubmit}
                className="p-2 flex flex-col gap-y-2 bg-white"
              >
                <input
                  name="name"
                  type="text"
                  placeholder="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="block py-2 px-2 w-full text-sm rounded-sm text-gray-900 bg-gray-50 border-0 border-b-2 focus:outline-none focus:bg-inherit"
                />
                <input
                  name="email"
                  type="email"
                  placeholder="email"
                  required
                  className=" py-2 px-2 w-full text-sm rounded-sm text-gray-900 bg-gray-50 border-0 border-b-2 focus:outline-none focus:bg-inherit"
                />
                <textarea
                  name="mesage"
                  className="block mt-2 p-2.5 w-full h-56 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:outline-none"
                ></textarea>
              </form>
              <button
                onClick={() => setMesage(true)}
                className="bg-sky-400 shadow-lg rounded-md text-gray-800 text-xl text-center px-4 my-3 font-semibold uppercase  hover:bg-sky-200 hover:shadow-lg border border-sky-400 duration-300"
              >
                Wyślij
              </button>
            </div>
          )}
        </article>
      </div>
    </section>
  );
};
export default Contact;
