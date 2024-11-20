const TitleCv = ({ title, color }) => {
  return (
    <div className="border-b-2 border-black/55 my-2 w-max pr-8">
      <h2 className={`text-xl ${color}`}>{title}</h2>
    </div>
  );
};
export default TitleCv;
