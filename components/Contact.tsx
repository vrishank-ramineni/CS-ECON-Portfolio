const LINKS = [
  {
    label: "Email",
    value: "ramineni.v@northeastern.edu",
    href: "mailto:ramineni.v@northeastern.edu",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <rect x="2" y="4" width="16" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
        <path d="M2 7L10 12L18 7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/vrishank-ramineni",
    href: "https://linkedin.com/in/vrishank-ramineni",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <rect x="2" y="2" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.4" />
        <path d="M6 8.5V14" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <circle cx="6" cy="6" r="0.8" fill="currentColor" />
        <path
          d="M9.5 14V11C9.5 9.619 10.619 8.5 12 8.5C13.381 8.5 14.5 9.619 14.5 11V14"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        <path d="M9.5 8.5V14" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    value: "github.com/vrishankramineni",
    href: "https://github.com/vrishankramineni",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path
          d="M10 2C5.58 2 2 5.58 2 10c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38v-1.33c-2.22.48-2.69-1.07-2.69-1.07-.36-.92-.89-1.16-.89-1.16-.73-.5.05-.49.05-.49.8.06 1.23.82 1.23.82.71 1.22 1.87.87 2.33.66.07-.52.28-.87.5-1.07-1.77-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.67 7.67 0 012-.27c.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48v2.19c0 .21.15.46.55.38C15.71 16.53 18 13.54 18 10c0-4.42-3.58-8-8-8z"
          fill="currentColor"
        />
      </svg>
    ),
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-navy">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-teal" />
            <span className="text-teal text-xs tracking-[0.35em] uppercase font-body">
              Contact
            </span>
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl text-text font-normal mb-5">
            Let&rsquo;s Connect
          </h2>
          <p className="text-muted text-lg leading-relaxed font-body">
            Open to internships, research collaborations, and conversations about
            data, economics, and technology. Feel free to reach out.
          </p>
        </div>

        {/* Contact cards */}
        <div className="grid sm:grid-cols-3 gap-5">
          {LINKS.map(({ label, value, href, icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group bg-card border border-border hover:border-teal/40 transition-all duration-300 p-7 flex flex-col gap-4"
            >
              <span className="text-muted group-hover:text-teal transition-colors duration-200">
                {icon}
              </span>
              <div>
                <p className="text-bronze text-[10px] tracking-[0.3em] uppercase font-body mb-1.5">
                  {label}
                </p>
                <p className="text-muted text-sm font-body group-hover:text-text transition-colors duration-200 break-all">
                  {value}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
