function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#f7f8f6]">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-5xl font-bold mb-6">Let's Connect</h2>

        <p className="text-slate-700 mb-10">
          I'm currently looking for new opportunities in Software Engineering.
        </p>

        <form className="grid gap-5 text-left">
          <div className="grid sm:grid-cols-2 gap-5">
            <input
              className="p-4 border border-gray-300 rounded-md bg-white"
              placeholder="Your Name"
            />

            <input
              className="p-4 border border-gray-300 rounded-md bg-white"
              placeholder="your@email.com"
            />
          </div>

          <textarea
            className="p-4 border border-gray-300 rounded-md bg-white h-32"
            placeholder="How can I help you?"
          />

          <button className="bg-[#566b1f] text-white py-4 rounded-md font-semibold">
            Send Message
          </button>
        </form>

        <div className="flex flex-wrap justify-center gap-8 mt-10 text-sm">
          <span>✉ Email</span>
          <span>LinkedIn</span>
          <span>GitHub</span>
          <span>Resume</span>
        </div>
      </div>
    </section>
  );
}

export default Contact;