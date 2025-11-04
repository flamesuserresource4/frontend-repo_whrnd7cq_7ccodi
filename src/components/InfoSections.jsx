import React from 'react';
import { Briefcase, GraduationCap, Mail, Github, Linkedin } from 'lucide-react';

const InfoSections = () => {
  return (
    <>
      {/* Experience */}
      <section id="experience" className="bg-gradient-to-b from-gray-50 to-white">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">Experience & Leadership</h2>
            <div className="mt-6 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
              <div className="flex items-start gap-4">
                <div className="shrink-0 rounded-lg bg-purple-100 p-2">
                  <Briefcase className="h-5 w-5 text-purple-700" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">CSI Event Lead <span className="text-gray-500 font-normal">(2024–Present)</span></h3>
                  <p className="mt-2 text-gray-700">
                    Coordinated and led multiple technical events and workshops promoting peer learning
                    and tech awareness on campus.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">Education</h2>
            <div className="mt-6 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
              <div className="flex items-start gap-4">
                <div className="shrink-0 rounded-lg bg-blue-100 p-2">
                  <GraduationCap className="h-5 w-5 text-blue-700" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Bachelor of Technology – AI and Data Science</h3>
                  <p className="mt-1 text-gray-700">SJCET Palai | 2023–Present</p>
                  <p className="mt-1 text-gray-600">CGPA: 7.45</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-gradient-to-b from-white to-gray-50 border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">Contact</h2>
            <p className="mt-4 text-gray-700">Feel free to reach out — I’m open to collaborations, internships, and discussions.</p>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <a href="mailto:shyamhwrk@gmail.com" className="flex items-center gap-2 rounded-xl bg-white p-4 shadow-sm ring-1 ring-gray-100 hover:bg-gray-50">
                <Mail className="h-5 w-5 text-gray-700" />
                <span className="text-gray-800">shyamhwrk@gmail.com</span>
              </a>
              <a href="https://linkedin.com/in/shyam-hari-5389492b3" target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-xl bg-white p-4 shadow-sm ring-1 ring-gray-100 hover:bg-gray-50">
                <Linkedin className="h-5 w-5 text-blue-700" />
                <span className="text-gray-800">LinkedIn</span>
              </a>
              <a href="https://github.com/shyamhari1074" target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-xl bg-white p-4 shadow-sm ring-1 ring-gray-100 hover:bg-gray-50">
                <Github className="h-5 w-5 text-gray-900" />
                <span className="text-gray-800">GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default InfoSections;
