export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-line">
      <div className="page flex flex-col gap-4 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>© {currentYear} Emmanuel Owusu.</p>
        <a href="#top" className="text-link self-start sm:self-auto">
          Back to top
        </a>
      </div>
    </footer>
  );
}
