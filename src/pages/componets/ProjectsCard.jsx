import { FaGithubSquare } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import { useState } from "react";

const ProjectsCard = ({ url, img, github, title, text }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <article className="relative bg-white  rounded-lg shadow-md  hover:shadow-xl duration-300">
      <img src={img} alt={title} className="w-full  rounded-t-lg h-64 " />
      <div className="p-8 mb-8">
        <h2 className="uppercase text-xl tracking-wide font-medium">{title}</h2>
        <p className="mt-4 text-slate-700 leading-tight text-md">
          {readMore ? text : `${text.substring(0, 100)}...`}
          <button
            className="font-bold underline decoration-2"
            onClick={() => setReadMore(!readMore)}
          >
            {readMore ? "mniej" : "więcej"}
          </button>
        </p>
      </div>
      <div className="absolute bottom-0 left-2 m-4 flex gap-x-4">
        <a href={url} target="_blank">
          <TbWorldWww className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
        </a>
        <a href={github} target="_blank">
          <FaGithubSquare className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
        </a>
      </div>
    </article>
  );
};
export default ProjectsCard;
