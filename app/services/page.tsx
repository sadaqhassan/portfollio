"use client";

import Link from "next/link";
import {
  Code2,
  Atom,
  Server,
  Database,
  Palette,
  CloudUpload,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    title: "Full-Stack Web Development",
    description:
      "Build complete web applications using React.js, Next.js, Node.js, Express.js and MongoDB with clean and scalable code.",
    icon: Code2,
    Path:"/contact"
  },
  {
    title: "Drow To Code",
    description:"Get Code just drowing your pen on the white board. get Code FrontEnd languages like Reactjs.",

    icon: Atom,
    Path:"/services/drow-to-code"
  },
  {
    title: "Backend Development",
    description:"",
    icon: Server,
    Path:"/contact"
  },
  {
    title: "Database & API Integration",
    description:
      "Design and manage databases with MongoDB, PostgreSQL and MySQL. Build REST APIs and handle data efficiently.",
    icon: Database,
    Path:"/contact"
  },
  {
    title: "UI/UX Design & Web Design",
    description:
      "Design clean, modern and user-friendly interfaces with a focus on great user experience and performance.",
    icon: Palette ,
    Path:"/contact"
  },
  {
    title: "Deployment & DevOps",
    description:
      "Deploy and manage applications on Vercel, Netlify and Linux servers. Set up smooth, reliable delivery workflows.",
    icon: CloudUpload,
    Path:"/contact"
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#080e1d] text-slate-100">
      {/* Page content: keep your existing shared Navbar in the root layout if you have one. */}
      <section className="mx-auto max-w-7xl px-5 pb-20 pt-16 sm:px-8 sm:pt-20 lg:px-10">
        <div className="mb-9 max-w-2xl">
          <div className="mb-4 flex items-center gap-4 text-sm font-bold uppercase tracking-[0.2em] text-[#3182ff]">
            <span>Services</span>
            <span className="h-px w-10 bg-[#3182ff]" />
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            What I <span className="text-[#3182ff]">Offer</span>
          </h1>
          <p className="mt-4 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
            I provide modern web development services to help businesses and
            individuals build fast, secure and scalable web applications.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article 
                key={service.title}
                className="group rounded-xl border border-[#15386a] bg-[#0a1428]/70 p-6 transition duration-300 hover:-translate-y-1 hover:border-[#3182ff]/70 hover:bg-[#0c1932] hover:shadow-[0_12px_40px_rgba(37,99,235,0.10)]"
              >
                <div  className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl border border-[#1c4b91] bg-[#102750] text-[#3990ff] shadow-[inset_0_0_18px_rgba(37,99,235,0.12)] transition group-hover:border-[#3182ff] group-hover:bg-[#123269]">
                  <Icon size={34} strokeWidth={2.2} aria-hidden="true" />
                </div>

                <h2 className="text-lg font-bold text-slate-100 sm:text-xl">
                  {service.title}
                </h2>
                <p className="mt-3 min-h-[84px] text-[15px] leading-[1.55] text-slate-300">
                  {service.description}
                </p>

                <Link
                  href={`${service.Path}`}
                  aria-label={`Ask about ${service.title}`}
                  className="mt-4 inline-flex items-center gap-2 font-semibold text-[#3182ff] transition hover:gap-3 hover:text-blue-300"
                >
                  {service.title === "Drow To Code" ? "Get Started" : "Learn More"} <ArrowRight size={19} aria-hidden="true" />
                </Link>
              </article>
            );
          })}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-5 rounded-2xl border border-[#173866] bg-[#0b152a] p-6 sm:flex-row sm:items-center sm:p-8">
          <div>
            <h2 className="text-xl font-bold sm:text-2xl">
              Have a project in mind?
            </h2>
            <p className="mt-2 text-slate-300">
              Let&apos;s build something useful, modern and reliable together.
            </p>
          </div>
          <Link
            href={"/contact"}
            className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-[#2160f5] px-6 py-3 font-semibold text-white transition hover:bg-[#3475ff] focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-[#080e1d]"
          >
            Hire Me <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
}
