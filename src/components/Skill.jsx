import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiMongodb, SiFirebase, SiRedux, SiFigma, SiExpress } from "react-icons/si";

const Skill = () => {
  const skillList = [
    { name: "HTML5", icon: <FaHtml5 className="text-orange-600" />, desc: "Structured web content" },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-600" />, desc: "Modern responsive design" },
    { name: "JavaScript", icon: <FaJs className="text-yellow-500" />, desc: "Dynamic interactivity" },
    { name: "React", icon: <FaReact className="text-blue-400" />, desc: "Component-based UIs" },
    { name: "Node.js", icon: <FaNodeJs className="text-green-600" />, desc: "Server-side logic" },
    { name: "Express.js", icon: <SiExpress className="text-gray-700" />, desc: "Robust API development" },
    { name: "MongoDB", icon: <SiMongodb className="text-green-500" />, desc: "NoSQL data management" },
    { name: "Firebase", icon: <SiFirebase className="text-yellow-600" />, desc: "Fast backend solutions" },
    { name: "Redux", icon: <SiRedux className="text-purple-600" />, desc: "Global state management" },
    { name: "Git", icon: <FaGitAlt className="text-orange-500" />, desc: "Version control" },
    { name: "Figma", icon: <SiFigma className="text-pink-500" />, desc: "UI/UX & Prototyping" },
  ];

  return (
    <section id="skills" className="py-4 bg-[#F9FAFB] font-raleway">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-secondary font-bold tracking-widest uppercase text-sm mb-2">
            My Expertise
          </h2>
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary">
            Technical Skills
          </h1>
          <div className="h-1 w-16 bg-secondary mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {skillList.map((skill, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col items-center text-center transform hover:-translate-y-2"
            >
              <div className="text-5xl mb-4 transition-transform duration-300 group-hover:scale-110">
                {skill.icon}
              </div>
              <h3 className="text-lg font-bold text-primary mb-1">
                {skill.name}
              </h3>
              <p className="text-xs text-gray-500 font-medium leading-relaxed">
                {skill.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;