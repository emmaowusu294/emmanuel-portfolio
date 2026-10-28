import { useEffect, useRef } from "react";

// Sections that get a tick on the rail; a tick turns amber once it is scrolled past
const SECTIONS = ["projects", "experience", "about", "contact"];

// Decorative reading-progress rail on the left edge (large screens only).
// Progress and tick state are written straight to the DOM so scrolling never re-renders React.
export default function SignalLine() {
  const railRef = useRef(null);
  const tickRefs = useRef([]);

  useEffect(() => {
    let frame = 0;
    let stops = [];

    const measure = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const padding =
        parseFloat(
          getComputedStyle(document.documentElement).scrollPaddingTop,
        ) || 0;

      // Each tick sits where its section starts, as a fraction of total scroll
      stops = SECTIONS.map((id, index) => {
        const section = document.getElementById(id);
        const tick = tickRefs.current[index];
        if (!section || !tick || max <= 0) return null;
        const top = section.getBoundingClientRect().top + window.scrollY;
        const stop = Math.min(Math.max((top - padding) / max, 0), 1);
        tick.style.top = `${(stop * 100).toFixed(3)}%`;
        return { tick, stop };
      }).filter(Boolean);
    };

    const update = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? Math.min(window.scrollY / max, 1) : 0;
      railRef.current?.style.setProperty("--progress", progress.toFixed(4));
      stops.forEach(({ tick, stop }) =>
        tick.classList.toggle("is-passed", progress >= stop - 0.001),
      );
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    const remeasure = () => {
      measure();
      schedule();
    };

    remeasure();
    // Page height changes as images and fonts load
    const resizeObserver = new ResizeObserver(remeasure);
    resizeObserver.observe(document.body);
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", remeasure);
    return () => {
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", remeasure);
    };
  }, []);

  return (
    <div ref={railRef} aria-hidden="true" className="signal-line hidden lg:block">
      <div className="signal-line__fill" />
      {SECTIONS.map((id, index) => (
        <div
          key={id}
          ref={(el) => {
            tickRefs.current[index] = el;
          }}
          className="signal-line__tick"
        />
      ))}
      <div className="signal-line__marker" />
    </div>
  );
}
