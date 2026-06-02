"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  GraduationCap,
  MapPin,
  Code2,
  User,
} from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#050816] text-white px-6 md:px-12 xl:px-20 py-16">
      
      {/* Hero Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="px-4 py-2 rounded-full border border-cyan-400 text-cyan-400 text-sm">
            About Me
          </span>

          <h1 className="text-4xl md:text-6xl font-bold mt-6 leading-tight">
            Experienced Full Stack Developer
          </h1>

          <p className="text-slate-400 text-lg mt-6 leading-8">
            Results-oriented Full Stack Developer with over 4 years of experience
            building scalable web applications, CRM systems, real estate portals,
            and cloud-powered platforms using modern frontend and backend
            technologies.
          </p>

          {/* Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-10">
            
            <div className="bg-[#0B1220] border border-white/10 rounded-2xl p-5">
              <div className="flex items-center gap-3">
                <Briefcase className="text-cyan-400" />
                <div>
                  <h3 className="font-semibold">Experience</h3>
                  <p className="text-slate-400 text-sm">
                    4+ Years Professional
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#0B1220] border border-white/10 rounded-2xl p-5">
              <div className="flex items-center gap-3">
                <GraduationCap className="text-cyan-400" />
                <div>
                  <h3 className="font-semibold">Education</h3>
                  <p className="text-slate-400 text-sm">
                    MCA - Lovely Professional University
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#0B1220] border border-white/10 rounded-2xl p-5">
              <div className="flex items-center gap-3">
                <MapPin className="text-cyan-400" />
                <div>
                  <h3 className="font-semibold">Location</h3>
                  <p className="text-slate-400 text-sm">
                    Noida, India
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#0B1220] border border-white/10 rounded-2xl p-5">
              <div className="flex items-center gap-3">
                <Code2 className="text-cyan-400" />
                <div>
                  <h3 className="font-semibold">Specialization</h3>
                  <p className="text-slate-400 text-sm">
                    Full Stack & Cloud Applications
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center"
        >
          {/* Glow */}
          <div className="absolute w-[350px] h-[350px] bg-cyan-500/20 blur-[120px] rounded-full"></div>

          <div className="relative bg-[#0B1220] border border-cyan-500/20 rounded-3xl p-6 backdrop-blur-xl">
            <img
              src="/profile.png"
              alt="profile"
              className="w-[320px] md:w-[400px] rounded-3xl"
            />

            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-[#0F172A] border border-cyan-400/20 rounded-2xl p-4 shadow-lg">
              <div className="flex items-center gap-3">
                <User className="text-cyan-400" />
                <div>
                  <h4 className="font-semibold">Frontend Expert</h4>
                  <p className="text-slate-400 text-sm">
                    React & Next.js Specialist
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className="mt-28">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">
            Skills & Expertise
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {[
            { name: "React.js", value: "95%" },
            { name: "Next.js", value: "92%" },
            { name: "Tailwind CSS", value: "96%" },
            { name: "JavaScript", value: "90%" },
            { name: "Node.js", value: "88%" },
            { name: "Express.js", value: "85%" },
            { name: "MongoDB", value: "90%" },
            { name: "AWS / Docker", value: "82%" },
          ].map((skill, index) => (
            <div
              key={index}
              className="bg-[#0B1220] border border-white/10 rounded-2xl p-6"
            >
              <div className="flex justify-between mb-3">
                <h3 className="font-medium">{skill.name}</h3>
                <span className="text-cyan-400">{skill.value}</span>
              </div>

              <div className="w-full h-3 bg-[#111827] rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                  style={{ width: skill.value }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="mt-28">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Experience
        </h2>

        <div className="space-y-8 border-l border-cyan-500/30 pl-8">
          
          <div className="relative">
            <div className="absolute -left-[42px] top-2 w-4 h-4 rounded-full bg-cyan-400"></div>

            <div className="bg-[#0B1220] border border-white/10 rounded-2xl p-6">
              <h3 className="text-2xl font-semibold">
                Full Stack Developer
              </h3>

              <p className="text-cyan-400 mt-2">
                DSI IndiaDealss Pvt. Ltd.
              </p>

              <span className="text-slate-400 text-sm">
                2025 - Present
              </span>

              <p className="text-slate-400 mt-4 leading-7">
                Built a real estate portal with reusable React components,
                API integrations, cloud deployment on AWS EC2, and MongoDB data
                management.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-[42px] top-2 w-4 h-4 rounded-full bg-cyan-400"></div>

            <div className="bg-[#0B1220] border border-white/10 rounded-2xl p-6">
              <h3 className="text-2xl font-semibold">
                Full Stack Developer
              </h3>

              <p className="text-cyan-400 mt-2">
                Bdaar Solutions Pvt. Ltd.
              </p>

              <span className="text-slate-400 text-sm">
                2023 - 2025
              </span>

              <p className="text-slate-400 mt-4 leading-7">
                Delivered CRM and business applications using React.js, FastAPI,
                Node.js, MongoDB, and Tailwind CSS with secure authentication
                flows.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-[42px] top-2 w-4 h-4 rounded-full bg-cyan-400"></div>

            <div className="bg-[#0B1220] border border-white/10 rounded-2xl p-6">
              <h3 className="text-2xl font-semibold">
                Frontend Developer
              </h3>

              <p className="text-cyan-400 mt-2">
                Safety Labs
              </p>

              <span className="text-slate-400 text-sm">
                2022 - 2023
              </span>

              <p className="text-slate-400 mt-4 leading-7">
                Created responsive media portal interfaces using HTML, CSS, and
                JavaScript, focusing on performance and cross-browser support.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}