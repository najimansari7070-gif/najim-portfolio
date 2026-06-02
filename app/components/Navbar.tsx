"use client";

import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className="
      fixed
      top-0
      left-0
      w-full
      z-50
      bg-black/70
      backdrop-blur-xl
      border-b
      border-purple-500/20
      "
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#hero"
          className="
          text-2xl
          md:text-3xl
          font-extrabold
          bg-gradient-to-r
          from-purple-400
          via-white
          to-cyan-400
          bg-clip-text
          text-transparent
          "
        >
          Najim Ansari
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="
              text-gray-300
              hover:text-purple-400
              transition-all
              duration-300
              "
            >
              {link.name}
            </a>
          ))}

          <a
            href="/resume/resume.pdf"
            download
            className="
            px-5
            py-2
            rounded-xl
            bg-gradient-to-r
            from-purple-600
            to-violet-600
            text-white
            font-medium
            hover:scale-105
            transition-all
            duration-300
            "
          >
            Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white text-2xl"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="
          md:hidden
          bg-black/95
          backdrop-blur-xl
          border-t
          border-purple-500/20
          "
        >
          <div className="flex flex-col items-center py-6 gap-6">

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="
                text-gray-300
                hover:text-purple-400
                transition-all
                duration-300
                text-lg
                "
              >
                {link.name}
              </a>
            ))}

            <a
              href="/resume/resume.pdf"
              download
              className="
              px-5
              py-2
              rounded-xl
              bg-gradient-to-r
              from-purple-600
              to-violet-600
              text-white
              font-medium
              "
            >
              Resume
            </a>

          </div>
        </div>
      )}
    </nav>
  );
}