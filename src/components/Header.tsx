'use client';

import React, { useState } from 'react';

interface HeaderProps {
  scrollToHero: () => void;
  scrollToProjects: () => void;
  scrollToContact: () => void;
}

export const Header: React.FC<HeaderProps> = ({ scrollToHero, scrollToProjects, scrollToContact }) => {
  const [activeSection, setActiveSection] = useState<string>('home');
  
  const handleSectionClick = (scrollTo: () => void) => {
    scrollTo();
  };

  return (
    <div className="flex left-[80vh] fixed top-3 w-full z-10">
      <nav className="flex gap-3 p-0.5 border border-custom-gray/15 rounded-3xl bg-gradient-to-r from-custom-green/10 to-custom-gray/10 backdrop-blur shadow-custom-dark shadow-2xl">
        <a
          onClick={() => handleSectionClick(scrollToHero)}
          className={`nav-item font-bold rounded-3xl p-[6px] cursor-pointer ${
            activeSection === 'home' ? 'bg-[#D8F247] text-[#030C18]' : 'text-[#D8F247]'
          }`}
        >
          Home
        </a>
        <a
          onClick={() => handleSectionClick(scrollToProjects)}
          className={`nav-item font-bold rounded-3xl p-[6px] cursor-pointer ${
            activeSection === 'projects' ? 'bg-[#D8F247] text-[#030C18]' : 'text-[#D8F247]'
          }`}
        >
          Projects
        </a>
        <a
          onClick={() => handleSectionClick(scrollToContact)}
          className={`nav-item font-bold rounded-3xl p-[6px] cursor-pointer ${
            activeSection === 'contact' ? 'bg-[#D8F247] text-[#030C18]' : 'text-transparent bg-clip-text bg-gradient-to-r from-custom-green to-custom-gray'
          }`}
        >
          Contact
        </a>
      </nav>
    </div>
  );
};
