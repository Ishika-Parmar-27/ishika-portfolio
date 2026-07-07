function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-[#f7f8f6]/90 backdrop-blur-md border-b border-gray-200">
  <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between"></div>
      <h2 className="text-lg font-semibold text-[#3d3d3d]">
        Ishika Parmar
      </h2>

      <nav className="hidden md:flex items-center gap-8 text-sm text-gray-500">
        <a href="#home" className="text-[#566b1f] border-b border-[#566b1f] pb-1">
          Home
        </a>
        <a href="#about" className="hover:text-[#566b1f]">
          About
        </a>
        <a href="#skills" className="hover:text-[#566b1f]">
          Skills
        </a>
        <a href="#projects" className="hover:text-[#566b1f]">
          Projects
        </a>
        <a href="#experience" className="hover:text-[#566b1f]">
          Experience
        </a>
        <a href="#contact" className="hover:text-[#566b1f]">
          Contact
        </a>
      </nav>
    </header>
  );
}

export default Navbar;