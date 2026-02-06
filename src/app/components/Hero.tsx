import { Shield, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section id="inicio" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full">
              <Shield className="w-4 h-4 text-blue-600" />
              <span className="text-sm text-blue-600 font-medium">
                Seguridad de Alta Tecnología
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Protege lo que{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                más valoras
              </span>
            </h1>

            <p className="text-lg text-muted-foreground">
              Sistemas de vigilancia CCTV de última generación con tecnología
              4K, visión nocturna avanzada y monitoreo en tiempo real desde
              cualquier lugar del mundo.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 group">
                Solicitar Cotización
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-border px-8 py-4 rounded-lg hover:bg-accent transition-all">
                Ver Productos
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div>
                <div className="text-3xl font-bold text-blue-600">10K+</div>
                <div className="text-sm text-muted-foreground">
                  Clientes Satisfechos
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">24/7</div>
                <div className="text-sm text-muted-foreground">
                  Soporte Técnico
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">15+</div>
                <div className="text-sm text-muted-foreground">
                  Años de Experiencia
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-500/20 rounded-3xl blur-3xl"></div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1765121689322-6befc57dc8db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWN1cml0eSUyMGNhbWVyYSUyMHN1cnZlaWxsYW5jZSUyMHN5c3RlbXxlbnwxfHx8fDE3NzAxNzQ5NDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Sistema de cámaras de seguridad CCTV"
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
