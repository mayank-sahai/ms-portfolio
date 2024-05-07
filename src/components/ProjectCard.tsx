import { Project } from "../types/Project.types";
import githubIcon from "../assets/github.svg";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="p-2 m-2 w-full sm:w-72 h-auto shadow hover:bg-slate-100 hover:border-sky-200 hover:shadow-sky-200 hover:rounded-lg">
      <img src={project.image} className="w-10 p-2"></img>
      <p className="p-2">{project.name}</p>
      <p className="font-light text-sm p-2">{project.info}</p>
      <div className="flex p-2 justify-evenly">
        {project.url && (
          <a href={project.url} target="_blank">
            <p className="font-light text-sm">🔗</p>
          </a>
        )}
        {project.github && (
          <a href={project.github} target="_blank">
            <img className="w-5 h-5" src={githubIcon} alt="" />
          </a>
        )}
      </div>
    </div>
  );
}
