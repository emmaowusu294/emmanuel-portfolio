import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const links = [
  { name: "Work", id: "projects" },
  { name: "Experience", id: "experience" },
  { name: "About", id: "about" },
  { name: "Contact", id: "contact" },
];

// Below this width the four links don't fit beside the name, so they move into a menu
const INLINE_QUERY = "(min-width: 480px)";

export default function Navbar() {
  const [active, setActive] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const indicatorRef = useRef(null);
  const linkRefs = useRef({});
  const menuButtonRef = useRef(null);

  // Mark the section that crosses the middle of the viewport as current.
  // The hero is observed too so returning to the top clears the highlight.
  useEffect(() => {
    const sections = ["hero", ...links.map((link) => link.id)]
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id === "hero" ? null : entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Slide the single shared underline under the active link
  useLayoutEffect(() => {
    const place = () => {
      const bar = indicatorRef.current;
      const link = active ? linkRefs.current[active] : null;
      if (!bar) return;
      if (!link || link.offsetWidth === 0) {
        bar.style.opacity = "0";
        return;
      }

      // Appear in place rather than sliding in from the left edge
      const wasHidden = bar.style.opacity !== "1";
      if (wasHidden) bar.style.transition = "none";
      bar.style.width = `${link.offsetWidth}px`;
      bar.style.transform = `translateX(${link.offsetLeft}px)`;
      if (wasHidden) {
        bar.getBoundingClientRect();
        bar.style.transition = "";
      }
      bar.style.opacity = "1";
    };

    place();
    window.addEventListener("resize", place);
    document.fonts?.ready.then(place);
    return () => window.removeEventListener("resize", place);
  }, [active]);

  // Close the menu with Escape, or when the inline links become visible again
  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    const wide = window.matchMedia(INLINE_QUERY);
    const onWide = (event) => {
      if (event.matches) setMenuOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    wide.addEventListener("change", onWide);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      wide.removeEventListener("change", onWide);
    };
  }, [menuOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-ink">
      <nav
        aria-label="Main"
        className="page flex h-[var(--nav-height)] items-center justify-between gap-4"
      >
        <a
          href="#top"
          aria-label="Emmanuel Owusu, back to top"
          className="flex shrink-0 items-center gap-3 font-heading text-lg font-bold text-paper"
        >
          <span aria-hidden="true" className="h-[7px] w-[7px] bg-signal" />
          {/* Initials only between the menu breakpoint and sm, where space is tightest */}
          <span
            aria-hidden="true"
            className="min-[480px]:hidden sm:inline"
          >
            Emmanuel Owusu
          </span>
          <span aria-hidden="true" className="hidden min-[480px]:inline sm:hidden">
            EO
          </span>
        </a>

        <div className="relative hidden min-[480px]:block">
          <ul className="flex items-center gap-4 sm:gap-8">
            {links.map((link) => {
              const isActive = active === link.id;
              return (
                <li key={link.id}>
                  <a
                    ref={(el) => {
                      linkRefs.current[link.id] = el;
                    }}
                    href={`#${link.id}`}
                    aria-current={isActive ? "location" : undefined}
                    className={`block py-2 text-[0.9375rem] font-medium transition-colors duration-150 hover:text-paper active:text-signal ${
                      isActive ? "text-paper" : "text-muted"
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              );
            })}
          </ul>
          <span ref={indicatorRef} aria-hidden="true" className="nav-indicator" />
        </div>

        <button
          ref={menuButtonRef}
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((open) => !open)}
          className="-mr-2 inline-flex items-center gap-2 px-2 py-2 font-medium text-paper min-[480px]:hidden"
        >
          {menuOpen ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
          {menuOpen ? "Close" : "Menu"}
        </button>
      </nav>

      {menuOpen && (
        <div id="mobile-menu" className="border-t border-line min-[480px]:hidden">
          <ul className="page py-3">
            {links.map((link) => {
              const isActive = active === link.id;
              return (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    aria-current={isActive ? "location" : undefined}
                    onClick={() => setMenuOpen(false)}
                    className={`flex items-center gap-3 py-3 text-lg font-medium ${
                      isActive ? "text-paper" : "text-muted"
                    }`}
                  >
                    <span
                      aria-hidden="true"
                      className={`h-[7px] w-[7px] ${
                        isActive ? "bg-signal" : "bg-line"
                      }`}
                    />
                    {link.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
}
