// src/components/Header.tsx

import React from 'react';

interface HeaderProps {
  scrollToHome: () => void;
  scrollToProjects: () => void;
  scrollToContact: () => void;
  activeSection: string;
}

const handleClickCV = () => {
  window.open("https://drive.google.com/file/d/1g_3631mmBVTRC9jTxUVixr3dbWnUj00n/view?usp=sharing", "_blank");
};

export const Header: React.FC<HeaderProps> = ({
  scrollToHome,
  scrollToProjects,
  scrollToContact,
  activeSection,
}) => {
  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-[30]">
      <nav className="flex gap-1 p-0.5 border border-custom-green/15 rounded-full bg-custom-gray/10 backdrop-blur">
        <a
          onClick={scrollToHome}
          className={`nav-item ${activeSection === 'home' ? 'bg-custom-green text-gray-900' : ''} text-custom-green rounded-2xl p-1 font-bold`}
        >
          Home
        </a>
        <a
          onClick={scrollToProjects}
          className={`nav-item ${activeSection === 'projects' ? 'bg-custom-green text-gray-900' : ''} text-custom-green rounded-2xl p-1 font-bold`}
        >
          Projects
        </a>
        <a
          onClick={scrollToContact}
          className={`nav-item ${activeSection === 'contact' ? 'bg-custom-green text-gray-900' : ''} text-custom-green rounded-2xl p-1 font-bold`}
        >
          Contact
        </a>
        <div
        onClick={handleClickCV}
        className="rounded-2xl py-1 px-7 ml-1 bg-custom-gray font-bold"
      >
        CV
      </div>
      </nav>
    </div>
  );
};

export default Header;
