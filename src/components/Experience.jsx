import React from "react";
import { Card } from "./ui/card";
import { CalendarDays, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Freelance Web Designer & Developer",
      company: "Self-Employed",
      location: "Baton Rouge, LA / Remote",
      period: "2022 - Present",
      description:
        "Designing, developing, and hosting custom web solutions for small businesses and organizations.",
      achievements: [
        "Design modern, high-converting user interfaces using Figma and Tailwind CSS",
        "Develop responsive full-stack applications using React.js, Next.js, and Node.js",
        "Manage end-to-end hosting and deployment using Vercel, Netlify, and custom VPS configurations",
        "Consult with clients to translate business requirements into scalable technical solutions",
      ],
      color: "#00D4FF", // Matching your primary brand color
    },
    {
      title: "Software Developer",
      company: "Louisiana Farm Bureau",
      location: "Baton Rouge, LA",
      period: "2023 - 2025",
      description:
        "Maintaining and enhancing enterprise-level insurance systems using .NET and SQL Server.",
      achievements: [
        "Serve as Tier 3 technical escalation point for complex system issues",
        "Perform root-cause analysis and implement solutions for critical production bugs",
        "Participate in Agile sprint planning and daily stand-ups",
        "Maintain legacy COBOL and Visual Basic systems while modernizing infrastructure",
      ],
      color: "#00D4FF",
    },
    {
      title: "Software Engineering Intern",
      company: "LeNgineer",
      location: "Remote",
      period: "2022",
      description:
        "Led technical development of web applications with focus on real-time communication.",
      achievements: [
        "Led a team of 3 developers in building responsive web applications",
        "Implemented real-time messaging system using Google Firebase and Firestore",
        "Designed and developed user interfaces using React.js and Material UI",
        "Collaborated with cross-functional teams using Agile methodologies",
      ],
      color: "#00B8E6",
    },
    {
      title: "Student Computer Technician",
      company: "Louisiana State University",
      location: "Baton Rouge, LA",
      period: "2020 - 2022",
      description:
        "Provided hands-on hardware support and technical troubleshooting for campus facilities.",
      achievements: [
        "Repaired and maintained 45+ workstations across residential dorms",
        "Diagnosed and resolved complex hardware and connectivity issues",
        "Managed technical support tickets using Footprints ticketing system",
        "Trained new technicians on diagnostic procedures and best practices",
      ],
      color: "#009FCC",
    },
  ];

  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-[#00D4FF] uppercase tracking-wider mb-4">
            Experience
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-4">
            Professional Journey
          </h3>
          <p className="text-[rgb(218,218,218)] text-lg max-w-2xl mx-auto">
            Building expertise from hardware diagnostics to enterprise software
            development
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="p-8 bg-[rgb(26,28,30)] border border-[rgba(255,255,255,0.1)] rounded-2xl hover:border-[#00D4FF] transition-all group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#00D4FF] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="grid md:grid-cols-[2fr,1fr] gap-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="text-2xl font-bold mb-2 group-hover:text-[#00D4FF] transition-colors">
                      {exp.title}
                    </h4>
                    <p className="text-xl text-[rgb(218,218,218)] font-semibold">
                      {exp.company}
                    </p>
                    <p className="text-[rgb(161,161,170)] mt-2">
                      {exp.description}
                    </p>
                  </div>

                  <div className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <div key={i} className="flex gap-3 items-start">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#00D4FF] mt-2 flex-shrink-0" />
                        <p className="text-[rgb(218,218,218)]">{achievement}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-3 md:text-right">
                  <div className="flex items-center gap-2 md:justify-end text-[rgb(161,161,170)]">
                    <CalendarDays size={16} />
                    <span className="text-sm">{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-2 md:justify-end text-[rgb(161,161,170)]">
                    <MapPin size={16} />
                    <span className="text-sm">{exp.location}</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
