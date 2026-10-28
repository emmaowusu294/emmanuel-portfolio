import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar";
import SignalLine from "./components/SignalLine";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { setupReveals } from "./reveal";

export default function App() {
  useEffect(() => setupReveals(), []);

  return (
    <div id="top" className="min-h-screen bg-ink text-paper">
      <a
        href="#main"
        className="btn-signal fixed left-4 top-3 z-[60] -translate-y-24 focus-visible:translate-y-0"
      >
        Skip to content
      </a>

      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "var(--color-surface)",
            color: "var(--color-paper)",
            border: "1px solid var(--color-line)",
            borderRadius: "3px",
          },
        }}
      />

      <Navbar />
      <SignalLine />

      <main id="main">
        <Hero />
        <Projects />
        <Experience />
        <About />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
