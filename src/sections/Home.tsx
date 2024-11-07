import { useRef, useEffect, useState } from 'react';
import { Header } from '@/components/Header';
import { HeroSection } from '@/sections/Hero';
import { ContactSection } from '@/sections/Contact';
import { Footer } from '@/sections/Footer';
import gsap from 'gsap';

import ScrollToPlugin from 'gsap/ScrollToPlugin';
import ProjectsSection from './Projects';

gsap.registerPlugin(ScrollToPlugin);

const smoothScrollTo = (target: HTMLElement, duration: number) => {
  gsap.to(window, {
    scrollTo: { y: target, offsetY: 70 },
    duration: duration / 1000,
    ease: 'power2.inOut'
  });
};

export default function Home() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const heroRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  const sections = [
    { id: 'home', ref: heroRef, name: 'home' },
    { id: 'projects', ref: projectsRef, name: 'projects' },
    { id: 'contact', ref: contactRef, name: 'contact' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      }),
      { root: null, rootMargin: '0px', threshold: 0.1 }
    );

    sections.forEach(section => section.ref.current && observer.observe(section.ref.current));
    return () => sections.forEach(section => section.ref.current && observer.unobserve(section.ref.current));
  }, []);

  const scrollToHome = () => heroRef.current && smoothScrollTo(heroRef.current, 1500);
  const scrollToContact = () => contactRef.current && smoothScrollTo(contactRef.current, 1500);
  const scrollToProjects = () => projectsRef.current && smoothScrollTo(projectsRef.current, 1500);

  return (
    <div>
      <Header
        scrollToHome={scrollToHome}
        scrollToContact={scrollToContact}
        scrollToProjects={scrollToProjects}
        activeSection={activeSection} // Pass activeSection to Header
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
