import AnimatedBackground from "./components/AnimatedBackground";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ImageModal from "./components/imageModal";
import { useState } from "react";

function App() {
  const [imageSrc, setImageSrc] = useState(null);

  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects setImageSrc={setImageSrc}/>
          <Contact />
        </main>
      </div>
      <ImageModal imageSrc={imageSrc} setImageSrc={setImageSrc}/>
    </div>
  );
}

export default App;
