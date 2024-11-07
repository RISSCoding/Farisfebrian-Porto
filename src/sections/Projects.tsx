import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

interface Repo {
  name: string;
  description: string;
  stars: number;
  link: string;
  language: string;
  languageColor: string;
}

const ProjectsSection: React.FC = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    
    AOS.init({
      duration: 1000, 
      easing: 'ease-in-out', 
      once: true,
    });

   
    const fetchPinnedRepos = async () => {
      try {
        const response = await axios.get('https://porto-backend-two.vercel.app/api/pinned-repos');
        setRepos(response.data);
      } catch (err) {
        setError('Failed to load repositories');
      } finally {
        setLoading(false);
      }
    };

    fetchPinnedRepos();
  }, []);

  return (
    <section id="projects" className="container mx-auto p-6 mb-[10vh]">
      <div className="flex justify-center">
        <p className="uppercase font-bold tracking-widest bg-gradient-to-r from-custom-green to-custom-gray text-center bg-clip-text text-transparent">
          what have i done?
        </p>
      </div>
      <h2 className="font-bold text-3xl md:text-5xl text-center text-white mt-6">Past Projects</h2>
      <p className="text-center md:text-lg text-white/60 mt-4 max-w-md mx-auto lg:text-xl mb-[6vh]">
        Discover how I bring my concepts to life through dynamic websites.
      </p>
      
      {loading && <p className="text-center text-lg">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[10px]">
        {repos.map((repo) => (
          <a
            key={repo.name}
            href={repo.link}
            target="_blank"
            rel="noopener noreferrer"
            data-aos="fade-up"
            className="bg-gray-800 text-white p-4 rounded-3xl shadow-lg hover:shadow-[0_0_15px_2px_#D8F247] hover:scale-105 transition-all transform hover:bg-custom-green/15 hover:z-10"
          >
            <div>
              <h3 className="text-xl font-semibold">{repo.name}</h3>
              <p className="text-gray-400">{repo.description}</p>
              
              <div className="flex items-center mt-2">
                <span
                  className="w-4 h-4 rounded-full mr-2"
                  style={{ backgroundColor: repo.languageColor }}
                ></span>
                <p className="text-sm">
                  {repo.language}
                </p>
              </div>
      
              <div className="flex justify-between items-center mt-4">
                <span className="text-white hover:text-custom-dark">{repo.stars} ⭐</span>
                <span className="bg-clip-text bg-gradient-to-r from-custom-green to-custom-gray text-transparent hover:underline text-white">
                  View on GitHub
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
