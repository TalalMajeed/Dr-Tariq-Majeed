"use client";

export default function Home() {
  return (
    <div style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* ─── HERO ─────────────────────────────────────────── */}
      <section
        id="home"
        style={{
          backgroundColor: "#0f2d1f",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background grid texture */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(45,122,79,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(45,122,79,0.07) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "6rem 2rem 6rem 4rem",
            position: "relative",
            width: "100%",
          }}
        >
          {/* Stanford badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              backgroundColor: "rgba(74,175,80,0.12)",
              border: "1px solid #2d7a4f",
              padding: "0.4rem 1rem",
              marginBottom: "2rem",
            }}
          >
            <div
              style={{
                width: "6px",
                height: "6px",
                backgroundColor: "#4caf50",
              }}
            />
            <span
              style={{
                color: "#86efac",
                fontSize: "0.72rem",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              Stanford Top 2% World Scientists — 2021, 2022, 2023, 2024, 2025
            </span>
          </div>

          <h1
            style={{
              color: "#f8f9f5",
              fontSize: "clamp(2.2rem, 5vw, 4rem)",
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              marginBottom: "1rem",
              maxWidth: "780px",
            }}
          >
            Dr. Muhammad
            <br />
            <span style={{ color: "#4caf50" }}>Tariq Majeed</span>
          </h1>

          <p
            style={{
              color: "#86efac",
              fontSize: "1.05rem",
              fontWeight: 500,
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              marginBottom: "0.5rem",
            }}
          >
            Professor (Tenured) of Economics
          </p>
          <p
            style={{
              color: "#a7c5b0",
              fontSize: "0.9rem",
              marginBottom: "2.5rem",
            }}
          >
            School of Economics · Quaid-i-Azam University, Islamabad, Pakistan
          </p>

          <p
            style={{
              color: "#c8dcd0",
              fontSize: "1rem",
              lineHeight: 1.8,
              maxWidth: "640px",
              marginBottom: "3rem",
            }}
          >
            Ph.D. in Economics from the University of Glasgow. Researcher in Development,
            International, Environmental, Islamic, and Financial Economics with over 15 years of
            academic and research experience.
          </p>

          {/* Inline stat chips */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1px",
              marginBottom: "3rem",
              backgroundColor: "#2d7a4f",
            }}
          >
            {[
              { num: "8,300+", label: "Citations" },
              { num: "54", label: "h-index" },
              { num: "144", label: "i10-index" },
              { num: "10", label: "Ph.D. Supervised" },
            ].map((s) => (
              <div
                key={s.label}
                style={{
                  backgroundColor: "#0f2d1f",
                  padding: "1rem 2rem",
                  textAlign: "center",
                  flex: "1 1 120px",
                }}
              >
                <div
                  style={{
                    color: "#4caf50",
                    fontSize: "1.6rem",
                    fontWeight: 800,
                    lineHeight: 1,
                    marginBottom: "0.3rem",
                  }}
                >
                  {s.num}
                </div>
                <div
                  style={{
                    color: "#a7c5b0",
                    fontSize: "0.72rem",
                    fontWeight: 500,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          {/* CTA buttons */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
            <a
              href="#publications"
              style={{
                backgroundColor: "#4caf50",
                color: "#0a1f14",
                textDecoration: "none",
                padding: "0.85rem 2rem",
                fontWeight: 700,
                fontSize: "0.85rem",
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                transition: "background-color 0.2s",
                display: "inline-block",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#3a8f5f")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#4caf50")
              }
            >
              View Publications
            </a>
            <a
              href="https://scholar.google.com/citations?user=H1mlqIoAAAAJ&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: "transparent",
                color: "#86efac",
                textDecoration: "none",
                padding: "0.85rem 2rem",
                fontWeight: 600,
                fontSize: "0.85rem",
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                border: "1px solid #2d7a4f",
                transition: "border-color 0.2s, color 0.2s",
                display: "inline-block",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.borderColor = "#4caf50";
                el.style.color = "#4caf50";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.borderColor = "#2d7a4f";
                el.style.color = "#86efac";
              }}
            >
              Google Scholar
            </a>
          </div>
        </div>
      </section>

      {/* ─── ABOUT ────────────────────────────────────────── */}
      <section
        id="about"
        style={{
          backgroundColor: "#f8f9f5",
          padding: "6rem 2rem",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "200px 1fr",
            gap: "5rem",
            alignItems: "start",
          }}
          className="responsive-grid-about"
        >
          {/* Left */}
          <div>
            <div
              style={{
                width: "32px",
                height: "3px",
                backgroundColor: "#4caf50",
                marginBottom: "1rem",
              }}
            />
            <span
              style={{
                fontSize: "0.72rem",
                fontWeight: 700,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#2d7a4f",
              }}
            >
              About
            </span>
          </div>

          {/* Right */}
          <div>
            <h2
              style={{
                fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
                fontWeight: 700,
                color: "#111827",
                lineHeight: 1.2,
                letterSpacing: "-0.02em",
                marginBottom: "2rem",
              }}
            >
              Professor of Economics, Researcher,
              <br />
              and Thought Leader
            </h2>

            <p
              style={{
                color: "#374151",
                fontSize: "0.95rem",
                lineHeight: 1.9,
                marginBottom: "1.5rem",
              }}
            >
              Dr. Majeed is working as Professor (Tenured) at the School of Economics at
              Quaid-i-Azam University, Islamabad, Pakistan. He completed his Ph.D. in Economics
              from the University of Glasgow.
            </p>

            <div
              style={{
                borderLeft: "3px solid #4caf50",
                paddingLeft: "1.25rem",
                marginBottom: "1.5rem",
                backgroundColor: "#f0f7f3",
                padding: "1rem 1.25rem",
              }}
            >
              <p
                style={{
                  color: "#1a4731",
                  fontSize: "0.95rem",
                  fontWeight: 600,
                  lineHeight: 1.7,
                }}
              >
                Dr. Majeed has been listed among the{" "}
                <span style={{ color: "#2d7a4f" }}>top 2 percent of world scientists</span> by
                Stanford University ranking in 2021, 2022, 2023, 2024, and 2025.
              </p>
            </div>

            <p
              style={{
                color: "#374151",
                fontSize: "0.95rem",
                lineHeight: 1.9,
                marginBottom: "1.5rem",
              }}
            >
              His research has created 8,300 plus citations including 54 h-index and 144 i10-index
              citations. His work has been published in journals such as{" "}
              <em>Social Indicators Research</em>, <em>Singapore Economic Review</em>,{" "}
              <em>Applied Research in Quality of Life</em>, <em>Quality and Quantity</em>,{" "}
              <em>Journal of Cleaner Production</em>, and{" "}
              <em>Journal of International Development Economics</em>.
            </p>

            <p
              style={{
                color: "#374151",
                fontSize: "0.95rem",
                lineHeight: 1.9,
                marginBottom: "1.5rem",
              }}
            >
              He has written chapters in seven different research books and presented his research
              at international forums including the Royal Economic Society and Scottish Economic
              Society. He recently delivered a keynote address at an international conference at
              Xiangtan University, China.
            </p>

            <p
              style={{
                color: "#374151",
                fontSize: "0.95rem",
                lineHeight: 1.9,
              }}
            >
              With more than 15 years of research supervision experience, Dr. Majeed has supervised
              10 Ph.D. and 100+ MPhil theses. He has orchestrated numerous workshops on academic
              writing, research methodologies, and econometrics across various educational
              institutions.
            </p>
          </div>
        </div>
      </section>

      {/* ─── RESEARCH INTERESTS ───────────────────────────── */}
      <section
        id="research"
        style={{
          backgroundColor: "#0f2d1f",
          padding: "6rem 2rem",
        }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ marginBottom: "3rem" }}>
            <div
              style={{
                width: "32px",
                height: "3px",
                backgroundColor: "#4caf50",
                marginBottom: "1rem",
              }}
            />
            <span
              style={{
                fontSize: "0.72rem",
                fontWeight: 700,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#86efac",
              }}
            >
              Research Interests
            </span>
            <h2
              style={{
                fontSize: "clamp(1.5rem, 3vw, 2rem)",
                fontWeight: 700,
                color: "#f8f9f5",
                lineHeight: 1.2,
                letterSpacing: "-0.02em",
                marginTop: "0.75rem",
              }}
            >
              Areas of Scholarly Focus
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: "1px",
              backgroundColor: "#2d7a4f",
            }}
          >
            {[
              {
                title: "Development Economics",
                desc: "Examining economic growth, poverty alleviation, inequality, and human development indicators across developing nations.",
              },
              {
                title: "International Economics",
                desc: "Analysing trade flows, foreign direct investment, globalisation, and international economic policy.",
              },
              {
                title: "Environmental Economics",
                desc: "Studying the relationship between economic activity, environmental degradation, and sustainable development.",
              },
              {
                title: "Islamic Economics",
                desc: "Exploring Islamic finance principles, ethical economics, and economic frameworks within an Islamic context.",
              },
              {
                title: "Financial Economics",
                desc: "Investigating capital markets, financial development, banking systems, and their role in economic growth.",
              },
            ].map((area) => (
              <div
                key={area.title}
                style={{
                  backgroundColor: "#0a1f14",
                  padding: "2rem",
                  borderLeft: "3px solid #2d7a4f",
                  transition: "border-left-color 0.2s, background-color 0.2s",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.borderLeftColor = "#4caf50";
                  el.style.backgroundColor = "#0f2d1f";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.borderLeftColor = "#2d7a4f";
                  el.style.backgroundColor = "#0a1f14";
                }}
              >
                <p
                  style={{
                    color: "#86efac",
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    marginBottom: "0.75rem",
                  }}
                >
                  {area.title}
                </p>
                <p
                  style={{
                    color: "#a7c5b0",
                    fontSize: "0.875rem",
                    lineHeight: 1.7,
                  }}
                >
                  {area.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PUBLICATIONS ─────────────────────────────────── */}
      <section
        id="publications"
        style={{
          backgroundColor: "#f8f9f5",
          padding: "6rem 2rem",
        }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ marginBottom: "3rem" }}>
            <div
              style={{
                width: "32px",
                height: "3px",
                backgroundColor: "#4caf50",
                marginBottom: "1rem",
              }}
            />
            <span
              style={{
                fontSize: "0.72rem",
                fontWeight: 700,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#2d7a4f",
              }}
            >
              Selected Publications
            </span>
            <h2
              style={{
                fontSize: "clamp(1.5rem, 3vw, 2rem)",
                fontWeight: 700,
                color: "#111827",
                lineHeight: 1.2,
                letterSpacing: "-0.02em",
                marginTop: "0.75rem",
              }}
            >
              Featured in Leading Academic Journals
            </h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {[
              {
                journal: "Social Indicators Research",
                note: "International and Multidisciplinary Journal for Quality-of-Life Measurement",
              },
              {
                journal: "Singapore Economic Review",
                note: "Published by World Scientific Publishing",
              },
              {
                journal: "Applied Research in Quality of Life",
                note: "Official Journal of the International Society for Quality-of-Life Studies",
              },
              {
                journal: "Quality and Quantity",
                note: "International Journal of Methodology",
              },
              {
                journal: "Journal of Cleaner Production",
                note: "An Interdisciplinary, International Journal covering Cleaner Production and Sustainability",
              },
              {
                journal: "Journal of International Development",
                note: "The Journal of Development Studies",
              },
            ].map((pub, i) => (
              <div
                key={i}
                style={{
                  borderTop: i === 0 ? "2px solid #d1d5db" : "1px solid #e5e7eb",
                  borderBottom: i === 5 ? "2px solid #d1d5db" : "none",
                  padding: "1.5rem 0",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "1.5rem",
                }}
              >
                <span
                  style={{
                    minWidth: "28px",
                    color: "#4caf50",
                    fontSize: "0.78rem",
                    fontWeight: 700,
                    paddingTop: "2px",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <p
                    style={{
                      color: "#111827",
                      fontWeight: 600,
                      fontSize: "0.95rem",
                      marginBottom: "0.25rem",
                    }}
                  >
                    {pub.journal}
                  </p>
                  <p style={{ color: "#6b7280", fontSize: "0.82rem" }}>{pub.note}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: "2.5rem" }}>
            <a
              href="https://scholar.google.com/citations?user=H1mlqIoAAAAJ&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#2d7a4f",
                textDecoration: "none",
                fontSize: "0.88rem",
                fontWeight: 600,
                letterSpacing: "0.04em",
                borderBottom: "2px solid #4caf50",
                paddingBottom: "2px",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color = "#1a4731")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color = "#2d7a4f")
              }
            >
              View Complete Publication List on Google Scholar
            </a>
          </div>
        </div>
      </section>

      {/* ─── EXPERIENCE ───────────────────────────────────── */}
      <section
        id="experience"
        style={{
          backgroundColor: "#0a1f14",
          padding: "6rem 2rem",
        }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ marginBottom: "3rem" }}>
            <div
              style={{
                width: "32px",
                height: "3px",
                backgroundColor: "#4caf50",
                marginBottom: "1rem",
              }}
            />
            <span
              style={{
                fontSize: "0.72rem",
                fontWeight: 700,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#86efac",
              }}
            >
              Professional Experience
            </span>
            <h2
              style={{
                fontSize: "clamp(1.5rem, 3vw, 2rem)",
                fontWeight: 700,
                color: "#f8f9f5",
                lineHeight: 1.2,
                letterSpacing: "-0.02em",
                marginTop: "0.75rem",
              }}
            >
              Academic & Professional Journey
            </h2>
          </div>

          <div style={{ display: "flex", gap: "4rem", flexWrap: "wrap" }}>
            {/* Academic */}
            <div style={{ flex: "1 1 300px" }}>
              <p
                style={{
                  color: "#4caf50",
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  marginBottom: "1.5rem",
                  borderBottom: "1px solid #2d7a4f",
                  paddingBottom: "0.75rem",
                }}
              >
                Academic Positions
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                {[
                  {
                    role: "Professor (Tenured)",
                    org: "Quaid-i-Azam University, Islamabad",
                    detail: "School of Economics",
                  },
                  {
                    role: "Lecturer",
                    org: "University College Islamabad",
                    detail: "Economics",
                  },
                  {
                    role: "Lecturer",
                    org: "Allama Iqbal Open University",
                    detail: "Economics",
                  },
                ].map((item, i, arr) => (
                  <div
                    key={i}
                    style={{
                      paddingLeft: "1.5rem",
                      paddingBottom: "1.75rem",
                      borderLeft: "2px solid #2d7a4f",
                      position: "relative",
                    }}
                  >
                    {/* Square bullet */}
                    <div
                      style={{
                        position: "absolute",
                        left: "-5px",
                        top: "4px",
                        width: "8px",
                        height: "8px",
                        backgroundColor: "#4caf50",
                      }}
                    />
                    <p
                      style={{
                        color: "#f8f9f5",
                        fontSize: "0.92rem",
                        fontWeight: 600,
                        marginBottom: "0.2rem",
                      }}
                    >
                      {item.role}
                    </p>
                    <p style={{ color: "#86efac", fontSize: "0.82rem", marginBottom: "0.15rem" }}>
                      {item.org}
                    </p>
                    <p style={{ color: "#6b9e7a", fontSize: "0.78rem" }}>{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Professional & Consulting */}
            <div style={{ flex: "1 1 300px" }}>
              <p
                style={{
                  color: "#4caf50",
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  marginBottom: "1.5rem",
                  borderBottom: "1px solid #2d7a4f",
                  paddingBottom: "0.75rem",
                }}
              >
                Professional & Consulting
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                {[
                  {
                    role: "Research Associate",
                    org: "Punjab Economic Research Institute (PERI)",
                    detail: "Economic Policy Research",
                  },
                  {
                    role: "Assistant Director",
                    org: "National Tariff Commission of Pakistan",
                    detail: "Trade Policy Analysis",
                  },
                  {
                    role: "Research Consultant",
                    org: "International Growth Center (IGC)",
                    detail: "Development Research",
                  },
                  {
                    role: "Research Consultant",
                    org: "HEC, Planning Commission, SDPI, LEAD, RASTA",
                    detail: "Applied Policy Research",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    style={{
                      paddingLeft: "1.5rem",
                      paddingBottom: "1.75rem",
                      borderLeft: "2px solid #2d7a4f",
                      position: "relative",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        left: "-5px",
                        top: "4px",
                        width: "8px",
                        height: "8px",
                        backgroundColor: "#2d7a4f",
                      }}
                    />
                    <p
                      style={{
                        color: "#f8f9f5",
                        fontSize: "0.92rem",
                        fontWeight: 600,
                        marginBottom: "0.2rem",
                      }}
                    >
                      {item.role}
                    </p>
                    <p style={{ color: "#86efac", fontSize: "0.82rem", marginBottom: "0.15rem" }}>
                      {item.org}
                    </p>
                    <p style={{ color: "#6b9e7a", fontSize: "0.78rem" }}>{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SUPERVISION & IMPACT ─────────────────────────── */}
      <section
        style={{
          backgroundColor: "#1a4731",
          padding: "5rem 2rem",
        }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: "1px",
              backgroundColor: "#2d7a4f",
            }}
          >
            {[
              { num: "8,300+", label: "Total Citations" },
              { num: "54", label: "h-index" },
              { num: "144", label: "i10-index" },
              { num: "10", label: "Ph.D. Supervised" },
              { num: "100+", label: "MPhil Theses" },
              { num: "15+", label: "Years Experience" },
              { num: "7", label: "Book Chapters" },
              { num: "5×", label: "Stanford Top 2%" },
            ].map((s) => (
              <div
                key={s.label}
                style={{
                  backgroundColor: "#1a4731",
                  padding: "2rem 1.5rem",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    color: "#4caf50",
                    fontSize: "2rem",
                    fontWeight: 800,
                    lineHeight: 1,
                    marginBottom: "0.5rem",
                  }}
                >
                  {s.num}
                </div>
                <div
                  style={{
                    color: "#a7c5b0",
                    fontSize: "0.7rem",
                    fontWeight: 500,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CONTACT ──────────────────────────────────────── */}
      <section
        id="contact"
        style={{
          backgroundColor: "#f8f9f5",
          padding: "6rem 2rem",
        }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "200px 1fr",
              gap: "5rem",
              alignItems: "start",
            }}
            className="responsive-grid-about"
          >
            {/* Left label */}
            <div>
              <div
                style={{
                  width: "32px",
                  height: "3px",
                  backgroundColor: "#4caf50",
                  marginBottom: "1rem",
                }}
              />
              <span
                style={{
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "#2d7a4f",
                }}
              >
                Contact
              </span>
            </div>

            {/* Content */}
            <div>
              <h2
                style={{
                  fontSize: "clamp(1.5rem, 3vw, 2rem)",
                  fontWeight: 700,
                  color: "#111827",
                  lineHeight: 1.2,
                  letterSpacing: "-0.02em",
                  marginBottom: "2.5rem",
                }}
              >
                Connect & Collaborate
              </h2>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                  gap: "1px",
                  backgroundColor: "#d1d5db",
                  marginBottom: "2rem",
                }}
              >
                <div style={{ backgroundColor: "#f8f9f5", padding: "1.75rem" }}>
                  <p
                    style={{
                      color: "#2d7a4f",
                      fontSize: "0.7rem",
                      fontWeight: 700,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      marginBottom: "0.75rem",
                    }}
                  >
                    Institution
                  </p>
                  <p style={{ color: "#374151", fontSize: "0.9rem", lineHeight: 1.7 }}>
                    School of Economics
                    <br />
                    Quaid-i-Azam University
                    <br />
                    Islamabad, Pakistan
                  </p>
                </div>

                <div style={{ backgroundColor: "#f8f9f5", padding: "1.75rem" }}>
                  <p
                    style={{
                      color: "#2d7a4f",
                      fontSize: "0.7rem",
                      fontWeight: 700,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      marginBottom: "0.75rem",
                    }}
                  >
                    Academic Profile
                  </p>
                  <a
                    href="https://scholar.google.com/citations?user=H1mlqIoAAAAJ&hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: "#2d7a4f",
                      fontSize: "0.88rem",
                      fontWeight: 600,
                      textDecoration: "none",
                      borderBottom: "2px solid #4caf50",
                      paddingBottom: "2px",
                    }}
                  >
                    Google Scholar Profile
                  </a>
                  <p style={{ color: "#6b7280", fontSize: "0.8rem", marginTop: "0.5rem" }}>
                    8,300+ citations · h-index 54
                  </p>
                </div>

                <div style={{ backgroundColor: "#f8f9f5", padding: "1.75rem" }}>
                  <p
                    style={{
                      color: "#2d7a4f",
                      fontSize: "0.7rem",
                      fontWeight: 700,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      marginBottom: "0.75rem",
                    }}
                  >
                    Expertise For
                  </p>
                  <ul
                    style={{
                      color: "#374151",
                      fontSize: "0.85rem",
                      lineHeight: 2,
                      listStyle: "none",
                      padding: 0,
                      margin: 0,
                    }}
                  >
                    <li>Research Supervision</li>
                    <li>Capacity-Building Workshops</li>
                    <li>Keynote Addresses</li>
                    <li>Research Consultancy</li>
                  </ul>
                </div>
              </div>

              <p style={{ color: "#6b7280", fontSize: "0.83rem", lineHeight: 1.7 }}>
                Dr. Majeed is available for research collaboration, academic keynote addresses,
                capacity-building training in applied social sciences, and research consultancy
                engagements.
              </p>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .responsive-grid-about {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
        }
      `}</style>
    </div>
  );
}
