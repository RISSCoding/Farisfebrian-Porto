'use client';

import React, { useState } from 'react';

interface HeaderProps {
  scrollToHero: () => void;
  scrollToProjects: () => void;
  scrollToContact: () => void;
}

export const Header: React.FC<HeaderProps> = ({ scrollToHero, scrollToProjects, scrollToContact }) => {
  const [activeSection, setActiveSection] = useState<string>('home');
  const handleSectionClick = (section: string, scrollTo: () => void) => {
    setActiveSection(section);
    scrollTo();
  };

  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
      <nav className="flex gap-3 p-0.5 border border-custom-green/15 rounded-3xl bg-custom-green/10 backdrop-blur">
        <a
          onClick={() => handleSectionClick('home', scrollToHero)}
          className={`nav-item font-bold rounded-3xl p-[6px] cursor-pointer ${
            activeSection === 'home' ? 'bg-[#D8F247] text-[#030C18]' : 'text-[#D8F247]'
          }`}
        >
          Home
        </a>
        <a
          onClick={() => handleSectionClick('projects', scrollToProjects)}
          className={`nav-item font-bold rounded-3xl p-[6px] cursor-pointer ${
            activeSection === 'projects' ? 'bg-[#D8F247] text-[#030C18]' : 'text-[#D8F247]'
          }`}
        >
          Projects
        </a>
        <a
          onClick={() => handleSectionClick('contact', scrollToContact)}
          className={`nav-item font-bold rounded-3xl p-[6px] cursor-pointer ${
            activeSection === 'contact' ? 'bg-[#D8F247] text-[#030C18]' : 'text-[#D8F247]'
          }`}
        >
          Contact
        </a>
      </nav>
    </div>
  );
};
