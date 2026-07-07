import { ArrowRight, Download } from "lucide-react";
import profile from "../assets/profile.png";

function Hero() {
  return (
    <section
      id="home"
      className="max-w-6xl mx-auto px-6 py-28 grid md:grid-cols-2 items-center gap-12"
    >
      <div>
        <h1 className="text-6xl md:text-7xl font-bold tracking-tight mb-5">
          Ishika Parmar
        </h1>

        <h3 className="text-xl md:text-2xl font-semibold text-slate-600 mb-5">
          Java Full Stack & MERN Developer
        </h3>

        <p className="text-slate-700 text-lg leading-8 max-w-lg mb-8">
          A passionate Computer Science student and aspiring software engineer
          dedicated to building scalable web applications and solving complex
          problems with elegant code.
        </p>

        <div className="flex flex-wrap gap-4">
          <button className="bg-[#566b1f] text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-2 hover:bg-[#485b19] hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
            View Projects
            <ArrowRight size={18} />
          </button>

          <button className="border border-gray-400 px-8 py-4 rounded-xl font-semibold flex items-center gap-2 hover:bg-white hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
            Download Resume
            <Download size={18} />
          </button>
        </div>
      </div>

      <div className="flex justify-center md:justify-end">
        <div className="w-72 h-72 md:w-80 md:h-80 rounded-full border-[5px] border-[#cfe87a] flex items-center justify-center bg-white shadow-xl">
          <img
            src={profile}
            alt="Ishika Parmar"
            className="w-56 h-56 md:w-64 md:h-64 rounded-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;