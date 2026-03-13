import arrow from "../assets/svg/arrow.svg";

function ButtonCta() {
  return (
    <a
      href="mailto:natalialopes.mja@gmail.com"
      className="bg-black text-white flex flex-row items-center justify-center gap-2 rounded-full px-12 py-3.5 cursor-pointer hover:scale-105 transition-transform hover:bg-black/85"
    >
      <p>Say hello</p>
      <img src={arrow} alt="" className="h-3 w-3 rotate-45" />
    </a>
  );
}

export default ButtonCta;
