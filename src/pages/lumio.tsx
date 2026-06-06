import { Link } from "react-router-dom";
import lumioIcon from "../assets/png/lumio/lumioIcon.png";
import lumioHero from "../assets/png/lumio/lumio-hero.png";
import lumio6 from "../assets/png/lumio/lumio6.png";
import lumio7 from "../assets/png/lumio/lumio7.png";
import lumio8 from "../assets/png/lumio/lumio9.png";
import lumio9 from "../assets/png/lumio/lumio9.png";
import lumio10 from "../assets/png/lumio/lumio10.png";
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
    text: "User research and competitive benchmarking of existing devotional and Bible apps. The benchmark revealed a consistent pattern: complex navigation, outdated UI, and no emotional personalization whatsoever.",
  },
  {
    number: "02",
    title: "Design",
    text: "Focused heavily on UI, visual language was a key differentiator. Lumio needed to feel warm, modern, and intentional, in direct contrast to the aesthetic of competing apps.",
  },
  {
    number: "03",
    title: "Define",
    text: "Mapped the core daily flow: mood → verse → chapter → journal, and validated it with users. Simplicity was the north star: every feature had to justify its place in a single daily ritual.",
  },
  {
    number: "04",
    title: "Ship",
    text: "Went through the full Apple App Store approval process, from design to submission. Already live on iOS.",
  },
];

function Lumio() {
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
                  src={lumioIcon}
                  alt="lumio"
                  className="w-full h-full object-cover"
                />
              </div>
              <h1 className="text-2xl md:text-3xl font-normal">lumio</h1>
            </div>
            <div className="flex flex-wrap gap-2">
              {["App Mobile", "iOS", "B2C"].map((tag, i) => (
                <span
                  key={i}
                  className="text-xs px-3 py-1.5 rounded-full border border-[#E8E8E5] text-[#1A1814] bg-white"
                >
                  {tag}
                </span>
              ))}
              <a
                href="https://apps.apple.com/us/app/lumio-bible-devotionals/id6755790168"
                target="blank"
                className="group inline-flex items-center justify-center gap-2 rounded-3xl px-3 py-1.5 transition-all duration-300 hover:-translate-y-1 text-xs border border-[#D4315D] text-[#D4315D] bg-[#FFECF1]"
              >
                <span>Go to App Store</span>
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
            Most devotional apps feel like homework. Lumio was built to feel
            like a conversation, one that starts with how you're actually
            feeling. Every day begins with your mood, and from there, Lumio
            guides you to a verse, a chapter, and a space to write whatever's on
            your mind.
          </p>
        </div>

        {/* Role / Platform / Tools */}
        <div className="flex flex-wrap gap-3 md:gap-10 md:self-end">
          {[
            { label: "Role", value: "UX/UI Designer" },
            { label: "Platform", value: "Mobile · iOS" },
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
        <img src={lumioHero} alt="" className="" />
      </section>

      {/* ── PROBLEM ── */}
      <section className="w-full rounded-3xl bg-white/85 px-6 md:px-10 pt-10 pb-10 flex flex-col gap-8">
        <span className="text-[#9B9893] tracking-widest text-xs uppercase">
          Problem
        </span>

        <div className="flex flex-col  gap-6 ">
          <div className="md:w-[38%] shrink-0">
            <h2 className="text-2xl md:text-4xl font-normal leading-snug">
              What problem{" "}
              <span className="text-[#9B9893] italic font-light">
                were we solving?
              </span>
            </h2>
          </div>
          <div className="flex flex-col gap-4 text-[#1A1814] text-base md:text-2xl leading-relaxed font-light flex-1 ">
            <p>
              Existing devotional apps are rigid, visually dated, and
              disconnected from how people actually feel day to day. They offer
              content, but not connection. We set out to build something
              different: a daily spiritual experience that starts with the user,
              not with a pre-set plan.
            </p>
            {/* <p>
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
            </p> */}
          </div>
        </div>
      </section>

      {/* ── Decision ── */}
      <section className="w-full rounded-3xl bg-white/85 px-6 md:px-10 pt-10 pb-10 flex flex-col gap-8">
        <span className="text-[#9B9893] tracking-widest text-xs uppercase">
          Problem
        </span>

        <div className="flex flex-col  gap-6 ">
          <div className="md:w-[38%] shrink-0">
            <h2 className="text-2xl md:text-4xl font-normal leading-snug">
              What problem{" "}
              <span className="text-[#9B9893] italic font-light">
                trade-offs?
              </span>
            </h2>
          </div>
          <div className="flex flex-col gap-4 text-[#1A1814] text-base md:text-2xl leading-relaxed font-light flex-1 ">
            <p>
              For Lumio, we prioritized the emotional experience, connecting
              mood to scripture instead of focusing on advanced functionality
              from the start. This gave the product a more distinctive and
              meaningful positioning in the market, although it may initially
              feel too simple for users expecting a feature-heavy app.
            </p>
            <p>
              We also chose a fixed daily flow rather than fully open
              navigation. This helped reinforce habit-building and created a
              calmer, more guided experience, but limited users who prefer
              exploring the Bible in a more flexible and non-linear way.
            </p>
            <p>
              A significant part of our effort went into crafting the product’s
              visual identity and tone of voice. This gave Lumio a strong
              personality and clear differentiation from traditional devotional
              apps, although it required a considerable time investment for a
              small team.
            </p>
          </div>
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
            src={lumio6}
            alt=""
            className="w-full h-56 md:h-80 object-cover rounded-2xl"
          />
          <img
            src={lumio7}
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
            lumio was designed with one principle: everything on screen must
            earn its place.
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
            Nothing in lumio exists for aesthetics. Every element was justified
            against a real user need.
          </p>
        </div>

        <img
          src={lumio8}
          alt=""
          className="w-full h-64 md:h-[620px] object-contain rounded-2xl"
        />
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
          lumio pushed me to think in systems, not screens: how decisions in one
          flow affect another, how a design system holds two platforms together,
          how to design for complexity without adding it. <br /> <br /> lumio is
          still in development, which means every design decision is still being
          tested against reality. The next phase focuses on the financial module
          and student-facing features. The goal is a platform where personal
          trainers spend less time managing and more time doing what they're
          actually good at.
        </p>

        <div className="grid grid-cols-2 gap-4">
          <img
            src={lumio9}
            alt=""
            className="w-full h-44 md:h-64 object-cover rounded-2xl"
          />
          <img
            src={lumio10}
            alt=""
            className="w-full h-44 md:h-64 object-cover rounded-2xl"
          />
          {/* <img
            src={lumio11}
            alt=""
            className="w-full h-44 md:h-64 object-cover rounded-2xl"
          />
          <img
            src={lumio12}
            alt=""
            className="w-full h-44 md:h-64 object-cover rounded-2xl"
          /> */}
        </div>
      </section>

      {/* ── FOOTER / CTA ── */}
      <Footer contact={contact} />
    </div>
  );
}

export default Lumio;
