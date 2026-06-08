import ButtonCta from "./ButtonCta";
import details1 from "../assets/svg/details1.svg";
import details2 from "../assets/svg/details2.svg";

type Contact = {
  social: string;
  link?: string;
};
type FooterPros = {
  contact: Contact[];
};

const Footer = ({ contact }: FooterPros) => {
  return (
    <section className="w-full rounded-3xl border border-[#F1F1F0] bg-white/85 px-8 md:px-10 pt-14 pb-10 flex flex-col items-center gap-5 relative">
      <h1 className="text-3xl md:text-5xl text-center font-instrument">
        Open to new opportunities
      </h1>
      <p className="text-base md:text-lg text-[#9B9893] font-light text-center">
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
            href={item.link}
            className="text-sm text-[#C4C1BC] hover:text-[#D4315E] transition-colors"
            target="_blank"
            rel="noreferrer"
          >
            {item.social === "division" ? "·" : item.social}
          </a>
        ))}
      </div>
      <img
        src={details1}
        alt=""
        className="absolute left-0 top-0 h-full w-auto object-cover z-0 opacity-0 md:opacity-60 pointer-events-none"
      />
      <img
        src={details2}
        alt=""
        className="absolute right-0 top-0 h-full w-auto object-cover z-0 opacity-0 md:opacity-60 pointer-events-none"
      />
    </section>
  );
};

export default Footer;
