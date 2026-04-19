"use client";

import { useState, useEffect } from "react";

const NAV_LINKS = ["About", "Projects", "Skills", "Experience", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-navy/95 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
        {/* Monogram */}
        <a
          href="#"
          className="font-heading text-teal text-xl font-bold tracking-[0.3em] hover:text-text transition-colors duration-300"
        >
          VR
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="text-muted hover:text-text text-xs tracking-[0.2em] uppercase font-body transition-colors duration-200"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button
          className="md:hidden text-muted hover:text-text transition-colors"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <line x1="2" y1="2" x2="20" y2="20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="20" y1="2" x2="2" y2="20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <line x1="2" y1="5" x2="20" y2="5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="2" y1="11" x2="20" y2="11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="2" y1="17" x2="20" y2="17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-dark border-b border-border">
          <ul className="px-6 py-4 flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  className="text-muted hover:text-text text-sm tracking-widest uppercase font-body block py-1 transition-colors"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
