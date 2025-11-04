import React from 'react';
import Spline from '@splinetool/react-spline';
import { Github, Linkedin, Mail, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: Intro */}
        <div>
          <div className="inline-flex items-center rounded-full bg-purple-100 px-3 py-1 text-sm font-medium text-purple-700 mb-4">
            AI & Data Science Student
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
            Shyam Hari
          </h1>
          <p className="mt-2 text-lg md:text-xl text-gray-700">
            AI & Data Science Student | Project Innovator | CSI Event Lead
          </p>
          <p className="mt-6 text-gray-600 leading-relaxed">
            I’m an AI & Data Science undergraduate at SJCET Palai, passionate about
            building intelligent systems and data-driven solutions.
          </p>

          {/* Quick Actions */}
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="mailto:shyamhwrk@gmail.com"
              className="inline-flex items-center gap-2 rounded-lg bg-gray-900 text-white px-4 py-2 hover:bg-gray-800 transition"
            >
              <Mail className="h-4 w-4" /> Email
            </a>
            <a
              href="https://linkedin.com/in/shyam-hari-5389492b3"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-blue-600 text-white px-4 py-2 hover:bg-blue-700 transition"
            >
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
            <a
              href="https://github.com/shyamhari1074"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-2 text-gray-800 hover:bg-gray-50 transition"
            >
              <Github className="h-4 w-4" /> GitHub
            </a>
            <a
              href="/resume.pdf"
              className="inline-flex items-center gap-2 rounded-lg border border-purple-300 text-purple-700 px-4 py-2 hover:bg-purple-50 transition"
            >
              <Download className="h-4 w-4" /> Resume
            </a>
          </div>
        </div>

        {/* Right: Spline Scene */}
        <div className="relative h-[360px] sm:h-[420px] md:h-[520px] lg:h-[560px]">
          <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-lg">
            <Spline
              scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />
            {/* soft gradient aura overlay - non-blocking */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
