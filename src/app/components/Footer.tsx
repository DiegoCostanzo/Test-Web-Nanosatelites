import { Camera, Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-gradient-to-br from-blue-600 to-cyan-500 p-2 rounded-lg">
                <Camera className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-semibold">CosCam</span>
            </div>
            <p className="text-sm text-primary-foreground/80 mb-4">
              Líder en soluciones de vigilancia y seguridad CCTV con más de 15
              años de experiencia protegiendo lo que más valoras.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-9 h-9 bg-primary-foreground/10 hover:bg-gradient-to-br hover:from-blue-600 hover:to-cyan-500 rounded-lg flex items-center justify-center transition-all"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-primary-foreground/10 hover:bg-gradient-to-br hover:from-blue-600 hover:to-cyan-500 rounded-lg flex items-center justify-center transition-all"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-primary-foreground/10 hover:bg-gradient-to-br hover:from-blue-600 hover:to-cyan-500 rounded-lg flex items-center justify-center transition-all"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-primary-foreground/10 hover:bg-gradient-to-br hover:from-blue-600 hover:to-cyan-500 rounded-lg flex items-center justify-center transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-primary-foreground/10 hover:bg-gradient-to-br hover:from-blue-600 hover:to-cyan-500 rounded-lg flex items-center justify-center transition-all"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-bold mb-4">Productos</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  Cámaras Domo
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  Cámaras Bullet
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  Cámaras PTZ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  Sistemas NVR
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  Accesorios
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold mb-4">Servicios</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  Instalación
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  Mantenimiento
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  Monitoreo 24/7
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  Consultoría
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  Capacitación
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold mb-4">Empresa</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  Nosotros
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  Casos de Éxito
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  Trabaja con Nosotros
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
            <p>© 2026 CosCam. Todos los derechos reservados.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-cyan-400 transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="hover:text-cyan-400 transition-colors">
                Términos de Servicio
              </a>
              <a href="#" className="hover:text-cyan-400 transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
