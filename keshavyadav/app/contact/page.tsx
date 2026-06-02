"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { name, email, subject, message } = formData;

    if (!name || !email || !subject || !message) {
      setStatus("Please fill out all fields before submitting.");
      return;
    }

    setSubmitting(true);
    setStatus("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorText = await response.text();
        setStatus(`Unable to send your message. ${errorText}`);
      } else {
        setStatus("Thank you! Your message has been sent.");
        setFormData({ name: "", email: "", subject: "", message: "" });
      }
    } catch (error) {
      setStatus("Something went wrong. Please try again later.");
    } finally {
      setSubmitting(false);
    }
  };

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

          <div className="mb-8 flex flex-col items-center gap-6 rounded-[32px] bg-[#111827] p-6 border border-white/10">
            <div className="relative h-40 w-40 overflow-hidden rounded-[32px] border border-white/10">
              <Image
                src="/Keshav_Yadav.jpg"
                alt="Keshav Yadav"
                fill
                className="object-cover"
              />
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-semibold">Keshav Yadav</h3>
              <p className="mt-3 text-slate-400">
                I’m available for collaborations, freelance work, and project discussions. Send a message and I’ll get back to you soon.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            
            {/* Email */}
            <div className="flex items-center gap-5 bg-[#111827] rounded-2xl p-5 border border-white/5 hover:border-cyan-400/30 transition-all">
              
              <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center">
                <Mail className="text-cyan-400" />
              </div>

              <div>
                <p className="text-slate-400 text-sm">Email</p>
                <h3 className="text-lg font-medium">
                  keshavcoder81@gmail.com
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
                  +91 7906518272
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

          <form className="space-y-6" onSubmit={handleSubmit}>
            
            {/* Name */}
            <div>
              <label className="block mb-3 text-slate-300">
                Full Name
              </label>

              <input
                type="text"
                placeholder="Enter your name"
                value={formData.name}
                required
                onChange={(event) => handleChange("name", event.target.value)}
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
                value={formData.email}
                required
                onChange={(event) => handleChange("email", event.target.value)}
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
                value={formData.subject}
                required
                onChange={(event) => handleChange("subject", event.target.value)}
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
                value={formData.message}
                required
                onChange={(event) => handleChange("message", event.target.value)}
                className="w-full bg-[#111827] border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-cyan-400 transition-all resize-none"
              ></textarea>
            </div>

            {status ? (
              <p className="text-sm text-center text-red-400">{status}</p>
            ) : null}

            {/* Button */}
            <button
              type="submit"
              disabled={submitting}
              className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 py-4 rounded-2xl font-semibold text-lg flex items-center justify-center gap-3 hover:scale-[1.02] transition-all disabled:cursor-not-allowed disabled:opacity-60"
            >
              {submitting ? "Sending..." : "Send Message"}
              <Send size={20} />
            </button>

          </form>
        </motion.div>
      </section>
    </main>
  );
}