function Journey() {
  const items = [
    {
      icon: "🚀",
      title: "Internship",
      text: "Building enterprise Java applications and learning real-world backend development.",
    },
    {
      icon: "💻",
      title: "Projects",
      text: "Creating full-stack applications using MERN Stack, Spring Boot and modern tools.",
    },
    {
      icon: "🧠",
      title: "DSA",
      text: "Consistently solving HackerRank problems and improving problem-solving skills.",
    },
    {
      icon: "📚",
      title: "Learning",
      text: "Currently learning React, Spring Boot, Docker and System Design basics.",
    },
  ];

  return (
    <section className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-5xl font-bold mb-5">What I'm Building</h2>

        <p className="text-slate-600 mb-14">
          A snapshot of my current learning journey and development progress.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <div
              key={item.title}
              className="bg-[#fafaf9] border border-gray-200 shadow-sm rounded-2xl p-7 hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
            >
              <div className="text-3xl mb-5">{item.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-slate-700 leading-7">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Journey;