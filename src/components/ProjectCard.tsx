import { Link } from "react-router-dom";
import arrow from "../assets/svg/arrow.svg";
type Card = {
  name: string;
  label: string;
  link: string;
  img: string;
};
function ProjectCard({ name, label, link, img }: Card) {
  return (
    <div className="flex flex-col items-center gap-7 border border-[#F1F1F0] px-8 pt-10 rounded-3xl h-120 overflow-hidden ">
      <div className="flex flex-row items-center w-full justify-between">
        <div>
          <p className="text-2xl">{name}</p>
          <p className="text-[16px] text-[#9B9893]">{label}</p>
        </div>
        <Link
          to={link}
          className="bg-black w-8 h-8 rounded-full inline-flex items-center justify-center hover:scale-105 transition-transform shrink-0"
        >
          <img src={arrow} alt="" className="h-3 w-3" />
        </Link>
      </div>

      <div className="border-4 border-[#FF904B] rounded-[42px]">
        <img
          src={img}
          alt=""
          className="w-60 rounded-[38px] border-4 border-black "
        />
      </div>
    </div>
  );
}

export default ProjectCard;
