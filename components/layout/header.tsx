"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Research", href: "#research" },
  { label: "Publications", href: "#publications" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        backgroundColor: "#0f2d1f",
        borderBottom: scrolled ? "3px solid #4caf50" : "3px solid #2d7a4f",
        transition: "border-color 0.3s ease",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "72px",
        }}
      >
        {/* Logo / Name */}
        <Link
          href="/"
          style={{ textDecoration: "none", display: "flex", flexDirection: "column", gap: "2px" }}
        >
          <span
            style={{
              color: "#f8f9f5",
              fontWeight: 700,
              fontSize: "1.05rem",
              letterSpacing: "-0.01em",
              lineHeight: 1.2,
            }}
          >
            Dr. Muhammad Tariq Majeed
          </span>
          <span
            style={{
              color: "#86efac",
              fontSize: "0.7rem",
              fontWeight: 500,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            Professor of Economics · QAU Islamabad
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav style={{ display: "flex", gap: "0rem" }} className="desktop-nav">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                color: "#d1fae5",
                textDecoration: "none",
                fontSize: "0.85rem",
                fontWeight: 500,
                letterSpacing: "0.03em",
                padding: "0.5rem 1.1rem",
                display: "block",
                position: "relative",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = "#4caf50";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = "#d1fae5";
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://scholar.google.com/citations?user=H1mlqIoAAAAJ&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              marginLeft: "0.75rem",
              backgroundColor: "#2d7a4f",
              color: "#f8f9f5",
              textDecoration: "none",
              fontSize: "0.8rem",
              fontWeight: 600,
              letterSpacing: "0.04em",
              padding: "0.5rem 1.2rem",
              border: "1px solid #3a8f5f",
              transition: "background-color 0.2s",
              display: "flex",
              alignItems: "center",
              gap: "0.4rem",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#3a8f5f";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#2d7a4f";
            }}
          >
            Google Scholar
          </a>
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="mobile-menu-btn"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            display: "none",
            flexDirection: "column",
            gap: "6px",
            padding: "8px",
            zIndex: 100,
          }}
          aria-label="Toggle navigation menu"
          id="mobile-menu-btn"
        >
          <div
            style={{
              width: "24px",
              height: "2px",
              backgroundColor: "#f8f9f5",
              transition: "transform 0.3s ease, margin 0.3s ease",
              transform: menuOpen ? "translateY(8px) rotate(45deg)" : "none",
            }}
          />
          <div
            style={{
              width: "24px",
              height: "2px",
              backgroundColor: "#f8f9f5",
              transition: "opacity 0.2s ease",
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <div
            style={{
              width: "24px",
              height: "2px",
              backgroundColor: "#f8f9f5",
              transition: "transform 0.3s ease, margin 0.3s ease",
              transform: menuOpen ? "translateY(-8px) rotate(-45deg)" : "none",
            }}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          style={{
            backgroundColor: "#0a1f14",
            borderTop: "1px solid #2d7a4f",
          }}
          className="mobile-menu"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: "block",
                color: "#d1fae5",
                textDecoration: "none",
                padding: "0.85rem 2rem",
                fontSize: "0.9rem",
                fontWeight: 500,
                borderBottom: "1px solid #1a4731",
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://scholar.google.com/citations?user=H1mlqIoAAAAJ&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "block",
              color: "#86efac",
              textDecoration: "none",
              padding: "0.85rem 2rem",
              fontSize: "0.9rem",
              fontWeight: 600,
            }}
          >
            Google Scholar
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
        @media (min-width: 769px) {
          .mobile-menu { display: none !important; }
        }
      `}</style>
    </header>
  );
}
