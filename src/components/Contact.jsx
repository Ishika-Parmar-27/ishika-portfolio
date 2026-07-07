import { useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import resume from "../assets/resume.pdf";

function Contact() {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.from_name || !formData.from_email || !formData.message) {
  toast.error("Please fill all fields.");
  return;
}
    setLoading(true);
    

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setStatus("Email sent successfully!");
        setFormData({
          from_name: "",
          from_email: "",
          message: "",
        });
      })
      .catch(() => {
        toast.error("Something went wrong!");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section id="contact" className="py-28 bg-[#f7f8f6]">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-5xl font-bold mb-6">
          Let's Build Something Together
        </h2>

        <p className="text-slate-700 mb-10 leading-7">
          Whether you have an opportunity, a project idea, or simply want to
          connect, I'd love to hear from you.
        </p>

        <form onSubmit={handleSubmit} className="grid gap-5 text-left">
          <div className="grid sm:grid-cols-2 gap-5">
            <input
              type="text"
              name="from_name"
              value={formData.from_name}
              onChange={handleChange}
              className="p-4 border border-gray-300 rounded-xl bg-white outline-none focus:border-[#566b1f]"
              placeholder="Your Name"
            />

            <input
              type="email"
              name="from_email"
              value={formData.from_email}
              onChange={handleChange}
              className="p-4 border border-gray-300 rounded-xl bg-white outline-none focus:border-[#566b1f]"
              placeholder="your@email.com"
            />
          </div>

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="p-4 border border-gray-300 rounded-xl bg-white h-32 outline-none focus:border-[#566b1f]"
            placeholder="How can I help you?"
          />

          <button
            type="submit"
            disabled={loading}
            className="bg-[#566b1f] text-white py-4 rounded-xl font-semibold hover:bg-[#485b19] hover:-translate-y-1 hover:shadow-xl transition-all duration-300 disabled:opacity-60"
          >
            {loading ? "Sending..." : "Send Email"}
          </button>
        </form>

        <div className="flex flex-wrap justify-center gap-8 mt-10 text-sm font-medium">
          <a href="mailto:ishika.27parmar@gmail.com" className="hover:text-[#566b1f] transition">
            ✉ Email
          </a>

          <a
            href="https://www.linkedin.com/in/ishika-parmar-383167377"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#566b1f] transition"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/Ishika-Parmar-27"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#566b1f] transition"
          >
            GitHub
          </a>

          <a href={resume} download className="hover:text-[#566b1f] transition">
            Resume
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;