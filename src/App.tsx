import Lenis from '@studio-freight/lenis';
import { useEffect } from 'react';
import gsap from 'gsap';
import Home from './sections/Home';
import './App.css';

const App: React.FC = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 2,
      easing: (t: number) => 1 - Math.pow(1 - t, 4),
      smoothWheel: true,
    });

    const animate = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);

    return () => lenis.destroy();
  }, []);

  useEffect(() => {
    const cursor = document.querySelector('.custom-cursor') as HTMLDivElement;

    const moveCursor = (e: MouseEvent) => {
      if (cursor) {
        gsap.to(cursor, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.1,
          ease: 'power3.out',
        });
      }
    };

    // Menambah kelas berdasarkan elemen yang di-hover
    const addCursorClass = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'BUTTON' || target.classList.contains('clickable')) {
        cursor.classList.add('pointer');
      } else if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') {
        cursor.classList.add('text');
      }
    };

    const removeCursorClass = () => {
      cursor.classList.remove('pointer', 'text');
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', addCursorClass);
    window.addEventListener('mouseout', removeCursorClass);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', addCursorClass);
      window.removeEventListener('mouseout', removeCursorClass);
    };
  }, []);

  return (
    <div>
      <div className="custom-cursor"></div>
      
      <Home />
    </div>
  );
};

export default App;
