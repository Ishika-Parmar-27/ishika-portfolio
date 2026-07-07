function Experience() {
  return (
    <section id="experience" className="py-24 bg-[#f7f8f6]">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-14">Industry Experience</h2>

        <div className="border-l-2 border-[#cfe87a] pl-8 relative">
          <span className="absolute -left-3 top-0 w-6 h-6 bg-[#566b1f] rounded-full border-4 border-[#dfeab5]"></span>
          <span className="bg-[#e6eadf] text-[#566b1f] px-4 py-1 rounded-full text-sm">Current</span>
          <h3 className="text-2xl font-bold mt-4">Java Full Stack Intern</h3>
          <p className="font-semibold text-slate-700">Insta Dot Analytics</p>
          <p className="text-slate-700 mt-4 leading-7">
            Developing robust web applications using Spring Boot and React,
            participating in code reviews, optimizing database queries and
            implementing RESTful APIs.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Experience;