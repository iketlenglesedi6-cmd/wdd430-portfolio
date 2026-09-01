import ProjectCard from "./ProjectCard";
interface Project { title: string; description: string; technologies: string[]; liveLink: string; sourceLink: string; }
interface ProjectListProps { projects: Project[]; }
export default function ProjectList({ projects }: ProjectListProps) { return <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3" aria-label="Featured portfolio projects">{projects.map((project) => <ProjectCard key={project.title} {...project} />)}</section>; }
