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
    <div className="select-non hover:bg-muted group flex w-full cursor-default flex-col items-start justify-start gap-2 rounded-md px-0 py-6 transition-all duration-300 ease-in-out hover:px-8">
      <p className="text-muted-foreground">
        {started} - {ended}
      </p>

      <div className="flex items-center gap-1">
        <p className="font-cal text-lg">{title} -</p>
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
        <p className="text-muted-foreground">{description}</p>
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
