import Image from "next/image";

interface ProjectCardProps { title: string; description: string; technologies: string[]; link?: string; preview?: string; index: number; }

export default function ProjectCard({ title, description, technologies, link, preview, index }: ProjectCardProps) {
  const isFeatured = index === 0;
  const layoutClass = isFeatured ? "" : "grid gap-6 md:grid-cols-[minmax(180px,0.34fr)_1fr] md:items-center";
  const imageHeight = isFeatured ? "h-64 sm:h-80" : "h-40 sm:h-44";
  return <article className={`project-card border-b border-[#20352a]/20 py-8 first:border-t ${layoutClass}`}>{preview && <Image src={preview} alt={`${title} project preview`} width={1200} height={700} priority={isFeatured} className={`w-full border border-[#20352a]/20 object-cover object-top grayscale-[0.15] ${imageHeight}`} />}<div className="pt-1"><div className="flex items-start justify-between gap-4"><p className="project-number display-serif text-3xl font-bold">0{index + 1}</p><p className="text-right text-xs font-bold uppercase tracking-[0.14em] text-[#536e55]">{technologies.join(" · ")}</p></div><h3 className="display-serif mt-4 text-3xl text-[#20352a]">{title}</h3><p className="mt-3 max-w-2xl leading-7 text-[#536e55]">{description}</p>{link && <a href={link} target="_blank" rel="noopener noreferrer" className="mt-5 inline-block text-sm font-bold text-[#20352a] underline decoration-2 underline-offset-4 hover:text-[#6f9b70] focus:outline-none focus:ring-2 focus:ring-[#82ed35]">Open project <span aria-hidden="true">↗</span></a>}</div></article>;
}
