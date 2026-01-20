import React from "react";
import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";
import HomeImage from "../assets/images/profile.jfif";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#0a0f1d] py-20"
    >
      {/* Background Glows */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-teal-500/10 blur-[120px]"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-500/10 blur-[150px]"></div>

      {/* Main Container - Controlled to 70-75% width on large screens */}
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          {/* Left Side: Glass Card Content (Takes 55% of the centered area) */}
          <div className="w-full md:w-[55%] p-8 md:p-12 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl animate-fadeInLeft">
            <h4 className="text-teal-400 font-medium mb-2 tracking-wide">
              Hello, <span className="text-white">I am</span>
            </h4>
            
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-2 leading-tight">
              Mst. Mahfuza Akter
            </h1>
            
            <h2 className="text-3xl md:text-5xl font-bold text-white/90 mb-6">
              MERN Stack <span className="text-teal-400">Developer</span>
            </h2>

            <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8 max-w-lg">
              An enthusiastic developer committed to crafting smooth and responsive web 
              applications. I'm eager to grow my skills and contribute meaningful 
              solutions in real-world projects.
            </p>

            {/* Glowing Download Button */}
            <div className="mb-10">
              <a
                href="/resume.pdf"
                download
                className="relative inline-flex items-center justify-center px-8 py-3 font-bold text-white transition-all duration-300 bg-teal-600 rounded-xl group hover:bg-teal-500 shadow-[0_0_20px_rgba(13,148,136,0.4)]"
              >
                Download Resume
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4">
              {[
                { icon: <FaFacebookF />, link: "https://www.facebook.com/mahfuza.akter.927980/" },
                { icon: <FaLinkedinIn />, link: "https://www.linkedin.com/in/mstmahfuzaakter/" },
                { icon: <FaGithub />, link: "https://github.com/MstMahfuzaAkter" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  className="w-10 h-10 flex items-center justify-center bg-black/40 text-white rounded-lg border border-white/10 hover:bg-teal-500 hover:border-teal-500 transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right Side: Profile Image (Takes 40% of the centered area) */}
          <div className="w-full md:w-[40%] flex justify-center items-center animate-float">
            <div className="relative group">
              {/* Decorative Glow behind image */}
              <div className="absolute -inset-4 bg-teal-500/20 rounded-full blur-2xl group-hover:bg-teal-500/30 transition duration-1000"></div>
              
              <img
                src={HomeImage}
                alt="Mahfuza Akter"
                className="relative w-64 md:w-[380px] h-auto rounded-3xl object-cover grayscale-[20%] group-hover:grayscale-0 transition duration-500 shadow-2xl"
              />
              
              {/* Star Decorations */}
              <div className="absolute -top-10 -right-10 text-teal-500/40 text-4xl animate-pulse">✦</div>
              <div className="absolute -bottom-10 -left-10 text-white/20 text-3xl animate-bounce">✦</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;