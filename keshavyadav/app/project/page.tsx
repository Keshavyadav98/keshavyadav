"use client";

import { motion } from "framer-motion";
import {
  ExternalLink,
  Search,
  ArrowUpRight,
} from "lucide-react";
import { useState } from "react";

const projects = [
  {
    title: "IndiaDealsGroup.com",
    category: "Builder Website",
    image: "/indiadealsgroup.png",
    description:
      "Builder-focused real estate website showcasing projects, project details, floor plans and media management.",
    tech: ["Next.js", "React.js", "Tailwind CSS", "Node.js", "MongoDB"],
    liveUrl: "https://indiadealsgroup.com",
    sourceUrl: "",
  },
  {
    title: "Brandsdoor.in",
    category: "Real Estate Portal",
    image: "/brandsdoor.png",
    description:
      "Property listing portal with advanced search, dynamic filters, JWT authentication and state management.",
    tech: ["React.js", "Tailwind CSS", "Node.js", "MongoDB", "Redux Toolkit"],
    liveUrl: "https://brandsdoor.in",
    sourceUrl: "",
  },
  {
    title: "Varnya CRM",
    category: "CRM",
    image: "/coding1.svg",
    description:
      "Customer relationship management system with dashboards, reporting and PDF generator features.",
    tech: ["React.js", "Tailwind CSS", "Node.js", "FastAPI", "MongoDB"],
    liveUrl: "",
    sourceUrl: "",
  },
  {
    title: "Siona.tv",
    category: "Media Platform",
    image: "/coding2.svg",
    description:
      "Media and streaming portal focused on content presentation and responsive layouts.",
    tech: ["HTML", "CSS", "JavaScript"],
    liveUrl: "",
    sourceUrl: "",
  },
];

export default function ProjectsPage() {
  const [search, setSearch] = useState("");

  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-[#050816] text-white px-6 md:px-12 xl:px-20 py-16">
      
      {/* Background Glow */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-20 left-20 w-[300px] h-[300px] bg-cyan-500/10 blur-[120px] rounded-full"></div>

        <div className="absolute bottom-20 right-20 w-[300px] h-[300px] bg-blue-500/10 blur-[120px] rounded-full"></div>
      </div>

      {/* Header */}
      <section className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 mb-16">
        
        <div>
          <span className="px-4 py-2 rounded-full border border-cyan-400 text-cyan-400 text-sm">
            My Projects
          </span>

          <h1 className="text-4xl md:text-6xl font-bold mt-6">
            Featured <span className="text-cyan-400">Work</span>
          </h1>

          <p className="text-slate-400 mt-6 text-lg max-w-[700px]">
            Explore some of my latest projects crafted with modern
            technologies, premium UI design and scalable architecture.
          </p>
        </div>

        {/* Search */}
        <div className="relative w-full lg:w-[350px]">
          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            size={18}
          />

          <input
            type="text"
            placeholder="Search projects..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-[#0B1220] border border-white/10 rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-cyan-400 transition-all"
          />
        </div>
      </section>

      {/* Categories */}
      {/* <section className="flex flex-wrap gap-4 mb-12">
        {[
          "All",
          "Dashboard",
          "Portfolio",
          "Web App",
          "E-Commerce",
        ].map((item, index) => (
          <button
            key={index}
            className="px-5 py-3 rounded-xl border border-white/10 bg-[#0B1220] hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300"
          >
            {item}
          </button>
        ))}
      </section> */}

      {/* Projects Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        
        {filteredProjects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative bg-[#0B1220] border border-white/10 rounded-3xl overflow-hidden hover:border-cyan-400/40 transition-all duration-500"
          >
            {/* Image */}
            <div className="relative overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-[240px] object-cover group-hover:scale-110 transition-all duration-700"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center gap-4">
                
                <button className="w-12 h-12 rounded-full bg-cyan-400 text-black flex items-center justify-center hover:scale-110 transition-all">
                  <ExternalLink size={18} />
                </button>

                <button className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-all">
                  <Search size={18} />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              
              {/* Category */}
              <span className="text-cyan-400 text-sm">
                {project.category}
              </span>

              {/* Title */}
              <div className="flex items-center justify-between mt-2">
                <h2 className="text-2xl font-semibold">
                  {project.title}
                </h2>

                <ArrowUpRight className="text-cyan-400 group-hover:rotate-45 transition-all duration-300" />
              </div>

              {/* Description */}
              <p className="text-slate-400 mt-4 leading-7">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-3 mt-6">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 text-sm rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-4 mt-8">
                
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 text-center bg-gradient-to-r from-cyan-400 to-blue-500 py-3 rounded-xl font-medium hover:scale-[1.02] transition-all"
                  >
                    Live Demo
                  </a>
                ) : (
                  <button className="flex-1 bg-gradient-to-r from-cyan-400 to-blue-500 py-3 rounded-xl font-medium opacity-70 cursor-not-allowed">
                    Live Demo
                  </button>
                )}

                {project.sourceUrl ? (
                  <a
                    href={project.sourceUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 text-center border border-white/10 py-3 rounded-xl hover:border-cyan-400 hover:text-cyan-400 transition-all"
                  >
                    Source Code
                  </a>
                ) : (
                  <button className="flex-1 border border-white/10 py-3 rounded-xl opacity-70 cursor-not-allowed">
                    Source Code
                  </button>
                )}
              </div>
            </div>

            {/* Glow Border */}
            <div className="absolute inset-0 rounded-3xl border border-cyan-400/0 group-hover:border-cyan-400/20 pointer-events-none"></div>
          </motion.div>
        ))}
      </section>

      {/* CTA Section */}
      <section className="mt-28">
        
        <div className="relative overflow-hidden bg-[#0B1220] border border-white/10 rounded-[40px] p-10 md:p-16 text-center">
          
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-cyan-500/10 blur-[120px]"></div>

          <h2 className="text-4xl md:text-5xl font-bold relative z-10">
            Have a Project in Mind?
          </h2>

          <p className="text-slate-400 mt-6 max-w-[700px] mx-auto text-lg relative z-10">
            Let’s build something amazing together with modern technologies
            and premium user experience.
          </p>

          <button className="mt-10 bg-gradient-to-r from-cyan-400 to-blue-500 px-10 py-4 rounded-2xl text-lg font-semibold hover:scale-105 transition-all relative z-10">
            Let’s Talk
          </button>
        </div>
      </section>
    </main>
  );
}