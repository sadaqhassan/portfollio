
import React from "react";
import Navbar from "./Nav";
import Link from "next/link";

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
<main className="relative isolate flex min-h-screen items-center overflow-hidden bg-slate-950 px-6 pt-24 md:px-16">

  {/* Background image: 20% opacity */}
  <div
    className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat opacity-14"
    style={{
      backgroundImage: "url('/images/background.png')",
    }}
  />

  {/* Homepage content */}
  <div className="max-w-2xl text-white">
    <p className="font-semibold tracking-widest text-blue-400">
      FULL-STACK DEVELOPER
    </p>

    <h1 className="mt-4 text-5xl font-extrabold md:text-7xl">
      Hi, I'm <span className="text-blue-500">Sadak</span>
    </h1>

    <p className="mt-5 text-lg leading-8 text-gray-300">
      I build modern websites and scalable web applications.
    </p>
    <p className="mt-5 max-w-xl mb-10 leading-8 text-gray-300">
          I build modern websites and scalable web applications
          using React, Next.js, Node.js and MongoDB.
        </p>

        <Link href={"/projects"} className="mt-18 rounded-lg bg-blue-600 px-7 py-3
          font-semibold transition hover:bg-blue-700">
          Explore My Work
        </Link>
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