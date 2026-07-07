import { GraduationCap, Briefcase, Rocket } from "lucide-react";

function About() {
  return (
    <section id="about" className="bg-white py-28">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
       <div>
          <h2 className="text-5xl font-bold mb-6">About Me</h2>
          <p className="text-slate-700 leading-8 text-lg mb-6">
  I am a Computer Science student passionate about building impactful
  software and constantly learning modern technologies. My journey
  started with curiosity about how websites and applications work,
  which gradually led me into full-stack development.
</p>

<p className="text-slate-700 leading-8 text-lg">
  Currently, I'm working as a <span className="font-semibold text-[#566b1f]">
    Java Full Stack Intern
  </span>, where I'm gaining practical experience in Spring Boot,
  React, REST APIs and database-driven applications.
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
    <div className="bg-[#fafaf9] border border-gray-200 shadow-sm hover:-translate-y-2
hover:shadow-xl
transition-all
duration-300 rounded-2xl p-8">
      <div className="text-[#6d812d] mb-4">{icon}</div>
      <h3 className="font-bold text-2xl mb-3">{title}</h3>
      <p className="text-slate-700">{text}</p>
    </div>
  );
}

export default About;