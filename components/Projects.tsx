const PROJECTS = [
  {
    label: "Portfolio Simulation",
    type: "Quantitative Finance",
    title: "Stratify",
    subtitle: "Portfolio Simulation Engine",
    description:
      "Full-stack backtesting and portfolio simulation platform built collaboratively. Models systematic investment strategies and dollar-cost averaging analysis on ETFs, providing institutional-grade analytics in an accessible interface.",
    tech: ["Python", "pandas", "NumPy", "Streamlit"],
    github: null,
  },
  {
    label: "Forensic Statistics",
    type: "Statistical Analysis",
    title: "The Algorithmic Audit",
    subtitle: "Deconstructing Statistical Lies",
    description:
      "Audited three VC due diligence claims using forensic statistics. Built a manual MAD vs. Standard Deviation robustness test exposing latency outliers, applied Bayes' Theorem to reveal the false positive paradox in a plagiarism detector (98% accuracy → 4.7% PPV at low base rates), and detected sample ratio mismatch in an A/B test via Chi-Square goodness of fit. Simulated survivorship bias in 10,000 memecoin launches using a Pareto distribution.",
    tech: ["Python", "NumPy", "pandas", "matplotlib", "seaborn"],
    github:
      "https://github.com/vrishank-ramineni/ECON3916---Statistics-Machine-Learning/tree/main/Assignment_2",
  },
  {
    label: "Clinical Pricing",
    type: "Regression Engineering",
    title: "The Predictive Architecture",
    subtitle: "Clinical Pricing Engine",
    description:
      "Rebuilt a broken dynamic medical pricing algorithm for a hospital network. Diagnosed multicollinearity in clinical vitals using VIF analysis, classified missingness as MNAR under Rubin's taxonomy, escaped the dummy variable trap on 850 ICD-10 codes via target encoding, and architected an OLS prediction engine with residual diagnostics for heteroscedasticity. Quantified financial risk in RMSE dollars.",
    tech: ["Python", "statsmodels", "missingno", "category_encoders", "seaborn", "pandas"],
    github:
      "https://github.com/vrishank-ramineni/ECON3916---Statistics-Machine-Learning/tree/main/Assignment_3",
  },
  {
    label: "Macroeconomic ML",
    type: "Early Warning System",
    title: "The Sovereign Risk Engine",
    subtitle: "IMF Early Warning System",
    description:
      "Built a macroeconomic early warning system for the IMF using 30+ World Bank indicators across 150 countries. Diagnosed OLS overfitting via bias-variance analysis, rebuilt with Ridge/Lasso regularization, deployed a logistic regression crisis classifier, and optimized the classification threshold under real capacity constraints (5 missions/quarter) and asymmetric costs ($50B missed crisis vs. $2M false alarm). Evaluated with ROC-AUC, PR-AUC, and cost-sensitive threshold analysis.",
    tech: ["Python", "scikit-learn", "wbgapi", "statsmodels", "matplotlib", "seaborn"],
    github:
      "https://github.com/vrishank-ramineni/ECON3916---Statistics-Machine-Learning/tree/main/Assignment_5",
  },
];

const PLACEHOLDERS = 2;

export default function Projects() {
  return (
    <section id="projects" className="py-32 bg-dark">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-teal" />
            <span className="text-teal text-xs tracking-[0.35em] uppercase font-body">
              Work
            </span>
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl text-text font-normal">
            Selected Projects
          </h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">

          {/* Active project cards */}
          {PROJECTS.map((project) => (
            <div
              key={project.title}
              className="group relative bg-card border border-border hover:border-teal/40 transition-all duration-300 p-8 flex flex-col overflow-hidden"
            >
              {/* Top accent */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-teal via-teal/40 to-transparent" />

              {/* Meta row */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-teal text-[10px] tracking-[0.3em] uppercase font-body">
                  {project.label}
                </span>
                <span className="text-muted text-[10px] tracking-widest font-body">
                  {project.type}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-heading text-2xl text-text mb-1 leading-tight">
                {project.title}
              </h3>
              <p className="text-bronze text-sm font-body mb-5">
                {project.subtitle}
              </p>

              {/* Description */}
              <p className="text-muted text-sm leading-relaxed font-body flex-1 mb-8">
                {project.description}
              </p>

              {/* Footer row: tech + GitHub */}
              <div className="flex flex-col gap-4">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 bg-navy border border-border text-muted text-xs font-body"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-muted hover:text-teal text-xs font-body tracking-widest uppercase transition-colors duration-200 group/link"
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      className="flex-shrink-0"
                    >
                      <path d="M10 2C5.58 2 2 5.58 2 10c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38v-1.33c-2.22.48-2.69-1.07-2.69-1.07-.36-.92-.89-1.16-.89-1.16-.73-.5.05-.49.05-.49.8.06 1.23.82 1.23.82.71 1.22 1.87.87 2.33.66.07-.52.28-.87.5-1.07-1.77-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.67 7.67 0 012-.27c.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48v2.19c0 .21.15.46.55.38C15.71 16.53 18 13.54 18 10c0-4.42-3.58-8-8-8z" />
                    </svg>
                    View on GitHub
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                      aria-hidden="true"
                      className="opacity-0 group-hover/link:opacity-100 transition-opacity duration-200"
                    >
                      <path
                        d="M1 9L9 1M9 1H3M9 1V7"
                        stroke="currentColor"
                        strokeWidth="1.3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          ))}

          {/* Placeholder cards */}
          {Array.from({ length: PLACEHOLDERS }).map((_, i) => (
            <div
              key={i}
              className="relative border border-dashed border-border hover:border-dim transition-colors duration-300 p-8 flex flex-col items-center justify-center min-h-[300px] group"
            >
              <div className="text-center">
                <div className="w-9 h-9 border border-dim flex items-center justify-center mx-auto mb-5 group-hover:border-muted transition-colors duration-300">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M7.5 1V14M1 7.5H14"
                      stroke="#3d4f53"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <p className="font-heading text-dim text-lg mb-1.5 group-hover:text-muted transition-colors duration-300">
                  Coming Soon
                </p>
                <p className="text-[#2c3e42] text-[10px] tracking-[0.3em] uppercase font-body">
                  2026
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
