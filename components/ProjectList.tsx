import ProjectCard from "./ProjectCard";
interface Project { title: string; description: string; technologies: string[]; link?: string; preview?: string; }
interface ProjectListProps { projects: Project[]; startIndex?: number; }
export default function ProjectList({ projects, startIndex = 0 }: ProjectListProps) { return <section className="mt-7" aria-label="Portfolio projects">{projects.map((project, index) => <ProjectCard key={project.title} index={startIndex + index} {...project} />)}</section>; }
