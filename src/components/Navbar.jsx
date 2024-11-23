import { links } from "../data";
import { FaAlignJustify, FaAlignRight } from "react-icons/fa6";
import { useState } from "react";
import ScrollToTop from "react-scroll-to-top";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="bg-black">
      <div className=" text-gray-50 align-element py-4 flex flex-row justify-between items-center sm:flex-row sm:gap-x-16 sm:items-center sm:py-8">
        <h2 className="text-lg font-bold">
          Web<span className="text-sky-500">Dev</span>
        </h2>
        <div className="hidden md:flex md:gap-x-3 md:items-center">
          {links.map((link) => {
            const { id, href, text } = link;
            return (
              <a
                key={id}
                href={href}
                className="capitalize text-lg tracking-wider font-medium hover:text-sky-300  duration-300"
              >
                {text}
              </a>
            );
          })}
          <a
            href="#contact"
            className="bg-sky-500  rounded-lg text-black text-xl text-center px-3 mx-3 font-bold uppercase  hover:bg-sky-50   duration-300"
          >
            Kontakt
          </a>
        </div>
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaAlignRight size={25} /> : <FaAlignJustify size={25} />}
        </button>
      </div>
      {menuOpen && (
        <div className="align-element flex flex-col pb-2 gap-y-1 items-center md:hidden">
          {links.map((link) => {
            const { id, href, text } = link;
            return (
              <a
                key={id}
                href={href}
                onClick={() => setMenuOpen(false)}
                className=" text-gray-100 uppercase text-xl tracking-wider font-semibold hover:text-sky-400 duration-300"
              >
                {text}
              </a>
            );
          })}
          <a
            href="#contact"
            className="bg-sky-500   rounded-lg text-black text-xl text-center px-3 my-3 font-bold uppercase  hover:bg-sky-50  duration-300"
          >
            Kontakt
          </a>
        </div>
      )}
      <ScrollToTop
        smooth
        color="#38bdf8"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      />
    </nav>
  );
};
export default Navbar;
