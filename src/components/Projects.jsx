import React, { useState, useEffect } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const Projects = () => {
  const [projectsData, setProjectsData] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    fetch("/projects.json")
      .then((response) => response.json())
      .then((data) => {
        setProjectsData(data);
        setFilteredProjects(data);
      })
      .catch((err) => console.error("Error fetching projects:", err));
  }, []);

  const filterProjects = (category) => {
    setSelectedCategory(category);
    if (category === "all") {
      setFilteredProjects(projectsData);
    } else {
      setFilteredProjects(
        projectsData.filter((project) => project.category === category)
      );
    }
  };

  const categories = ["all", "frontend", "fullStack", "backend", "uiUX"];

  return (
    <section id="projects" className="py-2 bg-white font-raleway">
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary">
            Recent Projects
          </h1>
          <div className="h-1 w-20 bg-secondary mx-auto mt-1 rounded-full"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col"
            >
              {/* Image Container with Overlay */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white text-primary rounded-full hover:bg-secondary transition-colors"
                    title="View Code"
                  >
                    <FaGithub size={20} />
                  </a>
                  {project.site && (
                    <a
                      href={project.site}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white text-primary rounded-full hover:bg-secondary transition-colors"
                      title="Live Demo"
                    >
                      <FaExternalLinkAlt size={18} />
                    </a>
                  )}
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 flex flex-col flex-grow">
                <span className="text-secondary text-xs font-bold uppercase tracking-[0.2em] mb-2">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors">
                  {project.name}
                </h3>
                <p className="text-gray-600 text-sm mb-6 line-clamp-3">
                  {project.description}
                </p>
                
                {/* Tech Stack (Optional but recommended in JSON) */}
                {project.tech && (
                  <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-gray-50">
                    {project.tech.map((t, idx) => (
                      <span key={idx} className="text-[10px] font-bold bg-gray-100 text-gray-500 px-2 py-1 rounded uppercase">
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;