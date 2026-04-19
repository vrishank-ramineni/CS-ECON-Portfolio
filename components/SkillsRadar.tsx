"use client";

import { useEffect, useRef, useState } from "react";

// ─── Data ─────────────────────────────────────────────────────────────────────

type Skill = { name: string; value: number };

const TECH_STACK: Skill[] = [
  { name: "Python", value: 95 },
  { name: "SQL", value: 85 },
  { name: "pandas / NumPy", value: 90 },
  { name: "scikit-learn", value: 85 },
  { name: "statsmodels", value: 80 },
  { name: "Stata", value: 65 },
  { name: "Java", value: 60 },
  { name: "Flask", value: 65 },
];

const TOOLS_PLATFORMS: Skill[] = [
  { name: "Tableau", value: 80 },
  { name: "Excel / VBA", value: 85 },
  { name: "Streamlit", value: 75 },
  { name: "Snowflake", value: 70 },
  { name: "Git / GitHub", value: 85 },
  { name: "Docker", value: 60 },
  { name: "Salesforce", value: 65 },
  { name: "REST APIs", value: 75 },
];

// ─── Geometry helpers ─────────────────────────────────────────────────────────

const SIZE = 300;
const CX = 150;
const CY = 150;
const R = 90;    // max data radius
const LR = 118;  // label radius
const RINGS = [20, 40, 60, 80, 100];

function polar(i: number, n: number, radius: number): [number, number] {
  const a = (2 * Math.PI * i) / n - Math.PI / 2;
  return [CX + radius * Math.cos(a), CY + radius * Math.sin(a)];
}

function svgAnchor(i: number, n: number): "start" | "end" | "middle" {
  const a = (2 * Math.PI * i) / n - Math.PI / 2;
  const c = Math.cos(a);
  if (c > 0.2) return "start";
  if (c < -0.2) return "end";
  return "middle";
}

type SVGBaseline = "auto" | "hanging" | "middle";

function svgBaseline(i: number, n: number): SVGBaseline {
  const a = (2 * Math.PI * i) / n - Math.PI / 2;
  const s = Math.sin(a);
  // top half → text body sits above anchor; bottom half → below anchor
  if (s < -0.2) return "auto";
  if (s > 0.2) return "hanging";
  return "middle";
}

// ─── RadarChart ───────────────────────────────────────────────────────────────

type Tooltip = { x: number; y: number; name: string; value: number };

function RadarChart({
  title,
  skills,
  animated,
}: {
  title: string;
  skills: Skill[];
  animated: boolean;
}) {
  const [progress, setProgress] = useState(0);
  const [tooltip, setTooltip] = useState<Tooltip | null>(null);
  const rafRef = useRef<number | null>(null);
  const n = skills.length;

  // Draw-in animation triggered by parent's IntersectionObserver
  useEffect(() => {
    if (!animated) return;
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    const start = performance.now();
    const DURATION = 1200;

    const tick = (now: number) => {
      const t = Math.min((now - start) / DURATION, 1);
      setProgress(1 - Math.pow(1 - t, 3)); // cubic ease-out
      if (t < 1) rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [animated]);

  // Polygon point strings
  const ringPts = (pct: number) =>
    skills.map((_, i) => polar(i, n, (pct / 100) * R).join(",")).join(" ");

  const dataPts = () =>
    skills
      .map((s, i) => polar(i, n, (s.value / 100) * R * progress).join(","))
      .join(" ");

  // Hover: map mouse position back to SVG coordinate space
  const handleMouseMove = (e: React.MouseEvent<SVGSVGElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const sx = ((e.clientX - rect.left) / rect.width) * SIZE;
    const sy = ((e.clientY - rect.top) / rect.height) * SIZE;

    let hit = false;
    for (let i = 0; i < n; i++) {
      const [px, py] = polar(i, n, (skills[i].value / 100) * R * progress);
      if (Math.hypot(sx - px, sy - py) < 14) {
        setTooltip({ x: e.clientX, y: e.clientY, name: skills[i].name, value: skills[i].value });
        hit = true;
        break;
      }
    }
    if (!hit) setTooltip(null);
  };

  return (
    <div className="flex flex-col items-center w-full">
      {/* Chart title — Newsreader, tertiary colour */}
      <p
        className="text-[11px] tracking-[0.28em] uppercase mb-8 font-normal"
        style={{ fontFamily: "var(--font-heading)", color: "#c47840" }}
      >
        {title}
      </p>

      {/* Horizontal padding provides visual room for label overflow */}
      <div className="w-full max-w-[300px] sm:max-w-[340px] px-10 mx-auto">
        <svg
          viewBox={`0 0 ${SIZE} ${SIZE}`}
          className="w-full"
          style={{ overflow: "visible" }}
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setTooltip(null)}
          role="img"
          aria-label={`Radar chart — ${title}`}
        >
          {/* Grid rings */}
          {RINGS.map((pct) => (
            <polygon
              key={pct}
              points={ringPts(pct)}
              fill="none"
              stroke="rgba(105,122,125,0.20)"
              strokeWidth="1"
            />
          ))}

          {/* Axis lines from center to each vertex */}
          {skills.map((_, i) => {
            const [x2, y2] = polar(i, n, R);
            return (
              <line
                key={i}
                x1={CX}
                y1={CY}
                x2={x2}
                y2={y2}
                stroke="rgba(105,122,125,0.15)"
                strokeWidth="1"
              />
            );
          })}

          {/* Filled data area */}
          <polygon points={dataPts()} fill="rgba(45,90,97,0.25)" />

          {/* Outlined data polygon */}
          <polygon
            points={dataPts()}
            fill="none"
            stroke="#7cc8d0"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />

          {/* Data point circles */}
          {skills.map((s, i) => {
            const [px, py] = polar(i, n, (s.value / 100) * R * progress);
            return (
              <circle
                key={i}
                cx={px}
                cy={py}
                r={3.5}
                fill="#2D5A61"
                stroke="#7cc8d0"
                strokeWidth="1.5"
                className="cursor-pointer"
              />
            );
          })}

          {/* Perimeter labels */}
          {skills.map((s, i) => {
            const [lx, ly] = polar(i, n, LR);
            return (
              <text
                key={i}
                x={lx}
                y={ly}
                textAnchor={svgAnchor(i, n)}
                dominantBaseline={svgBaseline(i, n)}
                fontSize="9"
                fill="#8b9fa3"
                fontFamily="var(--font-body, 'Work Sans', sans-serif)"
              >
                {s.name}
              </text>
            );
          })}
        </svg>
      </div>

      {/* Tooltip — fixed so it floats above everything */}
      {tooltip && (
        <div
          style={{
            position: "fixed",
            left: tooltip.x + 14,
            top: tooltip.y - 16,
            pointerEvents: "none",
            zIndex: 100,
          }}
          className="bg-navy border border-border px-3 py-2 text-xs font-body shadow-lg"
        >
          <span className="text-teal font-medium">{tooltip.name}</span>
          <span className="text-muted ml-2">{tooltip.value}%</span>
        </div>
      )}
    </div>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────

export default function SkillsRadar() {
  const [animated, setAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Trigger animation once when section enters the viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-32 bg-navy" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Section header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-teal" />
            <span className="text-teal text-xs tracking-[0.35em] uppercase font-body">
              Proficiency
            </span>
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl text-text font-normal mb-4">
            Proficiency Profile
          </h2>
          <p className="text-muted text-sm font-body">
            Measured across 24+ labs and 5 applied projects
          </p>
        </div>

        {/* Two charts — side by side desktop, stacked mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
          <RadarChart
            title="Technical Stack"
            skills={TECH_STACK}
            animated={animated}
          />
          <RadarChart
            title="Tools & Platforms"
            skills={TOOLS_PLATFORMS}
            animated={animated}
          />
        </div>
      </div>
    </section>
  );
}
