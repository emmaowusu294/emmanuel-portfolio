import Hero from "./components/Hero";
import Projects from "./components/Projects";
// We will build these two next!
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div
      className="min-h-screen bg-gradient-to-br from-background via-background to-primary/20 
      text-gray-300 font-body selection:bg-accent selection:text-black"
    >
      <Hero />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
