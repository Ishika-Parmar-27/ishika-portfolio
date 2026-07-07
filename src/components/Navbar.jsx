import { useState, useEffect } from "react";

function Navbar() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const onScroll = () => {
      let current = "home";

      sections.forEach((section) => {
        const top = section.offsetTop - 120;
        const height = section.offsetHeight;

        if (window.scrollY >= top && window.scrollY < top + height) {
          current = section.getAttribute("id");
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    "home",
    "about",
    "skills",
    "projects",
    "experience",
    "contact",
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#f7f8f6]/90 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        <h2 className="text-lg font-bold text-[#07111f]">
          Ishika Parmar
        </h2>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link}`}
              className={`capitalize text-sm font-medium transition-all duration-300 ${
                active === link
                  ? "text-[#566b1f] border-b-2 border-[#566b1f] pb-1"
                  : "text-gray-500 hover:text-[#566b1f]"
              }`}
            >
              {link}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;