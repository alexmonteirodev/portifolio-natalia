type EachTool = {
  name: string;
  icon: string;
  bgColor: string;
  link?: string;
};
type Tools = {
  arr: EachTool[];
  title: string;
  activeLink?: boolean;
};
function ToolsMap({ arr, title, activeLink = false }: Tools) {
  return (
    <div>
      <h2 className="text-[#9B9893] self-start pb-5 text-[16px]">{title}</h2>
      <div className="flex flex-row gap-3">
        {arr.map((item, i) => (
          <a
            key={i}
            className={`rounded-2xl p-4 flex items-center justify-center transition-transform ${activeLink ? "cursor-pointer hover:scale-105" : "cursor-default"}`}
            style={{ backgroundColor: item.bgColor }}
            href={item?.link}
            target="blank"
          >
            <img src={item.icon} alt={item.name} className="h-6 w-6" />
          </a>
        ))}
      </div>
    </div>
  );
}

export default ToolsMap;
