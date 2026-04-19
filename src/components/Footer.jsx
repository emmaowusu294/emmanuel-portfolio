export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-white/5 py-8 mt-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        <p className="text-gray-500 text-sm">
          © {currentYear} Emmanuel. Built with React & Tailwind.
        </p>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="mt-4 md:mt-0 text-blue-500 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest"
        >
          Back to Top ↑
        </button>
      </div>
    </footer>
  );
}
