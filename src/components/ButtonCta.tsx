import arrow from "../assets/svg/arrow.svg";

function ButtonCta() {
  return (
    <a
      href="mailto:natalialopes.mja@gmail.com"
      className="group inline-flex items-center justify-center gap-2 rounded-3xl bg-black px-19.25 py-5.5 text-white transition-all duration-300 hover:-translate-y-1 hover:bg-black/90"
    >
      <p>Say hello</p>
      <img
        src={arrow}
        alt=""
        className="h-3 w-3 rotate-45 transition-transform duration-300 group-hover:-rotate-5"
      />
    </a>
  );
}

export default ButtonCta;
