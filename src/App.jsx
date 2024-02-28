import "./App.css";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import SkillSection from "./components/SkillSection"
const App = () => {
  return (
    <div className="bg-custom-blue text-white">
      <Navbar />
      <Hero />
      <SkillSection />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
