import { Download } from "lucide-react";
import Link from "next/link";
import React from "react";

/**
 * Sadak Hassan Ahmed — CV 2026
 * Usage:
 *   1. Put your photo at  /public/sadak.jpg   (or change PHOTO below)
 *   2. Make sure Tailwind CSS is set up in your project
 *   3. <CV />  — prints as a single US Letter page (Ctrl/Cmd + P → Save as PDF)
 */

const PHOTO = "images/sadakcv.jpg";

const NAVY = "#16203A";
const INK = "#1F2A44";
const GOLD = "#C99A2E";
const GREY = "#5B5F66";
const SIDE_TEXT = "#DCE1EA";

const contact = [
  "+252 613 170 796",
  "Sadaqsamor99@gmail.com",
  "github.com/sadaqhassan",
  "sadak-hasan.vercel.app",
  "Mogadishu, Somalia",
];

const skills: { group: string; items: string[] }[] = [
  { group: "Languages", items: ["JavaScript", "Python"] },
  { group: "Frontend", items: ["React.js", "HTML5 / CSS3", "Tailwind CSS", "Bootstrap"] },
  { group: "Backend", items: ["Node.js", "Express.js"] },
  { group: "Mobile", items: ["React Native"] },
  { group: "Databases", items: ["MongoDB", "MySQL"] },
  { group: "Tools & Practices", items: ["Git & GitHub", "REST API Development", "DevOps Fundamentals"] },
];

const languages = ["Somali — Excellent", "English — Very Good", "Arabic — Good"];

const summary =
  "Motivated and detail-oriented Full-Stack Web Developer with a Bachelor's degree in Computer Science and Information Technology. Experienced in designing and developing responsive web and mobile applications using modern technologies, with a focus on e-commerce and dropshipping store development. Skilled across the frontend and backend, database management, version control, and software development best practices. Passionate about building scalable solutions, learning emerging technologies, and contributing to innovative software development teams.";

const projects = [
  {
    title: "School Management System",
    desc: "A complete web application for managing students, teachers, attendance, courses, and academic records.",
  },
  {
    title: "Bus Booking App",
    desc: "An online transportation booking platform that allows users to search, reserve, and manage bus tickets efficiently.",
  },
  {
    title: "Students Hub",
    desc: "A student community platform where users can share educational content, upload learning materials, and interact with other students.",
  },
  {
    title: "Meal Planner App",
    desc: "A smart meal planning application that helps users organize daily meals, manage nutrition plans, and schedule recipes.",
  },
];

const education = [
  { degree: "Bachelor of Computer Science and Information Technology", school: "Somali International University (SIU)", years: "2022 – 2026" },
  { degree: "Training in MERN Stack Web Development", school: "SIU Innovation Center", years: "2024 – 2025" },
  { degree: "Training in Internet of Things (IoT)", school: "SIU Innovation Center", years: "" },
  { degree: "Secondary School Certificate", school: "Jaabir Binu Hayaan Secondary School", years: "2018 – 2022" },
  { degree: "Primary Education", school: "Care School & Jaabir Binu Hayaan Nasteexo", years: "2010 – 2018" },
];

const certifications = [
  "Bachelor of Computer Science and Information Technology",
  "Secondary School Certificate",
  "MERN Stack Web Development Training Certificate",
  "Internet of Things (IoT) Training Certificate",
];

const references = [
  { name: "Dr. Aden Hassan Ahmed", title: "", phone: "+252 610 818 103", email: "Adanwalihassan@gmail.com" },
  { name: "Major Ismail Hassan Ahmed", title: "SNA Officer", phone: "+252 615 442 531", email: "xujo114@gmail.com" },
  { name: "Dr. Rahma Hassan Ahmed", title: "", phone: "+252 617 597 356", email: "RahmaHassanr99@gmail.com" },
];

function SideHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3
      className="mt-6 mb-2 pb-1 text-[11px] font-bold uppercase tracking-[0.12em] text-white border-b"
      style={{ borderColor: GOLD }}
    >
      {children}
    </h3>
  );
}

function MainHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="mt-6 mb-3 pb-1 text-[15px] font-bold uppercase tracking-[0.1em] border-b-2"
      style={{ color: INK, borderColor: GOLD }}
    >
      {children}
    </h2>
  );
}

export default function CV() {
  return (
    <div className="min-h-screen mt-16 w-full bg-neutral-200 py-6 print:bg-white print:py-0">
 
      <style>{`
        @page { size: 8.5in 11in; margin: 0; }
        @media print { * { -webkit-print-color-adjust: exact; print-color-adjust: exact; } }
      `}</style>
      
        <div className="flex mt-4 justify-center items-center mb-5 flex-wrap">
        <Link href={"/projects"} className=" rounded-lg bg-blue-600 px-7 py-3
          font-semibold transition hover:bg-blue-700">
          Explore My Work
        </Link>
        <Link href={"/"}
        download={"/cv/Sadak_Hassan_Ahmed_CV_2026pdf.pdf"}
        className=" flex rounded-lg ml-4 bg-white text-black px-4 py-3
          font-semibold transition">
          <Download/>Download cv
        </Link>
       </div>
      <div
        className="mx-auto flex w-[8.5in] min-h-[11in] bg-white shadow-xl print:shadow-none"
        style={{ fontFamily: "Calibri, Carlito, 'Segoe UI', Arial, sans-serif" }}
      >
        
        
        {/* ---------------- SIDEBAR ---------------- */}
        <aside className="w-[2.36in] shrink-0 px-5 py-7" style={{ backgroundColor: NAVY, color: SIDE_TEXT }}>
          <img
            src={PHOTO}
            alt="Sadak Hassan Ahmed"
            className="mx-auto block h-[125px] w-[125px] object-cover object-top"
          />
          
          <div className="mt-4 text-center">
            <p className="text-[17px] font-bold leading-tight text-white">SADAK HASSAN</p>
            <p className="text-[17px] font-bold leading-tight text-white">AHMED</p>
            <p
              className="mt-4 text-[11px] font-bold uppercase tracking-[0.08em]"
              style={{ color: GOLD }}
            >
              Full-Stack MERN Developer
            </p>
          </div>

          <SideHeading>Contact</SideHeading>
          <ul className="space-y-1 text-[11.5px]">
            {contact.map((c) => (
              <li key={c} className="break-words">{c}</li>
            ))}
          </ul>

          <SideHeading>Technical Skills</SideHeading>
          <div className="text-[11.5px]">
            {skills.map((s) => (
              <div key={s.group} className="mb-1">
                <p className="font-bold">{s.group}</p>
                <ul>
                  {s.items.map((i) => (
                    <li key={i} className="flex gap-2 leading-snug">
                      <span style={{ color: GOLD }}>•</span>
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <SideHeading>Languages</SideHeading>
          <ul className="space-y-1 text-[11.5px]">
            {languages.map((l) => (
              <li key={l}>{l}</li>
            ))}
          </ul>
        </aside>

        {/* ---------------- MAIN ---------------- */}
        <main className="flex-1 px-7 pb-8 pt-6 text-[12.5px] leading-[1.45] text-[#2B2E33]">
          <MainHeading>Professional Summary</MainHeading>
          <p className="text-justify">{summary}</p>

          <MainHeading>Projects</MainHeading>
          <div className="space-y-2.5">
            {projects.map((p) => (
              <p key={p.title}>
                <span className="font-bold" style={{ color: INK }}>{p.title}</span>
                {"  —  "}
                {p.desc}
              </p>
            ))}
          </div>

          <MainHeading>Education</MainHeading>
          <div className="space-y-2.5">
            {education.map((e) => (
              <div key={e.degree}>
                <p className="font-bold text-[13px]" style={{ color: INK }}>{e.degree}</p>
                <p className="italic" style={{ color: GREY }}>
                  {e.school}
                  {e.years && <span className="not-italic">{"   |   "}{e.years}</span>}
                </p>
              </div>
            ))}
          </div>

          <MainHeading>Certifications</MainHeading>
          <ul className="space-y-1">
            {certifications.map((c) => (
              <li key={c} className="flex gap-2">
                <span className="font-bold" style={{ color: GOLD }}>•</span>
                <span>{c}</span>
              </li>
            ))}
          </ul>

          <MainHeading>References</MainHeading>
          <div className="grid grid-cols-2 gap-x-6 gap-y-4">
            {references.map((r) => (
              <div key={r.name} className="text-[12px] leading-snug">
                <p className="font-bold" style={{ color: INK }}>{r.name}</p>
                {r.title && <p className="italic" style={{ color: GREY }}>{r.title}</p>}
                <p>{r.phone}</p>
                <p className="break-all">{r.email}</p>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
