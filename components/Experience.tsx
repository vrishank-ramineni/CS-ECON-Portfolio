const EXPERIENCE = [
  {
    role: "Data Analyst Consultant",
    company: "IBM",
    type: "Incoming · Full-time",
    period: "Summer 2026",
    description:
      "Incoming Data Analyst Consultant at one of the world's leading technology and consulting firms. Focused on data-driven strategy and analytics engagements.",
    isFuture: true,
  },
  {
    role: "Strategy Consultant",
    company: "Huntington Strategy Group",
    type: "Part-time",
    period: "Current",
    description:
      "Providing strategic consulting and data-driven insights to clients, supporting decision-making through rigorous analysis and structured recommendations.",
    isFuture: false,
  },
  {
    role: "Strategy & Data Analyst Intern",
    company: "Pentagon Federal Credit Union",
    type: "Internship",
    period: "Prior",
    description:
      "Supported strategy and data analytics initiatives at one of the nation's largest credit unions. Contributed to data analysis projects informing business and operational decisions.",
    isFuture: false,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-32 bg-dark">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-teal" />
            <span className="text-teal text-xs tracking-[0.35em] uppercase font-body">
              Career
            </span>
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl text-text font-normal">
            Experience
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-3 top-2 bottom-2 w-px bg-border hidden sm:block" />

          <div className="flex flex-col gap-0">
            {EXPERIENCE.map((exp, idx) => (
              <div
                key={idx}
                className="relative sm:pl-14 pb-14 last:pb-0 group"
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-0 top-1.5 w-6 h-6 rounded-full border flex items-center justify-center hidden sm:flex z-10 ${
                    exp.isFuture
                      ? "border-teal bg-navy"
                      : "border-border bg-dark"
                  }`}
                >
                  <span
                    className={`w-2 h-2 rounded-full ${
                      exp.isFuture ? "bg-teal" : "bg-bronze"
                    }`}
                  />
                </div>

                {/* Card */}
                <div className="bg-card border border-border hover:border-teal/30 transition-colors duration-300 p-8 relative overflow-hidden">
                  {exp.isFuture && (
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-teal via-teal/40 to-transparent" />
                  )}

                  {/* Top row */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                    <div>
                      <h3 className="font-heading text-xl text-text mb-1">
                        {exp.role}
                      </h3>
                      <p className="text-teal text-sm font-body font-medium">
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex flex-col items-start sm:items-end gap-1 flex-shrink-0">
                      <span className="text-bronze text-xs tracking-widest uppercase font-body">
                        {exp.period}
                      </span>
                      <span className="text-muted text-xs font-body">
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted text-sm leading-relaxed font-body">
                    {exp.description}
                  </p>
                </div>

                {/* Connector line for non-last items */}
                {idx < EXPERIENCE.length - 1 && (
                  <div className="sm:hidden absolute left-3 top-8 w-px h-full bg-border" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
