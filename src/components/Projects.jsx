import React, { useState, useEffect } from "react";
import { FaExternalLinkAlt, FaGithub, FaArrowRight, FaTimes, FaCheckCircle } from "react-icons/fa";

const Projects = () => {
  const [projectsData, setProjectsData] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [activeTab, setActiveTab] = useState("ALL");
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    fetch("/projects.json")
      .then((response) => response.json())
      .then((data) => {
        setProjectsData(data);
        setFilteredProjects(data);
      })
      .catch((err) => console.error("Error fetching projects:", err));
  }, []);

  const categories = ["ALL", "FRONTEND", "FULLSTACK", "BACKEND", "UIUX"];

  const filterProjects = (category) => {
    setActiveTab(category);
    if (category === "ALL") {
      setFilteredProjects(projectsData);
    } else {
      setFilteredProjects(
        projectsData.filter((project) => project.category.toUpperCase() === category)
      );
    }
  };

  return (
    <section id="projects" className="relative py-10 bg-[#0a0f1d] overflow-hidden ">

      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/5 blur-[120px] rounded-full"></div>

      <div className="container mx-auto px-6 relative z-10">

        {/* Heading */}
        <div className="text-center mb-10">
          <h1 className="text-5xl md:text-6xl  text-white tracking-tight">
            Selected Works
          </h1>
        </div>

        {/* Categories Tab */}
        <div className="flex justify-center mb-24">
          <div className="inline-flex flex-wrap justify-center bg-black/60 backdrop-blur-xl p-2 rounded-2xl border border-white/5 shadow-2xl">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => filterProjects(cat)}
                className={`px-6 md:px-10 py-3 text-[10px] font-black tracking-[2px] rounded-xl transition-all duration-500 ${activeTab === cat
                    ? "bg-white/10 text-cyan-400 border border-cyan-500/50 shadow-[inset_0_0_15px_rgba(6,182,212,0.2)]"
                    : "text-gray-400 hover:text-white"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects List */}
        <div className="max-w-6xl mx-auto space-y-32">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-16 items-center group`}
            >
              {/* Image Side */}
              <div className="w-full lg:w-[55%] relative overflow-hidden rounded-[2.5rem] border border-white/10 shadow-2xl bg-[#111a2d]">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-[320px] md:h-[420px] object-cover object-top transition-transform duration-1000 group-hover:scale-105"
                />
              </div>

              {/* Text Side */}
              <div className="w-full lg:w-[45%] space-y-6">
                <h3 className="text-4xl md:text-5xl  text-white">{project.name}</h3>

                <p className="text-gray-400 text-lg bg-white/5 p-6 rounded-3xl border border-white/5 backdrop-blur-sm">
                  {project.description}
                </p>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-2.5">
                  {project.tech?.map((t, idx) => (
                    <span key={idx} className="text-[10px] font-bold text-cyan-300 bg-cyan-500/10 px-4 py-1.5 rounded-full border border-cyan-500/20 uppercase tracking-widest">
                      {t}
                    </span>
                  ))}
                </div>
                {/* --- Project Quick Links (GitHub & Live) --- */}
                <div className="flex items-center gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 bg-white/5 hover:bg-white/10 text-white rounded-xl border border-white/10 transition-all shadow-lg"
                    title="View Source Code"
                  >
                    <FaGithub size={22} />
                  </a>
                  {project.site && (
                    <a
                      href={project.site}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-cyan-500/10 hover:bg-cyan-500 text-cyan-400 hover:text-white rounded-xl border border-cyan-500/30 transition-all font-bold text-xs uppercase tracking-widest shadow-lg"
                    >
                      Live Demo <FaExternalLinkAlt size={12} />
                    </a>
                  )}
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="group/btn inline-flex items-center gap-3 text-white font-black  uppercase tracking-[3px] hover:text-cyan-400 transition-all"
                  >
                    Explore More <FaArrowRight className="group-hover/btn:translate-x-2 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- DETAIL MODAL --- */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
          <div className="absolute inset-0 bg-[#0a0f1d]/95 backdrop-blur-xl transition-opacity" onClick={() => setSelectedProject(null)}></div>

          <div className="relative w-full max-w-5xl max-h-[90vh] bg-[#0f172a] rounded-[3rem] border border-white/10 shadow-2xl overflow-y-auto custom-scrollbar">
            <button onClick={() => setSelectedProject(null)} className="absolute top-6 right-6 z-50 p-4 bg-white/5 hover:bg-red-500/20 text-white rounded-full transition-all">
              <FaTimes size={20} />
            </button>

            <div className="p-8 md:p-16 space-y-12">
              <div className="space-y-4">
                <h2 className="text-5xl md:text-6xl  text-cyan-400 tracking-tight">{selectedProject.name}</h2>
                <div className="h-1.5 w-24 bg-cyan-500 rounded-full"></div>
              </div>

              <div className="rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl bg-[#111a2d]">
                <img src={selectedProject.image} alt="Preview" className="w-full object-cover" />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                <div className="space-y-10">
                  <div>
                    <h4 className="text-2xl font-bold text-white mb-4">About</h4>
                    <p className="text-gray-400 leading-relaxed text-lg">{selectedProject.description}</p>
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-white mb-4">Technologies</h4>
                    <div className="flex flex-wrap gap-3">
                      {selectedProject.tech?.map((t, i) => (
                        <span key={i} className="px-5 py-2 bg-white/5 border border-white/10 rounded-xl text-cyan-300 font-bold text-xs uppercase tracking-widest">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-10">
                  <div>
                    <h4 className="text-2xl font-bold text-white mb-4">Challenges</h4>
                    <ul className="space-y-4">
                      {selectedProject.challenges?.map((item, i) => (
                        <li key={i} className="flex items-start gap-4 text-gray-400">
                          <FaCheckCircle className="text-cyan-500 mt-1 flex-shrink-0" size={16} />
                          <span className="text-base">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-6 pt-6 border-t border-white/5">
                    <a href={selectedProject.site} target="_blank" rel="noreferrer" className="flex items-center gap-3 px-8 py-4 bg-cyan-500 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-cyan-400 transition-all shadow-lg shadow-cyan-500/20">
                      Live Demo <FaExternalLinkAlt size={14} />
                    </a>
                    <a href={selectedProject.github} target="_blank" rel="noreferrer" className="flex items-center gap-3 px-8 py-4 bg-white/5 text-white border border-white/10 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white/10 transition-all">
                      View Source <FaGithub size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;