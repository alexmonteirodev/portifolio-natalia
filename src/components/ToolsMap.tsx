type EachTool = {
  name: string;
  icon: string;
  bgColor: string;
};
type Tools = {
  arr: EachTool[];
  title: string;
};
function ToolsMap({ arr, title }: Tools) {
  return (
    <div>
      <h2 className="text-[#9B9893] self-start pb-5 text-[16px]">{title}</h2>
      <div className="flex flex-row gap-3">
        {arr.map((item, i) => (
          <div
            key={i}
            className="rounded-2xl p-4 flex items-center justify-center"
            style={{ backgroundColor: item.bgColor }}
          >
            <img src={item.icon} alt={item.name} className="h-5 w-5" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ToolsMap;
