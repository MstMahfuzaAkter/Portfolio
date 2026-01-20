import React from "react";
import AboutImage from "../assets/images/Profile.jfif";
import { FaDev, FaGithub, FaInstagram, FaLinkedin, FaEnvelope, FaGraduationCap, FaBriefcase, FaDownload } from "react-icons/fa";

const Resume = () => {
  return (
    <section id="resume" className="relative py-24 bg-[#0a0f1d] overflow-hidden font-raleway">
      
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-teal-500/5 blur-[120px] rounded-full"></div>
      <div className="absolute top-20 right-[-5%] text-white/5 text-[10rem] font-black rotate-90 select-none">RESUME</div>

      {/* 70% Centered Container */}
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-10">
          <h1 className="text-5xl md:text-6xl  text-white tracking-tight">
            My Resume
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          
          {/* Left Column: Experience & Education Timeline (Takes 60% of the centered area) */}
          <div className="w-full lg:w-[60%] space-y-16">
            
            {/* Experience Section */}
            <div className="group">
              <div className="flex items-center gap-5 mb-10">
                <div className="p-4 bg-white/5 border border-white/10 rounded-2xl text-teal-400 group-hover:shadow-[0_0_20px_rgba(45,212,191,0.2)] transition-all duration-300">
                   <FaBriefcase className="text-2xl" />
                </div>
                <h3 className="text-3xl font-bold text-white tracking-tight">Experience</h3>
              </div>
              
              <div className="space-y-10 ml-6 border-l-2 border-white/5">
                <div className="relative pl-10 group/item">
                  <div className="absolute -left-[9px] top-1 w-4 h-4 bg-[#0a0f1d] border-2 border-teal-500 rounded-full group-hover/item:scale-150 transition-all duration-300 shadow-[0_0_10px_#2dd4bf]"></div>
                  
                  <div className="bg-[#111a2d]/50 border border-white/5 p-8 rounded-[2rem] hover:border-teal-500/30 transition-all duration-500 backdrop-blur-sm">
                    <span className="text-[10px] font-black text-teal-400 uppercase tracking-[3px] bg-teal-500/10 px-3 py-1 rounded-full border border-teal-500/20">Present</span>
                    <h4 className="text-2xl font-bold text-white mt-4">Frontend Developer Intern</h4>
                    <p className="text-gray-400 text-sm mt-4 leading-relaxed italic">
                      "Focused on creating responsive UI components with React.js and Tailwind CSS. Collaborated with teams for efficient API integration and performance optimization."
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Education Section */}
            <div className="group">
              <div className="flex items-center gap-5 mb-10">
                <div className="p-4 bg-white/5 border border-white/10 rounded-2xl text-blue-400 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] transition-all duration-300">
                   <FaGraduationCap className="text-2xl" />
                </div>
                <h3 className="text-3xl font-bold text-white tracking-tight">Education</h3>
              </div>
              
              <div className="relative border-l-2 border-white/5 ml-6 pl-10 group/item">
                <div className="absolute -left-[9px] top-1 w-4 h-4 bg-[#0a0f1d] border-2 border-blue-500 rounded-full group-hover/item:scale-150 transition-all duration-300 shadow-[0_0_10px_#3b82f6]"></div>
                
                <div className="bg-[#111a2d]/50 border border-white/5 p-8 rounded-[2rem] hover:border-blue-500/30 transition-all duration-500 backdrop-blur-sm">
                  <span className="text-[10px] font-black text-blue-400 uppercase tracking-[3px] bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">2022 - Present</span>
                  <h4 className="text-2xl font-bold text-white mt-4">B.Sc. in Computer Science & Engineering</h4>
                  <p className="text-teal-400/90 font-bold mt-2 tracking-wide">Jagannath University (JnU)</p>
                  <p className="text-gray-400 text-sm mt-4 leading-relaxed">
                    Major in Software Systems. Actively involved in programming contests and technical seminars.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Profile Card (Takes 40% of the centered area) */}
          <div className="w-full lg:w-[40%] sticky top-24">
            <div className="bg-[#111a2d]/80 border border-white/10 backdrop-blur-2xl p-10 rounded-[3rem] text-center shadow-2xl relative overflow-hidden group">
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-teal-500/10 blur-[80px] rounded-full group-hover:bg-teal-500/20 transition-all duration-700"></div>

              <div className="relative inline-block mb-8">
                <div className="absolute -inset-2 bg-gradient-to-tr from-teal-500 to-blue-500 rounded-full blur opacity-30 group-hover:opacity-100 transition duration-1000"></div>
                <img
                  src={AboutImage}
                  alt="Mst. Mahfuza Akter"
                  className="relative w-36 h-36 rounded-full object-cover mx-auto border-4 border-[#0a0f1d]"
                />
                <div className="absolute bottom-2 right-2 w-6 h-6 bg-green-500 border-[4px] border-[#0a0f1d] rounded-full animate-pulse"></div>
              </div>

              <h3 className="text-2xl font-black text-white leading-tight">Mst. Mahfuza Akter</h3>
              <p className="text-teal-400 font-bold uppercase tracking-[0.2em] text-[10px] mt-4 inline-block px-5 py-2 rounded-full bg-white/5 border border-white/10">
                MERN Stack Specialist
              </p>

              <div className="my-8 space-y-4 text-left border-y border-white/5 py-8">
                <div className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors">
                  <FaEnvelope className="text-teal-500 shrink-0" />
                  <span className="text-[11px] font-medium truncate">mstmahfuzaker581@gmail.com</span>
                </div>
                <div className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors">
                  <FaLinkedin className="text-teal-500 shrink-0" />
                  <span className="text-[11px] font-medium">/in/mstmahfuzaakter</span>
                </div>
              </div>

              <div className="flex justify-center gap-3">
                {[
                  { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/mstmahfuzaakter/", color: "hover:bg-blue-600" },
                  { icon: <FaGithub />, link: "https://github.com/MstMahfuzaAkter", color: "hover:bg-white hover:text-black" },
                ].map((social, idx) => (
                  <a key={idx} href={social.link} target="_blank" className={`w-11 h-11 flex items-center justify-center rounded-xl bg-white/5 text-gray-400 transition-all border border-white/5 ${social.color}`}>
                    {social.icon}
                  </a>
                ))}
              </div>

              <a 
                href="/Resume.pdf" 
                download
                className="group relative w-full mt-10 py-4 bg-teal-500 text-white font-black text-[11px] uppercase tracking-widest rounded-2xl overflow-hidden shadow-lg hover:shadow-teal-500/40 transition-all flex items-center justify-center gap-3"
              >
                <FaDownload className="group-hover:animate-bounce" /> Download CV
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Resume;