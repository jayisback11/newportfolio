import React from "react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { ExternalLink, Github } from "lucide-react";
import drone from "../files/images/drone.jpeg";
import netflix from "../files/images/netflix.jpeg";
import church from "../files/images/church.jpeg";
import game from "../files/images/video.jpeg";

const Projects = () => {
  const projects = [
    {
      title: "Autonomous Drone System",
      category: "AI & Machine Learning",
      description:
        "AI-driven autonomous delivery drone with machine learning capabilities for navigation and object detection. Developed as senior capstone project.",
      image: drone,
      tech: ["Python", "C++", "Machine Learning", "Computer Vision"],
      github: "#",
      demo: "#",
    },
    {
      title: "Newness Of Life Ministries Website",
      category: "Web Development",
      description:
        "Mobile-friendly responsive website for religious organization with modern UI/UX design and real-time content management.",
      image: church,
      tech: ["React.js", "Material UI", "Firebase", "Responsive Design"],
      github: "#",
      demo: "https://nolm.vercel.app/",
    },
    {
      title: "Good Game Mobile App",
      category: "Mobile Development",
      description:
        "Social gaming platform connecting gamers with real-time game information and community features using RAWG.io API.",
      image: game,
      tech: ["React Native", "RAWG.io API", "Firebase", "Redux"],
      github: "#",
      demo: "https://github.com/jayisback11/gg-project",
    },
    {
      title: "Netflix Clone",
      category: "Web Development",
      description:
        "Full-featured Netflix clone with state management and TMDB API integration for real-time movie and TV show data.",
      image: netflix,
      tech: ["React.js", "Redux", "TMDB API", "Sass"],
      github: "#",
      demo: "https://github.com/jayisback11/netflix-clone",
    },
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-[rgb(26,28,30)]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-[#00D4FF] uppercase tracking-wider mb-4">
            Projects
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-4">Featured Work</h3>
          <p className="text-[rgb(218,218,218)] text-lg max-w-2xl mx-auto">
            A showcase of technical projects demonstrating full-stack
            development skills
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-[rgb(17,17,19)] border border-[rgba(255,255,255,0.1)] rounded-2xl overflow-hidden hover:border-[#00D4FF] transition-all group"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgb(17,17,19)] to-transparent" />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-[rgba(0,212,255,0.2)] text-[#00D4FF] border-[#00D4FF]">
                    {project.category}
                  </Badge>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <h4 className="text-2xl font-bold group-hover:text-[#00D4FF] transition-colors">
                  {project.title}
                </h4>
                <p className="text-[rgb(218,218,218)]">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <Badge
                      key={i}
                      variant="secondary"
                      className="bg-[rgb(38,40,42)] text-[rgb(218,218,218)] border-0"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-4 pt-2">
                  {/* GitHub Link */}
                  <a
                    href={project.github}
                    onClick={(e) =>
                      project.github === "#" && e.preventDefault()
                    }
                    className={`flex items-center gap-2 transition-colors ${
                      project.github === "#"
                        ? "opacity-50 cursor-not-allowed pointer-events-none"
                        : "text-[rgb(218,218,218)] hover:text-[#00D4FF]"
                    }`}
                  >
                    <Github size={18} />
                    <span className="text-sm font-medium">Code</span>
                  </a>

                  {/* Live Demo Link */}
                  <a
                    href={project.demo}
                    onClick={(e) => project.demo === "#" && e.preventDefault()}
                    className={`flex items-center gap-2 transition-colors ${
                      project.demo === "#"
                        ? "opacity-50 cursor-not-allowed pointer-events-none"
                        : "text-[rgb(218,218,218)] hover:text-[#00D4FF]"
                    }`}
                  >
                    <ExternalLink size={18} />
                    <span className="text-sm font-medium">Live Demo</span>
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
