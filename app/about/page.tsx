import SkillCard from "@/components/SkillCard";

export default function About() {
  return <main className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
    <section className="max-w-3xl"><p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">About me</p><h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">A learner with a practical approach to the web.</h1><p className="mt-6 text-lg leading-8 text-slate-600">I&apos;m Iketleng Lesedi, a web development student interested in building clear, reliable digital experiences. I enjoy taking an idea from a simple sketch to a responsive interface that people can use easily.</p><p className="mt-4 text-lg leading-8 text-slate-600">Through my coursework, I&apos;m strengthening my foundations in modern JavaScript, React, Next.js, version control, and accessible design.</p></section>
    <section className="mt-14" aria-labelledby="skills-heading"><h2 id="skills-heading" className="text-2xl font-bold text-slate-950">What I&apos;m working with</h2><div className="mt-6 grid gap-5 md:grid-cols-3"><SkillCard title="Frontend foundations" description="Semantic HTML, responsive CSS, and JavaScript used to create interfaces that work across screen sizes." /><SkillCard title="Modern React" description="Reusable components, typed props, and composition patterns that keep an application organized." /><SkillCard title="Professional workflow" description="Git and GitHub for tracking changes, documenting projects, and sharing work with others." /></div></section>
  </main>;
}
