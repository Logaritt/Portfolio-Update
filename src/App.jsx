import { useState, useEffect, Fragment, useRef } from "react";
import ResumeModal from "./components/ResumeModal.jsx";
import ImageModal from "./components/ImageModal.jsx";

import GalleryModal from "./components/GalleryModal.jsx";
import DataImage from "./data";
import { listTools, listProyek, educationList, experienceList, awardsList} from "./data";

function App() {
  const [resumeOpen, setResumeOpen] = useState(false);
  const resumeSrc = "/assets/resume.pdf";

  const journeyRef = useRef(null);

  // === Hero word cycling (AI / Website / Data) ===
  const heroRoles = [
    { badge: "AI", tail: "Engineering" },
    { badge: "Web", tail: "Developer" },
    { badge: "Data", tail: "Analyst" },
  ];
  const [wordIndex, setWordIndex] = useState(0);

  

  useEffect(() => {
    const t = setInterval(() => {
      setWordIndex((i) => (i + 1) % heroRoles.length);
    }, 1600);
    return () => clearInterval(t);
  }, []);

  const activeRole = heroRoles[wordIndex];

  // === What I do accordion ===
  const whatIDo = [
    {
      key: "web",
      title: "Web Developer",
      icon: "ri-code-s-slash-line",
      desc: "Building fast, responsive, and easy-to-use websites — focusing on UX, performance, and clean code.",
    },
    {
      key: "data",
      title: "Data Analyst",
      icon: "ri-bar-chart-2-line",
      desc: "Transforming data into insights for informed decisions — from cleaning, analysis, to visualization.",
    },
    {
      key: "ai",
      title: "AI Engineering",
      icon: "ri-brain-line",
      desc: "Applying AI for real-world solutions — automation, recommendations, or scalable smart features.",
    },
  ];

  const [openDo, setOpenDo] = useState("");

  const [aboutTab, setAboutTab] = useState("education"); // "education" | "experience"

  const [imgModal, setImgModal] = useState(null);

  const [projectModal, setProjectModal] = useState(null);

  const [awardIndex, setAwardIndex] = useState(null);



  return (
    <>
      {/* Hero Section */}
      <div
        className="hero md:grid grid-cols-2 items-center pt-24 xl:gap-10 gap-10 grid-cols-1"
        id="beranda"
      >
        {/* LEFT */}
        <div className="animate__animated animate__fadeInUp animate__delay-1s">
          <p className="opacity-60 mb-4">Hi, I'm Naufal Geo Pastrana</p>
            <div className="flex flex-col sm:flex-row sm:items-end items-start gap-4 mb-5">
              <div className="hero-badge">
                <span key={activeRole.badge} className="hero-badge__word">
                  {activeRole.badge}
                </span>
              </div>

              <h1 key={activeRole.tail} className="text-4xl sm:text-5xl md:text-6xl leading-tight font-extrabold">
                {activeRole.tail}
              </h1>
            </div>

            <p className="opacity-60 max-w-xl">
              Building digital solutions across{" "}
              <span className="text-amber-300">Web Development</span>,{" "}
              <span className="text-amber-300">Data Analytics</span>, and{" "}
              <span className="text-amber-300">AI Engineering</span>.
            </p>

          {/* buttons */}
          <div className="mt-8 flex items-center sm:gap-4 gap-2">
            <button
              type="button"
              onClick={() => setResumeOpen(true)}
              className="bg-amber-400 text-black px-6 py-4 rounded-2xl hover:bg-amber-300 transition font-semibold"
            >
              Open Resume <i className="ri-file-text-line ri-lg"></i>
            </button>
          </div>
        </div>

        {/* RIGHT */}
        <div className="animate__animated animate__fadeInUp animate__delay-2s flex flex-col gap-6 items-center md:items-end">
          {/* foto blob frame kamu (yang sudah keren) */}
          <div className="hero-photo w-full max-w-[240px] sm:max-w-[280px] md:max-w-[320px] lg:max-w-[360px]">
            <div className="hero-photo__inner">
              <img src={DataImage.HeroImage} alt="Hero" className="hero-photo__img" loading="lazy" />
            </div>
          </div>

          <p className="text-sm opacity-50 max-w-md text-center md:text-right">
            Check out my resume if you’d like — I keep it updated with experiences, projects, and certifications.
          </p>
        </div>

        {/* Tools marquee (jalan ke kanan, redup) */}
        <div className="col-span-2 mt-6 marquee">
          <div className="marquee__track">
            {[...listTools, ...listTools].map((t, i) => (
              <div className="tool-chip" key={`${t.id}-${i}`}>
                <img src={t.gambar} alt={t.nama} className="tool-chip__img" />
                <span className="tool-chip__text">{t.nama}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Hero Section */}

      {/* What I do */}
      <div className="mt-24">
        <h2 className="text-4xl font-bold mb-6">What I do?</h2>

        <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 items-start">
          {/* LEFT accordion */}
          <div className="space-y-3">
            {whatIDo.map((item) => {
              const isOpen = openDo === item.key;
              return (
                <button
                  key={item.key}
                  type="button"
                  onClick={() => setOpenDo(isOpen ? "" : item.key)}
                  className="w-full text-left bg-zinc-900/40 border border-white/10 rounded-2xl p-5 hover:bg-zinc-900/55 transition"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <i className={`${item.icon} text-amber-300`}></i>
                      <span className="font-semibold">{item.title}</span>
                    </div>
                    <i className={`ri-arrow-down-s-line transition ${isOpen ? "rotate-180" : ""}`}></i>
                  </div>

                  {isOpen && (
                    <p className="mt-3 opacity-60 leading-relaxed">
                      {item.desc}
                    </p>
                  )}
                </button>
              );
            })}
          </div>

          {/* RIGHT card */}
          <div className="bg-zinc-900/40 border border-white/10 rounded-3xl p-10 min-h-[260px] flex flex-col justify-center self-start lg:sticky lg:top-28">
            <p className="opacity-65 text-lg leading-relaxed">
              Driving digital transformation through <b>seamless</b>, <b>rapid</b>, and <b>intelligence-led</b> development for the whole ecosystem.
            </p>

            <div className="mt-8">
              <a
                href="#Project"
                className="inline-flex items-center gap-2 bg-amber-400 text-black px-6 py-3 rounded-2xl hover:opacity-90 transition"
              >
                Look what I made! <i className="ri-arrow-right-line"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* What I do */}




     {/* About */}
      <div className="About mt-32 py-10 scroll-mt-24" id="About">
        {/* TOP ABOUT CARD (paragraf tentang kamu) */}
        <div className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg">
          <p className="text-base/loose mb-10">
            Graduated of Informatics Faculty from Telkom University, who passionate about Web Development and Data Analyst.
            Experience in Web Dev and Data Analyst Fields including Organizational Development, Learning and Program
            Development. Creative, Growth mindset and visioner person, Adaptive, Quick Learner, and have strong willingness to
            pursue professional career in Multinational Company.
          </p>
        </div>

        {/* ===== Journey (Education | Experience) ===== */}
        <div className="mt-16 about-journey">
          {/* Tabs */}
          <div className="about-journey__tabs">
            <button
              type="button"
              onClick={() => setAboutTab("education")}
              className={`about-journey__tab ${aboutTab === "education" ? "is-active" : ""}`}
            >
              <i className="ri-graduation-cap-line"></i>
              <span>Education</span>
            </button>

            <button
              type="button"
              onClick={() => setAboutTab("experience")}
              className={`about-journey__tab ${aboutTab === "experience" ? "is-active" : ""}`}
            >
              <i className="ri-briefcase-3-line"></i>
              <span>Experience</span>
            </button>
          </div>

          {/* Timeline */}
          {(() => {
            const items = aboutTab === "education" ? educationList : experienceList;
            const cols = items.length;

            // kalau 4 item, biar gak tabrakan: selang-seling atas/bawah
            const pos = (i) => (cols <= 2 ? "top" : i % 2 === 0 ? "top" : "bottom");

            return (
              <div className="about-journey__scroll" ref={journeyRef}>
                <div className="about-journey__grid" style={{ ["--cols"]: cols }}>
                  <div className="about-journey__line" />

                  {items.map((it, i) => {
                    const isEnd = i === 0 || i === cols - 1;
                    return (
                      <Fragment key={it.id}>
                        {/* card */}
                        <div
                          className={`about-journey__card ${pos(i) === "top" ? "row-top" : "row-bottom"}`}
                          style={{ gridColumn: i + 1 }}
                        >
                          <p className="about-journey__cardTitle">{it.title}</p>
                          <p className="about-journey__cardOrg">{it.org}</p>
                          {it.meta ? <p className="about-journey__cardMeta">{it.meta}</p> : null}
                          <p className="about-journey__cardPeriod">
                            <i className="ri-calendar-line"></i> {it.period}
                          </p>
                        </div>

                        {/* dot */}
                        <span
                          className={`about-journey__dot ${isEnd ? "is-end" : ""}`}
                          style={{ gridColumn: i + 1 }}
                          aria-hidden="true"
                        />
                      </Fragment>
                    );
                  })}
                </div>

                {/* Mascot photo kecil di pojok (re-trigger animasi pake key) */}
                <div
                  key={aboutTab}
                  className={`about-mascot ${aboutTab === "education" ? "is-left" : "is-right"}`}
                >
                  {aboutTab === "education" ? (
                    <button
                      type="button"
                      onClick={() => setImgModal({ src: DataImage.AboutEdu, title: "Education Photo" })}
                      className="about-mascot__btn"
                      title="Click to preview"
                    >
                      <img src={DataImage.AboutEdu} alt="Education" />
                    </button>
                  ) : (
                    <div className="about-mascot__stack">
                      <button
                        type="button"
                        onClick={() => setImgModal({ src: DataImage.AboutExp1, title: "Experience Photo 1" })}
                        className="about-mascot__btn"
                        title="Click to preview"
                      >
                        <img src={DataImage.AboutExp1} alt="Experience 1" />
                      </button>

                      <button
                        type="button"
                        onClick={() => setImgModal({ src: DataImage.AboutExp2, title: "Experience Photo 2" })}
                        className="about-mascot__btn"
                        title="Click to preview"
                      >
                        <img src={DataImage.AboutExp2} alt="Experience 2" />
                      </button>
                    </div>
                  )}
                </div>

              </div>
            );
          })()}
        </div>
      </div>
      {/* About */}




      {/* Project */}
      <div className="mt-32 py-10 scroll-mt-24" id="Project">
        <div className="text-center">
          <p className="awards__kicker">My work</p>
          <h2 className="awards__title">Projects</h2>
        </div>


        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {listProyek.map((proyek) => {
            const hasLink = Boolean(proyek.href);

            return (
              <div
                key={proyek.id}
                className="group overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/40 hover:bg-zinc-900/55 transition"
              >
                {/* Image header */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={proyek.gambar}
                    alt={proyek.nama}
                    loading="lazy"
                    className="h-full w-full object-cover group-hover:scale-[1.03] transition duration-500"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/20 to-transparent" />

                  {/* Top-right action icon */}
                  <div className="absolute top-4 right-4">
                    {hasLink ? (
                      <a
                        href={proyek.href}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex items-center justify-center w-10 h-10 rounded-2xl bg-black/40 border border-white/10 hover:bg-black/55 transition"
                        title="Open link"
                      >
                        <i className="ri-external-link-line"></i>
                      </a>
                    ) : (
                      <span className="inline-flex items-center px-3 py-2 rounded-2xl bg-black/40 border border-white/10 text-xs opacity-80">
                        Private
                      </span>
                    )}
                  </div>

                  {/* Title overlay */}
                  <div className="absolute left-5 right-5 bottom-4">
                    <p className="text-xs opacity-70">{proyek.subtitle}</p>
                    <h3 className="text-xl font-bold leading-snug mt-1">{proyek.nama}</h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="opacity-70 leading-relaxed">
                    {proyek.desk}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {proyek.tools.map((tool, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1 rounded-full border border-white/10 bg-white/5 opacity-90"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6">
                    {hasLink ? (
                      <a
                        href={proyek.href}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex w-full items-center justify-center gap-2 bg-amber-400 text-black hover:bg-amber-300 transition px-4 py-3 rounded-2xl border border-white/10 font-semibold"

                      >
                        {proyek.cta} <i className="ri-arrow-right-line"></i>
                      </a>
                    ) : (
                      <button
                        type="button"
                        onClick={() => setProjectModal(proyek)}
                        className="inline-flex w-full items-center justify-center gap-2 bg-amber-400 text-black hover:opacity-90 transition px-4 py-3 rounded-2xl"
                      >
                        {proyek.cta} <i className="ri-file-list-3-line"></i>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* Project */}

      {/* Awards */}
      <div className="awards mt-32 py-10 scroll-mt-24" id="Awards">
        <p className="awards__kicker">My Certificates</p>
        <h2 className="awards__title">Certificates & Awards</h2>
        {/* <p className="awards__desc">
          A selection of certificates and awards related to research, conferences, and academic activities.
        </p> */}

        <div className="awards__grid">
          {awardsList.map((a, i) => (
            <button
              key={a.id}
              type="button"
              className="awards__card"
              onClick={() => setAwardIndex(i)}
              title="Click to preview"
            >
              <div className="awards__imgWrap">
                <img src={a.image} alt={a.title} className="awards__img" loading="lazy" />
                <div className="awards__imgOverlay" />
              </div>

              <div className="awards__body">
                <div className="awards__meta">
                  <span className="awards__tag">{a.tag}</span>
                </div>
                <h3 className="awards__cardTitle">{a.title}</h3>
                <p className="awards__cardDesc">{a.desc}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
      {/* Awards */}


      {/* Contact */}
      <div className="mt-32 py-12 scroll-mt-24" id="Kontak">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 items-start">
            {/* LEFT */}
            <div>
              <p className="text-amber-300/90 text-sm tracking-wide mb-3">Let's talk</p>
              <h2 className="text-5xl font-extrabold leading-tight">Contact</h2>

              <p className="mt-6 opacity-70 text-base/loose max-w-xl">
                Have an idea, a project, or a collaboration in mind?
                Send a message through this form and I will get back to you as soon as possible.
              </p>

              <div className="mt-6 flex items-center gap-3 opacity-75">
                <i className="ri-map-pin-2-line text-amber-300"></i>
                <p className="text-base">
                  Location: <span className="text-white">Jakarta, Indonesia</span>
                </p>
              </div>
            </div>

            {/* RIGHT (Form) */}
            <form
              action="https://formsubmit.co/naufalgeo123@gmail.com"
              method="POST"
              autoComplete="off"
              className="w-full"
            >
              <div className="space-y-4">
                <label className="sr-only" htmlFor="name">Name</label>
                <input
                  id="name"
                  type="text"
                  name="nama"
                  placeholder="Name"
                  required
                  className="w-full rounded-xl bg-zinc-950/40 border border-white/10 px-4 py-3
                            outline-none focus:border-amber-300/60 focus:ring-2 focus:ring-amber-300/20"
                />

                <label className="sr-only" htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="w-full rounded-xl bg-zinc-950/40 border border-white/10 px-4 py-3
                            outline-none focus:border-amber-300/60 focus:ring-2 focus:ring-amber-300/20"
                />

                <label className="sr-only" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="pesan"
                  placeholder="Message"
                  rows="7"
                  required
                  className="w-full rounded-xl bg-zinc-950/40 border border-white/10 px-4 py-3
                            outline-none focus:border-amber-300/60 focus:ring-2 focus:ring-amber-300/20"
                />

                <button
                  type="submit"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3
                            hover:bg-white/10 transition font-medium opacity-80 hover:opacity-100"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* Contact */}


      <ResumeModal
        open={resumeOpen}
        onClose={() => setResumeOpen(false)}
        src={resumeSrc}
      />
      <ImageModal
        open={!!imgModal}
        src={imgModal?.src}
        title={imgModal?.title}
        onClose={() => setImgModal(null)}
      />
      <GalleryModal
        open={awardIndex !== null}
        startIndex={awardIndex ?? 0}
        items={awardsList}
        onClose={() => setAwardIndex(null)}
      />


      {projectModal ? (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <button
          type="button"
          className="absolute inset-0 bg-black/70"
          onClick={() => setProjectModal(null)}
          aria-label="Close"
        />
        <div className="relative z-10 w-full max-w-2xl rounded-3xl border border-white/10 bg-zinc-900 p-6">
          <div className="flex items-start justify-between gap-6">
            <div>
              <p className="text-xs opacity-70">{projectModal.subtitle}</p>
              <h3 className="text-2xl font-bold mt-1">{projectModal.nama}</h3>
            </div>

            <button
              type="button"
              onClick={() => setProjectModal(null)}
              className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition"
              aria-label="Close"
            >
              <i className="ri-close-line"></i>
            </button>
          </div>

          <p className="mt-4 opacity-75 leading-relaxed">{projectModal.desk}</p>

          {projectModal.highlights?.length ? (
            <div className="mt-5">
              <p className="font-semibold mb-2">What I did (safe to share)</p>
              <ul className="list-disc pl-5 space-y-2 opacity-75">
                {projectModal.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            </div>
          ) : null}

          <div className="mt-6 flex flex-wrap gap-2">
            {projectModal.tools.map((t, i) => (
              <span
                key={i}
                className="text-xs px-3 py-1 rounded-full border border-white/10 bg-white/5 opacity-90"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="mt-6">
            <button
              type="button"
              onClick={() => setProjectModal(null)}
              className="w-full bg-white/5 hover:bg-white/10 transition border border-white/10 px-4 py-3 rounded-2xl"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    ) : null}



    </>
  )
}

export default App
