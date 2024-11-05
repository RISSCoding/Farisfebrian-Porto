export const CVButton = () => {
    const handleClick = () => {
      window.open("https://drive.google.com/file/d/1eXbVnuGA_UNg4hdgSuTTSS0hYpkX0t72/view?usp=sharing", "_blank");
    };
  
    return (
      <div className=" flex justify-center items-center fixed top-3 left-[118vh] z-10">
        <div className="absolute w-[25vh] h-[7vh] rounded-3xl shadow-custom-dark shadow-2xl backdrop-blur-2xl pointer-events-none"></div>
        <div
          onClick={handleClick}
          className="flex justify-center items-center w-[25vh] h-[7vh] rounded-3xl bg-custom-gray border border-custom-green/15 cursor-pointer font-bold"
        >
          CV
        </div>
      </div>
    );
  };
  