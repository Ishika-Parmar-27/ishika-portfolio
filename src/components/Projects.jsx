

function Projects() {
  const projects = [
    {
      title: "Study Quest",
      desc: "A gamified education platform designed to make learning engaging and rewarding.",
      tech: "React • Node.js",
      image: null,
    },
    {
      title: "Student Management System",
      desc: "A CRUD system for managing student records with a clean interface.",
      tech: "MERN Stack",
      image: null,
    },
    {
      title: "Employee Performance Management",
      desc: "A system to track employees, projects and performance reviews.",
      tech: "Java • Spring Boot",
      image: null,
    },
  ];

  return (
    <section id="projects" className="py-24 bg-[#f1f2f0]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-2">Selected Works</h2>
        <p className="text-slate-600 mb-10">
          A collection of academic and personal engineering projects.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-[#f7f8f6] rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition"
            >
              {project.image ? (
  <img
    src={project.image}
    alt={project.title}
    className="h-44 w-full object-cover"
  />
) : (
  <div className="h-44 bg-[#dfe3dc] flex items-center justify-center text-[#566b1f] font-bold">
    Project Preview
  </div>
)}
              <div className="p-6">
                <span className="text-xs bg-[#e6eadf] px-3 py-1 rounded font-semibold text-[#566b1f]">
                  {project.tech}
                </span>

                <h3 className="text-2xl font-bold mt-5 mb-4">
                  {project.title}
                </h3>

                <p className="text-slate-700 mb-6">{project.desc}</p>

                <div className="flex justify-between text-sm">
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