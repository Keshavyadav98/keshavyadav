import Hero from "./component/Hero";
import Stats from "./component/Stats";
import Skills from "./component/Skills";
import Projects from "./component/Projects";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#020617] text-white flex flex-col">
      <div className="flex-1 px-5 py-6 sm:px-8 lg:px-10">
        <Hero />
        <Stats />
        <Skills />
        <Projects />
      </div>
    </main>
  );
}
