import { Camera, Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="bg-gradient-to-br from-blue-600 to-cyan-500 p-2 rounded-lg">
              <Camera className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              CosCam
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#inicio" className="text-foreground hover:text-blue-600 transition-colors">
              Inicio
            </a>
            <a href="#productos" className="text-foreground hover:text-blue-600 transition-colors">
              Productos
            </a>
            <a href="#caracteristicas" className="text-foreground hover:text-blue-600 transition-colors">
              Características
            </a>
            <a href="#contacto" className="text-foreground hover:text-blue-600 transition-colors">
              Contacto
            </a>
            <button className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all">
              Cotizar
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
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
              href="#inicio"
              className="text-foreground hover:text-blue-600 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Inicio
            </a>
            <a
              href="#productos"
              className="text-foreground hover:text-blue-600 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Productos
            </a>
            <a
              href="#caracteristicas"
              className="text-foreground hover:text-blue-600 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Características
            </a>
            <a
              href="#contacto"
              className="text-foreground hover:text-blue-600 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contacto
            </a>
            <button className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all">
              Cotizar
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}
