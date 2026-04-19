const SKILL_GROUPS = [
  {
    category: "Analytics & Modeling",
    skills: ["Python", "pandas", "NumPy", "scikit-learn", "statsmodels", "Stata", "SQL"],
  },
  {
    category: "Reporting & Delivery",
    skills: ["Tableau", "Excel (PivotTables, VBA)", "PowerPoint", "ThinkCell", "Streamlit"],
  },
  {
    category: "Engineering & APIs",
    skills: ["Flask", "REST APIs", "Anthropic API", "Postman", "Java", "Docker"],
  },
  {
    category: "Platforms & Tooling",
    skills: [
      "Snowflake",
      "Salesforce (CRM + Apex)",
      "Git / GitHub",
      "Vercel",
      "Claude Code",
      "AI Prompt Engineering",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 bg-dark">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Section header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-teal" />
            <span className="text-teal text-xs tracking-[0.35em] uppercase font-body">
              Capabilities
            </span>
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl text-text font-normal">
            Expertise
          </h2>
        </div>

        {/* 4-column skill grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {SKILL_GROUPS.map(({ category, skills }) => (
            <div key={category}>
              {/* Category header */}
              <h3 className="font-heading text-[11px] tracking-[0.3em] uppercase text-bronze font-normal mb-3">
                {category}
              </h3>

              {/* Divider */}
              <div className="w-full h-px bg-muted/40 mb-5" />

              {/* Skill list */}
              <ul className="flex flex-col gap-2.5">
                {skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-2.5">
                    <span className="w-1 h-1 rounded-full bg-teal/60 flex-shrink-0" />
                    <span className="font-body text-sm text-text leading-snug">
                      {skill}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
