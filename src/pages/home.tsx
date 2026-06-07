import ButtonCta from "../components/ButtonCta";
import Natalia from "../assets/jpg/nataliaPerfil.jpg";
import Natalia2 from "../assets/jpg/nataliaPerfil2.jpg";
import mimoProject from "../assets/png/mimo/mimoProject.png";
import lumioProject from "../assets/png/lumio/lumioProject.png";
import movaProject from "../assets/png/mova/movaProject.png";
import ProjectCard from "../components/ProjectCard";
import ToolsMap from "../components/ToolsMap";
import madrid from "../assets/jpg/pictures/madrid.jpg";
import brasil from "../assets/jpg/pictures/brasil.jpg";
import madridMap from "../assets/jpg/pictures/madridMap.jpg";
import project1 from "../assets/png/projects/group1.png";
import project2 from "../assets/png/projects/group2.png";
import project3 from "../assets/png/projects/group3.png";
import project4 from "../assets/png/projects/group4.png";
import project5 from "../assets/png/projects/group5.png";
import project6 from "../assets/png/projects/group6.png";
import claude from "../assets/svg/claude.svg";
import clickup from "../assets/svg/clickup.svg";
import loc from "../assets/svg/loc.svg";
import figma from "../assets/svg/figma.svg";
import framer from "../assets/svg/framer2.svg";
import linkedin from "../assets/svg/linkedin.svg";
import notion from "../assets/svg/notion.svg";
import skill1 from "../assets/svg/skill1.svg";
import skill2 from "../assets/svg/skil2.svg";
import skill3 from "../assets/svg/skill3.svg";
import skill4 from "../assets/svg/skill4.svg";
import skill5 from "../assets/svg/skill5.svg";
import skill6 from "../assets/svg/skill6.svg";
import Photography from "../assets/svg/Photography.svg";
import Traveling from "../assets/svg/Traveling.svg";
import Sporting from "../assets/svg/Sporting.svg";
import Painting from "../assets/svg/Painting.svg";
import Exploring from "../assets/svg/Exploring cities.svg";
import Rewatching from "../assets/svg/Rewatching.svg";
import headerDetail1 from "../assets/svg/headerdetail1.svg";
import headerDetail2 from "../assets/svg/headerdetail2.svg";
import Coment from "../components/Coment";
import Footer from "../components/Footer";

const skills = [
  { icon: skill1, label: "UX/UI Design" },
  { icon: skill2, label: "User Research" },
  { icon: skill3, label: "User Flow" },
  { icon: skill4, label: "Design System" },
  { icon: skill5, label: "Prototyping" },
  { icon: skill6, label: "Wireframing" },
];

const beyondthescreen = [
  { icon: Sporting, label: "Sporting" },
  { icon: Traveling, label: "Traveling" },
  { icon: Photography, label: "Photography" },
  { icon: Painting, label: "Painting" },
  { icon: Exploring, label: "Exploring cities" },
  { icon: Rewatching, label: "Rewatching" },
];

const tools = [
  { name: "figma", icon: figma, bgColor: "#F9F3FF" },
  { name: "framer", icon: framer, bgColor: "#E8F8FF" },
  { name: "clickup", icon: clickup, bgColor: "#FFEDF5" },
  { name: "notion", icon: notion, bgColor: "#F3F3F3" },
  { name: "claude", icon: claude, bgColor: "#FFF2EE" },
];

const contact = [
  {
    social: "Linkedin",
    link: "https://www.linkedin.com/in/nat%C3%A1lia-lopes-855711192/",
  },
  { social: "division", link: "" },
  { social: "Dribbble", link: "https://dribbble.com/nataliamja" },
  { social: "division", link: "" },
  { social: "Download CV", link: "" },
];

const projects = [
  { name: "project 1", img: project1 },
  { name: "project 2", img: project2 },
  { name: "project 3", img: project3 },
  { name: "project 4", img: project4 },
  { name: "project 5", img: project5 },
  { name: "project 6", img: project6 },
];

function App() {
  return (
    <div className="p-4 md:p-8 flex flex-col items-center gap-4 md:gap-5 relative overflow-x-hidden">
      {/* ── HERO ── */}
      <section className="relative overflow-hidden w-full rounded-3xl border border-[#F1F1F0] bg-white/85 px-8 md:px-12 py-10 md:py-18 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Text */}
        <div className="flex flex-col gap-6 order-2 md:order-1 z-10">
          <h1 className="text-4xl md:text-5xl text-center md:text-left font-instrument">
            I'm Natália Lopes
          </h1>
          <div className="text-[#6B6760] text-base md:text-lg font-light md:max-w-130 text-center md:text-left flex flex-col gap-4">
            <p>
              Junior Product Designer with real experience. I work at Land,
              where I help build digital products from scratch, from the first
              idea to the last interface detail.
            </p>
            <p>
              From Brazil, now based in Madrid. Curious by nature I question
              flows, understand users, and care about what actually makes sense.
            </p>
            <p>I paint, travel, and photograph everything worth remembering.</p>
          </div>
          <div className="flex justify-center md:justify-start gap-3">
            <ButtonCta />
            <a
              href="https://www.linkedin.com/in/nat%C3%A1lia-lopes-855711192/"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-4 border border-black rounded-2xl inline-flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5 hover:bg-black group"
            >
              <img
                src={linkedin}
                alt="LinkedIn"
                className="w-5 h-5 brightness-0 transition duration-300 group-hover:invert"
              />
            </a>
          </div>
        </div>

        {/* Photo — mobile: foto simples centralizada; desktop: polaroids originais */}
        <div className="order-1 md:order-2 shrink-0 z-10">
          {/* Só aparece no mobile */}
          <img
            src={Natalia}
            alt="Natália Lopes"
            className="block md:hidden h-52 w-44 rounded-2xl object-cover border border-[#F1F1F1CC] px-2 pt-2 pb-8 bg-white shadow-[0_20px_40px_rgba(0,0,0,0.12)]"
          />
          {/* Desktop: mantém exatamente como estava */}
          <img
            src={Natalia}
            alt="Natália Lopes"
            className="
              hidden md:block
              md:h-87.5 md:w-75
              rounded-2xl object-cover
              border border-[#F1F1F1CC]
              px-3 pt-3 pb-14
              bg-white
              absolute top-8 right-70
              shadow-[0_20px_40px_rgba(0,0,0,0.18)]
              transition-all duration-500 ease-out
              hover:-translate-y-4 hover:scale-[1.03] hover:-rotate-2
              hover:shadow-[0_35px_60px_rgba(0,0,0,0.20)]
            "
          />
          <img
            src={Natalia2}
            alt="Natália Lopes"
            className="
              hidden md:block
              md:h-80 md:w-70
              rounded-2xl object-cover
              border border-[#F1F1F1CC]
              px-3 pt-3 pb-14
              bg-white
              absolute top-45 right-25
              rotate-6
              shadow-[0_20px_40px_rgba(0,0,0,0.10)]
              transition-all duration-500 ease-out
              hover:-translate-y-5 hover:scale-[1.04] hover:rotate-10
              hover:shadow-[0_40px_70px_rgba(0,0,0,0.20)]
            "
          />
        </div>

        {/* BG decoration */}
        <img
          src={headerDetail1}
          alt=""
          className="hidden md:block absolute left-150 top-50 h-98 w-auto object-cover z-0 opacity-60 pointer-events-none"
        />
        <img
          src={headerDetail2}
          alt=""
          className="hidden md:block absolute left-250 -top-10 h-98 w-auto object-cover z-0 opacity-60 pointer-events-none"
        />
      </section>
      {/* ── PROJECTS ── */}
      <section className="w-full rounded-3xl border border-[#F1F1F0] bg-white/85 px-8 md:px-10 pt-10 pb-10">
        <h2 className="text-[#9B9893] text-xs tracking-widest mb-8">
          PROJECTS
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          <ProjectCard
            name="Mova"
            label="Helping personal trainers and clients connect with their best shape"
            link="/mova"
            img={movaProject}
          />
          <ProjectCard
            name="Mimo"
            label="Never forget someone's birthday again and become the best gift giver ever"
            link="/mimo"
            img={mimoProject}
          />
          <ProjectCard
            name="Lumio"
            label="Document your faith journey and feel closer to God than ever before"
            link="/lumio"
            img={lumioProject}
          />
        </div>
      </section>

      {/* ── RECENT WORK + SKILLS ── */}
      <section className="w-full rounded-3xl border border-[#F1F1F0] bg-white/85 px-8 md:px-10 py-10">
        <div className="flex flex-col md:flex-row gap-8 md:gap-0">
          {/* Left – Recent Work */}
          <div className="md:w-[40%] flex flex-col gap-3">
            <h2 className="text-[#9B9893] text-xs tracking-widest mb-2">
              RECENT WORK
            </h2>
            <p className="text-2xl md:text-2xl font-light">
              Product Designer at LAND
            </p>
            <p className="text-base md:text-lg text-[#6B6760] font-light">
              2025 – Currently
            </p>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px bg-[#F1F1F0] mx-4 self-stretch" />

          {/* Right – Skills */}
          <div className="flex-1 flex flex-col gap-6">
            <h2 className="text-[#9B9893] text-xs tracking-widest">SKILLS</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-5">
              {skills.map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="bg-[#FFECF1] p-3 rounded-2xl flex items-center justify-center shrink-0">
                    <img src={item.icon} alt="" className="h-6 w-6" />
                  </div>
                  <p className="text-base md:text-lg font-light">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── EXPLORATIONS ── */}
      <section className="w-full rounded-3xl border border-[#F1F1F0] bg-white/85 px-8 md:px-10 pt-10 pb-10">
        <h2 className="text-[#9B9893] text-xs tracking-widest mb-8">
          EXPLORATIONS
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {projects.map((item, i) => (
            <img
              key={i}
              src={item.img}
              alt={item.name}
              className="w-full h-auto rounded-2xl object-cover"
            />
          ))}
        </div>
      </section>

      {/* ── KIND WORDS + BEYOND THE SCREEN ── */}
      <div className="w-full flex flex-col lg:flex-row gap-4 md:gap-5 items-stretch">
        {/* KIND WORDS */}
        <section className="lg:w-1/2 rounded-3xl border border-[#F1F1F0] bg-white/85 px-8 md:px-10 pt-10 pb-10 flex flex-col gap-8">
          <h2 className="text-[#9B9893] text-xs tracking-widest">KIND WORDS</h2>

          {/* Top row – 2 comments side by side */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Coment
              text="Creativity, sensitivity, and excellence in every detail... It was a pleasure working with her."
              link=""
              linkLabel="Laura Magalhães"
              position="Senior Product Design"
            />
            <Coment
              text="Creativity, sensitivity, and excellence in every detail... It was a pleasure working with her."
              link=""
              linkLabel="Alex Monteiro"
              position="Frontend Developer"
            />
          </div>

          {/* Bottom – 1 comment full width */}
          <Coment
            text="Creativity, sensitivity, and excellence in every detail... It was a pleasure working with her."
            link=""
            linkLabel="Dhiego Correa"
            position="Senior Product Design"
          />
        </section>

        {/* BEYOND THE SCREEN */}
        <section className="lg:w-1/2 rounded-3xl border border-[#F1F1F0] bg-white/85 px-8 md:px-10 pt-10 pb-10 flex flex-col gap-8">
          <h2 className="text-[#9B9893] text-xs tracking-widest">
            BEYOND THE SCREEN
          </h2>

          {/* Hobbies grid */}
          <div className="grid grid-cols-3 gap-x-4 gap-y-5">
            {beyondthescreen.map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="bg-[#FFECF1] p-3 rounded-2xl flex items-center justify-center shrink-0">
                  <img src={item.icon} alt="" className="h-6 w-6" />
                </div>
                <p className="text-base md:text-xl leading-snug font-light">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          {/* Quote */}
          <Coment
            text="Courage would be to look. Just look. Try. Dare to feel lost."
            link=""
            linkLabel={false}
            position="— Clarice Lispector"
          />

          {/* Photos + map */}
          <div className="flex gap-3">
            <img
              src={brasil}
              alt="Brasil"
              className="w-28 h-28 md:w-32 md:h-32 object-cover rounded-2xl shrink-0"
            />
            <img
              src={madrid}
              alt="Madrid"
              className="w-28 h-28 md:w-32 md:h-32 object-cover rounded-2xl shrink-0"
            />
            <div className="relative flex-1 min-w-0">
              <img
                src={madridMap}
                alt="Map"
                className="rounded-2xl w-full h-28 md:h-32 object-cover"
              />
              {/* Ping dot */}
              <div className="absolute top-[45%] md:top-[55%] left-[70%] h-4 w-4 bg-blue-600 rounded-full border-2 border-white">
                <span className="relative flex size-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-600 opacity-75" />
                </span>
              </div>
              {/* Location badge */}
              <div className="bg-white border border-black/5 px-3 py-1.5 rounded-2xl absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1.5 whitespace-nowrap shadow-sm">
                <img src={loc} alt="" className="w-3.5 h-3.5" />
                <p className="text-black text-xs">Madrid, Spain</p>
              </div>
            </div>
          </div>

          {/* Favorite tools */}
          <ToolsMap arr={tools} title="FAVORITE TOOLS" />
        </section>
      </div>

      {/* ── FOOTER / CTA ── */}

      <Footer contact={contact} />

      <div className="absolute w-360 h-110.75 rounded-full blur-[250px] md:-top-5 bg-[#FFEAD3]/60 -z-10" />
      <div className="absolute w-360 h-110.75 rounded-full blur-[250px] top-580 md:top-120 bg-[#FFEAD3]/40 -z-10" />
      <div className="absolute w-360 h-110.75 rounded-full blur-[250px] top-580 md:top-280 bg-[#FFEAD3]/60 -z-10" />
      <div className="absolute w-360 h-110.75 rounded-full blur-[250px] top-840 -left-150 md:top-570 md:-left-150 bg-[#FFDBF6]/60 -z-10" />
      <div className="absolute w-360 h-110.75 rounded-full blur-[250px] top-1200 -right-100 md:top-720 md:-right-200 bg-[#FFEAD3]/60 -z-10" />
    </div>
  );
}

export default App;
