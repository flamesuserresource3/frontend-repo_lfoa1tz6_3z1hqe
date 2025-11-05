import React from 'react';
import { Github, Linkedin, FileText, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative">
      <div className="absolute inset-0 -z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[90vw] h-[90vw] max-w-[900px] max-h-[900px] rounded-full blur-3xl opacity-25 bg-gradient-to-tr from-blue-500 via-indigo-500 to-purple-500" />
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-24 pb-20">
        <div className="grid md:grid-cols-2 items-center gap-10">
          <div>
            <p className="text-sm font-medium text-blue-600">Hello, I'm</p>
            <h1 className="mt-2 text-4xl sm:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-white">Your Name</h1>
            <p className="mt-4 text-lg text-neutral-700 dark:text-neutral-300">I build fast, accessible web apps with delightful user experiences. Full‑stack developer focused on React, Node, and modern tooling.</p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="#projects" className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-blue-600 text-white font-medium shadow hover:bg-blue-700">
                View Projects <ArrowRight size={18} />
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-neutral-300 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-neutral-800">
                Contact Me
              </a>
            </div>
            <div className="mt-6 flex items-center gap-4">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-neutral-700 dark:text-neutral-300 hover:text-blue-600">
                <Github size={20} /> GitHub
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-neutral-700 dark:text-neutral-300 hover:text-blue-600">
                <Linkedin size={20} /> LinkedIn
              </a>
              <a href="#" className="inline-flex items-center gap-2 text-neutral-700 dark:text-neutral-300 hover:text-blue-600">
                <FileText size={20} /> Resume
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-tr from-neutral-200 via-neutral-100 to-white dark:from-neutral-800 dark:via-neutral-900 dark:to-black p-2 shadow-sm">
              <div className="h-full w-full rounded-xl bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1280&auto=format&fit=crop')] bg-cover bg-center" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
