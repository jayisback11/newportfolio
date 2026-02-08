import React from 'react';
import { Award, Briefcase, GraduationCap } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: 'Software Developer',
      description: 'Louisiana Farm Bureau'
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: 'Computer Engineering',
      description: 'Louisiana State University'
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Tier 3 Escalation',
      description: 'Technical Leadership'
    }
  ];

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden border border-[rgba(255,255,255,0.1)]">
              <img
                src="https://images.unsplash.com/photo-1683701251422-912fe98f2b5e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNobm9sb2d5JTIwd29ya3NwYWNlfGVufDB8fHx8MTc3MDUwODQwM3ww&ixlib=rb-4.1.0&q=85"
                alt="Tech Workspace"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgb(17,17,19)] to-transparent" />
            </div>
          </div>

          {/* Right: Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-sm font-semibold text-[#00D4FF] uppercase tracking-wider">About Me</h2>
              <h3 className="text-4xl md:text-5xl font-bold">From Hardware to High-Level Software</h3>
              <div className="space-y-4 text-[rgb(218,218,218)] text-lg">
                <p>
                  As a Computer Engineering graduate from Louisiana State University, I've built a unique career path that bridges hands-on hardware expertise with enterprise-level software development.
                </p>
                <p>
                  Currently serving as a Software Developer at Louisiana Farm Bureau, I maintain critical enterprise systems using .NET and SQL while acting as a Tier 3 technical escalation point. My background in hardware repair and system diagnostics from LSU gives me a comprehensive understanding of technology from the silicon up.
                </p>
                <p>
                  I thrive in environments that require both deep technical knowledge and the ability to translate complex concepts into practical solutions.
                </p>
              </div>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-3 gap-4">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="p-4 bg-[rgb(26,28,30)] border border-[rgba(255,255,255,0.1)] rounded-xl hover:border-[#00D4FF] transition-all group"
                >
                  <div className="text-[#00D4FF] mb-2 group-hover:scale-110 transition-transform">{item.icon}</div>
                  <h4 className="text-sm font-semibold mb-1">{item.title}</h4>
                  <p className="text-xs text-[rgb(161,161,170)]">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;