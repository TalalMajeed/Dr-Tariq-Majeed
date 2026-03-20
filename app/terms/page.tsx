import Link from "next/link";

export const metadata = {
  title: "Terms of Use — Dr. Muhammad Tariq Majeed",
  description:
    "Terms and Conditions for the official academic website of Dr. Muhammad Tariq Majeed, Professor of Economics at Quaid-i-Azam University.",
};

const sections = [
  {
    title: "Acceptance of Terms",
    body: "By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by these terms, please do not use this website.",
  },
  {
    title: "Academic & Research Content",
    body: "All research papers, publications, working papers, and academic content featured on this website are the intellectual property of Dr. Muhammad Tariq Majeed and/or the respective journals and publishers in which they appear. Content is provided for educational and informational purposes only.",
  },
  {
    title: "Permitted Use",
    body: "You may access, download, and print content from this website for your personal, non-commercial use, or for legitimate academic research and citation purposes. Any other use — including reproduction for commercial gain, redistribution, or modification — requires prior written permission.",
  },
  {
    title: "Intellectual Property",
    body: "The design, layout, text, graphics, and other content on this website are protected by applicable copyright and intellectual property laws. The name, likeness, and academic credentials of Dr. Muhammad Tariq Majeed may not be used in any form without explicit written consent.",
  },
  {
    title: "Citation & Attribution",
    body: "If you cite or reference any research, findings, or content from this website in your own academic or professional work, please ensure full and proper attribution is given to the original author and publication source. Plagiarism of any form is strictly prohibited.",
  },
  {
    title: "Disclaimer of Warranties",
    body: "This website is provided on an \"as is\" and \"as available\" basis. Whilst every effort is made to ensure the accuracy of the information presented, no warranty — express or implied — is made regarding completeness, accuracy, reliability, or fitness for a particular purpose.",
  },
  {
    title: "Limitation of Liability",
    body: "Dr. Muhammad Tariq Majeed and Quaid-i-Azam University shall not be liable for any direct, indirect, incidental, or consequential damages arising from your use of, or inability to use, this website or its content.",
  },
  {
    title: "External Links",
    body: "This website may contain links to third-party websites including Google Scholar, academic journals, and institutional pages. These links are provided for convenience only. We have no control over the content of those sites and accept no responsibility for them or for any loss or damage that may arise from your use of them.",
  },
  {
    title: "Governing Law",
    body: "These Terms of Use are governed by and construed in accordance with the laws of the Islamic Republic of Pakistan. Any disputes relating to these terms shall be subject to the exclusive jurisdiction of the courts of Islamabad, Pakistan.",
  },
  {
    title: "Changes to These Terms",
    body: "We reserve the right to revise these Terms of Use at any time. Changes will be posted on this page with an updated revision date. Your continued use of the website after changes are posted constitutes your acceptance of the revised terms.",
  },
];

export default function TermsOfUse() {
  return (
    <main style={{ fontFamily: "'Inter', sans-serif", backgroundColor: "#ffffff", minHeight: "100vh" }}>



      {/* Hero */}
      <div style={{ backgroundColor: "#f8f9f5", borderBottom: "1px solid #e5e7eb", padding: "4rem 2rem 3rem" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div style={{ width: "32px", height: "3px", backgroundColor: "#4caf50", marginBottom: "1rem" }} />
          <span style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#2d7a4f" }}>
            Legal
          </span>
          <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, color: "#111827", lineHeight: 1.15, letterSpacing: "-0.02em", marginTop: "0.75rem", marginBottom: "1rem" }}>
            Terms of Use
          </h1>
          <p style={{ color: "#6b7280", fontSize: "0.85rem" }}>
            Last updated: March 2025
          </p>
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "3.5rem 2rem 5rem" }}>
        <p style={{ color: "#374151", fontSize: "0.95rem", lineHeight: 1.9, marginBottom: "3rem", borderLeft: "3px solid #4caf50", paddingLeft: "1.25rem", backgroundColor: "#f0f7f3", padding: "1rem 1.25rem" }}>
          Please read these Terms of Use carefully before using this website. This official academic website belongs to Dr. Muhammad Tariq Majeed, Professor (Tenured) at the School of Economics, Quaid-i-Azam University, Islamabad.
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



    </main>
  );
}
