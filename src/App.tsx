import ButtonCta from "./components/ButtonCta";
import Natalia from "./assets/jpg/nataliaPerfil.jpg";
import mimoProject from "./assets/png/mimo/mimoProject.png";
import lumioProject from "./assets/png/lumio/lumioProject.png";
import doryProject from "./assets/png/dory/doryProject.png";
import ProjectCard from "./components/ProjectCard";
import ToolsMap from "./components/ToolsMap";
import madrid from "./assets/jpg/pictures/madrid.jpg";
import madridMap from "./assets/jpg/pictures/madridMap.jpg";
import project1 from "./assets/png/projects/group1.png";
import project2 from "./assets/png/projects/group2.png";
import project3 from "./assets/png/projects/group3.png";
import project4 from "./assets/png/projects/group4.png";
import project5 from "./assets/png/projects/group5.png";
import project6 from "./assets/png/projects/group6.png";
import behance from "./assets/svg/behance.svg";
import claude from "./assets/svg/claude.svg";
import clickup from "./assets/svg/clickup.svg";
import loc from "./assets/svg/loc.svg";
import dribbble from "./assets/svg/dribbble.svg";
import figma from "./assets/svg/figma.svg";
import framer from "./assets/svg/framer2.svg";
import linkedin from "./assets/svg/linkedin.svg";
import notion from "./assets/svg/notion.svg";
import skill1 from "./assets/svg/skill1.svg";
import skill2 from "./assets/svg/skil2.svg";
import skill3 from "./assets/svg/skill3.svg";
import skill4 from "./assets/svg/skill4.svg";
import skill5 from "./assets/svg/skill5.svg";
import x from "./assets/svg/x.svg";
import headerBg from "./assets/svg/headerBg.svg";

const skills = [
  {
    icon: skill1,
    label: "UX/UI Design",
  },
  {
    icon: skill2,
    label: "User Research",
  },
  {
    icon: skill3,
    label: "User Flow",
  },
  {
    icon: skill4,
    label: "Design System",
  },
  {
    icon: skill5,
    label: "Prototyping",
  },
];

const social = [
  {
    name: "linkedin",
    icon: linkedin,
    bgColor: "#E5F3FF",
    link: "https://www.linkedin.com/in/nat%C3%A1lia-lopes-855711192/",
  },
  {
    name: "dribble",
    icon: dribbble,
    bgColor: "#FFECF1",
    link: "https://dribbble.com/nataliamja",
  },
  {
    name: "behance",
    icon: behance,
    bgColor: "#EAF5FF",
    link: "https://www.behance.net/nataliamja",
  },
  {
    name: "twitter",
    icon: x,
    bgColor: "#F3F3F3",
    link: "https://x.com/anataliamja",
  },
];
const tools = [
  {
    name: "figma",
    icon: figma,
    bgColor: "#F9F3FF",
  },
  {
    name: "framer",
    icon: framer,
    bgColor: "#E8F8FF",
  },
  {
    name: "clickup",
    icon: clickup,
    bgColor: "#FFEDF5",
  },
  {
    name: "notion",
    icon: notion,
    bgColor: "#F3F3F3",
  },
  {
    name: "claude",
    icon: claude,
    bgColor: "#FFF2EE",
  },
];

const contact = [
  {
    social: "Linkedin",
    link: "https://www.linkedin.com/in/nat%C3%A1lia-lopes-855711192/",
  },
  {
    social: "division",
    link: "",
  },
  {
    social: "Dribbble",
    link: "https://dribbble.com/nataliamja",
  },
  {
    social: "division",
    link: "",
  },
  {
    social: "Twitter",
    link: "https://x.com/anataliamja",
  },
];

const projects = [
  {
    name: "project 1",
    img: project1,
  },
  {
    name: "project 2",
    img: project2,
  },
  {
    name: "project 3",
    img: project3,
  },
  {
    name: "project 4",
    img: project4,
  },
  {
    name: "project 5",
    img: project5,
  },
  {
    name: "project 6",
    img: project6,
  },
];

function App() {
  return (
    <>
      <div className="p-4 md:p-8 flex flex-col items-center justify-center gap-6 md:gap-8">
        {/* section 1 - Hero */}
        <section className="relative overflow-hidden flex flex-col md:flex-row items-center justify-between border border-[#F1F1F0] rounded-3xl py-10 md:py-16 px-6 md:px-10 bg-white/85 w-full gap-8">
          <div className="flex flex-col gap-6 md:gap-8 order-2 md:order-1">
            <div className="flex flex-col gap-3 md:gap-4">
              <h1 className="text-3xl md:text-5xl text-center md:text-left ">
                I'm Natalia Lopes
              </h1>
              <p className="text-[#6B6760] text-lg md:text-2xl font-light w-full md:w-[60%] text-center md:text-left text-balance ">
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
            className="h-48 w-48 md:h-72 md:w-72 rounded-full object-cover border-8 border-[#F1F1F1CC] order-1 md:order-2 shrink-0 z-10"
          />
          <img
            src={headerBg}
            alt=""
            className="absolute -right-8 md:right-13 md:top-6 -top-10 z-0"
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
                    <div className="bg-[#FFECF1] p-3 rounded-2xl flex items-center justify-center shrink-0">
                      <img
                        src={item.icon}
                        alt="skillIcon.svg"
                        className="h-6 w-6"
                      />
                    </div>
                    <p className="text-lg md:text-xl">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right column */}
            <div className="flex flex-col gap-6 md:gap-8 flex-1">
              <div className="flex flex-col gap-10 md:gap-14 border border-[#F1F1F0] rounded-3xl p-8 md:p-10 bg-white/85">
                <ToolsMap arr={social} title={"SOCIAL"} activeLink={true} />
                <ToolsMap arr={tools} title={"FAVORITE TOOLS"} />
              </div>
              <div className="flex flex-col sm:flex-row gap-4 md:gap-8">
                <img
                  src={madrid}
                  alt=""
                  className="h-48 md:h-80 w-full sm:w-1/2 object-cover rounded-3xl"
                />
                <div className="relative">
                  <img
                    src={madridMap}
                    alt=""
                    // className="h-48 md:h-80 w-full sm:w-1/2 object-cover rounded-3xl "
                    className="rounded-3xl h-48 md:h-80 w-full object-cover"
                  />
                  <div className="absolute top-30 right-28 md:top-50 md:right-42 h-4 w-4 bg-blue-600 rounded-full border-2 border-white ">
                    <span className="relative flex size-3">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-600 opacity-75"></span>
                    </span>
                  </div>
                  <div className="bg-white border border-black/5 px-4 py-2 rounded-3xl absolute bottom-2 md:right-30 right-40 flex items-center justify-center gap-2">
                    <img src={loc} alt="" />
                    <p className="text-black text-sm">Madrid, Spain</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* EXPLORATIONS */}
        <section className="flex flex-col items-center border border-[#F1F1F0] rounded-3xl pt-10 md:pt-16 px-6 md:px-10 pb-10 bg-white/85 w-full">
          <h2 className="text-[#9B9893] self-start pb-6 md:pb-9">
            EXPLORATIONS
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-5">
            {projects.map((item, i) => (
              <img key={i} src={item.img} alt="" className="h-69 w-auto" />
            ))}
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
                className="text-[16px] text-[#C4C1BC] hover:text-black/50 transition-transform"
                target="blank"
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
