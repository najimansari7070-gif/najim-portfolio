import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="bg-black text-white">

      <Hero />

      <About />

      <Skills />

      <Project />
      
      <Contact />
      
      <Footer />
      
      <Navbar />
      
      </main>
  );
}