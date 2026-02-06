import {
  Shield,
  Eye,
  Wifi,
  Cloud,
  Bell,
  Lock,
  Smartphone,
  Headphones,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Seguridad Garantizada",
    description:
      "Tecnología de encriptación de grado militar para proteger tus datos y privacidad.",
  },
  {
    icon: Eye,
    title: "Visión Nocturna HD",
    description:
      "Imágenes nítidas incluso en total oscuridad con tecnología infrarroja avanzada.",
  },
  {
    icon: Wifi,
    title: "Conexión WiFi",
    description:
      "Acceso remoto desde cualquier lugar del mundo a través de tu smartphone.",
  },
  {
    icon: Cloud,
    title: "Almacenamiento en la Nube",
    description:
      "Guarda tus grabaciones de forma segura en la nube con planes flexibles.",
  },
  {
    icon: Bell,
    title: "Alertas Inteligentes",
    description:
      "Notificaciones instantáneas cuando se detecta movimiento o actividad inusual.",
  },
  {
    icon: Lock,
    title: "Instalación Profesional",
    description:
      "Equipo técnico certificado para una instalación perfecta y sin complicaciones.",
  },
  {
    icon: Smartphone,
    title: "App Móvil Intuitiva",
    description:
      "Controla todas tus cámaras desde una sola aplicación fácil de usar.",
  },
  {
    icon: Headphones,
    title: "Soporte 24/7",
    description:
      "Asistencia técnica disponible en todo momento para resolver cualquier duda.",
  },
  {
    icon: Zap,
    title: "Detección IA",
    description:
      "Inteligencia artificial para distinguir personas, vehículos y mascotas.",
  },
];

const benefits = [
  {
    number: "01",
    title: "Tranquilidad Total",
    description:
      "Monitorea tu hogar o negocio en tiempo real, sin importar dónde estés.",
  },
  {
    number: "02",
    title: "Prevención de Incidentes",
    description:
      "Disuade a intrusos y previene robos con sistemas de vigilancia visibles.",
  },
  {
    number: "03",
    title: "Evidencia Confiable",
    description:
      "Grabaciones en alta definición que sirven como prueba ante cualquier eventualidad.",
  },
  {
    number: "04",
    title: "Ahorro en Seguros",
    description:
      "Muchas aseguradoras ofrecen descuentos por contar con sistemas de seguridad.",
  },
];

export function Features() {
  return (
    <>
      {/* Features Section */}
      <section
        id="caracteristicas"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full mb-4">
              <Zap className="w-4 h-4 text-blue-600" />
              <span className="text-sm text-blue-600 font-medium">
                Características
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Tecnología de{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Vanguardia
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Nuestros sistemas de CCTV incluyen las últimas innovaciones en
              seguridad y vigilancia.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="p-6 rounded-2xl border border-border hover:border-blue-600 hover:shadow-xl transition-all group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-cyan-500 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                ¿Por Qué Elegir CosCam?
              </h2>
              <p className="text-lg text-blue-50 mb-8">
                Más que cámaras de seguridad, ofrecemos paz mental y protección
                integral para lo que más te importa. Con más de 15 años de
                experiencia, somos líderes en soluciones de vigilancia.
              </p>

              <div className="space-y-6">
                {benefits.map((benefit) => (
                  <div key={benefit.number} className="flex gap-4">
                    <div className="text-4xl font-bold text-white/30">
                      {benefit.number}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-blue-50">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                <div className="text-4xl font-bold mb-2">10,000+</div>
                <div className="text-blue-50">Sistemas Instalados</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                <div className="text-4xl font-bold mb-2">98%</div>
                <div className="text-blue-50">Satisfacción</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                <div className="text-4xl font-bold mb-2">24/7</div>
                <div className="text-blue-50">Monitoreo</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                <div className="text-4xl font-bold mb-2">5 años</div>
                <div className="text-blue-50">Garantía</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
