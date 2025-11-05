import React from 'react';
import { Code2, ExternalLink, Star } from 'lucide-react';

const projects = [
  {
    title: 'Project A',
    description:
      'A performant web app demonstrating responsive UI, API integration, and clean component architecture.',
    tags: ['React', 'Vite', 'Tailwind'],
    link: '#',
  },
  {
    title: 'Project B',
    description:
      'Scalable backend service with RESTful APIs, authentication, and database persistence.',
    tags: ['FastAPI', 'MongoDB', 'Auth'],
    link: '#',
  },
  {
    title: 'Project C',
    description:
      'Data visualization dashboard with charts, filters, and real-time updates.',
    tags: ['React', 'D3', 'WebSockets'],
    link: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 border-t border-neutral-200 dark:border-neutral-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-end justify-between gap-6 mb-10">
          <div>
            <p className="text-sm font-semibold text-blue-600">Selected Work</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">Projects</h2>
          </div>
          <a href="#contact" className="hidden sm:inline-flex items-center gap-2 px-3 py-2 rounded-md border border-neutral-300 dark:border-neutral-700 text-sm hover:bg-neutral-50 dark:hover:bg-neutral-800">
            <Star size={16} /> Start a project
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article key={p.title} className="group rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-5 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 text-blue-600">
                <Code2 size={18} />
                <h3 className="font-semibold text-neutral-900 dark:text-white">{p.title}</h3>
              </div>
              <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-300">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300">
                    {t}
                  </span>
                ))}
              </div>
              <a href={p.link} className="mt-4 inline-flex items-center gap-2 text-sm text-blue-600 hover:underline">
                View project <ExternalLink size={16} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
