import { Link } from "react-router-dom";
import error from "../assets/error.svg";

const Error = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <img src={error} alt="error" className="w-3/4 max-h-80 " />
      <h1 className="my-6 text-xl">Nie znaleziono strony.</h1>
      <Link
        to="/"
        className="bg-sky-500 p-2 rounded-xl text-sm font-bold hover:bg-sky-200 border border-sky-500"
      >
        Powrót na stronę
      </Link>
    </div>
  );
};
export default Error;
