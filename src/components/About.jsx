import React, { useState } from "react";
import LaptopImg from "../assets/images/laptop-illustration.jfif"; 

const About = () => {
  const [activeTab, setActiveTab] = useState("Introduction");

  const tabData = {
    Introduction: (
      <div className="space-y-6 animate-fadeIn">
        <h3 className="text-2xl font-bold text-white">
          Architecting <span className="shiny-text">Digital Experiences</span>
        </h3>
        <p className="text-gray-400 leading-relaxed text-lg">
          I’m <span className="text-teal-400 font-bold">Mahfuza</span>, a frontend developer 
          with a passion for crafting clean, functional, and user-centric web solutions. 
          My journey started with <span className="text-white">competitive programming</span>, 
          which instilled in me a deep love for logic and efficient problem-solving.
        </p>
        <p className="text-gray-400 leading-relaxed">
          Currently, I am focusing on mastering the <span className="text-teal-400">MERN Stack</span> 
           to build full-scale applications that solve real-world problems.
        </p>
      </div>
    ),
    Skills: (
      <div className="grid grid-cols-2 gap-y-6 gap-x-4 animate-fadeIn pt-4">
        {["React.js", "JavaScript", "Node.js", "Tailwind CSS", "MongoDB", "Firebase"].map((skill) => (
          <div key={skill} className="flex items-center gap-3 group">
            <span className="h-2 w-2 rounded-full bg-teal-400 group-hover:scale-150 transition-transform shadow-[0_0_8px_#2dd4bf]"></span>
            <span className="text-gray-300 font-medium tracking-wide group-hover:text-white transition-colors">{skill}</span>
          </div>
        ))}
      </div>
    ),
    Hobbies: (
      <div className="space-y-6 text-gray-400 animate-fadeIn pt-4">
        {[
          { icon: "🏍️", text: "Exploring off-road trails on my motorcycle." },
          { icon: "♟️", text: "Mastering a strategic chess match." },
          { icon: "🎨", text: "Designing clean and intuitive UI layouts." }
        ].map((hobby, i) => (
          <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-teal-500/20 transition-all">
            <span className="text-2xl">{hobby.icon}</span>
            <p className="text-sm font-medium leading-tight">{hobby.text}</p>
          </div>
        ))}
      </div>
    ),
  };

  return (
    <section id="about" className="relative py-10 bg-[#0a0f1d] overflow-hidden ">
      
      {/* Background Decorative Elements */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-blue-500/5 blur-[120px] -translate-y-1/2"></div>
     

      {/* 70% Centered Container */}
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl  text-white tracking-tight">
            About Me
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24">
          
          {/* Left Side: Illustration (Takes 45% of the centered area) */}
          <div className="w-full lg:w-[45%] flex justify-center animate-float">
            <div className="relative">
              {/* Outer Glow behind image */}
              <div className="absolute -inset-10 bg-teal-500/10 blur-[100px] rounded-full"></div>
              
              <div className="relative z-10 p-4 bg-white/5 border border-white/10 rounded-[3rem] backdrop-blur-sm shadow-2xl">
                <img
                  src={LaptopImg} 
                  alt="Tech Illustration"
                  className="w-full max-w-sm rounded-[2rem] drop-shadow-[0_20px_50px_rgba(0,192,255,0.15)] grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                />
              </div>
              
              {/* Floating Stars */}
              <div className="absolute -top-4 -left-4 text-teal-400 text-3xl animate-pulse">✦</div>
              <div className="absolute -bottom-8 -right-8 text-white/10 text-6xl font-black">01</div>
            </div>
          </div>

          {/* Right Side: Tabbed Glass Container (Takes 55% of the centered area) */}
          <div className="w-full lg:w-[55%]">
            <div className="bg-[#111a2d]/60 border border-white/10 backdrop-blur-2xl rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] min-h-[450px] flex flex-col">
              
              {/* Tab Header (Modern Pill Style) */}
              <div className="flex p-3 bg-black/20 gap-2">
                {Object.keys(tabData).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex-1 py-3 text-[10px] font-black tracking-[2px] uppercase rounded-2xl transition-all duration-500 ${
                      activeTab === tab 
                      ? "bg-teal-500 text-white shadow-lg shadow-teal-500/20" 
                      : "text-gray-500 hover:text-gray-300 hover:bg-white/5"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Tab Content Body */}
              <div className="p-10 lg:p-12 flex-grow">
                {tabData[activeTab]}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;