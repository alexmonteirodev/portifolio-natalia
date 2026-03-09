type Card = {
  name: string;
  label: string;
  link: string;
  img: string;
};
function ProjectCard({ name, label, link, img }: Card) {
  return (
    <div className="flex flex-col items-center gap-7 border border-[#F1F1F0] px-8 pt-10 rounded-3xl h-120 overflow-hidden ">
      <div className="flex flex-row items-center gap-44">
        <div>
          <p className="font-semibold text-2xl">{name}</p>
          <p className="text-sm text-[#6B6760] whitespace-nowrap">{label}</p>
        </div>
        <a href={link} className="bg-black px-3 py-2 rounded-full">
          <img src="" alt="" />
        </a>
      </div>

      <div className="border-4 border-[#FF904B] rounded-[36px]">
        <img
          src={img}
          alt=""
          className="w-60 rounded-4xl border-4 border-black "
        />
      </div>
    </div>
  );
}

export default ProjectCard;
