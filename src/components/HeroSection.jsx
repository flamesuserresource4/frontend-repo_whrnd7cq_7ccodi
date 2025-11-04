import Spline from '@splinetool/react-spline';
import { Github, Linkedin, Mail, Download } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="home" className="relative w-full min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0f1020] via-[#0b0d1a] to-[#0a0a14] text-white">
      {/* 3D Spline background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient overlay to improve text contrast */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/70" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-sm tracking-widest uppercase text-indigo-300">Portfolio</p>
          <h1 className="mt-2 text-4xl md:text-6xl font-extrabold leading-tight">
            Shyam Hari
          </h1>
          <p className="mt-3 text-indigo-200/90 font-medium">
            AI & Data Science Student | Project Innovator | CSI Event Lead
          </p>
          <p className="mt-6 text-base md:text-lg text-indigo-100/90 max-w-xl">
            “I’m an AI & Data Science undergraduate at SJCET Palai, passionate about building intelligent systems and data-driven solutions.”
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-indigo-500 hover:bg-indigo-600 transition text-white px-5 py-2.5"
            >
              Explore Projects
            </a>
            <a
              href="/Shyam_Hari_Resume.pdf"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 hover:border-white/40 bg-white/10 hover:bg-white/15 transition px-5 py-2.5"
              download
            >
              <Download className="w-4 h-4" /> Resume
            </a>
          </div>

          <div className="mt-6 flex items-center gap-4">
            <a
              href="https://github.com/shyamhari1074"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-white/90 hover:text-white"
            >
              <Github className="w-5 h-5" /> GitHub
            </a>
            <a
              href="https://linkedin.com/in/shyam-hari-5389492b3"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-white/90 hover:text-white"
            >
              <Linkedin className="w-5 h-5" /> LinkedIn
            </a>
            <a
              href="mailto:shyamhwrk@gmail.com"
              className="inline-flex items-center gap-2 text-white/90 hover:text-white"
            >
              <Mail className="w-5 h-5" /> Email
            </a>
          </div>
        </div>

        {/* Optional photo card */}
        <div className="hidden md:block">
          <div className="relative mx-auto w-72 h-72 rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/10">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-400/15 via-fuchsia-400/15 to-orange-300/15" />
            {/* Replace src with a real photo if available */}
            <img
              src="https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=1200&auto=format&fit=crop"
              alt="Shyam Hari"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
