import { Link } from "react-router-dom";
import movaIcon from "../assets/png/mova/movaIcon.png";
import movaHero from "../assets/png/mova/mova-hero.png";
import tradeoffHero from "../assets/png/mova/tradeoff-hero-mova.png";
import mova6 from "../assets/png/mova/mova6.png";
import mova7 from "../assets/png/mova/mova7.png";
import mova9 from "../assets/png/mova/mova9.png";
import mova10 from "../assets/png/mova/mova10.png";
import mova11 from "../assets/png/mova/mova11.png";
import mova12 from "../assets/png/mova/mova12.png";
import Footer from "../components/Footer";
import React from "react";

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
    text: "Interviews, online surveys, and competitive benchmarking with 10+ personal trainers. Goal: understand not just how they train clients, but how they run their business a distinction that completely shaped the product.",
  },
  {
    number: "02",
    title: "Design",
    text: "tarted with low-fidelity wireframes to validate flows before investing in visual design. A collaborative design system was built in parallel essential for maintaining consistency across web, tablet, and mobile with a team of designers working simultaneously.",
  },
  {
    number: "03",
    title: "Define",
    text: "Synthesized findings into personas, user journey maps, prioritized features, and user flows for both platforms web and mobile. With two distinct users (trainer and student), mapping separate journeys was essential to avoid designing one experience at the expense of the other.",
  },

  {
    number: "04",
    title: "Handoff",
    text: "Close collaboration with developers throughout the entire process, not just at the end. Regular syncs ensured technical feasibility was considered from wireframe stage, reducing rework and keeping both platforms aligned.",
  },
];

const decision = [
  {
    number: 1,
    title1: "WE CHOSE",
    p1a: "Web  first, mobile later",
    p1b: "We focused on the web experience before building the mobile app.",
    title2: "WE GAINED",
    p2a: "Focus and consistency in the trainer’s core experience.",
    p2b: "We built a stronger foundation for personal trainers with a consistent and powerful experience.",
    title3: "WE SACRIFICED",
    p3a: "Delayed the delivery of the student experience.",
    p3b: "Students have to wait longer for a dedicated mobile experience.",
  },
  {
    number: 2,
    title1: "WE CHOSE",
    p1a: "A more guided workout creation flow.",
    p1b: "Instead of a fully free-form workout builder.",
    title2: "WE GAINED",
    p2a: "Simplicity for new users.",
    p2b: "A guided flow reduces friction and helps trainers create their first workouts faster.",
    title3: "WE SACRIFICED",
    p3a: "Limited flexibility for experienced trainers.",
    p3b: "Advanced trainers have less freedom to customize their workouts.",
  },
  {
    number: 3,
    title1: "WE CHOSE",
    p1a: "To leave the financial module out of the MVP.",
    p1b: "We focused on validating the core product first.",
    title2: "WE GAINED",
    p2a: "Speed to validate the core of the product.",
    p2b: "We can test the main value proposition and iterate faster.",
    title3: "WE SACRIFICED",
    p3a: "We postponed one of the biggest pains identified in research.",
    p3b: "Financial management is a critical need for trainers and will come next.",
  },
];

function Mova() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="p-4 md:p-8 flex flex-col items-center gap-4 md:gap-5">
      {/* ── HEADER ── */}
      <section className="w-full rounded-3xl bg-white/85 px-6 md:px-10 pt-8 pb-10 flex flex-col gap-8">
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

        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 md:gap-8">
          {/* Left: logo + name + tags */}
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl overflow-hidden shrink-0">
                <img
                  src={movaIcon}
                  alt="Mova"
                  className="w-full h-full object-cover"
                />
              </div>
              <h1 className="text-2xl md:text-3xl font-normal">Mova</h1>
            </div>
            <div className="flex flex-wrap gap-2">
              {["Web", "App Mobile", "B2B", "SaaS"].map((tag, i) => (
                <span
                  key={i}
                  className="text-xs px-3 py-1.5 rounded-full border border-[#E8E8E5] text-[#1A1814] bg-white"
                >
                  {tag}
                </span>
              ))}
              <a
                href="https://www.instagram.com/movaclub.br?igsh=MWkzNTN3YnRra2xvdA=="
                target="blank"
                className="group inline-flex items-center justify-center gap-2 rounded-3xl px-3 py-1.5 transition-all duration-300 hover:-translate-y-1 text-xs border border-[#D4315D] text-[#D4315D] bg-[#FFECF1]"
              >
                <span>Follow us on instagram</span>
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 13 13"
                  fill="currentColor"
                  className="h-3 w-3 rotate-45 transition-transform duration-300 group-hover:-rotate-5"
                >
                  <path d="M11.3125 0C11.7188 0 12.0625 0.34375 12.0625 0.75V8.25C12.0625 8.65625 11.7188 9 11.3125 9C10.9062 9 10.5625 8.65625 10.5625 8.25V2.5625L1.34375 11.7812C1.0625 12.0625 0.5625 12.0625 0.28125 11.7812C0 11.5 0 11 0.28125 10.7188L9.5 1.5H3.8125C3.40625 1.5 3.0625 1.15625 3.0625 0.75C3.0625 0.34375 3.40625 0 3.8125 0H11.3125Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right: description */}
          <p className="text-lg md:text-2xl text-[#1A1814] leading-relaxed md:max-w-[650px] font-light">
            Personal trainers are entrepreneurs. But most are running their
            business on WhatsApp, spreadsheets, and memory. Mova was built to
            change that a complete management platform where trainers handle
            students, workouts, payments, and business growth, all in one place.
          </p>
        </div>

        {/* Role / Platform / Tools */}
        <div className="flex flex-wrap gap-3 md:gap-10 md:self-end">
          {[
            { label: "Role", value: "UX/UI Designer" },
            { label: "Platform", value: "Web · Mobile" },
            { label: "Tools", value: "Figma · Figma Jam" },
          ].map((item) => (
            <div
              key={item.label}
              className="flex flex-col gap-1 border border-[#F1F1F0] rounded-xl px-4 py-4 md:py-5"
            >
              <span className="text-[#9B9893] tracking-widest text-xs uppercase">
                {item.label}
              </span>
              <span className="text-sm text-[#1A1A1A]">{item.value}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── HERO GRID ── */}
      <section className="w-full rounded-3xl bg-white/85 px-6 md:px-10 pt-10 pb-10">
        <img src={movaHero} alt="" className="" />
      </section>

      {/* ── PROBLEM ── */}
      <section className="w-full rounded-3xl bg-white/85 px-6 md:px-10 pt-10 pb-10 flex flex-col gap-8">
        <span className="text-[#9B9893] tracking-widest text-xs uppercase">
          Problem
        </span>

        <div className="flex flex-col gap-6 ">
          <div className="md:w-[38%] shrink-0">
            <h2 className="text-2xl md:text-4xl font-normal leading-snug">
              What problem{" "}
              <span className="text-[#9B9893] italic font-light">
                were we solving?
              </span>
            </h2>
          </div>
          <div className="flex flex-col gap-4 text-[#1A1814] text-base md:text-2xl leading-relaxed font-light flex-1">
            <p>
              We ran interviews, surveys, and competitive benchmarking with over
              10 personal trainers. Three layers of pain emerged:
            </p>
            <p>
              Technical: trainers needed free-form notes, periodization control,
              load progression tracking, and full student history in one place.
            </p>
            <p>
              Operational: no macro view of the business. No way to know who
              evolved, who needed attention, or what was happening across their
              entire client base.
            </p>
            <p>
              Financial: the most critical discovery. Trainers were losing
              revenue without realizing it: no renewal tracking, no income
              overview, money slipping through manual gaps.
            </p>
            <p>
              The insight that reframed everything: the real problem wasn't
              managing workouts, it was running a business with no
              infrastructure for it.
            </p>
          </div>
        </div>
      </section>

      {/* ── DECISION ── */}
      <section className="w-full rounded-3xl bg-white/85 px-6 md:px-10 pt-10 pb-10 flex flex-col gap-8">
        <span className="text-[#9B9893] tracking-widest text-xs uppercase">
          Decision
        </span>

        <div className="flex flex-col gap-6 ">
          <div className="md:w-[38%] shrink-0">
            <h2 className="text-2xl md:text-4xl font-normal leading-snug">
              What were the{" "}
              <span className="text-[#9B9893] italic font-light">
                trade-offs?
              </span>
            </h2>
          </div>
          <div className="flex flex-col gap-4 text-[#1A1814] text-base md:text-2xl leading-relaxed font-light flex-1">
            <p>
              MOVA wasn’t designed to do everything from day one. It was
              designed to solve the most painful workflows first.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {decision.map((item) => (
              <div
                key={item.number}
                className="flex flex-col h-full gap-6 px-6 md:px-8 py-6 border border-black/6 rounded-3xl bg-white"
              >
                <p className="text-[#D4315D] bg-[#FFECF1] text-xl md:text-2xl px-5 py-3 rounded-2xl w-fit">
                  {item.number}
                </p>

                <div className="flex flex-col gap-2">
                  <p className="text-[#D4315D] text-sm md:text-base">
                    {item.title1}
                  </p>
                  <p className="font-bold text-lg">{item.p1a}</p>
                  <p className="text-neutral-700">{item.p1b}</p>
                </div>

                <hr className="border-[#F2F2F2]" />

                <div className="flex flex-col gap-2">
                  <p className="text-[#1E841E] text-sm md:text-base">
                    {item.title2}
                  </p>
                  <p className="font-bold text-lg">{item.p2a}</p>
                  <p className="text-neutral-700">{item.p2b}</p>
                </div>

                <hr className="border-[#F2F2F2]" />

                <div className="flex flex-col gap-2">
                  <p className="text-[#D43131] text-sm md:text-base">
                    {item.title3}
                  </p>
                  <p className="font-bold text-lg">{item.p3a}</p>
                  <p className="text-neutral-700">{item.p3b}</p>
                </div>
              </div>
            ))}
          </div>
          <img src={tradeoffHero} alt="" className="" />
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="w-full rounded-3xl bg-white/85 px-6 md:px-10 pt-10 pb-10 flex flex-col gap-8 md:gap-10">
        <span className="text-[#9B9893] tracking-widest text-xs uppercase">
          Process
        </span>

        <h2 className="text-2xl md:text-4xl font-normal leading-snug">
          How did{" "}
          <span className="text-[#9B9893] italic font-light">
            we get there?
          </span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-8">
          {processSteps.map((step) => (
            <div key={step.number} className="flex gap-6 md:gap-10">
              <span className="text-2xl md:text-3xl text-[#D4315D] font-serif shrink-0">
                {step.number}
              </span>
              <div className="flex flex-col gap-2">
                <p className="text-lg md:text-2xl font-semibold text-[#1A1814]">
                  {step.title}
                </p>
                <p className="text-base md:text-2xl text-[#1A1814] leading-relaxed font-light">
                  {step.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <img
            src={mova6}
            alt=""
            className="w-full h-56 md:h-80 object-cover rounded-2xl"
          />
          <img
            src={mova7}
            alt=""
            className="w-full h-56 md:h-80 object-cover rounded-2xl"
          />
        </div>
      </section>

      {/* ── SOLUTION ── */}
      <section className="w-full rounded-3xl bg-white/85 px-6 md:px-10 pt-10 pb-10 flex flex-col gap-8">
        <span className="text-[#9B9893] tracking-widest text-xs uppercase">
          Solution
        </span>

        <h2 className="text-2xl md:text-4xl font-normal leading-snug">
          What{" "}
          <span className="text-[#9B9893] italic font-light">we built</span>
        </h2>

        <div className="flex flex-col gap-4 leading-relaxed font-light text-[#1A1814] text-base md:text-2xl">
          <p>
            Mova was designed with one principle: everything on screen must earn
            its place.
          </p>
          <p>
            The most complex challenge was the student profile and workout
            creation flow. Personal trainers needed to create detailed,
            structured workouts quickly, but most competing apps failed here,
            drowning users in complexity. We mapped every step of the flow in
            detail, debating each interaction until it felt inevitable rather
            than designed. The result is a flow built for real-world speed:
            intuitive enough for daily use, complete enough for professional
            needs.
          </p>
          <p>
            The platform was also designed with the student experience in mind
            from day one, every decision in the trainer's interface considered
            how it would translate to what the student sees and feels in the
            companion app.
          </p>
          <p>
            Nothing in Mova exists for aesthetics. Every element was justified
            against a real user need.
          </p>
        </div>

        <video autoPlay muted loop playsInline className="w-full rounded-3xl">
          <source src="/videos/video-mova.mov" type="video/mp4" />
        </video>
      </section>

      {/* ── LEARNINGS ── */}
      <section className="w-full rounded-3xl bg-white/85 px-6 md:px-10 pt-10 pb-10 flex flex-col gap-8">
        <span className="text-[#9B9893] tracking-widest text-xs uppercase">
          Learnings
        </span>

        <h2 className="text-2xl md:text-4xl font-normal leading-snug">
          What{" "}
          <span className="text-[#9B9893] italic font-light">
            I took from this
          </span>
        </h2>

        <p className="leading-relaxed font-light text-[#1A1814] text-base md:text-2xl">
          What this project built in meDesigning a SaaS B2B platform from
          scratch is a different challenge than a consumer app, the user is a
          professional with high expectations and low tolerance for friction.
          Mova pushed me to think in systems, not screens: how decisions in one
          flow affect another, how a design system holds two platforms together,
          how to design for complexity without adding it. <br /> <br /> Mova is
          still in development, which means every design decision is still being
          tested against reality. The next phase focuses on the financial module
          and student-facing features. The goal is a platform where personal
          trainers spend less time managing and more time doing what they're
          actually good at.
        </p>

        <div className="grid grid-cols-2 gap-4">
          <img
            src={mova9}
            alt=""
            className="w-full h-44 md:h-64 object-cover rounded-2xl"
          />
          <img
            src={mova10}
            alt=""
            className="w-full h-44 md:h-64 object-cover rounded-2xl"
          />
          <img
            src={mova11}
            alt=""
            className="w-full h-44 md:h-64 object-cover rounded-2xl"
          />
          <img
            src={mova12}
            alt=""
            className="w-full h-44 md:h-64 object-cover rounded-2xl"
          />
        </div>
      </section>

      {/* ── FOOTER / CTA ── */}
      <Footer contact={contact} />
    </div>
  );
}

export default Mova;
