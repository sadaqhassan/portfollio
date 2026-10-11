
const skillGroups = [
  {
    title: "Frontend Development",
    description: "Building responsive and modern user interfaces.",
    icon: "◈",
    skills: [
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "TypeScript", level: 75 },
      { name: "React.js", level: 85 },
      { name: "Next.js", level: 75 },
      { name: "Tailwind CSS", level: 90 },
    ],
  },
  {
    title: "Backend Development",
    description: "Developing APIs and server-side applications.",
    icon: "⌘",
    skills: [
      { name: "Node.js", level: 80 },
      { name: "Express.js", level: 80 },
      { name: "REST APIs", level: 85 },
      { name: "Authentication & JWT", level: 75 },
    ],
  },
  {
    title: "Database Management",
    description: "Managing and organizing application data.",
    icon: "◉",
    skills: [
      { name: "MongoDB", level: 80 },
      { name: "MySQL", level: 70 },
      { name: "SQL", level: 70 },
    ],
  },
  {
    title: "Tools & Other Skills",
    description: "Tools for development and collaboration.",
    icon: "⚙",
    skills: [
      { name: "Git & GitHub", level: 85 },
      { name: "Python", level: 75 },
      { name: "Responsive Design", level: 90 },
      { name: "Debugging", level: 80 },
    ],
  },
];

const technologies = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "Express",
  "MongoDB",
  "Tailwind CSS",
  "Git",
  "GitHub",
  "Python",
  "MySQL",
];

export default function SkillsPage() {
  return (
    <main className="relative min-h-screen overflow-hidden md:zoom-85 bg-slate-950 px-6 py-28 text-white md:px-12">
      {/* Background effects */}
      <div className="pointer-events-none absolute -left-40 top-40 h-96 w-96 rounded-full bg-blue-600/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 top-96 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <header className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-4 font-semibold uppercase tracking-[0.3em] text-blue-400">
            What I Can Do
          </p>

          <h1 className="text-4xl font-extrabold md:text-6xl">
            My <span className="text-blue-500">Skills</span>
          </h1>

          <p className="mt-6 leading-8 text-gray-400">
            Technologies and tools I use to build responsive,
            user-friendly, and scalable web applications.
          </p>
        </header>

        {/* Skill cards */}
        <section className="grid gap-6 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <article
              key={group.title}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:bg-white/[0.05] md:p-8"
            >
              <div className="mb-6 flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-2xl text-blue-400">
                  {group.icon}
                </div>

                <div>
                  <h2 className="text-xl font-bold">
                    {group.title}
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-gray-400">
                    {group.description}
                  </p>
                </div>
              </div>

              <div className="space-y-5">
                {group.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="mb-2 flex items-center justify-between gap-3">
                      <span className="text-sm font-medium text-gray-200">
                        {skill.name}
                      </span>

                      <span className="text-sm text-blue-400">
                        {skill.level}%
                      </span>
                    </div>

                    <div
                      className="h-2 overflow-hidden rounded-full bg-slate-800"
                      role="progressbar"
                      aria-label={skill.name}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-valuenow={skill.level}
                    >
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-blue-600 to-cyan-400"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </section>

        {/* Technologies */}
        <section className="mt-20">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold">
              Technologies I <span className="text-blue-500">Use</span>
            </h2>
            <p className="mt-3 text-gray-400">
              My development toolkit
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-xl border border-white/10 bg-slate-900/80 px-5 py-3 text-sm font-medium text-gray-300 transition hover:border-blue-500/50 hover:text-blue-400"
              >
                {technology}
              </span>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mt-20 rounded-3xl border border-blue-500/20 bg-blue-500/[0.06] px-6 py-12 text-center md:px-12">
          <h2 className="text-2xl font-bold md:text-3xl">
            Have a project in mind?
          </h2>

          <p className="mx-auto mt-4 max-w-xl leading-7 text-gray-400">
            Let&apos;s combine our ideas and build something meaningful.
          </p>

          <a
            href="/contact"
            className="mt-7 inline-flex rounded-xl bg-blue-600 px-7 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Let&apos;s Talk
          </a>
        </section>
      </div>
    </main>
  );
}