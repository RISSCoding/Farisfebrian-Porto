import { useRef, useEffect, useState } from 'react';
import { Header } from '@/components/Header';
import { HeroSection } from '@/sections/Hero';
import { ProjectsSection } from '@/sections/Projects';
import { ContactSection } from '@/sections/Contact';
import { Footer } from '@/sections/Footer';
import gsap from 'gsap';
import ScrollToPlugin from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

const smoothScrollTo = (target: HTMLElement, duration: number) => {
  gsap.to(window, {
    scrollTo: { y: target, offsetY: 70 },
    duration: duration / 1000,
    ease: 'power2.inOut'
  });
};

export default function Home() {
  const [, setActiveSection] = useState<string>('home');
  const heroRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null); // Add this line if you need the About section

  const sections = [
    { id: 'home', ref: heroRef, name: 'home' },
    { id: 'projects', ref: projectsRef, name: 'projects' },
    { id: 'contact', ref: contactRef, name: 'contact' },
    { id: 'about', ref: aboutRef, name: 'about' } // Add this if About section is needed
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(entry => entry.isIntersecting && setActiveSection(entry.target.id)),
      { root: null, rootMargin: '0px', threshold: 0.1 }
    );

    sections.forEach(section => section.ref.current && observer.observe(section.ref.current));
    return () => sections.forEach(section => section.ref.current && observer.unobserve(section.ref.current));
  }, []);

  const scrollToHero = () => heroRef.current && smoothScrollTo(heroRef.current, 1500);
  const scrollToContact = () => contactRef.current && smoothScrollTo(contactRef.current, 1500);
  const scrollToProjects = () => projectsRef.current && smoothScrollTo(projectsRef.current, 1500);


  return (
    <div>
      <Header
        scrollToHero={scrollToHero}
        scrollToContact={scrollToContact}
        scrollToProjects={scrollToProjects}
      />
      <div ref={heroRef} id="home">
        <HeroSection scrollToProjects={scrollToProjects} scrollToContact={scrollToContact} />
      </div>
      <div ref={projectsRef} id="projects">
        <ProjectsSection />
      </div>
      <div ref={contactRef} id="contact">
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
}
