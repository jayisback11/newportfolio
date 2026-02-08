import React, { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Mail, MapPin, Phone, Send, Loader2 } from "lucide-react";
import { useToast } from "../hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // REPLACE 'YOUR_FORM_ID_HERE' with your actual Formspree ID
      const response = await fetch("https://formspree.io/f/xqedazay", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Message Sent!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Failed to send");
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Something went wrong. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "jaycris2000@gmail.com",
      href: "mailto:jaycris2000@gmail.com",
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+1 (225) 421-5949",
      href: "tel:+12254215949",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "Baton Rouge, LA",
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-[#00D4FF] uppercase tracking-wider mb-4">
            Contact
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-4">
            Let's Work Together
          </h3>
          <p className="text-[rgb(218,218,218)] text-lg max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? Get in touch!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-6 bg-[rgb(26,28,30)] border border-[rgba(255,255,255,0.1)] rounded-xl hover:border-[#00D4FF] transition-all group"
                >
                  <div className="w-12 h-12 rounded-lg bg-[rgba(0,212,255,0.1)] flex items-center justify-center text-[#00D4FF] group-hover:bg-[#00D4FF] group-hover:text-[rgb(17,17,19)] transition-all">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-sm text-[rgb(161,161,170)] mb-1">
                      {info.label}
                    </p>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-lg font-medium text-[rgb(218,218,218)] hover:text-[#00D4FF] transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-lg font-medium text-[rgb(218,218,218)]">
                        {info.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 bg-gradient-to-br from-[rgba(0,212,255,0.1)] to-transparent border border-[rgba(0,212,255,0.3)] rounded-xl">
              <h4 className="text-xl font-bold mb-2">Education</h4>
              <p className="text-[rgb(218,218,218)] mb-1">
                Bachelor of Science in Computer Engineering
              </p>
              <p className="text-[rgb(161,161,170)] text-sm mb-1">
                Minor in Computer Science
              </p>
              <p className="text-[rgb(161,161,170)] text-sm">
                Louisiana State University • GPA: 3.2
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-8 bg-[rgb(26,28,30)] border border-[rgba(255,255,255,0.1)] rounded-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2 text-[rgb(218,218,218)]"
                >
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="bg-[rgb(38,40,42)] border-[rgb(63,63,63)] focus:border-[#00D4FF] rounded-xl"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2 text-[rgb(218,218,218)]"
                >
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                  className="bg-[rgb(38,40,42)] border-[rgb(63,63,63)] focus:border-[#00D4FF] rounded-xl"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2 text-[rgb(218,218,218)]"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell me about your project..."
                  rows={6}
                  className="bg-[rgb(38,40,42)] border-[rgb(63,63,63)] focus:border-[#00D4FF] rounded-xl resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#00D4FF] hover:bg-[#00B8E6] text-[rgb(17,17,19)] font-semibold rounded-xl py-6 text-lg group"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send
                      className="ml-2 group-hover:translate-x-1 transition-transform"
                      size={20}
                    />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;