import React, { useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";

// Data proyek — sama seperti di ProjectSection
const projects = [
  {
    id: "1",
    title: "Company Profile FYP Media",
    description: "A modern wordpress custom theme for a digital agency",
    image: "/fyp11.png",
    tech: ["Wordpress", "TailwindCSS", "MYSQL", "PHP"],
    fullDescription: "This project was built for FYP Media, a digital agency based in Jakarta. The theme is fully responsive, SEO-friendly, and optimized for fast loading. Custom post types and ACF were used for flexible content management.",
  },
  {
    id: "2",
    title: "Sistem Informasi Monitoring Absensi Berbasis RFID",
    description: "Final project for thesis by creating an RFID-based employee monitoring system",
    image: "/skripsi1.png",
    tech: ["Laravel", "MYSQL", "Tailwind CSS"],
    fullDescription: "This system automates employee attendance using RFID technology. It includes real-time monitoring, report generation, and admin dashboard built with Laravel.",
  },
  {
    id: "3",
    title: "Web Tes Psikologi",
    description: "Responsive web test psikologi site with smooth animations",
    image: "/asta1.png",
    tech: ["Bootstrap", "Codeigniter 4", "MYSQL", "PHP"],
    fullDescription: "A psychology test platform designed for schools and clinics. Features include timed tests, result analysis, and user management.",
  },
];

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const project = projects.find((p) => p.id === id);

  const goBackToProjects = () => {
    navigate("/");
  };

  useEffect(() => {
    if (location.pathname === "/") {
      const timer = setTimeout(() => {
        const projectsSection = document.getElementById("projects");
        if (projectsSection) {
          projectsSection.scrollIntoView({ behavior: "smooth" });
        }
      }, 150); // sedikit lebih lama untuk keamanan

      return () => clearTimeout(timer);
    }
  }, [location.pathname]);

  if (!project) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold text-gray-900">Project Not Found</h2>
        <button onClick={goBackToProjects} className="text-blue-600 mt-4 inline-block hover:text-blue-800">
          <i className="fa-solid fa-arrow-left-long mr-2 text-sm"></i> Back to Projects
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 ">
      <button onClick={goBackToProjects} className="flex items-center mb-6 hover:shadow-xl overflow-hidden transition-all duration-200 py-3 px-4 hover:bg-blue-600 bg-blue-500 rounded-lg">
         <i className="fa-solid fa-arrow-left-long mr-2 text-sm text-white"></i> 
         <span className="text-white">Back to Projects</span>
      </button>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <img src={project.image} alt={project.title} className="w-full h-64 md:h-96 object-cover" />
        <div className="p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{project.title}</h1>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((tech, i) => (
              <span key={i} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                {tech}
              </span>
            ))}
          </div>
          <p className="text-gray-700 text-lg">{project.fullDescription}</p>
        </div>
      </div>
    </div>
  );
}
