import heroImg from "../assets/hero.svg";

import { FaFacebookSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="bg-sky-50/15 py-24">
      <div className="align-element grid md:grid-cols-2 items-center gap-8">
        <article>
          <h1 className="text-4xl md:text-6xl font-bold tracking-wider">
            Michał Syc
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-slate-800 font-semibold capitalize tracking-wide">
            Front-End Developer
          </p>
          <p className="mt-2  text-slate-500  tracking-wide  md:text-xl">
            <span className="underline decoration-sky-500 decoration-4">
              Front-end
            </span>
            , który łączy design z technologią, tworząc wyjątkowe doświadczenia
            użytkowników
          </p>
          <div className="flex gap-x-4 mt-4">
            <a href="https://github.com/msyc1990" target="_blank">
              <FaGithubSquare className="h-8 w-8 text-slate-600 hover:text-black duration-300 " />
            </a>
            <a href="https://linkedin.com" target="_blank">
              <FaLinkedin className="h-8 w-8 text-slate-600 hover:text-black duration-300 " />
            </a>
            <a href="https://www.facebook.com/" target="_blank">
              <FaFacebookSquare className="h-8 w-8 text-slate-600 hover:text-black duration-300 " />
            </a>
          </div>
        </article>
        <article className="hidden md:block">
          <img src={heroImg} className="h-80 lg:h-96" />
        </article>
      </div>
    </div>
  );
};
export default Hero;
