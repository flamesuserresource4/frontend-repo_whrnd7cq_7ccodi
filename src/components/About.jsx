import React from 'react';
import { Code, Boxes } from 'lucide-react';

const Pill = ({ children }) => (
  <span className="inline-flex items-center rounded-full bg-white/70 ring-1 ring-gray-200 px-3 py-1 text-sm text-gray-800">
    {children}
  </span>
);

const About = () => {
  return (
    <section id="about" className="bg-gradient-to-b from-white to-gray-50 border-t border-gray-100">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">About Me</h2>
          <p className="mt-4 text-gray-700 leading-relaxed">
            I’m a third-year engineering student specializing in AI and Data Science, driven by curiosity
            and a passion for solving real-world problems through data. My interests span NLP, machine
            learning, and developing impactful web applications.
          </p>
        </div>

        {/* Skills */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
            <div className="flex items-center gap-2 text-gray-900 font-semibold">
              <Code className="h-5 w-5 text-purple-600" /> Languages
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {['Python', 'Java', 'C', 'SQL'].map((s) => (
                <Pill key={s}>{s}</Pill>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
            <div className="flex items-center gap-2 text-gray-900 font-semibold">
              <Boxes className="h-5 w-5 text-blue-600" /> Libraries
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {['NumPy', 'Pandas', 'Matplotlib', 'Seaborn', 'Scikit-learn'].map((s) => (
                <Pill key={s}>{s}</Pill>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
            <div className="flex items-center gap-2 text-gray-900 font-semibold">
              <Boxes className="h-5 w-5 text-emerald-600" /> Tools
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {['Jupyter Notebook', 'Streamlit', 'IntelliJ'].map((s) => (
                <Pill key={s}>{s}</Pill>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
