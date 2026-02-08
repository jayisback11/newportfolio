import React from "react";
import { Github, Linkedin, Youtube, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Navigation",
      links: [
        { label: "About", href: "#about" },
        { label: "Skills", href: "#skills" },
        { label: "Experience", href: "#experience" },
        { label: "Projects", href: "#projects" },
      ],
    },
    {
      title: "Connect",
      links: [
        { label: "GitHub", href: "https://github.com/jayisback11" },
        {
          label: "LinkedIn",
          href: "https://www.linkedin.com/in/jay-crisostomo-5562251a8/",
        },
        { label: "YouTube", href: "https://www.youtube.com/@notahacker30" },
        { label: "Email", href: "mailto:jaycris2000@gmail.com" },
      ],
    },
  ];

  const socialLinks = [
    {
      icon: <Github size={20} />,
      href: "https://github.com/jayisback11",
      label: "GitHub",
    },
    {
      icon: <Linkedin size={20} />,
      href: "https://www.linkedin.com/in/jay-crisostomo-5562251a8/",
      label: "LinkedIn",
    },
    {
      icon: <Youtube size={20} />,
      href: "https://www.youtube.com/@notahacker30",
      label: "YouTube",
    },
  ];

  return (
    <footer className="bg-[rgb(26,28,30)] border-t border-[rgba(255,255,255,0.1)] mt-24">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2 space-y-4">
            <a
              href="#"
              className="text-3xl font-bold text-white hover:text-[#00D4FF] transition-colors inline-block"
            >
              JBC<span className="text-[#00D4FF]">.</span>
            </a>
            <p className="text-[rgb(218,218,218)] max-w-md">
              Software Developer & Computer Engineer bridging hardware expertise
              with enterprise-level software development.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-[rgb(38,40,42)] flex items-center justify-center text-[rgb(161,161,170)] hover:bg-[#00D4FF] hover:text-[rgb(17,17,19)] transition-all hover:-translate-y-1"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h4 className="text-lg font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-[rgb(218,218,218)] hover:text-[#00D4FF] transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-[rgba(255,255,255,0.1)] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[rgb(161,161,170)] text-sm">
            © {currentYear} Jay Bautista Crisostomo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
