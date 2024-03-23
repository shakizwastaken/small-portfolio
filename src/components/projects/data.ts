export interface ProjectProps {
  title: string;
  description: string;
  website: string;
  status: string;
  is_active: boolean;
  started: string;
  ended: string;
}

const projects: ProjectProps[] = [
  {
    title: "SealAI",
    description:
      "An ai-based twitter outreach automation tool that will help you effortlessly start more conversations and close more deals.",
    website: "https://sealai.co/",
    status: "Active",
    is_active: true,
    started: "October 2023",
    ended: "Present",
  },
  {
    title: "Finacards",
    description:
      "A landing page redesign for the #1 credit cards production and personalization company in Africa.",
    website: "https://finacards.drip.ma/",
    status: "Active",
    is_active: true,
    started: "March 2023",
    ended: "April 2023",
  },
];
export default projects;
