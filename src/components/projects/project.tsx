import { cn } from "@/utils/cn";
import { ProjectProps } from "./data";

export default function Project({
  title,
  description,
  website,
  ended,
  is_active,
  started,
  status,
}: ProjectProps) {
  return (
    <div className="group flex w-full cursor-default select-none flex-col items-start justify-start gap-2 rounded-md bg-muted px-6 py-6 transition-all duration-300 ease-in-out md:bg-transparent md:px-0 md:hover:bg-muted md:hover:pl-8">
      <p className="text-sm text-muted-foreground md:text-base">
        {started} - {ended}
      </p>

      <div className="flex items-center gap-1">
        <p className="font-cal md:text-lg">{title} -</p>
        <span
          className={cn(
            "text-xs",
            is_active ? "text-green-500" : "text-red-500",
          )}
        >
          ({status})
        </span>
        <div
          className={cn(
            "h-[5px] w-[5px] rounded-full",
            is_active ? "bg-green-500" : "bg-red-500",
          )}
        />
      </div>
      <div>
        <p className="text-sm text-muted-foreground md:text-base">
          {description}
        </p>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm group-hover:underline"
          href={website}
        >
          Visit website
        </a>
      </div>
    </div>
  );
}
