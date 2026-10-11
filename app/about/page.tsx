"use client"
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main
      id="about"
      className="relative min-h-screen overflow-hidden md:zoom-80 bg-slate-950 px-6 py-28 text-white md:px-16"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute -left-40 top-40 h-80 w-80 rounded-full bg-blue-600/10 blur-[120px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-2">

        {/* Left: About content */}
        <div>
          <p className="mb-4 font-semibold uppercase tracking-[0.3em] text-blue-400">
            Get to know me
          </p>

          <h1 className="text-4xl font-extrabold leading-tight md:text-6xl">
            About <span className="text-blue-500">Me</span>
          </h1>

          <h2 className="mt-6 text-2xl font-bold text-gray-200">
            Hi, I&apos;m Sadak Hassan Ahmed
          </h2>

          <p className="mt-6 leading-8 text-gray-400">
            I&apos;m a Computer Science and IT student and a
            MERN Stack Software Developer passionate about
            building modern, responsive, and scalable web
            applications.
          </p>

          <p className="mt-4 leading-8 text-gray-400">
            I work with React, Next.js, Node.js, Express.js,
            and MongoDB to turn ideas into practical digital
            solutions. I&apos;m always learning, improving my
            skills, and building projects that solve real problems.
          </p>

          {/* Skills */}
          <div className="mt-7 flex flex-wrap gap-3">
            {[
              "React.js",
              "Next.js",
              "Node.js",
              "Express.js",
              "MongoDB",
              "Tailwind CSS",
            ].map((skill) => (
              <span
                key={skill}
                className="rounded-lg border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-300"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="projects"
              className="rounded-lg bg-blue-600 px-6 py-3 font-semibold transition hover:bg-blue-700"
            >
              View My Projects
            </Link>

            <Link
              href="contact"
              className="rounded-lg border border-white/20 px-6 py-3 font-semibold transition hover:border-blue-400 hover:text-blue-400"
            >
              Contact Me
            </Link>
          </div>
        </div>

        {/* Right: Your picture */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute -inset-3 rounded-3xl bg-blue-500/20 blur-2xl" />

            <div className="relative overflow-hidden rounded-3xl border border-blue-400/30 bg-slate-900">
              <Image
                src="/images/sadak.jpg"
                alt="Sadak Hassan Ahmed - Software Developer"
                width={500}
                height={600}
                priority
                className="h-[420px] w-[320px] object-cover sm:h-[520px] sm:w-[400px]"
              />
            </div>

            <div className="absolute -bottom-5 -left-5 rounded-xl border border-white/10 bg-slate-900/95 px-5 py-4 shadow-xl">
              <p className="text-2xl font-bold text-blue-400">
                ENG:SADAK
              </p>
              <p className="mt-1 text-sm text-gray-400">
                Software Developer
              </p>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}