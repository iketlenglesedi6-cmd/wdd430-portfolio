import ProjectList from "@/components/ProjectList";

const projects = [
  {
    title: "SayDpoetry",
    description: "A home for poems, expression, and the small thoughts that deserve to be shared.",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveLink: "https://iketlenglesedi6-cmd.github.io/sayDpoetry-/",
    sourceLink: "https://github.com/iketlenglesedi6-cmd/sayDpoetry-",
  },
  {
    title: "Philosopher's Library",
    description: "A reading-focused project for exploring philosophers, questions, and ideas.",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveLink: "https://iketlenglesedi6-cmd.github.io/philosophers-library/",
    sourceLink: "https://github.com/iketlenglesedi6-cmd/philosophers-library",
  },
  {
    title: "RS Attendance",
    description: "A React application created to make attendance easier to manage.",
    technologies: ["React", "JavaScript", "Vercel"],
    liveLink: "https://vercel.com/saiidi/rs-attendance/GTCHGTVapyB4h4pn9vBVfpo7q4hz",
    sourceLink: "https://github.com/iketlenglesedi6-cmd/rs-attendance",
  },
  {
    title: "WDD 231 Final Project",
    description: "A final web-development project bringing together responsive design and interactive features.",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveLink: "https://iketlenglesedi6-cmd.github.io/wdd231/final/",
    sourceLink: "https://github.com/iketlenglesedi6-cmd/wdd231/tree/main/final",
  },
  {
    title: "WDD 131 Project",
    description: "A responsive website built while developing my foundation in web design and development.",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveLink: "https://iketlenglesedi6-cmd.github.io/wdd131/project/index.html",
    sourceLink: "https://github.com/iketlenglesedi6-cmd/wdd131/tree/main/project",
  },
];

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-14 sm:py-20">
      <section className="grid gap-10 border-b-2 border-violet-950 pb-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
        <div>
          <p className="text-sm font-bold tracking-wide text-violet-700">IKETLENG LESEDI — PORTFOLIO</p>
          <h1 className="mt-5 max-w-3xl font-serif text-5xl leading-[1.04] text-violet-950 sm:text-7xl">
            I make websites for people who like to think, read, and create.
          </h1>
        </div>
        <div className="border-l-2 border-violet-300 pl-5 text-lg leading-8 text-violet-950/80 lg:mb-2">
          <p>
            I&apos;m a web development student drawn to poetry, philosophy, and the
            quiet details that can make a website feel personal.
          </p>
          <p className="mt-4">Below is a selection of work I&apos;ve built and continue to learn from.</p>
        </div>
      </section>

      <section id="projects" className="pt-14" aria-labelledby="projects-heading">
        <div className="flex items-baseline justify-between gap-5">
          <h2 id="projects-heading" className="font-serif text-3xl text-violet-950 sm:text-4xl">Selected work</h2>
          <p className="text-sm text-violet-800">05 projects</p>
        </div>
        <ProjectList projects={projects} />
      </section>
    </main>
  );
}
