import React from "react";
import { Github, Linkedin, Youtube, Download, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import jayImage from "../files/images/jay.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,212,255,0.05)] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block px-4 py-2 bg-[rgba(0,212,255,0.1)] border border-[rgba(0,212,255,0.3)] rounded-full">
                <span className="text-[#00D4FF] text-sm font-medium">
                  Software Developer & Computer Engineer
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Hi, I'm{" "}
                <span className="text-[#00D4FF]">Jay Bautista Crisostomo</span>
              </h1>
              <p className="text-xl text-[rgb(218,218,218)] max-w-2xl">
                Bridging the gap between complex hardware diagnostics and
                enterprise-level software development.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a href="#experience" className="inline-block">
                <Button className="bg-[#00D4FF] hover:bg-[#00B8E6] text-[rgb(17,17,19)] font-semibold rounded-xl px-8 py-6 text-lg group">
                  View My Work
                  <ArrowRight
                    className="ml-2 group-hover:translate-x-1 transition-transform"
                    size={20}
                  />
                </Button>
              </a>
              <a
                href="/resume.pdf" // Path relative to the public folder
                download="Jay_Crisostomo_Resume.pdf" // The name the file will have when downloaded
                className="inline-block" // Ensures the link doesn't break the button layout
              >
                <Button
                  variant="outline"
                  className="border-2 border-[rgb(63,63,63)] hover:border-[#00D4FF] hover:bg-[rgba(0,212,255,0.1)] text-white rounded-xl px-8 py-6 text-lg"
                >
                  <Download className="mr-2" size={20} />
                  Download Resume
                </Button>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com/jayisback11"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-[rgb(38,40,42)] flex items-center justify-center text-[rgb(161,161,170)] hover:bg-[#00D4FF] hover:text-[rgb(17,17,19)] transition-all hover:-translate-y-1"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/jay-crisostomo-5562251a8/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-[rgb(38,40,42)] flex items-center justify-center text-[rgb(161,161,170)] hover:bg-[#00D4FF] hover:text-[rgb(17,17,19)] transition-all hover:-translate-y-1"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://www.youtube.com/@notahacker30"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-[rgb(38,40,42)] flex items-center justify-center text-[rgb(161,161,170)] hover:bg-[#00D4FF] hover:text-[rgb(17,17,19)] transition-all hover:-translate-y-1"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00D4FF]/20 to-transparent rounded-3xl" />
              <img
                src={jayImage}
                alt="Jay Bautista Crisostomo"
                className="relative z-10 w-full h-full object-cover rounded-3xl border border-[rgba(255,255,255,0.1)]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
