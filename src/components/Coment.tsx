import aspas from "../assets/svg/aspas.svg";
import arrow from "../assets/svg/arrow.svg";

type Coment = {
  text: string;
  link: string;
  linkLabel: string | boolean;
  position: string;
};

const Coment = ({ text, link, linkLabel, position }: Coment) => {
  return (
    <div
      className={`border border-[#F1F1F0] py-5 px-4 flex flex-col  rounded-3xl ${linkLabel ? "gap-8" : "gap-2"}`}
    >
      <div className="flex flex-col gap-1 items-start">
        <img src={aspas} alt="" className="h-6 w-auto" />
        <p className="text-xl font-light">{text}</p>
      </div>
      <div>
        {linkLabel ? (
          <a
            href={link}
            className="text-xl flex-row gap-2 items-center group inline-flex"
          >
            <h4>{linkLabel}</h4>
            <img
              src={arrow}
              alt=""
              className="h-3 w-auto rotate-5 transition-transform duration-300 group-hover:rotate-45 brightness-0"
            />
          </a>
        ) : (
          ""
        )}
        <p className="text-[16px] text-[#9B9893] font-light">{position}</p>
      </div>
    </div>
  );
};

export default Coment;
