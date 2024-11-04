import React from "react";
import imageSrc from '@/assets/images/faris.png'; // Adjust the path accordingly
import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';

interface HeroSectionProps {
  scrollToProjects: () => void;
  scrollToContact: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ }) => {
  return (
    <div className="mb-[50vh]">
      <div className="mt-20 text-white mx-[5vh] md:mx-[125px] lg:mx-[5vh] xl:mx-[10vh] h-auto flex flex-col lg:flex-row">
        <div 
          className="w-[200px] h-[300px] sm:w-[250px] sm:h-[350px] md:w-[500px] md:h-[400px] lg:w-[250px] lg:h-[445px] rounded-[30px] sm:rounded-[45px] bg-cover bg-center mb-5 lg:mb-0"
          style={{ 
            backgroundImage: `url(${imageSrc})`, 
            backgroundPosition: 'top left',
            backgroundSize: 'cover'
          }}
        />

        <div className="border-2 border-custom-green w-full md:w-[500px] lg:ml-[5px] h-auto lg:h-[445px] rounded-[30px] md:rounded-[45px] bg-custom-green p-5 md:p-10">
          <div className="text-custom-dark">
            <div className="text-3xl md:text-4xl lg:text-5xl font-bold">
              <h1 className="mb-2 md:mb-4">Fullstack</h1>
              <h1 className="mb-6 md:mb-12">Developer</h1>
            </div>
            <div className="w-full md:w-[350px] font-bold text-sm md:text-base">
              <p className="mb-5 md:mb-16">
                Hi!, my name is Faris Febrian from Indonesia, Bandung City and I’m a Fullstack Developer specializing in Back-End with Node.js, Express, MySQL, experienced in Prisma ORM, JWT.
              </p>
            </div>
            <p className="font-bold text-sm md:text-base">JavaScript | MySQL | Prisma ORM</p>
          </div>
        </div>

        <div className="lg:ml-[5px] w-full lg:w-[650px] md:w-[500px] mt-5 lg:mt-0">
          <div className="bg-custom-gray h-[200px] sm:h-[217.5px] rounded-[30px] sm:rounded-[45px] mb-5 lg:mb-[5px] p-10  ">
            <div className="flex flex-row mb-5">
            <h1 className="text-xl md:text-4xl font-bold text-custom-dark mr-1">Skills</h1>
            <img src={ArrowUpRightIcon} alt="Arrow Up Right Icon" className="w-6 h-6 mt-4 rotate-custom-90"/>
            </div>
            <div>
              <p className="underline underline-offset-2 text-custom-dark font-bold">Database management</p>
              <p className="underline underline-offset-2 text-custom-dark font-bold">Knowledge of API</p>
              <p className="underline underline-offset-2 text-custom-dark font-bold">Problem Solving</p>
            </div>
          </div>
          <div className="bg-custom-green h-[200px] sm:h-[217.5px] rounded-[30px] sm:rounded-[45px] p-10">
          <div className="flex flex-row mb-5">
            <h1 className="text-xl md:text-4xl font-bold text-custom-dark mr-1">Education</h1>
            <img src={ArrowUpRightIcon} alt="Arrow Up Right Icon" className="w-6 h-6 mt-4 rotate-custom-90"/>
            </div>
            <div>
              <p className="underline underline-offset-2 text-custom-dark font-bold">2022 - Now</p>
              <p className="underline underline-offset-2 text-custom-dark font-bold">SMKN 4 Bandung</p>
              <p className="underline underline-offset-2 text-custom-dark font-bold">Rekayasa Perangkat Lunak</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
