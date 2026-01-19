import React, { useState } from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiMongodb, SiFirebase, SiRedux, SiFigma, SiExpress, SiTailwindcss, SiPostman, SiVercel } from "react-icons/si";

const Skill = () => {
  const [activeTab, setActiveTab] = useState("ALL");

  const categories = ["ALL", "FRONTEND", "BACKEND", "TOOLS", "OTHERS"];

  const skillsData = {
    FRONTEND: [
      { name: "React", icon: <FaReact className="text-cyan-400" />, desc: "Component UI" },
      { name: "JavaScript", icon: <FaJs className="text-yellow-400" />, desc: "Logic & ES6" },
      { name: "Tailwind", icon: <SiTailwindcss className="text-sky-400" />, desc: "Modern Styling" },
      { name: "Redux", icon: <SiRedux className="text-purple-500" />, desc: "State Management" },
    ],
    BACKEND: [
      { name: "Node.js", icon: <FaNodeJs className="text-green-500" />, desc: "Server Runtime" },
      { name: "Express.js", icon: <SiExpress className="text-gray-400" />, desc: "REST APIs" },
      { name: "MongoDB", icon: <SiMongodb className="text-green-400" />, desc: "NoSQL DB" },
    ],
    TOOLS: [
      { name: "Git", icon: <FaGitAlt className="text-red-500" />, desc: "Version Control" },
      { name: "Postman", icon: <SiPostman className="text-orange-500" />, desc: "API Testing" },
    ],
    OTHERS: [
      { name: "Firebase", icon: <SiFirebase className="text-yellow-500" />, desc: "Backend as Service" },
      { name: "Figma", icon: <SiFigma className="text-pink-500" />, desc: "UI Design" },
      { name: "Vercel", icon: <SiVercel className="text-white" />, desc: "Deployment" },
    ],
  };

  const displayedSkills = activeTab === "ALL" 
    ? [...skillsData.FRONTEND, ...skillsData.BACKEND, ...skillsData.TOOLS, ...skillsData.OTHERS]
    : skillsData[activeTab] || [];

  return (
    <section id="skills" className="relative py-10 bg-[#0a0f1d] overflow-hidden ">
      
      {/* Background Accents */}
      <div className="absolute top-20 left-10 text-white/5 text-8xl font-black -rotate-12 select-none">SKILLS</div>
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-cyan-500/5 blur-[100px] rounded-full"></div>

      {/* 70% Centered Container */}
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl  text-white tracking-tight">
            Technical Proficiencies
          </h1>
        </div>

        {/* Tab Bar (Matching 70% Layout) */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex flex-wrap justify-center bg-white/5 backdrop-blur-md p-1.5 rounded-2xl border border-white/10 shadow-2xl">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-8 py-3 text-[10px] font-black tracking-[2px] rounded-xl transition-all duration-500 ${
                  activeTab === cat
                    ? "bg-cyan-500 text-white shadow-[0_0_20px_rgba(6,182,212,0.4)]"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid - Responsive and Balanced */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 min-h-[400px]">
          {displayedSkills.map((skill, index) => (
            <div
              key={index}
              className="group relative bg-[#111a2d]/50 border border-white/5 backdrop-blur-md p-10 rounded-[2rem] flex flex-col items-center text-center transition-all duration-500 hover:border-cyan-500/40 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] animate-fadeIn"
            >
              {/* Icon with subtle hover glow */}
              <div className="text-5xl mb-6 group-hover:scale-110 group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.2)] transition-all duration-500">
                {skill.icon}
              </div>
              
              <h3 className="text-lg font-bold text-white mb-2 tracking-tight group-hover:text-cyan-400 transition-colors">
                {skill.name}
              </h3>
              
              <p className="text-[9px] text-gray-500 uppercase tracking-[2px] font-bold group-hover:text-cyan-200/50 transition-colors">
                {skill.desc}
              </p>

              {/* Decorative light effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/0 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-[2rem]"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skill;