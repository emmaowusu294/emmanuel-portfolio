import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
// We will build these two next!
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div
      className="min-h-screen bg-gradient-to-br from-background via-background to-primary/100 
      text-gray-300 font-body selection:bg-accent selection:text-black"
    >
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "#1f2937", // Tailwind gray-800
            color: "#fff",
            border: "1px solid rgba(255,255,255,0.1)",
          },
        }}
      />

      <Navbar />
      <Hero />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
