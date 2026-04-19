import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="about"
      className="relative min-h-screen bg-navy flex items-center overflow-hidden pt-16"
    >
      {/* Ambient gradient — primary */}
      <div
        className="absolute top-0 right-0 w-[700px] h-[700px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 70% 30%, rgba(124,200,208,0.07) 0%, transparent 65%)",
        }}
      />
      {/* Ambient gradient — tertiary */}
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 30% 80%, rgba(196,120,64,0.05) 0%, transparent 60%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-24 w-full">
        <div className="grid lg:grid-cols-5 gap-16 lg:gap-24 items-center">

          {/* Text — spans 3 cols */}
          <div className="lg:col-span-3 order-2 lg:order-1">
            {/* Section label */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-px bg-teal" />
              <span className="text-teal text-xs tracking-[0.35em] uppercase font-body">
                Portfolio
              </span>
            </div>

            {/* Name */}
            <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-normal text-text leading-[1.05] tracking-tight mb-5">
              Vrishank
              <br />
              Ramineni
            </h1>

            {/* Program */}
            <p className="text-bronze text-sm tracking-[0.25em] uppercase font-body mb-8">
              B.S. Computer Science &amp; Economics&nbsp;&nbsp;·&nbsp;&nbsp;Northeastern University
            </p>

            {/* Thin rule */}
            <div className="w-12 h-px bg-border mb-8" />

            {/* Bio */}
            <p className="text-muted text-lg leading-relaxed font-body max-w-xl mb-10">
              Undergraduate with a strong foundation in data analytics, strategy
              consulting, and a growing interest in building quantitative tools
              that bridge technology and economic decision-making. Based in
              Boston, MA.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-teal text-navy text-xs font-body font-semibold tracking-[0.2em] uppercase hover:bg-[#2d5a61] hover:text-text transition-colors duration-200"
              >
                View Work
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 13 13"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M1 6.5H12M6.5 1L12 6.5L6.5 12"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 border border-border text-muted text-xs font-body tracking-[0.2em] uppercase hover:border-teal hover:text-teal transition-colors duration-200"
              >
                Get In Touch
              </a>
            </div>
          </div>

          {/* Photo — spans 2 cols */}
          <div className="lg:col-span-2 order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Decorative outer rings */}
              <div
                className="absolute inset-0 rounded-full pointer-events-none"
                style={{
                  border: "1px solid rgba(124,200,208,0.25)",
                  transform: "scale(1.12)",
                }}
              />
              <div
                className="absolute inset-0 rounded-full pointer-events-none"
                style={{
                  border: "1px solid rgba(196,120,64,0.15)",
                  transform: "scale(1.26)",
                }}
              />

              {/* Profile photo */}
              <div className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full border border-border overflow-hidden relative">
                <Image
                  src="/profile.jpg"
                  alt="Vrishank Ramineni"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Footer stats row */}
        <div className="mt-20 pt-8 border-t border-border flex flex-wrap gap-x-10 gap-y-3">
          {[
            { dot: "bg-teal", label: "Boston, MA" },
            {
              dot: "bg-bronze",
              label: "Northeastern University · Class of 2028",
            },
            {
              dot: "bg-dim",
              label: "Painting · Reading · Basketball · Swimming",
            },
          ].map(({ dot, label }) => (
            <div key={label} className="flex items-center gap-2.5">
              <span className={`w-1.5 h-1.5 rounded-full ${dot} flex-shrink-0`} />
              <span className="text-muted text-sm font-body">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
