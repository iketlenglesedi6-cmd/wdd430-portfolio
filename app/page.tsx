import Image from "next/image";
import ProjectList from "@/components/ProjectList";

const projects = [
  {
    title: "SayDpoetry",
    description: "A home for poems, expression, and the small thoughts that deserve to be shared.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://iketlenglesedi6-cmd.github.io/sayDpoetry-/",
    preview: "https://iad.microlink.io/SOiDIjGLesZo_xeCM5GYuYIn938_rrOS-NvIytWba7_BFtv3E8nXEYtSo5QFjuaNPCW8T120lXHmZOLujWXcew.png",
  },
  {
    title: "Philosopher's Library",
    description: "A reading-focused project for exploring philosophers, questions, and ideas.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://iketlenglesedi6-cmd.github.io/philosophers-library/",
    preview: "https://iad.microlink.io/DkIkjNGY5P3twvQD2JPdJ3ukgy_A5ejdETkHZLxiN8Gp95661vOM4nU7QjrHoS_50ER9p0JTTJO328MhrPfa9w.png",
  },
  {
    title: "RS Attendance",
    description: "A React application created to make attendance easier to manage.",
    technologies: ["React", "JavaScript", "Vercel"],
    link: "https://rs-attendance.vercel.app/",
    preview: "https://iad.microlink.io/44O2oxa4hhZ0HWgLt7dVFlPrg0hCj25fzf1RjQPhbWbH4caQ_CjZfFeL7w502iGmeeygJzNPxuqE5t-8mDsdog.png",
  },
  {
    title: "WDD 231 Final Project",
    description: "A final web-development project bringing together responsive design and interactive features.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://iketlenglesedi6-cmd.github.io/wdd231/final/",
    preview: "https://iad.microlink.io/jiPbVNJ8HGLiNgubMNeUVtyrTu8abUJ-LFhnzJuvQW4evM86v3zQHQj9JOumsqpm3VCjMm0oJVIuLoGD4c3ziA.png",
  },
  {
    title: "WDD 131 Project",
    description: "A responsive website built while developing my foundation in web design and development.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://iketlenglesedi6-cmd.github.io/wdd131/project/index.html",
    preview: "https://iad.microlink.io/QcCf5ibrdUCL30hSvhRTrUosODYsSR9EUddkv15ojjnDSb9NLcGFACLXkBDoY-tLEbki3NbSy6vpVfy6m-bxMg.png",
  },
];

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-12 sm:py-20">
      <section className="relative grid gap-10 overflow-hidden border-b-2 border-[#20352a] pb-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 lg:items-end">
        <div className="relative lg:pb-8">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#536e55]">Iketleng Lesedi / Selected work</p>
          <h1 className="display-serif mt-5 max-w-3xl text-5xl leading-[1.04] text-[#20352a] sm:text-7xl">
            I make room for <em className="text-[#6f9b70]">good ideas</em> on the web.
          </h1>
          <div className="mt-8 border-l-2 border-[#82ed35] pl-5 text-base leading-7 text-[#536e55]">
            <p>I&apos;m Iketleng, a web development student drawn to poetry, philosophy, and the quiet details that make a website feel personal.</p>
            <a href="#projects" className="mt-5 inline-block text-sm font-bold text-[#20352a] underline decoration-2 underline-offset-4 hover:text-[#6f9b70]">See the work ↓</a>
          </div>
        </div>
        <a href={projects[0].link} target="_blank" rel="noopener noreferrer" className="group relative block focus:outline-none focus:ring-2 focus:ring-[#82ed35]">
          <div className="relative overflow-hidden border border-[#20352a]/25 bg-[#dce5bd] p-3"><Image src={projects[0].preview} alt="SayDpoetry project preview" width={1200} height={700} priority className="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-[1.02] sm:h-80" /><span className="absolute right-6 top-6 bg-[#82ed35] px-3 py-2 text-xs font-bold uppercase tracking-[0.14em] text-[#20352a]">01 / Featured</span></div>
          <div className="mt-4 flex items-start justify-between gap-4"><div><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#536e55]">SayDpoetry</p><p className="mt-1 text-sm text-[#536e55]">A quiet home for poems and small thoughts.</p></div><span className="text-sm font-bold text-[#20352a]">Visit ↗</span></div>
        </a>
      </section>

      <section id="projects" className="pt-14" aria-labelledby="projects-heading">
        <div className="flex items-end justify-between gap-5 border-b border-[#20352a]/20 pb-4">
          <div><p className="text-xs font-bold uppercase tracking-[0.2em] text-[#536e55]">02 — Selected work</p><h2 id="projects-heading" className="display-serif mt-2 text-4xl text-[#20352a] sm:text-5xl">More things I&apos;ve made</h2></div>
          <p className="hidden text-sm text-[#536e55] sm:block">04 projects</p>
        </div>
        <ProjectList projects={projects.slice(1)} startIndex={1} />
      </section>

    </main>
  );
}
