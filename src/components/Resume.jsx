import React from "react";
import AboutImage from "../assets/images/Profile.jfif";
import { FaDev, FaGithub, FaInstagram, FaLinkedin, FaEnvelope, FaGraduationCap, FaBriefcase, FaDownload } from "react-icons/fa";

const Resume = () => {
  return (
    <section id="resume" className="py-4 bg-[#F8F9FA] font-raleway transition-all duration-500">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-secondary font-bold tracking-widest uppercase text-sm mb-2 opacity-80">
            Professional Background
          </h2>
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary tracking-tight">
            Resume
          </h1>
          <div className="h-1.5 w-20 bg-secondary mx-auto mt-4 rounded-full shadow-sm"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          
          {/* Left Column: Experience & Education */}
          <div className="w-full lg:w-2/3 space-y-12">
            
            {/* Experience Section */}
            <div className="group">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-white shadow-md rounded-xl text-secondary group-hover:scale-110 transition-transform duration-300">
                   <FaBriefcase className="text-2xl" />
                </div>
                <h3 className="text-2xl font-bold text-primary">Experience</h3>
              </div>
              
              <div className="space-y-8 ml-6 border-l-2 border-gray-200">
                {/* Internship Role */}
                <div className="relative pl-8 pb-2 group/item">
                  <div className="absolute -left-[11px] top-1 w-5 h-5 bg-white border-4 border-secondary rounded-full group-hover/item:scale-125 transition-all duration-300 shadow-sm"></div>
                  <span className="text-xs font-bold text-secondary uppercase tracking-widest bg-secondary/10 px-2 py-1 rounded">Present</span>
                  <h4 className="text-xl font-bold text-primary mt-2">Frontend Developer Intern</h4>
                  <p className="text-gray-600 text-sm mt-3 leading-relaxed max-w-xl">
                    Focused on creating responsive UI components with React.js and Tailwind CSS. Collaborated with teams for efficient API integration and performance optimization.
                  </p>
                </div>
              </div>
            </div>

            {/* Education Section */}
            <div className="group">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-white shadow-md rounded-xl text-secondary group-hover:scale-110 transition-transform duration-300">
                   <FaGraduationCap className="text-2xl" />
                </div>
                <h3 className="text-2xl font-bold text-primary">Education</h3>
              </div>
              
              <div className="relative border-l-2 border-gray-200 ml-6 pl-8 pb-4 group/item">
                <div className="absolute -left-[11px] top-1 w-5 h-5 bg-white border-4 border-secondary rounded-full group-hover/item:scale-125 transition-all duration-300 shadow-sm"></div>
                <span className="text-xs font-bold text-secondary uppercase tracking-widest bg-secondary/10 px-2 py-1 rounded">2021 - 2025 (Expected)</span>
                <h4 className="text-xl font-bold text-primary mt-2">B.Sc. in Computer Science & Engineering</h4>
                <p className="text-primary/80 font-semibold mt-1">Jagannath University (JnU)</p>
                <p className="text-gray-500 text-sm mt-3 leading-relaxed max-w-xl">
                  Major in Software Systems. Actively involved in programming contests, technical seminars, and university tech-community activities.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Profile Card */}
          <div className="w-full lg:w-1/3">
            <div className="bg-white p-8 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100 text-center sticky top-24 hover:shadow-2xl transition-shadow duration-500">
              <div className="relative inline-block mb-6">
                <img
                  src={AboutImage}
                  alt="Mst. Mahfuza Akter"
                  className="w-44 h-44 rounded-full object-cover mx-auto border-8 border-[#F8F9FA] shadow-inner"
                />
                <div className="absolute bottom-3 right-3 w-6 h-6 bg-green-500 border-4 border-white rounded-full animate-pulse shadow-sm"></div>
              </div>

              <h3 className="text-2xl font-extrabold text-primary leading-tight">Mst. Mahfuza Akter</h3>
              <p className="text-secondary font-bold uppercase tracking-widest text-[11px] mt-3 bg-secondary/5 inline-block px-4 py-1.5 rounded-full border border-secondary/10">
                MERN Stack Specialist
              </p>

              <div className="my-8 space-y-4 text-left border-y border-gray-100 py-6">
                <div className="flex items-center gap-3 text-gray-600 hover:text-primary transition-colors cursor-default">
                  <FaEnvelope className="text-secondary shrink-0 text-lg" />
                  <span className="text-xs font-medium truncate">mstmahfuzaker581@gmail.com</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600 hover:text-primary transition-colors cursor-default">
                  <FaLinkedin className="text-secondary shrink-0 text-lg" />
                  <span className="text-xs font-medium">/in/mstmahfuzaakter</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex justify-center gap-4 mt-6">
                {[
                  { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/mstmahfuzaakter/", color: "hover:bg-[#0077B5]" },
                  { icon: <FaGithub />, link: "https://github.com/MstMahfuzaAkter", color: "hover:bg-[#333]" },
                  { icon: <FaInstagram />, link: "#", color: "hover:bg-[#E4405F]" },
                  { icon: <FaDev />, link: "#", color: "hover:bg-primary" },
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-11 h-11 flex items-center justify-center rounded-xl bg-gray-50 text-gray-400 hover:text-white hover:-translate-y-1 transition-all duration-300 shadow-sm ${social.color}`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>

              {/* Action Button */}
              <a 
                href="/your-resume.pdf" 
                download
                className="w-full mt-10 py-4 bg-primary text-white font-bold rounded-2xl shadow-[0_10px_20px_rgba(0,0,0,0.1)] hover:shadow-primary/20 hover:-translate-y-1 active:scale-95 transition-all duration-300 flex items-center justify-center gap-3 group"
              >
                <FaDownload className="group-hover:bounce group-hover:text-secondary transition-colors" /> Download CV
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Resume;