import { FaPhoneSquareAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
const Footer = () => {
  return (
    <footer className="bg-black/90 py-4">
      <div className=" align-element flex gap-y-4 justify-between flex-col-reverse">
        <p className="self-center font-semibold text-gray-200 text-center text-md md:text-xl">
          &copy;2024 | Michał Syc | Front-end{" "}
          <span className="text-sky-400">Web Developer</span>
        </p>
        <div className="flex flex-col gap-y-5 md:flex-row md:gap-x-10">
          <div className="flex flex-col  gap-y-2 text-gray-200 ">
            <h2 className="max-w-sm font-bold  border-b border-slate-300/30 ">
              Kontakt
            </h2>
            <div className="flex gap-x-4 flex-col">
              <p className="flex items-center gap-x-2 text-md">
                <MdEmail color="#38bdf8" />
                michal.syc1990@gmail.com
              </p>
              <p className="flex items-center gap-x-2 text-md">
                <FaPhoneSquareAlt color="#38bdf8" />
                693-529-383
              </p>
            </div>
          </div>
          <div className="flex flex-col  gap-y-2 text-gray-200 ">
            <h2 className="max-w-sm font-bold  border-b border-slate-300/30 ">
              Ciekawe strony
            </h2>
            <div className="flex gap-x-4 flex-col">
              <a
                href="https://www.smashingmagazine.com/"
                className="flex items-center gap-x-2 text-md hover:text-sky-300"
                target="_blank"
              >
                Smash Magazine
              </a>
              <a
                href="https://www.w3schools.com/"
                className="flex items-center gap-x-2 text-md hover:text-sky-300"
                target="_blank"
              >
                W3Schools
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
