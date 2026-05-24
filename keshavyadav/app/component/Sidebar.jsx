"use client";

import Link from "next/link";

import {
  Home,
  User,
  Briefcase,
  Mail,
  FileText,
  Menu,
  X,
} from "lucide-react";

const navLinks = [
  { icon: <Home />, title: "Home", href: "/" },
  { icon: <User />, title: "About", href: "/about" },
  { icon: <Briefcase />, title: "Projects", href: "/project" },
  { icon: <FileText />, title: "Resume", href: "/resume" },
  { icon: <Mail />, title: "Contact", href: "/contact" },
];

export default function Sidebar({ open, setOpen }) {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 w-full flex items-center justify-between px-5 py-4 border-b border-white/10 bg-black/80 backdrop-blur-xl lg:backdrop-blur-none">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-cyan-400">
            Portfolio
          </p>

          <h1 className="text-lg font-semibold">
            Keshav Yadav
          </h1>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 p-2 text-white transition hover:bg-white/10"
          aria-label="Open menu"
        >
          <Menu size={20} />
        </button>
      </div>

      <aside
        className={`fixed inset-y-0 left-0 z-50 w-[280px] max-w-full transform bg-black/95 border-r border-white/10 p-6 transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        } h-screen z-40 overflow-y-auto`}
      >
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-400">
              Portfolio
            </p>

            <h1 className="text-lg font-semibold">
              Keshav Yadav
            </h1>
          </div>

          <button
            onClick={() => setOpen(false)}
            className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 p-2 text-white transition hover:bg-white/10"
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        <div>
          <div className="flex flex-col items-center">
            <img
              src="https://i.pravatar.cc/200"
              alt="Profile"
              className="w-32 h-32 rounded-full border-4 border-cyan-400 shadow-[0_0_40px_#06b6d4]"
            />

            <h2 className="text-3xl font-bold mt-5 text-center">
              Keshav Yadav
            </h2>

            <p className="text-cyan-400 mt-2 text-center">
              Full Stack Developer
            </p>
          </div>

          <div className="mt-14 flex flex-col gap-4">
            {navLinks.map((item) => (
              <NavItem
                key={item.title}
                icon={item.icon}
                title={item.title}
                href={item.href}
                onClick={() => setOpen(false)}
              />
            ))}
          </div>
        </div>

        <button className="mt-8 w-full rounded-xl border border-cyan-400 py-3 text-center text-cyan-400 transition hover:bg-cyan-400 hover:text-black lg:mt-0">
          Download CV
        </button>
      </aside>

      {open && (
        <button
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
          aria-label="Close overlay"
        />
      )}
    </>
  );
}

function NavItem({ icon, title, href, onClick }) {
  return (
    <Link href={href}>
      <button
        type="button"
        onClick={onClick}
        className="flex w-full items-center gap-4 rounded-xl px-5 py-3 text-left transition-all duration-300 hover:bg-white/5"
      >
        {icon}
        <span>{title}</span>
      </button>
    </Link>
  );
}