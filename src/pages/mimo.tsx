import { Link } from "react-router-dom";
import mimoIcon from "../assets/png/mimo/mimoicon.png";
import mimoHero from "../assets/png/mimo/mimo-hero.png";
import mimo6 from "../assets/png/mimo/mimo6.png";
import mimo7 from "../assets/png/mimo/mimo7.png";
import mimo8 from "../assets/png/mimo/mimo8.png";
import mimo9 from "../assets/png/mimo/mimo9.png";
import mimo10 from "../assets/png/mimo/mimo10.png";
import mimo11 from "../assets/png/mimo/mimo11.png";
import mimo12 from "../assets/png/mimo/mimo12.png";
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
    text: "Online survey with 10+ users aged 25–35 and benchmarking of similar apps. Goal: understand how people currently track birthdays and what they expected from a gifting experience.",
  },
  {
    number: "02",
    title: "Define",
    text: "Synthesized findings into personas, a user journey map, and prioritized features. The shared wishlist emerged here as the highest-value feature unexpected, but validated by the data.",
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

const decision = [
  {
    number: 1,
    title1: "WE CHOSE",
    p1a: "A complete wishlist (proto, price, link)",
    p1b: "Instead of a simplified version.",
    title2: "WE GAINED",
    p2a: "Immediate perceived value",
    p2b: "Users see real value from the first interaction.",
    title3: "WE SACRIFICED",
    p3a: "Increased onboarding complexity",
    p3b: "More information to understand for new users.",
  },
  {
    number: 2,
    title1: "WE CHOSE",
    p1a: "Infinite scroll with automatic reordering",
    p1b: "Instead of a calendar view.",
    title2: "WE GAINED",
    p2a: "Visual simplicity and focus",
    p2b: "A cleaner, lighter experience that keeps users in flow.",
    title3: "WE SACRIFICED",
    p3a: "A clearer time-based overview",
    p3b: "Users give up a calendar perspective to see upcoming events.",
  },
  {
    number: 3,
    title1: "WE CHOSE",
    p1a: "To focus the MVP on core flows",
    p1b: "And leave social features for future versions.",
    title2: "WE GAINED",
    p2a: "Faster time to market",
    p2b: "We lauched sooner with a strong focused foundation.",
    title3: "WE SACRIFICED",
    p3a: "Initial viral potential",
    p3b: "Social features could have driven more organic growth early on.",
  },
];

function Mimo() {
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
                  src={mimoIcon}
                  alt="Mimo"
                  className="w-full h-full object-cover"
                />
              </div>
              <h1 className="text-2xl md:text-3xl font-normal">Mimo</h1>
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
                href="https://apps.apple.com/es/app/mimo-birthdays-wishlists/id6755482120?l=en-GB"
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
            We stopped writing birthdays in planners. We started relying on
            social media. Mimo was built to bring that care back — a mobile app
            where you track birthdays, create wishlists, and actually show up
            for the people you love.
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
        <img src={mimoHero} alt="" className="" />
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
            src={mimo6}
            alt=""
            className="w-full h-56 md:h-80 object-cover rounded-2xl"
          />
          <img
            src={mimo7}
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
            Mimo is built around one core promise: you'll never miss a birthday,
            and when it comes, you'll know exactly what to give.
          </p>
          <p>
            The biggest design challenge was the home screen. Birthdays repeat
            every year, which raises a UX question: how do you display a fixed
            annual list in a way that feels alive? After discussions with the
            dev team, we landed on infinite scroll with a simple rule, once a
            birthday passes, it moves to the end of the queue. The current week
            surfaces at the top, the rest is organized by month.
          </p>
          <p>
            The countdown timer replaced a static date by choice, a number
            ticking down creates urgency that a calendar date doesn't.
          </p>
          <p>
            The profile works as a gift guide: clothing size, interests, and a
            wishlist with photos, prices, and store links. Built complete on
            purpose — half-information creates friction, and friction kills the
            gesture.
          </p>
        </div>

        <video autoPlay muted loop playsInline className="w-full rounded-3xl">
          <source src="/videos/video-mimo.mov" type="video/mp4" />
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
          Mimo was my first complete product experience, from the first
          conversation about the concept to Apple Store approval. As a junior, I
          was involved in every decision: research, flows, design, dev handoff,
          and usability testing. No course project delivers that. The biggest
          lesson wasn't a design skill, it was learning to hold the full picture
          of a product while staying focused on the user.
        </p>

        <div className="grid grid-cols-2 gap-4">
          <img
            src={mimo9}
            alt=""
            className="w-full h-44 md:h-64 object-cover rounded-2xl"
          />
          <img
            src={mimo10}
            alt=""
            className="w-full h-44 md:h-64 object-cover rounded-2xl"
          />
          <img
            src={mimo11}
            alt=""
            className="w-full h-44 md:h-64 object-cover rounded-2xl"
          />
          <img
            src={mimo12}
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

export default Mimo;
