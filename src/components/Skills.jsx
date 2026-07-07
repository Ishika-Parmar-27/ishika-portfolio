function Skills() {
  const groups = [
    ["Languages", ["Java", "JavaScript", "Python", "C++"]],
    ["Frontend", ["React.js", "HTML5/CSS3", "Tailwind"]],
    ["Backend", ["Spring Boot", "Node.js", "Express"]],
    ["Database", ["MySQL", "MongoDB", "PostgreSQL"]],
    ["Tools", ["Git/GitHub", "Docker", "Postman"]],
  ];

  return (
    <section id="skills" className="py-28 bg-[#f1f2f0]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-4">
          Technical Arsenal
        </h2>

        <p className="text-center text-slate-600 mb-14">
          Tools and technologies I use to build full-stack applications.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {groups.map(([title, skills]) => (
            <div
              key={title}
              className="bg-[#fafaf9] border border-gray-200 rounded-2xl p-7 shadow-sm hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
            >
              <h3 className="uppercase text-sm tracking-wide text-slate-600 mb-6">
                {title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-[#e6eadf] text-[#566b1f] px-3 py-1.5 rounded-md text-sm font-semibold"
                  >
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