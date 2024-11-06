import React from 'react';

interface HeaderProps {
  scrollToHero: () => void;
  scrollToProjects: () => void;
  scrollToContact: () => void;
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({
  scrollToHero,
  scrollToProjects,
  scrollToContact,
  activeSection
}) => {
  const handleClickCV = () => {
    window.open("https://drive.google.com/file/d/1eXbVnuGA_UNg4hdgSuTTSS0hYpkX0t72/view?usp=sharing", "_blank");
  };

  return (
    <div className="flex flex-row sm:flex-row justify-center items-center mx-4 sm:mx-[75vh] rounded-3xl fixed top-5 z-20 p-1 bg-gradient-to-r from-custom-green/10 to-custom-gray/10 backdrop-blur shadow-custom-dark">
      {/* Logo or other header content */}
      <div className="flex space-x-0 sm:space-x-5 sm:mr-7 rounded-3xl font-bold">
        <a
          onClick={() => scrollToHero()}
          className={`nav-item ${activeSection === 'home' ? 'bg-[#D8F247] text-[#030C18]' : 'text-[#D8F247]'} p-2 rounded-3xl`}
        >
          Home
        </a>
        <a
          onClick={() => scrollToProjects()}
          className={`nav-item ${activeSection === 'projects' ? 'bg-[#D8F247] text-[#030C18]' : 'text-[#D8F247]'} p-2 rounded-3xl`}
        >
          Projects
        </a>
        <a
          onClick={() => scrollToContact()}
          className={`nav-item ${activeSection === 'contact' ? 'bg-[#D8F247] text-[#030C18]' : 'text-transparent bg-clip-text bg-gradient-to-r from-custom-green to-custom-gray'} p-2 rounded-3xl`}
        >
          Contact
        </a>
      </div>

      {/* CV Button */}
      <div
        onClick={handleClickCV}
        className="flex justify-center items-center px-5 sm:px-10 py-2 mt-2 sm:mt-0 rounded-3xl bg-custom-gray border border-custom-green/15 cursor-pointer font-bold text-center sm:block"
      >
        CV
      </div>
    </div>
  );
};
