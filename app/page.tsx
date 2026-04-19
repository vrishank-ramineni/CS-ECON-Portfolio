import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import SkillsRadar from "@/components/SkillsRadar";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <SkillsRadar />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
