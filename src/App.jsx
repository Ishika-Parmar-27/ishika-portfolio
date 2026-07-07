import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Journey from "./components/Journey";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <div className={isDark ? "dark-mode" : "light-mode"}>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Journey />
      <Contact />
      <Footer />

      <ThemeToggle isDark={isDark} setIsDark={setIsDark} />
    </div>
  );
}

export default App;