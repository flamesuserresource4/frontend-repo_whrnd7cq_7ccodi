import { Briefcase, GraduationCap, Github, Linkedin, Mail } from 'lucide-react';

export default function ExperienceEducationContact() {
  return (
    <section id="experience" className="relative bg-white">
      <div className="max-w-6xl mx-auto px-6 py-20 grid lg:grid-cols-3 gap-10">
        {/* Experience */}
        <div className="rounded-2xl border border-gray-200 p-6">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-indigo-50 text-indigo-700">
              <Briefcase className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">Experience & Leadership</h3>
          </div>
          <div className="mt-4 space-y-3">
            <div>
              <p className="font-medium text-gray-900">CSI Event Lead</p>
              <p className="text-sm text-gray-500">2024 – Present</p>
              <p className="mt-2 text-gray-600">
                Coordinated and led multiple technical events and workshops promoting peer learning and tech awareness on campus.
              </p>
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="rounded-2xl border border-gray-200 p-6">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-indigo-50 text-indigo-700">
              <GraduationCap className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">Education</h3>
          </div>
          <div className="mt-4">
            <p className="font-medium text-gray-900">Bachelor of Technology – AI and Data Science</p>
            <p className="text-sm text-gray-500">SJCET Palai | 2023 – Present</p>
            <p className="mt-2 text-gray-600">CGPA: 7.45</p>
          </div>
        </div>

        {/* Contact */}
        <div id="contact" className="rounded-2xl border border-gray-200 p-6">
          <h3 className="text-xl font-semibold text-gray-900">Contact</h3>
          <p className="mt-2 text-gray-600">Feel free to reach out for collaboration or opportunities.</p>
          <div className="mt-5 space-y-3">
            <a
              href="mailto:shyamhwrk@gmail.com"
              className="flex items-center gap-3 text-indigo-700 hover:text-indigo-900"
            >
              <Mail className="w-5 h-5" /> shyamhwrk@gmail.com
            </a>
            <a
              href="https://linkedin.com/in/shyam-hari-5389492b3"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-indigo-700 hover:text-indigo-900"
            >
              <Linkedin className="w-5 h-5" /> LinkedIn
            </a>
            <a
              href="https://github.com/shyamhari1074"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-indigo-700 hover:text-indigo-900"
            >
              <Github className="w-5 h-5" /> GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
