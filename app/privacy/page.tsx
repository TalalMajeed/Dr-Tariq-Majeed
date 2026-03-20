import Link from "next/link";

export const metadata = {
  title: "Privacy Policy — Dr. Muhammad Tariq Majeed",
  description:
    "Privacy Policy for the official academic website of Dr. Muhammad Tariq Majeed, Professor of Economics at Quaid-i-Azam University.",
};

const sections = [
  {
    title: "Information We Collect",
    body: "This website does not collect personal data through forms or tracking systems beyond standard server logs. If you contact Dr. Majeed via the email address provided on this site, the information you voluntarily share (such as your name and email address) will be used solely to respond to your inquiry.",
  },
  {
    title: "Use of Information",
    body: "Any information shared through direct correspondence is used exclusively for academic communication purposes. We do not sell, trade, or transfer your information to outside parties, nor do we use it for marketing.",
  },
  {
    title: "Cookies & Analytics",
    body: "This site may use minimal, privacy-respecting analytics to understand visitor traffic in aggregate (e.g., number of page views). No personally identifiable data is collected or stored through cookies. You may disable cookies in your browser settings without affecting site functionality.",
  },
  {
    title: "Third-Party Links",
    body: "This website contains links to external resources such as Google Scholar, academic journals, and research databases. We are not responsible for the privacy practices or content of those third-party sites. We encourage you to review their respective privacy policies.",
  },
  {
    title: "Data Security",
    body: "We take reasonable precautions to protect any information that is shared with us. However, no method of transmission over the internet is 100% secure. Any correspondence sent via email is at your own risk.",
  },
  {
    title: "Children's Privacy",
    body: "This website is intended for academic and professional audiences. We do not knowingly collect information from children under the age of 13.",
  },
  {
    title: "Changes to This Policy",
    body: "This Privacy Policy may be updated periodically to reflect changes in practice or legal requirements. The date at the bottom of this page indicates when it was last revised. Continued use of the site constitutes acceptance of the updated policy.",
  },
  {
    title: "Contact",
    body: "If you have any questions about this Privacy Policy, please reach out via the contact details provided on the homepage.",
  },
];

export default function PrivacyPolicy() {
  return (
    <main style={{ fontFamily: "'Inter', sans-serif", backgroundColor: "#ffffff", minHeight: "100vh" }}>

      {/* Header bar */}
      <div style={{ backgroundColor: "#0f2d1f", borderBottom: "1px solid #2d7a4f" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "1rem 2rem", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Link href="/" style={{ color: "#86efac", textDecoration: "none", fontSize: "0.78rem", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase" }}>
            ← Back to Homepage
          </Link>
          <span style={{ color: "#2d7a4f", fontSize: "0.72rem", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 600 }}>
            Dr. Muhammad Tariq Majeed
          </span>
        </div>
      </div>

      {/* Hero */}
      <div style={{ backgroundColor: "#f8f9f5", borderBottom: "1px solid #e5e7eb", padding: "4rem 2rem 3rem" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div style={{ width: "32px", height: "3px", backgroundColor: "#4caf50", marginBottom: "1rem" }} />
          <span style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#2d7a4f" }}>
            Legal
          </span>
          <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, color: "#111827", lineHeight: 1.15, letterSpacing: "-0.02em", marginTop: "0.75rem", marginBottom: "1rem" }}>
            Privacy Policy
          </h1>
          <p style={{ color: "#6b7280", fontSize: "0.85rem" }}>
            Last updated: March 2025
          </p>
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "3.5rem 2rem 5rem" }}>
        <p style={{ color: "#374151", fontSize: "0.95rem", lineHeight: 1.9, marginBottom: "3rem", borderLeft: "3px solid #4caf50", paddingLeft: "1.25rem", backgroundColor: "#f0f7f3", padding: "1rem 1.25rem" }}>
          Dr. Muhammad Tariq Majeed is committed to protecting your privacy. This policy outlines how this academic website handles any information that may be shared during your visit.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
          {sections.map((section, i) => (
            <div key={i} style={{ borderTop: "1px solid #e5e7eb", paddingTop: "2rem" }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: "1rem", marginBottom: "0.75rem" }}>
                <span style={{ color: "#4caf50", fontSize: "0.72rem", fontWeight: 700, minWidth: "28px" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 style={{ color: "#111827", fontSize: "1rem", fontWeight: 700, letterSpacing: "-0.01em" }}>
                  {section.title}
                </h2>
              </div>
              <p style={{ color: "#374151", fontSize: "0.92rem", lineHeight: 1.85, paddingLeft: "44px" }}>
                {section.body}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer strip */}
      <div style={{ backgroundColor: "#0f2d1f", borderTop: "1px solid #2d7a4f", padding: "1.5rem 2rem" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "1rem" }}>
          <p style={{ color: "#6b7280", fontSize: "0.78rem" }}>
            © {new Date().getFullYear()} Dr. Muhammad Tariq Majeed. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            <Link href="/terms" style={{ color: "#86efac", textDecoration: "none", fontSize: "0.78rem" }}>
              Terms of Use
            </Link>
            <Link href="/" style={{ color: "#86efac", textDecoration: "none", fontSize: "0.78rem" }}>
              Homepage
            </Link>
          </div>
        </div>
      </div>

    </main>
  );
}
