import { useGSAP } from "@gsap/react";
import { GithubIcon, TwitterIcon } from "lucide-react";
import SplitType from "split-type";
import gsap from "gsap";

export default function Hero() {
  const mapIcons = () =>
    [
      { Icon: GithubIcon, href: "https://github.com/shakizwastaken/" },
      { Icon: TwitterIcon, href: "https://twitter.com/21Cps_0664/" },
    ].map(({ Icon, href }, index) => (
      <a key={index} target="_blank" href={href} rel="noopener noreferrer">
        <Icon className="stroke-muted-foreground hover:bg-muted h-[32px] w-[32px] cursor-pointer rounded-md p-2 transition-all duration-300 ease-in-out" />
      </a>
    ));

  useGSAP((ctx) => {
    const headline = new SplitType("#hero-headline", {
      types: "lines,words,chars",
      tagName: "span",
      charClass: "move-up",
    });

    const tl = gsap.timeline();

    tl.to(headline.chars, {
      y: 0,
      stagger: 0.015,
      delay: 0.2,
      duration: 0.25,
    });

    tl.from(
      "#hero-sub",
      {
        y: 1,
        opacity: 0,
      },
      ">-0.2",
    )
      .to(
        "#hero-sub",
        {
          y: 0,
          opacity: 1,
        },
        "<",
      )
      .from(
        "#hero-icons",
        {
          y: 1,
          opacity: 0,
        },
        ">-0.2",
      )
      .to(
        "#hero-icons",
        {
          y: 0,
          opacity: 1,
        },
        "<",
      );
  });

  return (
    <div
      id="hero-section"
      className="container flex h-[80vh] flex-col items-start justify-center"
    >
      <h1 id="hero-headline" className="font-cal text-8xl font-bold">
        Hello, I'm Yahya👋.
      </h1>
      <p id="hero-sub" className="text-muted-foreground move-up w-full text-lg">
        A very passionate software engineer and indie hacker based in Morocco!
      </p>
      <div id="hero-icons" className="flex items-center">
        {mapIcons()}
      </div>
    </div>
  );
}
