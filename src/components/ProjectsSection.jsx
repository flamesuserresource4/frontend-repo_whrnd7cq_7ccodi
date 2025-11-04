import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Padik AI',
    desc: 'An AI-powered assistant that converts YouTube lectures into quick notes and Q&A summaries.',
    tech: 'Python, YouTubeTranscriptAPI, Groq LLaMA 3.1',
    links: [{ label: 'View on GitHub', href: 'https://github.com/' }],
  },
  {
    title: 'WattheCost',
    desc: 'Streamlit app that estimates EV ownership cost based on various parameters.',
    tech: 'Python, Streamlit',
    links: [
      { label: 'Live Demo', href: 'https://example.com' },
      { label: 'GitHub', href: 'https://github.com/' },
    ],
  },
  {
    title: 'The Leaf Network',
    desc: 'Smart farming web platform featuring AI tools, weather updates, and crop disease detection.',
    tech: 'HTML, ReactJS, Gemini API',
    links: [{ label: 'Live Demo', href: 'https://example.com' }],
  },
];

function ProjectCard({ title, desc, tech, links }) {
  return (
    <div className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition">
      <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      <p className="mt-2 text-gray-600">{desc}</p>
      <p className="mt-3 text-sm text-indigo-700 font-medium">Tech: {tech}</p>
      <div className="mt-4 flex flex-wrap gap-3">
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-indigo-700 hover:text-indigo-900"
          >
            <ExternalLink className="w-4 h-4" /> {l.label}
          </a>
        ))}
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Projects</h2>
            <p className="mt-2 text-gray-600">A selection of hands-on builds and experiments.</p>
          </div>
        </div>
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}
