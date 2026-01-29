// Fixing the portfolio
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa6";

const fadeItem = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const insights = [
  { icon: "🔭", text: "I am a Computer Engineering student." },
  { icon: "🌱", text: "I am learning web development and programming." },
  {
    icon: "👯",
    text: "I enjoy being part of developer communities and coding challenges.",
  },
  {
    icon: "💬",
    text: "I like sharing coding tips and learning from others.",
  },
];

const skillGroups = [
  {
    title: "Languages",
    items: [
      "C",
      "C++",
      "Python",
      "JavaScript",
      "TypeScript",
      "HTML5",
      "CSS3",
    ],
  },
  {
    title: "Frontend",
    items: [
      "React",
      "Next.js",
      "Redux",
      "React Router",
      "TailwindCSS",
      "Bootstrap",
      "SASS",
      "MUI",
      "Chart.js",
      "RxJS",
    ],
  },
  {
    title: "Backend / Cloud",
    items: [
      "Node.js",
      "Firebase",
      "Google Cloud",
      "AWS",
      "Heroku",
      "Netlify",
      "Vercel",
      "MySQL",
      "MongoDB",
    ],
  },
  {
    title: "Tools",
    items: [
      "Git",
      "GitHub",
      "Jira",
      "Postman",
      "Webpack",
      "Babel",
      "NPM",
      "Yarn",
    ],
  },
];

const badgeStyles = [
  "border-cyan-400/40 bg-cyan-500/10 text-cyan-100",
  "border-indigo-400/40 bg-indigo-500/10 text-indigo-100",
  "border-fuchsia-400/40 bg-fuchsia-500/10 text-fuchsia-100",
  "border-emerald-400/40 bg-emerald-500/10 text-emerald-100",
  "border-amber-400/40 bg-amber-500/10 text-amber-100",
  "border-rose-400/40 bg-rose-500/10 text-rose-100",
];

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0b0b12] text-slate-100">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-30" />
      <div className="pointer-events-none absolute -top-32 right-[-10%] h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 -left-20 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-indigo-500/10 blur-3xl" />

      <nav className="sticky top-0 z-40 border-b border-white/5 bg-[#0b0b12]/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-4 lg:px-8">
          <a
            href="#home"
            className="font-display text-lg font-semibold tracking-tight"
          >
            Abdullah Naeem Rao
          </a>
          <div className="flex flex-wrap items-center gap-4 text-[11px] font-medium uppercase tracking-[0.25em] text-slate-300 sm:text-xs">
            <a href="#home" className="transition hover:text-white">
              Home
            </a>
            <a href="#about" className="transition hover:text-white">
              About
            </a>
            <a href="#skills" className="transition hover:text-white">
              Skills
            </a>
            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
          </div>
        </div>
      </nav>

      <main className="relative mx-auto flex w-full max-w-6xl flex-col gap-24 px-6 pb-24 pt-16 lg:px-8">
        <section id="home" className="scroll-mt-28">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="space-y-6"
            >
              <motion.p
                variants={fadeItem}
                className="text-xs uppercase tracking-[0.35em] text-cyan-300/80"
              >
                Portfolio
              </motion.p>
              <motion.h1
                variants={fadeItem}
                className="font-display text-4xl leading-tight text-white sm:text-5xl lg:text-6xl"
              >
                Hi, I&apos;m Abdullah Naeem Rao
              </motion.h1>
              <motion.p
                variants={fadeItem}
                className="text-lg text-slate-300"
              >
                Computer Engineering Student | Full Stack Developer
              </motion.p>
              <motion.p
                variants={fadeItem}
                className="max-w-xl text-base leading-relaxed text-slate-400"
              >
                Building modern digital experiences with clean code, thoughtful
                design, and a focus on impact.
              </motion.p>
              <motion.div
                variants={fadeItem}
                className="flex flex-wrap gap-4"
              >
                <a
                  href="https://www.linkedin.com/in/abdullah-naeem-rao-30652b39a"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-500/10 px-5 py-2 text-sm font-semibold text-cyan-100 transition hover:border-cyan-300 hover:bg-cyan-400/20"
                >
                  <FaLinkedinIn />
                  Connect on LinkedIn
                </a>
                <a
                  href="https://github.com/AbdullahNaeemRao"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/10"
                >
                  <FaGithub />
                  View GitHub
                </a>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-r from-cyan-500/20 via-indigo-500/10 to-fuchsia-500/20 blur-2xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-2">
                <Image
                  src="/abdullah.png"
                  alt="Portrait of Abdullah Naeem Rao"
                  width={1080}
                  height={1100}
                  priority
                  className="h-full w-full rounded-[1.7rem] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </section>

        <motion.section
          id="about"
          className="scroll-mt-28"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <motion.div variants={fadeItem} className="space-y-4">
              <p className="text-xs uppercase tracking-[0.35em] text-cyan-300/80">
                About Me
              </p>
              <h2 className="font-display text-3xl text-white sm:text-4xl">
                A motivated student crafting real-world solutions.
              </h2>
              <p className="text-base text-slate-400">
                Focused on growth, collaboration, and building products that
                matter.
              </p>
            </motion.div>
            <motion.div
              variants={fadeItem}
              className="space-y-4 text-base leading-relaxed text-slate-300"
            >
              <p>
                I am a Computer Engineering student at the University of
                Engineering and Technology (UET) Lahore.
              </p>
              <p>
                I am passionate about programming and exploring the world of
                software development. I enjoy learning new technologies and
                improving my skills step by step.
              </p>
              <p>
                Apart from academics, I am enthusiastic about building practical
                projects and sharpening my problem-solving abilities.
              </p>
              <p>Let&apos;s connect and learn together! ❤✌</p>
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          className="scroll-mt-28"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={fadeItem} className="space-y-3">
            <p className="text-xs uppercase tracking-[0.35em] text-cyan-300/80">
              Personal Insights
            </p>
            <h2 className="font-display text-3xl text-white sm:text-4xl">
              What drives me every day.
            </h2>
          </motion.div>
          <motion.div
            variants={stagger}
            className="mt-8 grid gap-4 sm:grid-cols-2"
          >
            {insights.map((insight) => (
              <motion.div
                key={insight.text}
                variants={fadeItem}
                className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-5"
              >
                <span className="text-2xl">{insight.icon}</span>
                <p className="text-sm leading-relaxed text-slate-300">
                  {insight.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        <motion.section
          id="skills"
          className="scroll-mt-28"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div
            variants={fadeItem}
            className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between"
          >
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.35em] text-cyan-300/80">
                Tech Stack
              </p>
              <h2 className="font-display text-3xl text-white sm:text-4xl">
                Skills & tools I love to use.
              </h2>
            </div>
            <p className="max-w-xl text-sm text-slate-400">
              A versatile mix of languages, frameworks, and platforms that let
              me ship complete products end-to-end.
            </p>
          </motion.div>

          <motion.div variants={stagger} className="mt-10 grid gap-6">
            {skillGroups.map((group, groupIndex) => (
              <motion.div
                key={group.title}
                variants={fadeItem}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <h3 className="text-lg font-semibold text-white">
                  {group.title}
                </h3>
                <div className="mt-4 flex flex-wrap gap-3">
                  {group.items.map((skill, skillIndex) => (
                    <span
                      key={skill}
                      className={`rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] ${badgeStyles[
                        (skillIndex + groupIndex) % badgeStyles.length
                      ]
                        }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        <motion.section
          id="contact"
          className="scroll-mt-28"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={fadeItem} className="space-y-4">
            <p className="text-xs uppercase tracking-[0.35em] text-cyan-300/80">
              Contact
            </p>
            <h2 className="font-display text-3xl text-white sm:text-4xl">
              Let&apos;s build something memorable.
            </h2>
            <p className="max-w-2xl text-base text-slate-400">
              Reach out anytime. I love collaborating, learning, and contributing
              to vibrant tech communities.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            className="mt-8 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]"
          >
            <motion.div
              variants={fadeItem}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <div className="space-y-4 text-sm text-slate-300">
                <a
                  href="mailto:abdullahnaeemrao@gmail.com"
                  className="flex items-center gap-3 text-base font-semibold text-white transition hover:text-cyan-200"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5">
                    <FaEnvelope />
                  </span>
                  abdullahnaeemrao@gmail.com
                </a>
                <a
                  href="https://www.linkedin.com/in/abdullah-naeem-rao-30652b39a"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 text-sm transition hover:text-cyan-200"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5">
                    <FaLinkedinIn />
                  </span>
                  linkedin.com/in/abdullah-naeem-rao-30652b39a
                </a>
                <a
                  href="https://github.com/AbdullahNaeemRao"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 text-sm transition hover:text-cyan-200"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5">
                    <FaGithub />
                  </span>
                  github.com/AbdullahNaeemRao
                </a>
              </div>
            </motion.div>

            <motion.div
              variants={fadeItem}
              className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-white/0 p-6"
            >
              <h3 className="font-display text-xl text-white">
                Communities I&apos;m part of
              </h3>
              <p className="mt-3 text-sm text-slate-300">
                Coding Enthusiasts
              </p>
              <p className="text-sm text-slate-300">Student Developers Group</p>
              <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-4 text-xs uppercase tracking-[0.25em] text-cyan-200">
                Always open to collaborate
              </div>
            </motion.div>
          </motion.div>
        </motion.section>
      </main>
    </div>
  );
}