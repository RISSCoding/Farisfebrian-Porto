import React, { useState, useEffect } from "react";
import Typewriter from "./Typewritter";

const Preloader: React.FC = () => {
  const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPreloader(false);
    }, 7200);

    return () => clearTimeout(timer);
  }, []);

  if (!showPreloader) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 text-custom-green">
      <Typewriter
        texts={[
          "The page is loading",
          "Almost complete",
          "Hi, my name is Faris",
        ]}
        typingSpeed={90}
        pauseTime={4200}
      />
    </div>
  );
};

export default Preloader;
