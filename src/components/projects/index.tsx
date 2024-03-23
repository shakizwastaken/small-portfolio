import { ArrowDownIcon } from "lucide-react";
import projects from "./data";
import Project from "./project";

export default function Projects() {
  const mapProjects = () =>
    projects.map((project, index) => <Project key={index} {...project} />);

  return (
    <div className="container flex flex-col items-start justify-start gap-6">
      <div className="flex items-center gap-3">
        <h2 className="font-cal text-start text-6xl font-bold">
          Latest Projects
        </h2>
        <ArrowDownIcon />
      </div>
      <div className="flex w-full flex-col gap-4 pb-12">{mapProjects()}</div>
    </div>
  );
}
