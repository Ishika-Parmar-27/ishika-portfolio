import { useState } from "react";
import { motion } from "framer-motion";

import studyQuest from "../assets/studyquest.png";
import studentManagement from "../assets/StudentManagement.png";
import employeePerformance from "../assets/EmployeePerformance.png";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Study Quest",
      tech: "React • Node.js • MongoDB",
      image: studyQuest,
      desc: "A gamified learning platform featuring quests, XP, streaks, badges, analytics and leaderboard.",
      github: "https://github.com/Ishika-Parmar-27/Study-Quest-Game",
      demo: "https://study-quest-game.vercel.app/",
      features: ["JWT Authentication", "XP & Level System", "Study Streaks", "Analytics Dashboard", "Leaderboard"],
      learning: "Improved MERN development, authentication, dashboards and deployment skills.",
    },
    {
      title: "Student Management System",
      tech: "MERN Stack",
      image: studentManagement,
      desc: "A CRUD application for managing student records using React, Node.js, Express and MongoDB.",
      github: "https://github.com/Ishika-Parmar-27/student-management-api",
      demo: "#",
      features: ["Add Students", "Update Records", "Delete Records", "MongoDB Integration", "REST APIs"],
      learning: "Strengthened CRUD operations, API handling and MongoDB integration.",
    },
    {
      title: "Employee Performance Management",
      tech: "Java • Spring Boot • MySQL",
      image: employeePerformance,
      desc: "A backend system with JWT Authentication, Spring Security, Swagger, Docker and REST APIs.",
      github: "https://github.com/Ishika-Parmar-27/employee-performance-management-system",
      demo: "#",
      features: ["JWT Authentication", "Role-Based Access", "Swagger API Docs", "Dockerized Backend", "JUnit Testing"],
      learning: "Gained practical experience with Spring Boot backend architecture and secure APIs.",
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

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="hover:text-[#566b1f]"
                  >
                    Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div className="fixed inset-0 z-[100] bg-black/50 flex items-center justify-center px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white max-w-2xl w-full rounded-2xl p-8 relative shadow-2xl"
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-5 text-2xl text-gray-500 hover:text-black"
            >
              ×
            </button>

            <h3 className="text-3xl font-bold mb-3">
              {selectedProject.title}
            </h3>

            <p className="text-[#566b1f] font-semibold mb-5">
              {selectedProject.tech}
            </p>

            <p className="text-slate-700 leading-7 mb-6">
              {selectedProject.desc}
            </p>

            <h4 className="font-bold text-lg mb-3">Key Features</h4>
            <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-6">
              {selectedProject.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>

            <h4 className="font-bold text-lg mb-3">What I Learned</h4>
            <p className="text-slate-700 leading-7 mb-6">
              {selectedProject.learning}
            </p>

            <div className="flex gap-4">
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#566b1f] text-white px-5 py-3 rounded-xl font-semibold"
              >
                GitHub
              </a>

              {selectedProject.demo !== "#" && (
                <a
                  href={selectedProject.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-gray-300 px-5 py-3 rounded-xl font-semibold"
                >
                  Live Demo
                </a>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}

export default Projects;