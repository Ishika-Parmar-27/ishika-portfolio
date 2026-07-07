import { Briefcase, Terminal, Brain, GraduationCap } from "lucide-react";

function Journey() {
  const items = [
    [<Briefcase />, "Internship", "Java Full Stack Intern at Insta Dot Analytics."],
    [<Terminal />, "Projects", "Built multiple full-stack projects using MERN Stack and Spring Boot."],
    [<Brain />, "DSA Journey", "Actively solving DSA problems on HackerRank and improving skills."],
    [<GraduationCap />, "Currently Learning", "React, Spring Boot, System Design Basics and Advanced MERN."],
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12">Achievements & Journey</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(([icon, title, text]) => (
            <div key={title} className="bg-[#f4f5f3] border border-gray-200 rounded-xl p-7">
              <div className="text-[#566b1f] mb-5">{icon}</div>
              <h3 className="text-xl font-bold mb-4">{title}</h3>
              <p className="text-slate-700 leading-7">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Journey;