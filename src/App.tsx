import ButtonCta from "./components/ButtonCta";
import Natalia from "./assets/jpg/nataliaPerfil.jpg";
import ProjectCard from "./components/ProjectCard";
import mimoProject from "./assets/png/mimoProject.png";
import lumioProject from "./assets/png/lumioProject.png";

function App() {
  return (
    <>
      <div className="p-8 flex flex-col items-center justify-center gap-8">
        {/* section 1 */}
        <section className="flex flex-row items-center justify-between border border-[#F1F1F0] rounded-3xl py-16 px-10 bg-white/85">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <h1 className="text-5xl">I'm Natalia Lopes</h1>
              <p className="text-[#6B6760] text-2xl font-light w-[60%]">
                Junior Product Designer with real product experience. I
                co-founded Land, where I help build apps from scratch — from the
                first idea to the last interface detail. I'm naturally curious:
                I question flows, dig into user needs, and care about what
                actually makes sense
              </p>
            </div>
            <ButtonCta />
          </div>
          <img
            src={Natalia}
            alt=""
            className="h-72 w-72 rounded-full object-cover border-8 border-[#F1F1F1CC]"
          />
        </section>

        {/* PROJECTS */}
        <section className="flex flex-col items-center justify-between border border-[#F1F1F0] rounded-3xl py-16 px-10 bg-white/85">
          <h2 className="text-[#9B9893] self-start">PROJECTS</h2>
          <div className="flex flex-row gap-5 p-10 ">
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
              img={""}
            />
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
