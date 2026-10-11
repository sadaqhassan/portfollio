
"use client";

import { useState } from "react";
function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const { name, email, subject, message } = form;

    const whatsappMessage = encodeURIComponent(
      `Hello Sadak!\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`
    );

    // Replace with your WhatsApp number, including country code.
    const phone = "252613170796";

    if (phone.includes("X")) {
      setStatus("Please add your WhatsApp number in the code.");
      return;
    }

    window.open(
      `https://wa.me/${phone}?text=${whatsappMessage}`,
      "_blank",
      "noopener,noreferrer"
    );

    setStatus("Your message is ready to send on WhatsApp.");
  }

  const inputStyle =
    "w-full rounded-xl border border-white/10 bg-slate-900/80 px-4 py-3.5 text-white outline-none transition placeholder:text-gray-500 focus:border-blue-500";

  return (
    <main className="relative md:zoom-80 min-h-screen overflow-hidden bg-slate-950 px-6 py-32 text-white md:px-12">
      {/* Background glow */}
      <div className="pointer-events-none absolute -left-40 top-40 h-80 w-80 rounded-full bg-blue-600/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-20 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-16 text-center">
          <p className="mb-4 font-semibold uppercase tracking-[0.3em] text-blue-400">
            Get In Touch
          </p>

          <h1 className="text-4xl font-extrabold md:text-6xl">
            Let&apos;s Work <span className="text-blue-500">Together</span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-gray-400">
            Have a project idea or need a developer for your team?
            I&apos;d love to hear from you. Let&apos;s build something great.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-5">
          {/* Contact information */}
          <div className="space-y-6 lg:col-span-2">
            <div>
              <h2 className="text-2xl font-bold">Contact Information</h2>
              <p className="mt-3 leading-7 text-gray-400">
                Reach out to discuss your next project or collaboration.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="mailto:your-email@example.com"
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-blue-500/50"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-xl text-blue-400">
                  <img className="rounded-full w-10 h-10" src="data:image/png;base64,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" alt="" />
                </span>
                <div>
                  <p className="text-sm text-gray-400">Email Me</p>
                  <p className="mt-1 break-all font-medium">
                    sadaqsamor99@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="https://github.com/sadaqhassan"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-blue-500/50"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-xl text-blue-400">
                  <img className="w-10 h-10 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAmoRjvw-cET-EiCbMBVuIsP0gn1xpUi2YRD9SWXmwkg&s" alt="" />
                </span>
                <div>
                  <p className="text-sm text-gray-400">GitHub</p>
                  <p className="mt-1 font-medium">sadaqhassan</p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-blue-500/50"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-xl text-blue-400">
                  <img className="rounded-full w-10 h-10" src="data:image/png;base64,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" alt="" />
                </span>
                <div>
                  <p className="text-sm text-gray-400">LinkedIn</p>
                  <p className="mt-1 font-medium">Connect with me</p>
                </div>
              </a>
            </div>

            <p className="text-sm text-gray-500">
              Available for freelance projects and collaborations.
            </p>
          </div>

          {/* Contact form */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-2xl shadow-blue-950/20 sm:p-8 lg:col-span-3">
            <h2 className="mb-7 text-2xl font-bold">Send Me a Message</h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm text-gray-300">
                    Your Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className={inputStyle}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-sm text-gray-300">
                    Your Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className={inputStyle}
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="mb-2 block text-sm text-gray-300">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Project collaboration"
                  className={inputStyle}
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm text-gray-300">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows={5}
                  className={`${inputStyle} resize-y`}
                  required
                />
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-3 rounded-xl bg-blue-600 px-6 py-4 font-semibold transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-950"
              >
                Send via WhatsApp
                <span aria-hidden="true">↗</span>
              </button>

              {status && (
                <p role="status" className="text-sm text-blue-300">
                  {status}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ContactPage