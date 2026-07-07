function Experience() {
  return (
    <section id="experience" className="py-28 bg-white">
      <div className="max-w-5xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center mb-5">
          Experience
        </h2>

        <p className="text-center text-slate-600 mb-16">
          My professional journey so far.
        </p>

        <div className="relative border-l-2 border-[#cfe87a] pl-10">

          <div className="absolute -left-[13px] top-1 w-6 h-6 rounded-full bg-[#566b1f] border-4 border-[#dfeab5]"></div>

          <span className="inline-block bg-[#e6eadf] text-[#566b1f] px-4 py-1 rounded-full text-sm font-semibold mb-5">
            Current
          </span>

          <h3 className="text-3xl font-bold">
            Java Full Stack Intern
          </h3>

          <p className="text-lg text-slate-600 font-medium mt-2">
            Insta Dot Analytics
          </p>

          <p className="text-slate-700 leading-8 mt-6">
            Working on enterprise-grade backend applications using Spring Boot,
            REST APIs, JWT Authentication, Docker, Swagger, JUnit and MySQL.
            Collaborating on real-world projects while improving software
            engineering practices.
          </p>

        </div>

      </div>
    </section>
  );
}

export default Experience;