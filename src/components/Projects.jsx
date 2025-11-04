import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const TechBadge = ({ label }) => (
  <span className="inline-flex items-center rounded-md bg-gray-100 text-gray-800 px-2.5 py-1 text-xs font-medium ring-1 ring-inset ring-gray-200">
    {label}
  </span>
);

const ProjectCard = ({ title, description, tech = [], github, demo, emoji }) => (
  <div className="flex flex-col h-full rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
    <div className="flex items-center gap-3">
      <span className="text-2xl" aria-hidden>{emoji}</span>
      <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
    </div>
    <p className="mt-3 text-gray-700 flex-1">{description}</p>
    <div className="mt-4 flex flex-wrap gap-2">
      {tech.map((t) => (
        <TechBadge key={t} label={t} />
      ))}
    </div>
    <div className="mt-6 flex gap-3">
      {github && (
        <a
          href={github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-800 hover:bg-gray-50"
        >
          <Github className="h-4 w-4" /> View on GitHub
        </a>
      )}
      {demo && (
        <a
          href={demo}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-lg bg-gray-900 text-white px-3 py-2 text-sm hover:bg-gray-800"
        >
          <ExternalLink className="h-4 w-4" /> Live Demo
        </a>
      )}
    </div>
  </div>
);

const Projects = () => {
  const data = [
    {
      title: 'Padik AI',
      emoji: '🧠',
      description:
        'An AI-powered assistant that converts YouTube lectures into quick notes and Q&A summaries.',
      tech: ['Python', 'YouTubeTranscriptAPI', 'Groq LLaMA 3.1'],
      github: 'https://github.com/',
      demo: undefined,
    },
    {
      title: 'WattheCost',
      emoji: '💡',
      description:
        'Streamlit app that estimates EV ownership cost based on various parameters.',
      tech: ['Python', 'Streamlit'],
      github: undefined,
      demo: 'https://streamlit.io/',
    },
    {
      title: 'The Leaf Network',
      emoji: '🌾',
      description:
        'Smart farming web platform featuring AI tools, weather updates, and crop disease detection.',
      tech: ['HTML', 'ReactJS', 'Gemini API'],
      github: undefined,
      demo: 'https://example.com',
    },
  ];

  return (
    <section id="projects" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">Projects</h2>
          <p className="mt-4 text-gray-700">
            A selection of things I’ve built recently.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
