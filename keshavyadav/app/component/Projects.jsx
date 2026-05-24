export default function Projects() {
  const projects = [
    {
      title: "DevFlow",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1000&q=80",
      description: "A sleek developer-centric productivity dashboard with real-time analytics.",
    },
    {
      title: "AI Dashboard",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1000&q=80",
      description: "A modern interface for AI workflows, data insights, and collaboration.",
    },
  ];

  return (
    <section className="px-5 py-16 sm:px-8 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10">
          <h2 className="text-4xl font-bold sm:text-5xl">Featured Projects</h2>
          <p className="mt-3 max-w-2xl text-gray-400 sm:text-lg">
            A selection of polished projects built with clean UI, responsive layouts, and performance in mind.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 shadow-[0_30px_90px_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              </div>

              <div className="space-y-5 p-8">
                <div>
                  <h3 className="text-3xl font-bold">{project.title}</h3>
                  <p className="mt-3 text-gray-400">{project.description}</p>
                </div>

                <button className="inline-flex items-center justify-center rounded-2xl border border-cyan-400 px-6 py-3 text-cyan-400 transition-all duration-300 hover:bg-cyan-400 hover:text-black">
                  View Project
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}