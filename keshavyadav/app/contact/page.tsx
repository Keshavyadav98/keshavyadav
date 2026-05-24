"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#050816] text-white px-6 md:px-12 xl:px-20 py-16 overflow-hidden relative">
      
      {/* Background Glow */}
      <div className="absolute top-20 left-10 w-[300px] h-[300px] bg-cyan-500/10 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-blue-500/10 blur-[120px] rounded-full"></div>

      {/* Header */}
      <section className="text-center max-w-[900px] mx-auto relative z-10">
        
        <span className="px-4 py-2 rounded-full border border-cyan-400 text-cyan-400 text-sm">
          Contact Me
        </span>

        <h1 className="text-4xl md:text-6xl font-bold mt-6">
          Let’s Build Something Amazing
        </h1>

        <p className="text-slate-400 mt-6 text-lg leading-8">
          Have a project idea, freelance work or collaboration?
          Feel free to connect with me anytime.
        </p>
      </section>

      {/* Main Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-20 relative z-10">
        
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-[#0B1220]/80 backdrop-blur-xl border border-white/10 rounded-[32px] p-8"
        >
          
          <h2 className="text-3xl font-bold mb-8">
            Contact Information
          </h2>

          <div className="space-y-6">
            
            {/* Email */}
            <div className="flex items-center gap-5 bg-[#111827] rounded-2xl p-5 border border-white/5 hover:border-cyan-400/30 transition-all">
              
              <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center">
                <Mail className="text-cyan-400" />
              </div>

              <div>
                <p className="text-slate-400 text-sm">Email</p>
                <h3 className="text-lg font-medium">
                  keshav@example.com
                </h3>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-5 bg-[#111827] rounded-2xl p-5 border border-white/5 hover:border-cyan-400/30 transition-all">
              
              <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center">
                <Phone className="text-cyan-400" />
              </div>

              <div>
                <p className="text-slate-400 text-sm">Phone</p>
                <h3 className="text-lg font-medium">
                  +91 9876543210
                </h3>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-5 bg-[#111827] rounded-2xl p-5 border border-white/5 hover:border-cyan-400/30 transition-all">
              
              <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center">
                <MapPin className="text-cyan-400" />
              </div>

              <div>
                <p className="text-slate-400 text-sm">Location</p>
                <h3 className="text-lg font-medium">
                  Noida, India
                </h3>
              </div>
            </div>
          </div>

          {/* Social Icons */}
          <div className="mt-10">
            <h3 className="text-xl font-semibold mb-5">
              Follow Me
            </h3>

            <div className="flex gap-4">
              
              <button className="w-14 h-14 rounded-2xl bg-[#111827] border border-white/10 flex items-center justify-center hover:border-cyan-400 hover:text-cyan-400 transition-all">
                <AiFillGithub className="text-cyan-400" />
              </button>

              <button className="w-14 h-14 rounded-2xl bg-[#111827] border border-white/10 flex items-center justify-center hover:border-cyan-400 hover:text-cyan-400 transition-all">
                <AiFillLinkedin className="text-cyan-400" />
              </button>

              <button className="w-14 h-14 rounded-2xl bg-[#111827] border border-white/10 flex items-center justify-center hover:border-cyan-400 hover:text-cyan-400 transition-all">
                <AiFillInstagram className="text-cyan-400" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Right Side Form */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-[#0B1220]/80 backdrop-blur-xl border border-white/10 rounded-[32px] p-8"
        >
          
          <h2 className="text-3xl font-bold mb-8">
            Send Message
          </h2>

          <form className="space-y-6">
            
            {/* Name */}
            <div>
              <label className="block mb-3 text-slate-300">
                Full Name
              </label>

              <input
                type="text"
                placeholder="Enter your name"
                className="w-full bg-[#111827] border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-cyan-400 transition-all"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block mb-3 text-slate-300">
                Email Address
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-[#111827] border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-cyan-400 transition-all"
              />
            </div>

            {/* Subject */}
            <div>
              <label className="block mb-3 text-slate-300">
                Subject
              </label>

              <input
                type="text"
                placeholder="Project discussion"
                className="w-full bg-[#111827] border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-cyan-400 transition-all"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block mb-3 text-slate-300">
                Message
              </label>

              <textarea
                rows={6}
                placeholder="Write your message..."
                className="w-full bg-[#111827] border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-cyan-400 transition-all resize-none"
              ></textarea>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 py-4 rounded-2xl font-semibold text-lg flex items-center justify-center gap-3 hover:scale-[1.02] transition-all"
            >
              Send Message
              <Send size={20} />
            </button>
          </form>
        </motion.div>
      </section>
    </main>
  );
}