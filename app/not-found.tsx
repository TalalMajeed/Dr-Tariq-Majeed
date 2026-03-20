import Link from "next/link";

export default function NotFound() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ffffff",
        position: "relative",
        overflow: "hidden",
        fontFamily: "'Inter', system-ui, sans-serif",
      }}
    >
      {/* Subtle Grid Background */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `
            linear-gradient(to right, rgba(22, 163, 74, 0.06) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(22, 163, 74, 0.06) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse at center, black 20%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 20%, transparent 80%)",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          textAlign: "center",
          padding: "2rem",
        }}
      >
        <h1
          style={{
            fontSize: "clamp(5rem, 15vw, 10rem)",
            fontWeight: 800,
            color: "#166534",
            margin: 0,
            lineHeight: 0.9,
            letterSpacing: "-0.05em",
          }}
        >
          404
        </h1>
        <h2
          style={{
            fontSize: "1.25rem",
            color: "#2d7a4f",
            fontWeight: 600,
            marginTop: "1.5rem",
            letterSpacing: "0.05em",
            textTransform: "uppercase",
          }}
        >
          Observation Not Found
        </h2>
        <p
          style={{
            color: "#6b7280",
            maxWidth: "400px",
            margin: "0.75rem auto 2.5rem",
            fontSize: "0.95rem",
            lineHeight: 1.6,
          }}
        >
          The page you are looking for has been excluded from the current sample. Please return to the primary dataset.
        </p>

        <Link
          href="/"
          style={{
            display: "inline-block",
            backgroundColor: "#166534",
            color: "#ffffff",
            padding: "0.85rem 2rem",
            textDecoration: "none",
            fontWeight: 700,
            fontSize: "0.85rem",
            letterSpacing: "0.04em",
            textTransform: "uppercase",
            border: "2px solid #166534",
            transition: "all 0.2s ease",
          }}
          className="home-btn"
        >
          Back to Homepage
        </Link>
      </div>

      <style>{`
        .home-btn:hover {
          background-color: #14532d !important;
          border-color: #14532d !important;
        }
      `}</style>
    </main>
  );
}
