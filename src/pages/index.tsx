import Cursor from "@/components/cursor";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import { Spotlight } from "@/components/ui/spotlight";

export default function _page() {
  return (
    <div className="bg-grid-white/[0.02] relative flex min-h-screen w-full flex-col items-center justify-center gap-12 overflow-hidden bg-black/[0.96] text-white antialiased md:items-center md:justify-center">
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      />
      <Cursor />
      <Hero />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}
