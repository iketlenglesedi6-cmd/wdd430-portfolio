import ProjectCard from "./ProjectCard";
interface Project { title: string; description: string; technologies: string[]; liveLink: string; sourceLink: string; }
interface ProjectListProps { projects: Project[]; }
export default function ProjectList({ projects }: ProjectListProps) { return <section className="mt-5" aria-label="Portfolio projects">{projects.map((project, index) => <ProjectCard key={project.title} index={index} {...project} />)}</section>; }
