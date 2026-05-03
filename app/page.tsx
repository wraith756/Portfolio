import Hero from "./HeroSection";
import About from "./AboutSection";
import Education from "./EducationSection";
import Skills from "./SkillSection";
import Experience from "./Expricences";
import Projects from "./ProjectSection";
import Contact from "./ContactSection";
export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <About />
      <Education />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}
