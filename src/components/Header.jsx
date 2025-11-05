import React from 'react';
import { User, Briefcase, Mail } from 'lucide-react';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 dark:bg-neutral-900/80 border-b border-neutral-200 dark:border-neutral-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="font-semibold text-lg tracking-tight">
            <span className="text-neutral-900 dark:text-white">My</span>
            <span className="text-blue-600">Portfolio</span>
          </a>
          <nav className="hidden sm:flex items-center gap-6 text-sm">
            <a href="#about" className="inline-flex items-center gap-2 text-neutral-700 dark:text-neutral-300 hover:text-blue-600 transition-colors">
              <User size={18} /> About
            </a>
            <a href="#projects" className="inline-flex items-center gap-2 text-neutral-700 dark:text-neutral-300 hover:text-blue-600 transition-colors">
              <Briefcase size={18} /> Projects
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 text-neutral-700 dark:text-neutral-300 hover:text-blue-600 transition-colors">
              <Mail size={18} /> Contact
            </a>
          </nav>
          <div className="sm:hidden">
            <a href="#contact" className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-blue-600 text-white text-sm font-medium shadow hover:bg-blue-700">
              <Mail size={16} /> Say hi
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
