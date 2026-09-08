import { useState } from "react";
import profilePhoto from "@/imports/image-4.png";

function AvatarIllustration() {
  return (
    <div className="relative flex items-center justify-center w-80 h-80 md:w-[400px] md:h-[400px]">
      {/* Outer dashed spinning ring */}
      <div
        className="absolute inset-0 rounded-full border-2 border-blue-200 border-dashed animate-spin"
        style={{ animationDuration: "22s" }}
      />

      {/* Light blue → white gradient blob background */}
      <div
        className="absolute inset-6"
        style={{
          background:
            "radial-gradient(ellipse at 50% 30%, #BFDBFE 0%, #DBEAFE 35%, #EFF6FF 65%, #ffffff 100%)",
          borderRadius: "50%",
          boxShadow: "0 8px 40px rgba(147,197,253,0.35)",
        }}
      />

      {/* Photo clipped into a circular frame with light blue gradient background */}
      <div className="relative w-[82%] h-[82%] rounded-full overflow-hidden z-10 bg-gradient-to-b from-blue-100 via-blue-50 to-indigo-100 flex items-center justify-center">
        <img
          src={profilePhoto}
          alt="Salma Xetri"
          className="w-full h-full object-cover object-top"
        />
      </div>

      {/* "Better Version of Me" badge */}
      <div
        className="absolute right-0 top-[25%] z-20 bg-white/90 backdrop-blur-sm border border-blue-100 shadow-md rounded-2xl px-3 py-2 text-center"
        style={{ maxWidth: "88px" }}
      >
        <p className="text-[10px] leading-tight text-blue-500 font-semibold italic">
          Better Version of Me ♥
        </p>
      </div>

      {/* Floating badges */}
      <div className="absolute top-6 right-8 z-20 bg-white border border-blue-100 shadow-lg rounded-xl px-3 py-1.5 flex items-center gap-1.5">
        <span className="text-base">💻</span>
        <span className="text-xs font-semibold text-gray-700">Dev</span>
      </div>
      <div className="absolute bottom-10 left-2 z-20 bg-white border border-blue-100 shadow-lg rounded-xl px-3 py-1.5 flex items-center gap-1.5">
        <span className="text-base">🎨</span>
        <span className="text-xs font-semibold text-gray-700">Design</span>
      </div>

      {/* Decorative dots */}
      <div className="absolute top-10 left-10 w-2 h-2 rounded-full bg-blue-300 opacity-70" />
      <div className="absolute top-14 left-16 w-1 h-1 rounded-full bg-blue-200 opacity-60" />
    </div>
  );
}

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = ["Home", "About", "Skills", "Projects", "Contact"];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-sm">
            SX
          </div>
          <span className="font-semibold text-gray-800 text-lg">
            Salma Xetri
          </span>
        </div>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#"
          className="hidden md:flex items-center gap-2 bg-gray-900 text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-blue-600 transition-colors"
          onClick={(e) => e.preventDefault()}
        >
          Download CV
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
          </svg>
        </a>

        <button
          className="md:hidden text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            {menuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm font-medium text-gray-700"
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

function SocialLinks() {
  const icons = [
    {
      label: "GitHub",
      href: "https://github.com/codesalma",
      svg: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
      ),
    },
    {
      label: "LinkedIn",
      href: "#",
      svg: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ),
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/salmaxetri58/",
      svg: (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      ),
    },
    {
      label: "Email",
      href: "mailto:slamaadhkr@gmail.com",
      svg: (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      ),
    },
  ];

  return (
    <div className="flex items-center gap-4 mt-6">
      {icons.map((icon) => (
        <a
          key={icon.label}
          href={icon.href}
          aria-label={icon.label}
          className="text-gray-500 hover:text-blue-600 transition-colors"
        >
          {icon.svg}
        </a>
      ))}
    </div>
  );
}

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen pt-20 bg-gradient-to-br from-blue-50 via-white to-blue-50 flex items-center"
    >
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-gray-500 text-sm font-medium mb-2">Hello, I'm</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
            Salma Xetri
          </h1>
          <p className="text-blue-600 font-semibold text-lg mb-4">
            Aspiring Developer | Student
          </p>
          <p className="text-gray-600 leading-relaxed max-w-md mb-8">
            I love turning ideas into simple, beautiful and functional digital
            experiences. Currently learning and growing in the world of
            technology.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="#projects"
              className="flex items-center gap-2 bg-blue-600 text-white font-medium px-6 py-3 rounded-full hover:bg-blue-700 transition-colors text-sm"
            >
              View My Projects →
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 border border-gray-300 text-gray-700 font-medium px-6 py-3 rounded-full hover:border-blue-600 hover:text-blue-600 transition-colors text-sm"
            >
              Contact Me
            </a>
          </div>

          <SocialLinks />
        </div>

        <div className="flex justify-center">
          <AvatarIllustration />
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-8 bg-blue-600 rounded-full" />
            <h2 className="text-2xl font-bold text-gray-900">About Me</h2>
          </div>
          <p className="text-gray-600 leading-relaxed mb-8">
            Hi! I'm Salma Xetri, a passionate and curious learner. I enjoy
            creating simple and meaningful solutions through technology. I am
            currently studying and building my skills in programming, web
            development and design. I believe in continuous learning and love
            challenges that help me grow.
          </p>

          <div className="grid grid-cols-3 gap-4">
            {[
              {
                icon: (
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c3 3 9 3 12 0v-5" />
                  </svg>
                ),
                label: "Education",
                value: "Currently Studying",
              },
              {
                icon: (
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                ),
                label: "Location",
                value: "Nepal",
              },
              {
                icon: (
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                ),
                label: "Interests",
                value: "Coding, Design, Music",
              },
            ].map((item) => (
              <div key={item.label} className="flex flex-col gap-1">
                <div className="text-blue-600">{item.icon}</div>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                  {item.label}
                </p>
                <p className="text-sm text-gray-700 font-medium">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillBadge({ name, color }: { name: string; color: string }) {
  const icons: Record<string, string> = {
    Java: "☕",
    HTML: "🌐",
    CSS: "🎨",
    JavaScript: "⚡",
    Python: "🐍",
    Figma: "✏️",
    "VS Code": "💻",
    "Git & GitHub": "🐙",
  };

  return (
    <div className="flex flex-col items-center gap-2 p-4 rounded-2xl border border-gray-100 bg-white hover:shadow-md hover:-translate-y-0.5 transition-all cursor-default">
      <div className={`w-12 h-12 rounded-xl ${color} flex items-center justify-center text-2xl`}>
        {icons[name]}
      </div>
      <span className="text-xs font-semibold text-gray-700">{name}</span>
    </div>
  );
}

function Skills() {
  const skills = [
    { name: "Java", color: "bg-orange-50" },
    { name: "HTML", color: "bg-red-50" },
    { name: "CSS", color: "bg-blue-50" },
    { name: "JavaScript", color: "bg-yellow-50" },
    { name: "Python", color: "bg-blue-50" },
    { name: "Figma", color: "bg-purple-50" },
    { name: "VS Code", color: "bg-blue-50" },
    { name: "Git & GitHub", color: "bg-gray-50" },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-1 h-8 bg-blue-600 rounded-full" />
          <h2 className="text-2xl font-bold text-gray-900">My Skills</h2>
        </div>
        <p className="text-gray-500 text-sm mb-10 ml-4">
          Technologies and tools I'm familiar with
        </p>
        <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-8 gap-4">
          {skills.map((skill) => (
            <SkillBadge key={skill.name} name={skill.name} color={skill.color} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  title,
  description,
  bg,
  href,
}: {
  title: string;
  description: string;
  bg: string;
  href: string;
}) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow group">
      <div className={`h-40 ${bg} flex items-center justify-center`}>
        <svg
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-gray-400"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M3 9h18M9 21V9" />
        </svg>
      </div>
      <div className="p-5">
        <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
        <p className="text-xs text-gray-500 leading-relaxed mb-4">
          {description}
        </p>
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 text-xs font-medium hover:underline flex items-center gap-1"
        >
          View Project →
        </a>
      </div>
    </div>
  );
}

function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description:
        "A responsive personal portfolio website built with HTML, CSS and Figma.",
      bg: "bg-slate-100",
      href: "https://github.com/codesalma/codesalma.github.io",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-1 h-8 bg-blue-600 rounded-full" />
          <h2 className="text-2xl font-bold text-gray-900">My Projects</h2>
        </div>
        <p className="text-gray-500 text-sm mb-10 ml-4">
          Some of the projects I've worked on
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(
        "https://formsubmit.co/ajax/slamaadhkr@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            message: form.message,
            _subject: `Portfolio message from ${form.name}`,
          }),
        }
      );
      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 4000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 4000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-8 bg-blue-500 rounded-full" />
            <h2 className="text-2xl font-bold text-white">Get In Touch</h2>
          </div>
          <p className="text-gray-400 leading-relaxed mb-8 text-sm">
            I'm always open to new opportunities, collaborations or a friendly
            chat.
          </p>

          <div className="flex flex-col gap-4">
            {[
              {
                icon: (
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                ),
                text: "slamaadhkr@gmail.com",
              },
              {
                icon: (
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                ),
                text: "Nepal",
              },
              {
                icon: (
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                ),
                text: "@salmaxetri58",
              },
            ].map((item) => (
              <div
                key={item.text}
                className="flex items-center gap-3 text-gray-300 text-sm"
              >
                <span className="text-blue-400">{item.icon}</span>
                {item.text}
              </div>
            ))}
          </div>

          <div className="mt-10 bg-blue-900/30 border border-blue-800 rounded-2xl p-6 text-center">
            <p className="text-blue-300 font-medium italic text-lg">Let's</p>
            <p className="text-blue-300 font-medium italic text-lg">
              Connect ♥
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="text-xs font-medium text-gray-400 mb-1 block">
              Name
            </label>
            <input
              type="text"
              placeholder="Your name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              className="w-full bg-gray-800 border border-gray-700 text-white text-sm rounded-lg px-4 py-3 placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>
          <div>
            <label className="text-xs font-medium text-gray-400 mb-1 block">
              Email
            </label>
            <input
              type="email"
              placeholder="Your email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
              className="w-full bg-gray-800 border border-gray-700 text-white text-sm rounded-lg px-4 py-3 placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>
          <div>
            <label className="text-xs font-medium text-gray-400 mb-1 block">
              Message
            </label>
            <textarea
              placeholder="Your message..."
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
              className="w-full bg-gray-800 border border-gray-700 text-white text-sm rounded-lg px-4 py-3 placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-medium py-3 rounded-lg hover:bg-blue-700 transition-colors text-sm flex items-center justify-center gap-2"
          >
            {status === "sending"
              ? "Sending..."
              : status === "sent"
              ? "Message Sent! ✓"
              : status === "error"
              ? "Failed — try again"
              : "Send Message →"}
          </button>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-950 py-8 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xs">
            SX
          </div>
          <span className="text-gray-400 text-sm font-medium">Salma Xetri</span>
        </div>

        <div className="flex items-center gap-4">
          {[
            { label: "GitHub", href: "https://github.com/codesalma" },
            { label: "LinkedIn", href: "#" },
            {
              label: "Instagram",
              href: "https://www.instagram.com/salmaxetri58/",
            },
            { label: "Email", href: "mailto:slamaadhkr@gmail.com" },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="text-gray-500 hover:text-blue-400 transition-colors text-xs"
            >
              {s.label}
            </a>
          ))}
        </div>

        <p className="text-gray-600 text-xs">
          © 2026 Salma Xetri. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}