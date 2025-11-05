import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 border-t border-neutral-200 dark:border-neutral-800">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <p className="text-sm font-semibold text-blue-600">Let’s connect</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">Contact</h2>
        <p className="mt-3 text-neutral-700 dark:text-neutral-300">
          Interested in collaborating or have a question? I’m always open to new opportunities and conversations.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a href="mailto:you@example.com" className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-blue-600 text-white font-medium shadow hover:bg-blue-700">
            <Mail size={18} /> Email me
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-neutral-300 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-neutral-800">
            <Github size={18} /> GitHub
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-neutral-300 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-neutral-800">
            <Linkedin size={18} /> LinkedIn
          </a>
        </div>
        <p className="mt-10 text-sm text-neutral-500">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
      </div>
    </section>
  );
};

export default Contact;
