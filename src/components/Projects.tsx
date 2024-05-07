import { ProjectCard } from "./ProjectCard";
import projects from "../data/project.json";

export function Projects() {
  return (
    <div className="flex flex-col justify-center items-center">
     <div className="pt-20 w-full sm:w-3/5">
        <p className="font-nohemi text-center text-base sm:text-lg md:text-2xl font-semibold pb-2">Explore my humble collection of projects, each a chapter in my ongoing journey of learning and exploration. 🏗️</p>
      </div>
      <div className="base-1 flex flex-wrap items-center justify-around w-full sm:w-3/5 py-10">
        {projects.map((project) => (
          <ProjectCard project={project} />
        ))}
      </div>
    </div>
  );
}
