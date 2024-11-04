// src/components/ScrollComponent.tsx
import React, { useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';

const ScrollComponent: React.FC = ({ children }) => {
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector('.scroll-container'),
      smooth: true,
    });

    return () => {
      scroll.destroy(); // Cleanup on unmount
    };
  }, []);

  return (
    <div className="scroll-container" data-scroll-container>
      {children}
    </div>
  );
};

export default ScrollComponent;
