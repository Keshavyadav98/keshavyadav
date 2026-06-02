"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-screen px-10  flex items-center">

      {/* Glow Background */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute w-[500px] h-[500px] bg-cyan-500/20 blur-[150px] rounded-full top-10 left-20"></div>
        <div className="absolute w-[400px] h-[400px] bg-purple-500/20 blur-[150px] rounded-full bottom-0 right-20"></div>
      </div>

      <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">

        {/* LEFT */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="px-5 py-2 rounded-full border border-cyan-400 text-cyan-400">
              👋 Hello, I'm
            </span>

            <h1 className="text-6xl lg:text-8xl font-black mt-6 leading-tight">
              Keahav{" "}
              <span className="text-cyan-400">
                Yadav
              </span>
            </h1>

            <h2 className="text-3xl lg:text-5xl mt-6 font-semibold text-gray-300">
              I build digital experiences that inspire.
            </h2>

            <p className="text-gray-400 mt-8 text-lg leading-8 max-w-xl">
              Passionate Full Stack Developer focused on creating
              modern, responsive and highly interactive web
              applications.
            </p>

            
          </motion.div>
        </div>

        {/* RIGHT */}
        <motion.div
          animate={{
            y: [0, -15, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 4,
          }}
          className="relative"
        >
          <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-5 shadow-2xl">

            <img
              src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4"
              alt=""
              className="rounded-2xl"
            />

            <div className="absolute -top-10 -right-10 bg-black/80 border border-cyan-400 rounded-2xl px-8 py-5 shadow-[0_0_40px_#06b6d4]">
              <h3 className="text-3xl font-bold text-cyan-400">
                CODE
              </h3>
              <p className="text-gray-400">
                BUILD REPEAT
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}