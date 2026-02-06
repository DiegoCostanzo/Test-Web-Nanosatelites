import { Satellite, Menu, X } from "lucide-react";
import { useState } from "react";

export function NanoHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-lg blur-sm"></div>
              <div className="relative bg-gradient-to-r from-purple-600 to-cyan-500 p-2 rounded-lg">
                <Satellite className="w-6 h-6 text-white" />
              </div>
            </div>
            <div>
              <div className="text-xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Costanzo Bergonzi
              </div>
              <div className="text-xs text-purple-300/60">Nanosatellite Technology Development</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-gray-300 hover:text-purple-400 transition-colors">
              Home
            </a>
            <a href="#missions" className="text-gray-300 hover:text-purple-400 transition-colors">
              Missions
            </a>
            <a href="#technology" className="text-gray-300 hover:text-purple-400 transition-colors">
              Technology
            </a>
            <a href="#about" className="text-gray-300 hover:text-purple-400 transition-colors">
              About
            </a>
            <button className="bg-gradient-to-r from-purple-600 to-cyan-500 text-white px-6 py-2 rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all">
              Contact Us
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 flex flex-col gap-4">
            <a
              href="#home"
              className="text-gray-300 hover:text-purple-400 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#missions"
              className="text-gray-300 hover:text-purple-400 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Missions
            </a>
            <a
              href="#technology"
              className="text-gray-300 hover:text-purple-400 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Technology
            </a>
            <a
              href="#about"
              className="text-gray-300 hover:text-purple-400 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <button className="bg-gradient-to-r from-purple-600 to-cyan-500 text-white px-6 py-3 rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all">
              Contact Us
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}
