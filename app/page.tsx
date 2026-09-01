import ProjectList from "@/components/ProjectList";

const projects = [
  {
    title: "SayDpoetry",
    description:
      "A creative space for sharing poetry and connecting through words, expression, and feeling.",
    technologies: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
    liveLink: "https://iketlenglesedi6-cmd.github.io/sayDpoetry-/",
    sourceLink: "https://github.com/iketlenglesedi6-cmd/sayDpoetry-",
  },
  {
    title: "Philosopher's Library",
    description:
      "A thoughtful digital library designed for exploring philosophical ideas and meaningful writing.",
    technologies: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
    liveLink: "https://iketlenglesedi6-cmd.github.io/philosophers-library/",
    sourceLink: "https://github.com/iketlenglesedi6-cmd/philosophers-library",
  },
  {
    title: "WDD 231 Final Project",
    description:
      "A final course project that brings together responsive design, interactive web development, and practical problem-solving.",
    technologies: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
    liveLink: "https://iketlenglesedi6-cmd.github.io/wdd231/final/",
    sourceLink: "https://github.com/iketlenglesedi6-cmd/wdd231/tree/main/final",
  },
  {
    title: "RS Attendance",
    description:
      "A React application for managing attendance with a modern, focused interface.",
    technologies: ["React", "JavaScript", "Vercel"],
    liveLink: "https://vercel.com/saiidi/rs-attendance/GTCHGTVapyB4h4pn9vBVfpo7q4hz",
    sourceLink: "https://github.com/iketlenglesedi6-cmd/rs-attendance",
  },
  {
    title: "WDD 131 Project",
    description:
      "A responsive web development project created to practice clear structure, styling, and user-friendly design.",
    technologies: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
    liveLink: "https://iketlenglesedi6-cmd.github.io/wdd131/project/index.html",
    sourceLink: "https://github.com/iketlenglesedi6-cmd/wdd131/tree/main/project",
  },
];

export default function Home() {
  return (
    <main>
      <section className="border-b border-violet-200 bg-[#f4efff]">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 sm:py-28 lg:grid-cols-[1.4fr_0.6fr] lg:items-center">
          <div>
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.24em] text-violet-700">
              Creative web developer
            </p>
            <h1 className="max-w-3xl text-5xl font-bold tracking-tight text-violet-950 sm:text-6xl">
              Digital spaces for ideas, stories, and learning.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-violet-900/75">
              I&apos;m Iketleng Lesedi, a web development student who enjoys turning
              meaningful ideas into warm, accessible, and thoughtful experiences
              on the web.
            </p>
            <a
              href="#projects"
              className="mt-8 inline-flex rounded-full bg-violet-800 px-6 py-3 font-semibold text-white shadow-lg shadow-violet-900/20 transition hover:-translate-y-0.5 hover:bg-violet-950 focus:outline-none focus:ring-2 focus:ring-violet-700 focus:ring-offset-2"
            >
              Explore my work <span aria-hidden="true">&darr;</span>
            </a>
          </div>
          <div className="mx-auto w-full max-w-xs">
            <div className="rounded-3xl border border-violet-200 bg-white p-8 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-violet-700">A little about me</p>
              <p className="mt-5 font-serif text-2xl leading-9 text-violet-950">
                “I love making the web feel a little more human.”
              </p>
              <div className="mt-7 flex gap-2" aria-hidden="true">
                <span className="h-3 w-3 rounded-full bg-violet-950" />
                <span className="h-3 w-3 rounded-full bg-violet-600" />
                <span className="h-3 w-3 rounded-full bg-rose-400" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-6 py-18 sm:py-24">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-violet-700">Featured projects</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-violet-950 sm:text-4xl">Work with heart and curiosity.</h2>
          <p className="mt-4 leading-7 text-violet-900/70">A selection of projects that reflect my interest in creativity, ideas, and useful design.</p>
        </div>
        <ProjectList projects={projects} />
      </section>
    </main>
  );
}
