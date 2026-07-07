import { ArrowRight, Download } from "lucide-react";

function Hero() {
  return (
    <section
      id="home"
      className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 items-center gap-12"
    >
      <div>
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-5">
          Ishika Parmar
        </h1>

        <h3 className="text-xl md:text-2xl font-semibold text-slate-600 mb-5">
          Java Full Stack & MERN Developer
        </h3>

        <p className="text-slate-700 text-lg leading-8 max-w-xl mb-8">
          A passionate Computer Science student and aspiring software engineer
          dedicated to building scalable web applications and solving complex
          problems with elegant code.
        </p>

        <div className="flex flex-wrap gap-4">
          <button className="bg-[#566b1f] text-white px-8 py-4 rounded-md font-semibold flex items-center gap-2 hover:bg-[#485b19] transition">
            View Projects
            <ArrowRight size={18} />
          </button>

          <button className="border border-gray-400 px-8 py-4 rounded-md font-semibold flex items-center gap-2 hover:bg-white transition">
            Download Resume
            <Download size={18} />
          </button>
        </div>
      </div>

      <div className="flex justify-center md:justify-end">
        <div className="w-72 h-72 md:w-80 md:h-80 rounded-full border-4 border-[#cfe87a] flex items-center justify-center bg-white shadow-sm">
          <div className="w-56 h-56 md:w-64 md:h-64 rounded-full bg-[#dbe5cf] flex items-center justify-center text-7xl font-bold text-[#566b1f]">
            IP
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;