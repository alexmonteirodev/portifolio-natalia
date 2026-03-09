type Card = {
  name: string;
  label: string;
  link: string;
  img: string;
};
function ProjectCard({ name, label, link, img }: Card) {
  return (
    <div className="flex flex-col gap-7">
      <div className="flex flex-row gap-44">
        <div>
          <p className="font-semibold text-2xl">{name}</p>
          <p className=" text-[#6B6760]">{label}</p>
        </div>
        <a href={link} className="bg-black px-3 py-2 rounded-full">
          <img src="" alt="" />
        </a>
      </div>
      <img src={img} alt="" />
    </div>
  );
}

export default ProjectCard;
