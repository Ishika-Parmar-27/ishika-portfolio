import { motion } from "framer-motion";

import studyQuest from "../assets/studyquest.png";
import studentManagement from "../assets/StudentManagement.png";
import employeePerformance from "../assets/EmployeePerformance.png";

function Projects() {
  const projects = [
    {
      title: "Study Quest",
      tech: "React • Node.js • MongoDB",
      image: studyQuest,
      desc: "A gamified learning platform featuring quests, XP, streaks, badges, analytics and leaderboard.",
      github: "https://github.com/Ishika-Parmar-27/Study-Quest-Game",
      demo: "https://study-quest-game.vercel.app/",
    },
    {
      title: "Student Management System",
      tech: "MERN Stack",
      image: studentManagement,
      desc: "A CRUD application for managing student records using React, Node.js, Express and MongoDB.",
      github: "https://github.com/Ishika-Parmar-27/student-management-api",
      demo: "#",
    },
    {
      title: "Employee Performance Management",
      tech: "Java • Spring Boot • MySQL",
      image: employeePerformance,
      desc: "A backend system with JWT Authentication, Spring Security, Swagger, Docker and REST APIs.",
      github: "https://github.com/Ishika-Parmar-27/employee-performance-management-system",
      demo: "#",
    },
  ];

  return (
    <section id="projects" className="py-28 bg-[#f1f2f0]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold mb-4"
        >
          Selected Works
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-slate-600 mb-14"
        >
          A collection of projects built throughout my learning journey.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.15 }}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
            >
              <div className="h-52 overflow-hidden bg-[#dfe3dc]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              <div className="p-6">
                <span className="bg-[#e6eadf] text-[#566b1f] text-xs px-3 py-1 rounded-md font-semibold">
                  {project.tech}
                </span>

                <h3 className="text-2xl font-bold mt-5 mb-4">
                  {project.title}
                </h3>

                <p className="text-slate-700 leading-7 mb-7">
                  {project.desc}
                </p>

                <div className="flex justify-between text-sm font-medium">
                  {project.demo !== "#" ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#566b1f] hover:underline"
                    >
                      ↗ Live Demo
                    </a>
                  ) : (
                    <span className="text-gray-400">Backend Project</span>
                  )}

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#566b1f]"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;