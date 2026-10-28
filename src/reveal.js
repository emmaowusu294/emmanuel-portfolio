// One-time scroll reveals for elements marked with [data-reveal].
//
// Content is visible by default. A block is only hidden ("armed") when motion
// is allowed, IntersectionObserver exists, and the block starts below the fold,
// so nothing already on screen flickers and nothing stays hidden if this fails.
// Each block is unobserved after its first reveal, so scrolling back never replays it.
export function setupReveals(root = document) {
  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  if (reduceMotion || !("IntersectionObserver" in window)) return () => {};

  const targets = [...root.querySelectorAll("[data-reveal]")].filter(
    (el) => el.getBoundingClientRect().top > window.innerHeight,
  );
  if (targets.length === 0) return () => {};

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.remove("is-pending");
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -10% 0px", threshold: 0.1 },
  );

  targets.forEach((el) => {
    el.classList.add("reveal-armed", "is-pending");
    observer.observe(el);
  });

  // Never print or hand off a half-revealed page
  const revealAll = () =>
    targets.forEach((el) => el.classList.remove("is-pending"));
  window.addEventListener("beforeprint", revealAll);

  return () => {
    observer.disconnect();
    window.removeEventListener("beforeprint", revealAll);
    revealAll();
  };
}
