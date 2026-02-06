import { Mail, Phone, MapPin, Send } from "lucide-react";

export function Contact() {
  return (
    <section id="contacto" className="py-20 px-4 sm:px-6 lg:px-8 bg-accent/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - Contact Info */}
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full mb-4">
              <Mail className="w-4 h-4 text-blue-600" />
              <span className="text-sm text-blue-600 font-medium">
                Contáctanos
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              ¿Listo para{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Proteger tu Espacio?
              </span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Contáctanos hoy y recibe una cotización personalizada sin
              compromiso. Nuestro equipo de expertos está listo para ayudarte.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Teléfono</h3>
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  <p className="text-muted-foreground">+1 (555) 987-6543</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Email</h3>
                  <p className="text-muted-foreground">ventas@coscam.com</p>
                  <p className="text-muted-foreground">soporte@coscam.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Oficina</h3>
                  <p className="text-muted-foreground">
                    Av. Principal 123, Piso 5
                  </p>
                  <p className="text-muted-foreground">
                    Ciudad, País - CP 12345
                  </p>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="mt-8 p-6 bg-white rounded-2xl border border-border">
              <h3 className="font-bold mb-4">Horario de Atención</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">
                    Lunes - Viernes:
                  </span>
                  <span className="font-medium">8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sábados:</span>
                  <span className="font-medium">9:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Domingos:</span>
                  <span className="font-medium">Cerrado</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold mb-6">
              Solicita una Cotización
            </h3>
            <form className="space-y-4">
              <div>
                <label className="block mb-2">Nombre Completo</label>
                <input
                  type="text"
                  placeholder="Juan Pérez"
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              <div>
                <label className="block mb-2">Email</label>
                <input
                  type="email"
                  placeholder="juan@ejemplo.com"
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              <div>
                <label className="block mb-2">Teléfono</label>
                <input
                  type="tel"
                  placeholder="+1 (555) 123-4567"
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              <div>
                <label className="block mb-2">Tipo de Servicio</label>
                <select className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600">
                  <option>Residencial</option>
                  <option>Comercial</option>
                  <option>Industrial</option>
                  <option>Otro</option>
                </select>
              </div>

              <div>
                <label className="block mb-2">Mensaje</label>
                <textarea
                  placeholder="Cuéntanos sobre tu proyecto..."
                  rows={4}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-4 rounded-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 font-medium"
              >
                Enviar Solicitud
                <Send className="w-5 h-5" />
              </button>

              <p className="text-sm text-muted-foreground text-center">
                Te responderemos en menos de 24 horas
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
