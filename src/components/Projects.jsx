function Projects() {
  const projects = [
    {
      title: "Study Quest",
      desc: "A gamified learning platform with quests, XP, streaks, badges, analytics and leaderboard.",
      tech: "React • Node.js • MongoDB",
    },
    {
      title: "Student Management System",
      desc: "A MERN CRUD application for managing student records with add, update and delete features.",
      tech: "MERN Stack",
    },
    {
      title: "Employee Performance Management",
      desc: "A Spring Boot backend system with JWT auth, role-based access, Swagger, Docker and APIs.",
      tech: "Java • Spring Boot • MySQL",
    },
  ];

  return (
    <section id="projects" className="py-28 bg-[#f1f2f0]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-5xl font-bold mb-4">Selected Works</h2>

        <p className="text-slate-600 mb-14 max-w-2xl">
          A collection of full-stack and backend projects built during my learning journey.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group bg-[#fafaf9] rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="h-48 bg-[#dfe3dc] flex items-center justify-center text-[#566b1f] font-bold overflow-hidden">
                <div className="w-full h-full flex items-center justify-center group-hover:scale-105 transition duration-500">
                  Project Preview
                </div>
              </div>

              <div className="p-7">
                <span className="text-xs bg-[#e6eadf] text-[#566b1f] px-3 py-1.5 rounded-md font-semibold">
                  {project.tech}
                </span>

                <h3 className="text-2xl font-bold mt-5 mb-4">
                  {project.title}
                </h3>

                <p className="text-slate-700 leading-7 mb-7">
                  {project.desc}
                </p>

                <div className="flex justify-between text-sm font-medium">
                  <span className="text-[#566b1f] cursor-pointer">↗ Live Demo</span>
                  <span className="cursor-pointer">⌘ GitHub</span>
                  <span className="cursor-pointer">ⓘ Details</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;