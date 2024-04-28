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
    title: "FramerVault",
    description:
      "A simple app that allows you to store and share your Framer components with the world.",
    website: "https://framervault.com/",
    status: "Active",
    is_active: true,
    started: "April 2023",
    ended: "Present",
  },
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
    title: "Intelify",
    description:
      "A social media management tool that helps you create viral content, track social metrics, schedule posts, and automate DMs.",
    website: "https://intelify.ai/",
    status: "Active",
    is_active: true,
    started: "April 2023",
    ended: "Present",
  },
  {
    title: "Finacards",
    description:
      "A landing page redesign for the #1 credit cards production and personalization company in Africa.",
    website: "https://finacards.drip.ma/",
    status: "Not active",
    is_active: false,
    started: "March 2023",
    ended: "April 2023",
  },
];
export default projects;
