import ProjectList from "@/components/ProjectList";

const projects = [
  { title: "WDD 430 Portfolio", description: "A responsive portfolio built with the Next.js App Router to showcase coursework, reusable components, and server-rendered pages.", technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"], link: "https://github.com/iketlenglesedi6-cmd/wdd430-portfolio" },
  { title: "Web Development Coursework", description: "A collection of web development work focused on accessible interfaces, clean layouts, and practical problem-solving.", technologies: ["HTML", "CSS", "JavaScript", "GitHub"], link: "https://github.com/iketlenglesedi6-cmd" },
];

export default function Home() {
  return <main>
    <section className="border-b border-slate-200 bg-slate-50"><div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
      <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">Full-stack development student</p>
      <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-slate-950 sm:text-6xl">Building thoughtful web experiences, one project at a time.</h1>
      <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">I&apos;m Iketleng Lesedi, a web development student learning to create useful, accessible applications with modern tools.</p>
      <a href="#projects" className="mt-8 inline-flex rounded-lg bg-blue-700 px-5 py-3 font-semibold text-white transition hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-offset-2">View my projects</a>
    </div></section>
    <section id="projects" className="mx-auto max-w-6xl px-6 py-16 sm:py-20"><div className="mb-9 max-w-2xl">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">Selected work</p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">Projects I&apos;m proud to share</h2>
      <p className="mt-3 text-slate-600">These projects reflect my growing skills in modern web development.</p>
    </div><ProjectList projects={projects} /></section>
  </main>;
}
