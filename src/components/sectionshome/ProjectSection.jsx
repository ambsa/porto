import React, { useState } from "react";
import { Link } from "react-router-dom";

const ProjectSection = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      title: "Company Profile FYP Media",
      description: "A modern wordpress custom theme for a digital agency",
      image: "public/fyp11.png",
      tech: ["Wordpress", "TailwindCSS", "MYSQL", "PHP"],
    },
    {
      title: "Sistem Informasi Monitoring Absensi Berbasis Radio Frequency Identification",
      description: "Final project for thesis by creating an RFID-based employee monitoring system",
      image: "public/skripsi1.png",
      tech: ["Laravel", "MYSQL", "Tailwind CSS"],
    },
    {
      title: "Web Tes Psikologi",
      description: "Responsive web test psikologi site with smooth animations",
      image: "public/asta1.png",
      tech: ["Bootstrap", "Codeigniter 4", "MYSQL", "PHP"],
    },
  ];

  return (
    <section id="projects" className="min-h-screen py-10 bg-gradient-to-t from-slate-200 via-slate-100 to-slate-50 md:py-25">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">My Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Some of my recent work and open source contributions</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className={`bg-white rounded-lg border-1 border-gray-200 hover:shadow-lg overflow-hidden transition-all duration-300 flex flex-col ${hoveredProject === index ? "transform -translate-y-2 shadow-xl" : ""}`} onMouseEnter={() => setHoveredProject(index)} onMouseLeave={() => setHoveredProject(null)}>
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 flex-grow line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full whitespace-nowrap">
                      {tech}
                    </span>
                  ))}
                </div>
                <Link to={`/projects/${index + 1}`} className="text-blue-600 font-medium hover:text-blue-700 transition-colors inline-block mt-auto">
                  View Project →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
