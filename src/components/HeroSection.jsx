import React from "react";
import HomeImage from "../assets/images/profile.jfif";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#F4F4F4] py-20 md:py-32"
    >
      {/* Background Decorative Shapes */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-gradient-to-br from-primary/40 to-secondary/40 rounded-full blur-3xl animate-blob"></div>
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-gradient-to-tr from-secondary/30 to-primary/30 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/4 w-40 h-40 bg-pink-300/30 rounded-full blur-2xl animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-16">

          {/* Left Section - Text */}
          <div className="md:w-1/2 text-center md:text-left animate-fadeInLeft">
            <h1 className="text-4xl md:text-5xl font-extrabold text-secondary mb-4">
              Mst. Mahfuza Akter
            </h1>
            <p className="text-xl md:text-2xl font-semibold text-[#606060] mb-4">
              Software Developer • UI Designer
            </p>
            <p className="text-secondary mb-6 text-justify md:text-left">
              I love building things that people enjoy using. As a developer 
              and designer, I blend creativity with logic to make apps that 
              are not only functional but also a joy to experience. 
              Collaboration, curiosity, and passion drive everything I do.
            </p>
            <a
              // href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-primary text-white rounded-lg shadow-md 
                         hover:bg-white hover:text-primary hover:border hover:border-primary
                         transition-all duration-300 font-medium"
              title="Download Resume"
            >
              Download Resume
            </a>
          </div>

          {/* Right Section - Floating Image */}
          <div className="md:w-1/2 flex justify-center md:justify-end animate-float">
            <img
              src={HomeImage}
              alt="Mst. Mahfuza Akter"
              title="Mst. Mahfuza Akter"
              className="w-48 sm:w-56 md:w-80 lg:w-96 h-auto rounded-2xl shadow-2xl object-cover border-4 border-primary"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
