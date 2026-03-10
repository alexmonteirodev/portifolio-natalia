import ButtonCta from "./components/ButtonCta";
import Natalia from "./assets/jpg/nataliaPerfil.jpg";
import mimoProject from "./assets/png/mimo/mimoProject.png";
import lumioProject from "./assets/png/lumio/lumioProject.png";
import doryProject from "./assets/png/dory/doryProject.png";
import ProjectCard from "./components/ProjectCard";
import ToolsMap from "./components/ToolsMap";
import madrid from "./assets/jpg/pictures/madrid.jpg";
import madridMap from "./assets/jpg/pictures/madridMap.jpg";

const skills = [
  {
    icon: "",
    label: "UX/UI Design",
  },
  {
    icon: "",
    label: "User Research",
  },
  {
    icon: "",
    label: "User Flow",
  },
  {
    icon: "",
    label: "Design System",
  },
  {
    icon: "",
    label: "Prototyping",
  },
];

const social = [
  {
    name: "linkedin",
    icon: "",
    bgColor: "#E5F3FF",
  },
  {
    name: "dribble",
    icon: "",
    bgColor: "#FFECF1",
  },
  {
    name: "behance",
    icon: "",
    bgColor: "#EAF5FF",
  },
  {
    name: "twitter",
    icon: "",
    bgColor: "#F3F3F3",
  },
];
const tools = [
  {
    name: "figma",
    icon: "",
    bgColor: "#F9F3FF",
  },
  {
    name: "framer",
    icon: "",
    bgColor: "#E8F8FF",
  },
  {
    name: "slack",
    icon: "",
    bgColor: "#FFF6E1",
  },
  {
    name: "notion",
    icon: "",
    bgColor: "#F3F3F3",
  },
  {
    name: "claude",
    icon: "",
    bgColor: "#FFF2EE",
  },
];

const contact = [
  {
    social: "linkedin",
    link: "",
  },
  {
    social: "division",
    link: "",
  },
  {
    social: "Dribbble",
    link: "",
  },
  {
    social: "division",
    link: "",
  },
  {
    social: "Twitter",
    link: "",
  },
];

function App() {
  return (
    <>
      <div className="p-4 md:p-8 flex flex-col items-center justify-center gap-6 md:gap-8">
        {/* section 1 - Hero */}
        <section className="flex flex-col md:flex-row items-center justify-between border border-[#F1F1F0] rounded-3xl py-10 md:py-16 px-6 md:px-10 bg-white/85 w-full gap-8">
          <div className="flex flex-col gap-6 md:gap-8 order-2 md:order-1">
            <div className="flex flex-col gap-3 md:gap-4">
              <h1 className="text-3xl md:text-5xl text-center md:text-left">
                I'm Natalia Lopes
              </h1>
              <p className="text-[#6B6760] text-lg md:text-2xl font-light w-full md:w-[60%] text-center md:text-left">
                Junior Product Designer with real product experience. I
                co-founded Land, where I help build apps from scratch — from the
                first idea to the last interface detail. I'm naturally curious:
                I question flows, dig into user needs, and care about what
                actually makes sense
              </p>
            </div>
            <div className="flex justify-center md:justify-start">
              <ButtonCta />
            </div>
          </div>
          <img
            src={Natalia}
            alt=""
            className="h-48 w-48 md:h-72 md:w-72 rounded-full object-cover border-8 border-[#F1F1F1CC] order-1 md:order-2 shrink-0"
          />
        </section>

        {/* PROJECTS */}
        <section className="flex flex-col items-center border border-[#F1F1F0] rounded-3xl pt-10 md:pt-16 px-6 md:px-10 pb-10 bg-white/85 w-full">
          <h2 className="text-[#9B9893] self-start mb-6">PROJECTS</h2>
          <div className="flex flex-col sm:flex-row gap-5 w-full">
            <ProjectCard
              name={"Mimo"}
              label={"App mobile · 2025"}
              link={""}
              img={mimoProject}
            />
            <ProjectCard
              name={"Lumio"}
              label={"Design System app mobile · 2025"}
              link={""}
              img={lumioProject}
            />
            <ProjectCard
              name={"Dory"}
              label={"App mobile · 2025"}
              link={""}
              img={doryProject}
            />
          </div>
        </section>

        {/* RECENT WORK */}
        <section className="w-full rounded-3xl bg-white/85">
          <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
            {/* Left card */}
            <div className="p-8 md:p-10 border border-[#F1F1F0] rounded-3xl bg-white/85 flex flex-col gap-8 md:gap-10 w-full lg:w-[45%]">
              <div>
                <h2 className="text-[#9B9893] self-start pb-6 md:pb-9">
                  RECENT WORK
                </h2>
                <div className="flex flex-col gap-2">
                  <h1 className="text-2xl md:text-3xl">Product Design</h1>
                  <p className="text-[#9B9893] text-lg md:text-xl">
                    2025 - Currently
                  </p>
                </div>
              </div>
              <hr className="text-[#C4C1BC]" />
              <div>
                <h2 className="text-[#9B9893] self-start pb-6 md:pb-8">
                  SKILLS
                </h2>
                {skills.map((item, i) => (
                  <div
                    key={i}
                    className="flex flex-row gap-5 items-center pb-5 md:pb-6"
                  >
                    <div className="bg-[#FFECF1] p-3 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <img src="" alt="skillIcon.svg" className="h-6 w-6" />
                    </div>
                    <p className="text-lg md:text-xl">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right column */}
            <div className="flex flex-col gap-6 md:gap-8 flex-1">
              <div className="flex flex-col gap-10 md:gap-14 border border-[#F1F1F0] rounded-3xl p-8 md:p-10 bg-white/85">
                <ToolsMap arr={social} title={"SOCIAL"} />
                <ToolsMap arr={tools} title={"FAVORITE TOOLS"} />
              </div>
              <div className="flex flex-col sm:flex-row gap-4 md:gap-8">
                <img
                  src={madrid}
                  alt=""
                  className="h-48 md:h-80 w-full sm:w-1/2 object-cover rounded-3xl"
                />
                <div>
                  <img
                    src={madridMap}
                    alt=""
                    className="h-48 md:h-80 w-full sm:w-1/2 object-cover rounded-3xl relative"
                  />
                  <div className="absolute h-4 w-4 bg-blue-600 rounded-full border-2 border-white"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* EXPLORATIONS */}
        <section className="flex flex-col items-center border border-[#F1F1F0] rounded-3xl pt-10 md:pt-16 px-6 md:px-10 pb-10 bg-white/85 w-full">
          <h2 className="text-[#9B9893] self-start mb-6">EXPLORATIONS</h2>
          <div className="flex flex-col sm:flex-row gap-5 w-full">
            <ProjectCard
              name={"Mimo"}
              label={"App mobile · 2025"}
              link={""}
              img={mimoProject}
            />
            <ProjectCard
              name={"Lumio"}
              label={"Design System app mobile · 2025"}
              link={""}
              img={lumioProject}
            />
            <ProjectCard
              name={"Dory"}
              label={"App mobile · 2025"}
              link={""}
              img={doryProject}
            />
          </div>
        </section>

        {/* FOOTER */}
        <section className="flex flex-col items-center border border-[#F1F1F0] rounded-3xl pt-10 md:pt-16 px-6 md:px-10 pb-10 bg-white/85 w-full">
          <h1 className="text-3xl md:text-5xl text-center md:text-left">
            Open to new opportunities
          </h1>
          <div className="pt-6 pb-10">
            <ButtonCta />
          </div>
          <div className="flex flex-row gap-8">
            {contact.map((item, i) => (
              <a
                key={i}
                href={item.link}
                className="text-[16px] text-[#C4C1BC]"
              >
                {item.social === "division" ? "·" : item.social}
              </a>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
