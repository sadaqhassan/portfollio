
import Link from "next/link";

const projects = [
  {
    title: "FBK — Fastabiqul Qayraat",
    category: "Full-Stack Web Application",
    description:
      "A digital dhikr competition platform designed to motivate users through challenges, points, rankings, and community participation.",
    technologies: ["Next.js", "Node.js", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/sadaqhassan/FBK_PROJECT",
    demo: "",
    number: "01",
    color: "from-blue-500/20 to-cyan-500/5",
  },
  {
    title: "School Management System",
    category: "Education Technology",
    description:
      "A school management solution for organizing student records, managing academic information, and improving administrative workflows.",
    technologies: ["React", "Node.js", "Express.js", "MongoDB"],
    github: "https://github.com/sadaqhassan",
    demo: "",
    number: "02",
    color: "from-violet-500/20 to-blue-500/5",
  },
  {
    title: "StudentHub",
    category: "Student Platform",
    description:
      "A student-focused platform concept for bringing useful academic resources and student services together in one place.",
    technologies: ["React", "TypeScript", "PostgreSQL", "Tailwind CSS"],
    github: "https://github.com/sadaqhassan",
    demo: "",
    number: "03",
    color: "from-emerald-500/20 to-cyan-500/5",
  },
  {
    title: "Bus Booking App",
    category: "Booking System",
    description:
      "A bus booking application concept designed to simplify travel planning, trip discovery, and seat reservation workflows.",
    technologies: ["React", "Node.js", "Express.js", "MongoDB"],
    github: "https://github.com/sadaqhassan",
    demo: "",
    number: "04",
    color: "from-orange-500/20 to-red-500/5",
  },
  {
    title: "Meal Planner",
    category: "Lifestyle Application",
    description:
      "A meal planning application concept for organizing meals and helping users manage their daily food plans.",
    technologies: ["React", "JavaScript", "Node.js", "MongoDB"],
    github: "https://github.com/sadaqhassan",
    demo: "",
    number: "05",
    color: "from-pink-500/20 to-purple-500/5",
  },
  {
    title: "Personal Portfolio",
    category: "Portfolio Website",
    description:
      "My developer portfolio showcasing my skills, selected projects, and ways to connect with me for professional opportunities.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/sadaqhassan",
    demo: "https://sadak-hassan.vercel.app",
    number: "06",
    color: "from-sky-500/20 to-indigo-500/5",
  },
];

export default function ProjectsPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 px-6 py-28 text-white md:px-12">
      {/* Background glow */}
      <div className="pointer-events-none absolute -left-40 top-40 h-96 w-96 rounded-full bg-blue-600/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 top-[600px] h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <header className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-4 font-semibold uppercase tracking-[0.3em] text-blue-400">
            My Portfolio
          </p>

          <h1 className="text-4xl font-extrabold md:text-6xl">
            Featured <span className="text-blue-500">Projects</span>
          </h1>

          <p className="mt-6 leading-8 text-gray-400">
            A selection of projects and application concepts that
            reflect my interests in web development, problem-solving,
            and building useful digital experiences.
          </p>
        </header>

        {/* Project count */}
        <div className="mb-8 flex items-center justify-between border-b border-white/10 pb-4">
          <p className="text-sm text-gray-400">
            Selected Work
          </p>
          <p className="text-sm font-medium text-blue-400">
            {String(projects.length).padStart(2, "0")} Projects
          </p>
        </div>

        {/* Projects grid */}
        <section className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.number}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition duration-300 hover:-translate-y-1 hover:border-blue-500/40"
            >
              {/* Project visual */}
              <div
                className={`relative flex h-48 items-center justify-center overflow-hidden bg-gradient-to-br ${project.color}`}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.12),transparent_65%)]" />

                <span className="relative text-7xl font-black tracking-tighter text-white/10 transition duration-300 group-hover:scale-110 group-hover:text-white/20">
                  {project.number}
                </span>

                <span className="absolute left-5 top-5 rounded-full border border-white/10 bg-slate-950/50 px-3 py-1 text-xs text-gray-300 backdrop-blur">
                  {project.category}
                </span>

                <span className="absolute bottom-4 right-5 text-xs font-semibold tracking-widest text-blue-300">
                  ENG:SADAK
                </span>
              </div>

              {/* Project details */}
              <div className="p-6">
                <h2 className="text-xl font-bold transition group-hover:text-blue-400">
                  {project.title}
                </h2>

                <p className="mt-3 min-h-24 text-sm leading-7 text-gray-400">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-md border border-white/10 bg-slate-900 px-2.5 py-1.5 text-xs text-gray-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="mt-6 flex items-center gap-5 border-t border-white/10 pt-5">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-gray-300 transition hover:text-blue-400"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5 w-5"
                      aria-hidden="true"
                    >
                      <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.54v-2.1c-3.1.67-3.76-1.32-3.76-1.32-.5-1.3-1.23-1.65-1.23-1.65-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15.99 1.7 2.6 1.21 3.23.93.1-.72.39-1.21.7-1.49-2.48-.28-5.08-1.24-5.08-5.5 0-1.22.44-2.21 1.15-2.99-.12-.28-.5-1.42.11-2.95 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.11-1.44 3.05-1.14 3.05-1.14.61 1.53.23 2.67.11 2.95.72.78 1.15 1.77 1.15 2.99 0 4.27-2.6 5.21-5.09 5.49.4.35.75 1.02.75 2.06v3.06c0 .3.2.65.76.54A11.1 11.1 0 0 0 12 .9Z" />
                    </svg>
                    Source Code
                  </a>

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 transition hover:text-blue-300"
                    >
                      Live Demo ↗
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </section>

        {/* CTA */}
        <section className="mt-20 rounded-3xl border border-blue-500/20 bg-blue-500/[0.06] px-6 py-12 text-center md:px-12">
          <h2 className="text-2xl font-bold md:text-3xl">
            Have an idea? Let&apos;s build it.
          </h2>

          <p className="mx-auto mt-4 max-w-xl leading-7 text-gray-400">
            I&apos;m interested in meaningful projects, collaboration,
            and opportunities to create useful software.
          </p>

          <Link
            href="/contact"
            className="mt-7 inline-flex rounded-xl bg-blue-600 px-7 py-3 font-semibold transition hover:bg-blue-700"
          >
            Start a Conversation
          </Link>
        </section>
      </div>
    </main>
  );
}