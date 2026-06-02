"use client";

import { useState } from "react";

export default function Projects() {
  const projects = [
    {
      title: "Brandsdoor.in",
      image: "/brandsdoor.png",
      description:
        "Full-featured real estate portal with advanced search, filters and JWT-based authentication.",
      liveUrl: "https://brandsdoor.in",
    },
    {
      title: "IndiaDealsGroup.com",
      image: "/indiadealsgroup.png",
      description:
        "Builder-focused real estate website showcasing projects, media management and SEO-optimized pages.",
      liveUrl: "https://indiadealsgroup.com",
    }
  ];

  const [views, setViews] = useState(Array(projects.length).fill("website"));

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
                {views[index] === "website" ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <pre className="h-72 w-full overflow-auto bg-[#0b0b0b] p-4 text-sm text-green-200">
                    <code>{project.codeSnippet || "No code available for this project."}</code>
                  </pre>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              </div>

              <div className="space-y-5 p-8">
                <div>
                  <h3 className="text-3xl font-bold">{project.title}</h3>
                  <p className="mt-3 text-gray-400">{project.description}</p>
                  <div className="mt-4 flex gap-2">
                    <button
                      onClick={() => {
                        const next = [...views];
                        next[index] = "website";
                        setViews(next);
                      }}
                      className={`rounded-full px-3 py-1 text-sm ${views[index] === "website" ? "bg-cyan-400 text-black" : "bg-white/5 text-cyan-400 border border-cyan-400"}`}
                    >
                      Website
                    </button>
                    <button
                      onClick={() => {
                        const next = [...views];
                        next[index] = "code";
                        setViews(next);
                      }}
                      className={`rounded-full px-3 py-1 text-sm ${views[index] === "code" ? "bg-cyan-400 text-black" : "bg-white/5 text-cyan-400 border border-cyan-400"}`}
                    >
                      Code
                    </button>
                  </div>
                </div>

                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-2xl border border-cyan-400 px-6 py-3 text-cyan-400 transition-all duration-300 hover:bg-cyan-400 hover:text-black"
                  >
                    View Project
                  </a>
                ) : (
                  <button className="inline-flex items-center justify-center rounded-2xl border border-cyan-400 px-6 py-3 text-cyan-400 transition-all duration-300 hover:bg-cyan-400 hover:text-black">
                    View Project
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}