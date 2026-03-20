"use client";

import { Linkedin, Instagram, Facebook } from "lucide-react";
import Link from "next/link";


const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Research Interests", href: "#research" },
  { label: "Publications", href: "#publications" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#0f2d1f",
        borderTop: "1px solid #2d7a4f",
        color: "#d1fae5",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "3.5rem 2rem 2rem",
        }}
      >
        {/* 3-column grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "3rem",
            marginBottom: "3rem",
          }}
        >
          {/* Column 1: Identity */}
          <div>
            <div
              style={{
                width: "32px",
                height: "3px",
                backgroundColor: "#4caf50",
                marginBottom: "1rem",
              }}
            />
            <p
              style={{
                color: "#f8f9f5",
                fontWeight: 700,
                fontSize: "1rem",
                lineHeight: 1.3,
                marginBottom: "0.4rem",
              }}
            >
              Dr. Muhammad Tariq Majeed
            </p>
            <p
              style={{
                color: "#86efac",
                fontSize: "0.75rem",
                fontWeight: 500,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                marginBottom: "1rem",
              }}
            >
              Professor (Tenured)
            </p>
            <p
              style={{
                color: "#a7c5b0",
                fontSize: "0.83rem",
                lineHeight: 1.6,
                marginBottom: "1.5rem",
              }}
            >
              School of Economics
              <br />
              Quaid-i-Azam University
              <br />
              Islamabad, Pakistan
            </p>

            {/* Social Buttons */}
            <div style={{ display: "flex", gap: "0.75rem" }}>
              {[
                { icon: <Linkedin size={18} />, href: "#", title: "LinkedIn" },
                { icon: <Instagram size={18} />, href: "#", title: "Instagram" },
                { icon: <Facebook size={18} />, href: "#", title: "Facebook" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  title={social.title}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "36px",
                    height: "36px",
                    backgroundColor: "#1a4731",
                    color: "#86efac",
                    textDecoration: "none",
                    border: "1px solid #2d7a4f",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#2d7a4f";
                    e.currentTarget.style.color = "#f8f9f5";
                    e.currentTarget.style.borderColor = "#4caf50";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#1a4731";
                    e.currentTarget.style.color = "#86efac";
                    e.currentTarget.style.borderColor = "#2d7a4f";
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <p
              style={{
                color: "#86efac",
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                marginBottom: "1.25rem",
              }}
            >
              Quick Links
            </p>
            <nav style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  style={{
                    color: "#a7c5b0",
                    textDecoration: "none",
                    fontSize: "0.85rem",
                    transition: "color 0.2s",
                    display: "inline-block",
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLAnchorElement).style.color = "#4caf50")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLAnchorElement).style.color = "#a7c5b0")
                  }
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Column 3: Academic Profile */}
          <div>
            <p
              style={{
                color: "#86efac",
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                marginBottom: "1.25rem",
              }}
            >
              Academic Profile
            </p>
            <a
              href="https://scholar.google.com/citations?user=H1mlqIoAAAAJ&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                backgroundColor: "#2d7a4f",
                color: "#f8f9f5",
                textDecoration: "none",
                fontSize: "0.8rem",
                fontWeight: 600,
                letterSpacing: "0.04em",
                padding: "0.6rem 1.25rem",
                border: "1px solid #3a8f5f",
                marginBottom: "1.5rem",
                transition: "background-color 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#3a8f5f")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#2d7a4f")
              }
            >
              Google Scholar Profile
            </a>
            <div style={{ marginTop: "0.5rem" }}>
              <p
                style={{
                  color: "#a7c5b0",
                  fontSize: "0.78rem",
                  lineHeight: 1.7,
                }}
              >
                8,300+ Citations
                <br />
                h-index: 54 · i10-index: 144
                <br />
                Stanford Top 2% (2021–2025)
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid #1a4731",
            paddingTop: "1.5rem",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <p style={{ color: "#6b7280", fontSize: "0.78rem" }}>
            &copy; {new Date().getFullYear()} Dr. Muhammad Tariq Majeed. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            <Link
              href="/privacy"
              style={{ color: "#6b7280", textDecoration: "none", fontSize: "0.78rem" }}
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              style={{ color: "#6b7280", textDecoration: "none", fontSize: "0.78rem" }}
            >
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
