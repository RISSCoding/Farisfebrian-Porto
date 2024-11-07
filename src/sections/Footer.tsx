import React from 'react';
import Arrow from '@/assets/icons/arrow-up-right-lime.svg';

interface FooterLink {
  title: string;
  href: string;
}

const footerLinks: FooterLink[] = [
  {
    title: 'Github',
    href: 'https://github.com/RISSCoding',
  },
  {
    title: 'LinkedIn',
    href: 'https://www.linkedin.com/in/muhammad-faris-febrian-ramdan-2b41b5328/',
  },
  {
    title: 'Gmail',
    href: 'mailto:farisfebrian0602@gmail.com',
  },
  {
    title: 'Instagram',
    href: 'https://www.instagram.com/frsfr_/',
  },
];

export const Footer: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props) => {
  const handleLinkClick = (title: string, href: string): void => {
    console.log(`Link clicked: ${title} - ${href}`);
  };

  return (
    <footer className="relative overflow-x-clip" {...props}>
      <div className="absolute h-[400px] w-full bottom-0 left-1/2 -translate-x-1/2 bg-custom-green/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"></div>
      <div className="container mx-auto px-4 lg:px-8 2xl:w-[200vh] 2xl:ml-[16vh] xl:w-[100vh] xl:ml-[19vh]">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">
          <div className="text-white/40">&copy;RISSCoding 2024. All rights reserved</div>
          <nav className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            {footerLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-white gap-1.5 cursor-pointer no-underline"
                onClick={() => handleLinkClick(link.title, link.href)}
              >
                <span className="font-semibold">{link.title}</span>
                <img src={Arrow} className="w-4 h-4" alt={`${link.title} icon`} />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
