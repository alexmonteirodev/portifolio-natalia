import { Link } from "react-router-dom";
import mimoProject from "../assets/png/mimo/mimoProject.png";
import ButtonCta from "../components/ButtonCta";
import arrow from "../assets/svg/arrow.svg";
import mimoIcon from "../assets/png/mimo/mimoicon.png";
import mimo1 from "../assets/png/mimo/mimo1.png";
import mimo2 from "../assets/png/mimo/mimo2.png";
import mimo3 from "../assets/png/mimo/mimo3.png";
import mimo4 from "../assets/png/mimo/mimo4.png";
import mimo5 from "../assets/png/mimo/mimo5.png";
import mimo6 from "../assets/png/mimo/mimo6.png";
import mimo7 from "../assets/png/mimo/mimo7.png";
import mimo8 from "../assets/png/mimo/mimo8.png";
import mimo9 from "../assets/png/mimo/mimo9.png";
import mimo10 from "../assets/png/mimo/mimo10.png";
import mimo11 from "../assets/png/mimo/mimo11.png";
import mimo12 from "../assets/png/mimo/mimo12.png";

// reuse same image for all placeholders
const img = mimoProject;

const contact = [
  {
    social: "Linkedin",
    link: "https://www.linkedin.com/in/nat%C3%A1lia-lopes-855711192/",
  },
  { social: "division" },
  { social: "Dribbble", link: "https://dribbble.com/nataliamja" },
  { social: "division" },
  { social: "Download CV", link: "" },
];

const processSteps = [
  {
    number: "01",
    title: "Discovery",
    text: "Online survey with 10+ users aged 25–35 and benchmarking of similar apps. Goal: understand how people currently track birthdays and what they expected from a gifting experience.",
  },
  {
    number: "02",
    title: "Define",
    text: "Synthesized findings into personas, a user journey map, and prioritized features. The shared wishlist emerged here as the highest-value feature — unexpected, but validated by the data.",
  },
  {
    number: "03",
    title: "Design",
    text: "High-fidelity wireframes built directly in Figma, focusing on simplicity and a warm visual language. Every screen was designed to feel light and personal, not transactional.",
  },
  {
    number: "04",
    title: "Test",
    text: "Usability testing with real users. Key adjustments were made to the wishlist flow and onboarding based on feedback, reducing friction in the moments that mattered most.",
  },
];

function Mimo() {
  return (
    <div className="p-4 md:p-8 flex flex-col items-center gap-4 md:gap-5">
      {/* ── HEADER ── */}
      <section className="w-full rounded-3xl bg-white/85 px-8 md:px-10 pt-8 pb-10 flex flex-col gap-8">
        {/* Back */}
        <Link
          to="/"
          className="flex items-center gap-2 text-sm text-[#9B9893] hover:text-black transition-colors w-fit"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M9 2L4 7L9 12"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Back
        </Link>

        {/* Logo + name / description */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          {/* Left: logo + name + tags */}
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl overflow-hidden shrink-0">
                <img
                  src={mimoIcon}
                  alt="Mimo"
                  className="w-full h-full object-cover"
                />
              </div>
              <h1 className="text-3xl font-normal">Mimo</h1>
            </div>
            <div className="flex flex-wrap gap-2">
              {["App Mobile", "iOS", "B2C"].map((tag, i) => (
                <span
                  key={i}
                  className="text-xs px-3 py-1.5 rounded-full border border-[#E8E8E5] text-[#6B6760] bg-white"
                >
                  {tag}
                </span>
              ))}
              <a
                href="mailto:natalialopes.mja@gmail.com"
                className="group inline-flex items-center justify-center gap-2 rounded-3xl px-3 py-1.5 transition-all duration-300 hover:-translate-y-1  text-xs  border border-[#D4315D] text-[#D4315D] bg-[#FFECF1]"
              >
                <p>Go to App Store</p>
                <img
                  src={arrow}
                  alt=""
                  className="h-3 w-3 rotate-45 transition-transform duration-300 group-hover:-rotate-5 "
                />
              </a>
            </div>
          </div>

          {/* Right: description */}
          <p className="text-[#6B6760] text-base leading-relaxed md:max-w-120 font-light">
            We stopped writing birthdays in planners. We started relying on
            social media. Mimo was built to bring that care back — a mobile app
            where you track birthdays, create wishlists, and actually show up
            for the people you love.
          </p>
        </div>

        {/* Role / Platform / Tools */}
        <div className="flex flex-wrap self-end gap-10 pt-6">
          <div className="flex flex-col gap-1 border border-[#F1F1F0] rounded-xl px-4 py-5">
            <span className="text-[10px] tracking-widest text-[#9B9893] uppercase">
              Role
            </span>
            <span className="text-sm text-[#1A1A1A]">UX/UI Designer</span>
          </div>
          <div className="flex flex-col gap-1 border border-[#F1F1F0] rounded-xl px-4 py-5">
            <span className="text-[10px] tracking-widest text-[#9B9893] uppercase">
              Platform
            </span>
            <span className="text-sm text-[#1A1A1A]">Mobile · iOS</span>
          </div>
          <div className="flex flex-col gap-1 border border-[#F1F1F0] rounded-xl px-4 py-5">
            <span className="text-[10px] tracking-widest text-[#9B9893] uppercase">
              Tools
            </span>
            <span className="text-sm text-[#1A1A1A]">Figma · Figma Jam</span>
          </div>
        </div>
      </section>

      {/* ── HERO GRID ── */}
      <section className="w-full rounded-3xl  bg-white/85 px-8 md:px-10 pt-10 pb-10 ">
        <div className="flex gap-6">
          <div className="flex flex-col gap-6">
            <img
              src={mimo1}
              alt=""
              className="w-full h-62 object-cover rounded-xl mt-6 opacity-90"
            />
            <div className="flex gap-6">
              <img
                src={mimo3}
                alt=""
                className="w-[430px] h-[370px] object-cover rounded-xl"
              />
              <img
                src={mimo3}
                alt=""
                className="w-[430px] h-[370px] object-cover rounded-xl"
              />
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <img
              src={mimo2}
              alt=""
              className="w-[650px] h-[315px] object-cover rounded-xl mt-6"
            />
            <img
              src={mimo4}
              alt=""
              className="w-[650px] h-[315px] object-cover rounded-xl"
            />
          </div>
        </div>
      </section>

      {/* ── PROBLEM ── */}
      <section className="w-full rounded-3xl border border-[#F1F1F0] bg-white/85 px-8 md:px-10 pt-10 pb-10 flex flex-col gap-8">
        <span className="text-[10px] tracking-widest text-[#9B9893] uppercase">
          Problem
        </span>

        <div className="flex flex-col md:flex-row gap-8 md:gap-16">
          <div className="md:w-[38%] shrink-0">
            <h2 className="text-3xl md:text-4xl font-normal leading-snug">
              What problem{" "}
              <span className="text-[#9B9893] italic font-light">
                were we solving?
              </span>
            </h2>
          </div>
          <div className="flex-1 flex flex-col gap-4 text-[#6B6760] text-base leading-relaxed">
            <p>
              Birthdays used to live in planners. Today, they live in
              notification banners.
            </p>
            <p>
              We interviewed over 10 people aged 25–35 and found a consistent
              pattern: people care about celebrating those close to them, but
              the available tools feel passive. Three pain points came up
              repeatedly — forgetting important dates, not knowing what to give,
              and having no easy way to share what they themselves wanted.
            </p>
            <p>
              The third one surprised us. When we introduced the idea of a
              shared wishlist, the reaction was immediate. People hadn't thought
              to ask for it, but once they heard it, they couldn't imagine the
              app without it — and it ended up shaping the entire product
              direction.
            </p>
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="w-full rounded-3xl border border-[#F1F1F0] bg-white/85 px-8 md:px-10 pt-10 pb-10 flex flex-col gap-10">
        <span className="text-[10px] tracking-widest text-[#9B9893] uppercase">
          Process
        </span>

        <h2 className="text-3xl md:text-4xl font-normal leading-snug">
          How did{" "}
          <span className="text-[#9B9893] italic font-light">
            we get there?
          </span>
        </h2>

        {/* 4 steps — 2 col, sem card bg */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-8">
          {processSteps.map((step) => (
            <div key={step.number} className="flex flex-col gap-2">
              <span className="text-xs text-[#9B9893]">{step.number}</span>
              <p className="text-base font-normal text-[#1A1A1A]">
                {step.title}
              </p>
              <p className="text-sm text-[#6B6760] leading-relaxed">
                {step.text}
              </p>
            </div>
          ))}
        </div>

        {/* 2 imagens lado a lado */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <img
            src={img}
            alt=""
            className="w-full h-56 md:h-80 object-cover rounded-2xl"
          />
          <img
            src={img}
            alt=""
            className="w-full h-56 md:h-80 object-cover rounded-2xl"
          />
        </div>
      </section>

      {/* ── SOLUTION ── */}
      <section className="w-full rounded-3xl border border-[#F1F1F0] bg-white/85 px-8 md:px-10 pt-10 pb-10 flex flex-col gap-8">
        <span className="text-[10px] tracking-widest text-[#9B9893] uppercase">
          Solution
        </span>

        <h2 className="text-3xl md:text-4xl font-normal leading-snug">
          What{" "}
          <span className="text-[#9B9893] italic font-light">we built</span>
        </h2>

        <div className="flex flex-col gap-4 text-[#6B6760] text-base leading-relaxed">
          <p>
            Mimo is built around one core promise: you'll never miss a birthday,
            and when it comes, you'll know exactly what to give.
          </p>
          <p>
            The biggest design challenge was the home screen. Birthdays repeat
            every year, which raises a UX question: how do you display a fixed
            annual list in a way that feels alive? After discussions with the
            dev team, we landed on infinite scroll with a simple rule — once a
            birthday passes, it moves to the end of the queue. The current week
            surfaces at the top, the rest is organized by month.
          </p>
          <p>
            The countdown timer replaced a static date by choice — a number
            ticking down creates urgency that a calendar date doesn't.
          </p>
          <p>
            The profile works as a gift guide: clothing size, interests, and a
            wishlist with photos, prices, and store links. Built complete on
            purpose — half information creates friction, and friction kills the
            gesture.
          </p>
        </div>

        {/* 1 imagem full width */}
        <img
          src={img}
          alt=""
          className="w-full h-64 md:h-[420px] object-cover rounded-2xl"
        />
      </section>

      {/* ── LEARNINGS ── */}
      <section className="w-full rounded-3xl border border-[#F1F1F0] bg-white/85 px-8 md:px-10 pt-10 pb-10 flex flex-col gap-8">
        <span className="text-[10px] tracking-widest text-[#9B9893] uppercase">
          Learnings
        </span>

        <h2 className="text-3xl md:text-4xl font-normal leading-snug">
          What{" "}
          <span className="text-[#9B9893] italic font-light">
            I took from this
          </span>
        </h2>

        <p className="text-[#6B6760] text-base leading-relaxed">
          Mimo was my first complete product experience, from the first
          conversation about the concept to Apple Store approval. As a junior, I
          was involved in every decision: research, flows, design, dev handoff,
          and usability testing. No course project delivers that. The biggest
          lesson wasn't a design skill — it was learning to hold the full
          picture of a product while staying focused on the user.
        </p>

        {/* 4 imagens 2x2 */}
        <div className="grid grid-cols-2 gap-4">
          <img
            src={img}
            alt=""
            className="w-full h-44 md:h-64 object-cover rounded-2xl"
          />
          <img
            src={img}
            alt=""
            className="w-full h-44 md:h-64 object-cover rounded-2xl"
          />
          <img
            src={img}
            alt=""
            className="w-full h-44 md:h-64 object-cover rounded-2xl"
          />
          <img
            src={img}
            alt=""
            className="w-full h-44 md:h-64 object-cover rounded-2xl"
          />
        </div>
      </section>

      {/* ── FOOTER / CTA ── */}
      <section className="w-full rounded-3xl border border-[#F1F1F0] bg-white/85 px-8 md:px-10 pt-14 pb-10 flex flex-col items-center gap-5">
        <h1 className="text-3xl md:text-5xl text-center font-normal">
          Open to new opportunities
        </h1>
        <p className="text-base md:text-lg text-[#9B9893] font-light">
          Reach me at{" "}
          <a
            href="mailto:natalialopes.mja@gmail.com"
            className="hover:text-[#D4315E] transition-colors"
          >
            natalialopes.mja@gmail.com
          </a>
        </p>
        <div className="pt-2 pb-6">
          <ButtonCta />
        </div>
        <div className="flex flex-row gap-6">
          {contact.map((item, i) => (
            <a
              key={i}
              href={item.link || "#"}
              className="text-sm text-[#C4C1BC] hover:text-[#D4315E] transition-colors"
              target="_blank"
              rel="noreferrer"
            >
              {item.social === "division" ? "·" : item.social}
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Mimo;
