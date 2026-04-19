export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-dark border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-heading text-teal text-base tracking-[0.3em]">VR</span>

        <p className="text-muted text-xs font-body tracking-widest text-center">
          &copy; {year} Vrishank Ramineni &mdash; Boston, MA
        </p>

        <div className="flex items-center gap-5">
          <a
            href="https://linkedin.com/in/vrishank-ramineni"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-teal transition-colors duration-200 text-xs font-body tracking-widest uppercase"
          >
            LinkedIn
          </a>
          <span className="w-px h-3 bg-border" />
          <a
            href="https://github.com/vrishankramineni"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-teal transition-colors duration-200 text-xs font-body tracking-widest uppercase"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
