import { SkillProps } from "./data";

export default function Skill({ name, description, Icon }: SkillProps) {
  return (
    <div className="flex min-w-full flex-1 cursor-default select-none flex-col items-start justify-start gap-2 rounded-md border-1  border-muted p-4 transition-all duration-300 ease-in-out hover:bg-muted sm:min-w-[425px] md:h-[135px] 2xl:max-w-[30%]">
      <div className="flex items-center gap-4">
        <Icon className="h-8 w-8" />
        <p className="font-cal md:text-xl">{name}</p>
      </div>
      <p className="text-sm text-muted-foreground md:text-base">
        {description}
      </p>
    </div>
  );
}
