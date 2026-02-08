import React from 'react';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Code2, Palette, Server, Cpu } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      id: 'languages',
      label: 'Languages',
      icon: <Code2 className="w-4 h-4" />,
      skills: [
        'C#', '.NET', 'Python', 'C++', 'SQL', 'JavaScript', 'COBOL', 'Visual Basic'
      ]
    },
    {
      id: 'frontend',
      label: 'Frontend & Design',
      icon: <Palette className="w-4 h-4" />,
      skills: [
        'React.js', 'React Native', 'Redux', 'Sass', 'HTML5', 'CSS3', 'Figma', 'Material UI'
      ]
    },
    {
      id: 'backend',
      label: 'Backend & Cloud',
      icon: <Server className="w-4 h-4" />,
      skills: [
        'Google Firebase', 'Firestore', 'MongoDB', 'SQL Server', 'REST APIs', 'Authentication'
      ]
    },
    {
      id: 'it',
      label: 'IT & Infrastructure',
      icon: <Cpu className="w-4 h-4" />,
      skills: [
        'Hardware Repair', 'Networking', 'Footprints Ticketing', 'Agile Methodologies', 'System Diagnostics', 'Technical Support'
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-[rgb(26,28,30)]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-[#00D4FF] uppercase tracking-wider mb-4">Technical Skills</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-4">Full-Stack Expertise</h3>
          <p className="text-[rgb(218,218,218)] text-lg max-w-2xl mx-auto">
            A comprehensive skill set spanning languages, frameworks, and infrastructure
          </p>
        </div>

        <Tabs defaultValue="languages" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8 bg-[rgb(38,40,42)] p-2 rounded-xl">
            {skillCategories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="flex items-center gap-2 data-[state=active]:bg-[#00D4FF] data-[state=active]:text-[rgb(17,17,19)] rounded-lg"
              >
                {category.icon}
                <span className="hidden sm:inline">{category.label}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {skillCategories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-8">
              <div className="p-8 bg-[rgb(17,17,19)] border border-[rgba(255,255,255,0.1)] rounded-2xl">
                <h4 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <span className="text-[#00D4FF]">{category.icon}</span>
                  {category.label}
                </h4>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="px-4 py-2 text-sm bg-[rgb(38,40,42)] hover:bg-[#00D4FF] hover:text-[rgb(17,17,19)] border border-[rgba(255,255,255,0.1)] hover:border-[#00D4FF] transition-all cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Skills;