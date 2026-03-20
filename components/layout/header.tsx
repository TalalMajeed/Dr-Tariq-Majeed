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
          className="logo-link"
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
        <nav style={{ display: "flex", gap: "0.5rem", alignItems: "center" }} className="desktop-nav">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="nav-link"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://scholar.google.com/citations?user=H1mlqIoAAAAJ&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link scholar-btn"
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
            borderTop: "3px solid #2d7a4f",
          }}
          className="mobile-menu"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="mobile-nav-link"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://scholar.google.com/citations?user=H1mlqIoAAAAJ&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="mobile-nav-link"
            style={{ color: "#86efac" }}
          >
            Google Scholar
          </a>
        </div>
      )}

      <style>{`
        .nav-link {
          color: #d1fae5;
          text-decoration: none;
          font-size: 0.85rem;
          font-weight: 500;
          letter-spacing: 0.03em;
          padding: 0.75rem 1.25rem; /* Larger square-box padding */
          display: inline-block;
          transition: all 0.2s ease;
          border: 1px solid transparent;
          border-radius: 0; /* Square box */
        }
        .nav-link:hover {
          background-color: #2d7a4f;
          color: #f8f9f5;
          border-color: #3a8f5f;
        }
        .logo-link {
          padding: 0.5rem 0.8rem;
          margin-left: -0.8rem; /* Offset padding to keep text aligned left */
          transition: all 0.2s ease;
          border: 1px solid transparent;
        }
        .logo-link:hover {
          background-color: #2d7a4f;
          border-color: #3a8f5f;
        }
        .scholar-btn {
          margin-left: 0.5rem;
          background-color: #2d7a4f;
          color: #f8f9f5;
          border: 1px solid #3a8f5f;
          font-weight: 600;
        }
        .scholar-btn:hover {
          background-color: #3a8f5f;
          border-color: #4caf50;
        }
        .mobile-nav-link {
          display: block;
          color: #d1fae5;
          text-decoration: none;
          padding: 1.2rem 2rem;
          font-size: 0.95rem;
          font-weight: 500;
          border-bottom: 1px solid #1a4731;
          transition: background-color 0.2s;
        }
        .mobile-nav-link:hover {
          background-color: #1a4731;
        }
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
