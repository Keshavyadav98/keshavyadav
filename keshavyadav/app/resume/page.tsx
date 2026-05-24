"use client";

import { motion } from "framer-motion";
import {
  Download,
  Briefcase,
  GraduationCap,
  Code2,
  Award,
  Calendar,
} from "lucide-react";

const skills = [
  { name: "React.js", level: "95%" },
  { name: "Next.js", level: "92%" },
  { name: "JavaScript", level: "90%" },
  { name: "Node.js", level: "85%" },
  { name: "Tailwind CSS", level: "96%" },
];

export default function page() {
  return (
    <main className="min-h-screen bg-[#050816] text-white px-6 md:px-12 xl:px-20 py-16 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-20 left-20 w-[300px] h-[300px] bg-cyan-500/10 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-blue-500/10 blur-[120px] rounded-full"></div>

      {/* Hero */}
      <section className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
        
        <div>
          <span className="px-4 py-2 rounded-full border border-cyan-400 text-cyan-400 text-sm">
            Resume
          </span>

          <h1 className="text-4xl md:text-6xl font-bold mt-6 leading-tight">
            My Professional Journey
          </h1>

          <p className="text-slate-400 mt-6 text-lg leading-8 max-w-[700px]">
            Passionate Full Stack Developer with experience building
            modern web applications using React.js, Next.js, Node.js
            and scalable frontend architecture.
          </p>
        </div>

        {/* Resume Button */}
        <button className="bg-gradient-to-r from-cyan-400 to-blue-500 px-8 py-4 rounded-2xl flex items-center gap-3 text-lg font-semibold hover:scale-105 transition-all">
          <Download size={22} />
          Download Resume
        </button>
      </section>

      {/* Experience & Education */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-24 relative z-10">
        
        {/* Experience */}
        <div className="bg-[#0B1220]/80 backdrop-blur-xl border border-white/10 rounded-[32px] p-8">
          
          <div className="flex items-center gap-4 mb-10">
            <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center">
              <Briefcase className="text-cyan-400" />
            </div>

            <h2 className="text-3xl font-bold">
              Experience
            </h2>
          </div>

          <div className="space-y-8 border-l border-cyan-500/20 pl-8">
            
            {/* Item */}
            <div className="relative">
              
              <div className="absolute -left-[41px] top-2 w-4 h-4 rounded-full bg-cyan-400"></div>

              <h3 className="text-2xl font-semibold">
                Frontend Developer
              </h3>

              <p className="text-cyan-400 mt-2">
                Bdaar Solutions Pvt. Ltd.
              </p>

              <div className="flex items-center gap-2 text-slate-400 mt-2">
                <Calendar size={16} />
                <span>2023 - Present</span>
              </div>

              <p className="text-slate-400 mt-4 leading-7">
                Developed scalable web applications with React.js,
                Next.js and Tailwind CSS while focusing on
                performance and user experience.
              </p>
            </div>

            {/* Item */}
            <div className="relative">
              
              <div className="absolute -left-[41px] top-2 w-4 h-4 rounded-full bg-cyan-400"></div>

              <h3 className="text-2xl font-semibold">
                UI Developer
              </h3>

              <p className="text-cyan-400 mt-2">
                Safety Labs
              </p>

              <div className="flex items-center gap-2 text-slate-400 mt-2">
                <Calendar size={16} />
                <span>2022 - 2023</span>
              </div>

              <p className="text-slate-400 mt-4 leading-7">
                Designed responsive dashboards and reusable UI
                components with modern frontend architecture.
              </p>
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="bg-[#0B1220]/80 backdrop-blur-xl border border-white/10 rounded-[32px] p-8">
          
          <div className="flex items-center gap-4 mb-10">
            <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center">
              <GraduationCap className="text-cyan-400" />
            </div>

            <h2 className="text-3xl font-bold">
              Education
            </h2>
          </div>

          <div className="space-y-8 border-l border-cyan-500/20 pl-8">
            
            {/* MCA */}
            <div className="relative">
              
              <div className="absolute -left-[41px] top-2 w-4 h-4 rounded-full bg-cyan-400"></div>

              <h3 className="text-2xl font-semibold">
                Master of Computer Applications
              </h3>

              <p className="text-cyan-400 mt-2">
                Lovely Professional University
              </p>

              <div className="flex items-center gap-2 text-slate-400 mt-2">
                <Calendar size={16} />
                <span>2024 - Present</span>
              </div>

              <p className="text-slate-400 mt-4 leading-7">
                Pursuing MCA with focus on software development,
                frontend engineering and scalable applications.
              </p>
            </div>

            {/* BCA */}
            <div className="relative">
              
              <div className="absolute -left-[41px] top-2 w-4 h-4 rounded-full bg-cyan-400"></div>

              <h3 className="text-2xl font-semibold">
                Bachelor of Computer Applications
              </h3>

              <p className="text-cyan-400 mt-2">
                INMANTECH College
              </p>

              <div className="flex items-center gap-2 text-slate-400 mt-2">
                <Calendar size={16} />
                <span>2020 - 2023</span>
              </div>

              <p className="text-slate-400 mt-4 leading-7">
                Completed BCA with strong fundamentals in programming,
                web development and database systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="mt-24 relative z-10">
        
        <div className="flex items-center gap-4 mb-10">
          <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center">
            <Code2 className="text-cyan-400" />
          </div>

          <h2 className="text-4xl font-bold">
            Technical Skills
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#0B1220]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6"
            >
              
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-medium">
                  {skill.name}
                </h3>

                <span className="text-cyan-400">
                  {skill.level}
                </span>
              </div>

              <div className="w-full h-3 bg-[#111827] rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                  style={{ width: skill.level }}
                ></div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section className="mt-24 relative z-10">
        
        <div className="flex items-center gap-4 mb-10">
          <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center">
            <Award className="text-cyan-400" />
          </div>

          <h2 className="text-4xl font-bold">
            Certifications
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {[
            "React.js Advanced",
            "Next.js Development",
            "Node.js Backend",
          ].map((item, index) => (
            <div
              key={index}
              className="bg-[#0B1220]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-cyan-400/30 transition-all"
            >
              
              <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 flex items-center justify-center mb-6">
                <Award className="text-cyan-400" />
              </div>

              <h3 className="text-2xl font-semibold">
                {item}
              </h3>

              <p className="text-slate-400 mt-4 leading-7">
                Successfully completed professional certification
                with hands-on projects and modern technologies.
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}