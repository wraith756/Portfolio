"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FaLinkedin, FaGithub, FaWhatsapp, FaPhone } from "react-icons/fa";
import { useState } from "react";
import { Menu, X, Home, User, Code2, FolderGit2, Mail } from "lucide-react";

export default function Hero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", icon: Home, href: "#home" },
    { name: "About", icon: User, href: "#about" },
    { name: "Skills", icon: Code2, href: "#skills" },
    { name: "Projects", icon: FolderGit2, href: "#projects" },
    { name: "Contact", icon: Mail, href: "#contact" },
  ];

  const socialLinks = [
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/anurag-sharma-454750251/",
      label: "LinkedIn",
    },
    { icon: FaGithub, href: "https://github.com/wraith756", label: "GitHub" },
    { icon: FaWhatsapp, href: "https://wa.me/9798318799", label: "WhatsApp" },
    { icon: FaPhone, href: "tel:+919798318799", label: "Phone" },
  ];

  const techStack = [
    "Next.js",
    "React",
    "Node.js",
    "MongoDB",
    "AWS",
    "TypeScript",
    "JavaScript",
    "Python",
    "FastAPI",
    "PostgreSQL",
    "NLP",
  ];

  const scrollToSection = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative min-h-screen w-full overflow-hidden bg-black"
      id="home"
    >
      {/* Modern Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-gray-900">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-yellow-500/5 rounded-full blur-[80px]" />
      </div>

      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative z-10"
            >
              <Image
                src="/signature.png"
                alt="Logo"
                width={150}
                height={50}
                className="h-10 w-auto"
                priority
              />
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-gray-300 hover:text-yellow-400 transition-colors text-sm font-medium"
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-black/95 backdrop-blur-md border-t border-white/10"
          >
            <div className="flex flex-col items-center py-8 gap-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-gray-300 hover:text-yellow-400 transition-colors py-2"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            {/* Greeting Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse" />
              <span className="text-yellow-500 text-sm font-medium">
                Available for work
              </span>
            </div>

            {/* Title */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-4">
              Anurag
              <span className="text-yellow-500"> Sharma</span>
            </h1>

            {/* Subtitle */}
            <div className="text-xl sm:text-2xl text-gray-300 mb-6">
              Full Stack Developer
            </div>

            {/* Description */}
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8">
              Computer Science student passionate about building scalable web
              applications with modern technologies. Specialized in Next.js,
              MERN stack, and cloud architecture.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button
                onClick={() => window.open("/resume.pdf")}
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-6 rounded-full transition-all duration-300 hover:scale-105"
              >
                Download CV
              </Button>
              <Button
                onClick={() => scrollToSection("#contact")}
                variant="outline"
                className="border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black rounded-full px-8 py-6 font-semibold transition-all duration-300"
              >
                Contact Me
              </Button>
            </div>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
              {techStack.map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="px-3 py-1.5 text-xs sm:text-sm rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:border-yellow-500/50 transition-colors"
                >
                  {tech}
                </motion.span>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start mt-8">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    whileHover={{ y: -3 }}
                    className="w-10 h-10 rounded-full bg-white/5 hover:bg-yellow-500 flex items-center justify-center text-gray-400 hover:text-black transition-all duration-300"
                  >
                    <Icon size={18} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative flex justify-center items-center"
          >
            <div className="relative">
              {/* Animated Border Ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-600 blur-2xl opacity-20 animate-pulse" />

              {/* Main Image Container */}
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-yellow-500/30 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
                <Image
                  src="/photo.png"
                  alt="Anurag Sharma"
                  width={400}
                  height={400}
                  className="object-cover w-full h-full scale-110"
                  priority
                />
              </div>

              {/* Floating Elements */}
              {/* <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-5 -right-5 w-16 h-16 rounded-full bg-yellow-500/20 backdrop-blur-sm flex items-center justify-center border border-yellow-500/30"
              >
                <span className="text-2xl">🚀</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-5 -left-5 w-12 h-12 rounded-full bg-yellow-500/20 backdrop-blur-sm flex items-center justify-center border border-yellow-500/30"
              >
                <span className="text-xl">💻</span>
              </motion.div> */}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-gray-500">Scroll</span>
          <div className="w-5 h-8 border-2 border-gray-500 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-2 bg-yellow-500 rounded-full mt-1"
            />
          </div>
        </div>
      </motion.div> */}
    </section>
  );
}
