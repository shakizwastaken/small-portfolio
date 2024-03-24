import { ArrowDownIcon } from "lucide-react";
import skills from "./data";
import Skill from "./skill";

export default function Skills() {
  const mapSkills = () =>
    skills.map((skill, index) => <Skill key={index} {...skill} />);

  return (
    <div className="container flex flex-col items-start justify-start gap-6">
      <div className="flex items-center gap-3">
        <h2 className="text-start font-cal text-3xl font-bold md:text-6xl">
          Tech stack
        </h2>
        <ArrowDownIcon />
      </div>
      <div className="flex w-full flex-wrap items-center justify-start gap-4 pb-12">
        {mapSkills()}
      </div>
    </div>
  );
}
