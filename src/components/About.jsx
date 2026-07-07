import { GraduationCap, Briefcase, Rocket } from "lucide-react";

function About() {
  return (
    <section id="about" className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-4xl font-bold mb-6">About Me</h2>
          <p className="text-slate-700 leading-8 mb-5">
            I am a Computer Science student with a deep fascination for the full
            software development lifecycle. My journey started with curiosity
            about how data moves across the web.
          </p>
          <p className="text-slate-700 leading-8">
            Currently, I am honing my skills as a <b>Java Full Stack Intern</b>,
            where I apply theoretical knowledge to real-world development.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          <Card icon={<GraduationCap />} title="Education" text="B.Tech in Computer Science & Engineering" />
          <Card icon={<Briefcase />} title="Current Role" text="Intern at Insta Dot Analytics" />
          <div className="sm:col-span-2">
            <Card icon={<Rocket />} title="Career Goal" text="Building scalable and user-friendly software solutions." />
          </div>
        </div>
      </div>
    </section>
  );
}

function Card({ icon, title, text }) {
  return (
    <div className="bg-[#f4f5f3] border border-gray-200 rounded-xl p-7">
      <div className="text-[#566b1f] mb-4">{icon}</div>
      <h3 className="font-bold text-xl mb-3">{title}</h3>
      <p className="text-slate-700">{text}</p>
    </div>
  );
}

export default About;