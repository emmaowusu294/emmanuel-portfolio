import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  // Framer Motion's built-in hook to listen to scroll changes
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();

    // If scrolling down and we've scrolled past the very top, hide it
    if (latest > previous && latest > 100) {
      setHidden(true);
    }
    // If scrolling up, show it
    else {
      setHidden(false);
    }
  });

  const links = [
    { name: "Home", href: "#hero" },
    { name: "Work", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      // y: 0 is the default position, y: -100 pushes it completely off the top of the screen
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: -100, opacity: 0 },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-6 right-6 md:right-12 z-50"
    >
      <ul className="flex gap-6 bg-gray-900/40 backdrop-blur-md px-6 py-3 rounded-full border border-white/10 shadow-2xl">
        {links.map((link) => (
          <li key={link.name}>
            <a
              href={link.href}
              className="text-sm font-bold text-gray-300 hover:text-white transition-colors tracking-wider uppercase"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
}
