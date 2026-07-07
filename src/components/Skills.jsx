function Skills() {
  const groups = [
    ["Languages", ["Java", "JavaScript", "Python", "C++"]],
    ["Frontend", ["React.js", "HTML5/CSS3", "Tailwind"]],
    ["Backend", ["Spring Boot", "Node.js", "Express"]],
    ["Database", ["MySQL", "MongoDB", "PostgreSQL"]],
    ["Tools", ["Git/GitHub", "Docker", "Postman"]],
  ];

  return (
    <section id="skills" className="py-24 bg-[#f1f2f0]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Technical Arsenal</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {groups.map(([title, skills]) => (
            <div key={title} className="bg-[#f7f8f6] border border-gray-200 rounded-xl p-7">
              <h3 className="uppercase text-sm text-slate-600 mb-5">{title}</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span key={skill} className="bg-[#e6eadf] text-[#566b1f] px-3 py-1 rounded-md text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;