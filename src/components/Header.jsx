import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[rgb(17,17,19)]/95 backdrop-blur-md border-b border-[rgba(255,255,255,0.1)]' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="text-2xl font-bold text-white hover:text-[#00D4FF] transition-colors">
            JBC<span className="text-[#00D4FF]">.</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="text-[rgb(218,218,218)] hover:text-[#00D4FF] transition-colors text-sm font-medium"
              >
                {item.label}
              </a>
            ))}
            <Button
              onClick={(e) => scrollToSection(e, '#contact')}
              className="bg-[#00D4FF] hover:bg-[#00B8E6] text-[rgb(17,17,19)] font-semibold rounded-xl px-6"
            >
              Let's Talk
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="text-[rgb(218,218,218)] hover:text-[#00D4FF] transition-colors text-sm font-medium"
              >
                {item.label}
              </a>
            ))}
            <Button
              onClick={(e) => scrollToSection(e, '#contact')}
              className="bg-[#00D4FF] hover:bg-[#00B8E6] text-[rgb(17,17,19)] font-semibold rounded-xl"
            >
              Let's Talk
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;