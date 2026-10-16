"use client"
import React from "react";
import Link from "next/link";

import { Download } from "lucide-react"

function HomePage() {

  const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "about" },
  { name: "Skills", href: "skills" },
  { name: "Projects", href: "projects" },
  { name: "Contact", href: "contact" },
];


  return (
 <div>
<main className="flex flex-col min-h-screen items-center justify-center  overflow-hidden bg-slate-950 px-6 pt-24 md:px-16">

  {/* Background image: 20% opacity */}
  <div
    className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat opacity-14"
    style={{
      backgroundImage: "url('/images/background.png')",
    }}
  />

  {/* Homepage content */}
  <div className="max-w-6xl text-white">

    <h1 className="mt-4 text-5xl font-extrabold md:text-7xl">
      Hi, I'm <span className="text-blue-500">Sadak</span>
    </h1>
    <p className="font-semibold tracking-widest mt-4 text-blue-400">
      FULL-STACK DEVELOPER
    </p>
    <p className="mt-5 text-lg leading-8 text-gray-300">
      I build modern websites and scalable web applications.
    </p>
    <p className="mt-5 max-w-xl mb-10 leading-8 text-gray-300">
          I build modern websites and scalable web applications
          using React, Next.js, Node.js and MongoDB.
        </p>

      <div className="flex mt-4">
        <Link href={"/services/drow-to-code"} className=" rounded-lg bg-blue-600 px-7 py-3
          font-semibold transition hover:bg-blue-700">
          Drow to Code
        </Link>
        <Link href={"/cv"}
        className=" flex rounded-lg ml-4 bg-white text-black px-4 py-3
          font-semibold transition">
          <Download/>My Cv
        </Link>
       </div>
  </div>

  
</main>

<div className="md:hidden items-center gap-8 flex mx-5 mb-10 underline">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-300 transition hover:text-blue-400"
            >
              {link.name}
            </Link>
          ))}
        </div>

      </div>
  );
}

export default HomePage