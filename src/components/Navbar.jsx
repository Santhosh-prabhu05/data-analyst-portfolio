
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-950 text-white shadow-lg z-50">

      {/* Navbar Container */}
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo / Name */}
       <a
  href="#home"
  className="text-2xl font-bold hover:text-blue-400 transition"
  onClick={() => setMenuOpen(false)}
>
  DA
</a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">

          <a
            href="#home"
            className="hover:text-blue-400 transition"
          >
            Home
          </a>

          <a
            href="#about"
            className="hover:text-blue-400 transition"
          >
            About
          </a>

          <a
            href="#skills"
            className="hover:text-blue-400 transition"
          >
            Skills
          </a>

          <a
            href="#projects"
            className="hover:text-blue-400 transition"
          >
            Projects
          </a>

          <a
            href="#resume"
            className="hover:text-blue-400 transition"
          >
            Resume
          </a>

          <a
            href="#contact"
            className="hover:text-blue-400 transition"
          >
            Contact
          </a>

        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-3xl font-bold hover:text-blue-400 transition"
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="md:hidden bg-gray-950 border-t border-gray-800">

          <div className="px-6 py-4">

            <a
              href="#home"
              onClick={() => setMenuOpen(false)}
              className="block py-3 text-lg font-medium border-b border-gray-800 hover:text-blue-400"
            >
              Home
            </a>

            <a
              href="#about"
              onClick={() => setMenuOpen(false)}
              className="block py-3 text-lg font-medium border-b border-gray-800 hover:text-blue-400"
            >
              About
            </a>

            <a
              href="#skills"
              onClick={() => setMenuOpen(false)}
              className="block py-3 text-lg font-medium border-b border-gray-800 hover:text-blue-400"
            >
              Skills
            </a>

            <a
              href="#projects"
              onClick={() => setMenuOpen(false)}
              className="block py-3 text-lg font-medium border-b border-gray-800 hover:text-blue-400"
            >
              Projects
            </a>

            <a
              href="#resume"
              onClick={() => setMenuOpen(false)}
              className="block py-3 text-lg font-medium border-b border-gray-800 hover:text-blue-400"
            >
              Resume
            </a>

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="block py-3 text-lg font-medium hover:text-blue-400"
            >
              Contact
            </a>

          </div>

        </div>
      )}

    </nav>
  );
}

export default Navbar;

