import { Camera, Eye, Wifi, Shield, Check } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const products = [
  {
    id: 1,
    name: "CosCam Dome 4K Pro",
    category: "Cámara Domo",
    price: "$299",
    image: "https://images.unsplash.com/photo-1765121689322-6befc57dc8db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb21lJTIwc2VjdXJpdHklMjBjYW1lcmElMjB3aGl0ZXxlbnwxfHx8fDE3NzAyMDY0NjF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    features: [
      "Diego Loco",
      "Visión nocturna 30m",
      "Detección de movimiento IA",
      "Audio bidireccional",
    ],
    popular: true,
  },
  {
    id: 2,
    name: "CosCam Bullet Outdoor",
    category: "Cámara Bullet",
    price: "$249",
    image: "https://images.unsplash.com/photo-1592933517548-f65267a96178?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidWxsZXQlMjBjY3R2JTIwY2FtZXJhJTIwb3V0ZG9vcnxlbnwxfHx8fDE3NzAyMDY0NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    features: [
      "Resistente al agua IP67",
      "Resolución 2K QHD",
      "Visión nocturna infrarroja",
      "Almacenamiento en la nube",
    ],
    popular: false,
  },
  {
    id: 3,
    name: "CosCam PTZ Smart",
    category: "Cámara PTZ",
    price: "$499",
    image: "https://images.unsplash.com/photo-1765121689322-6befc57dc8db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQVFolMjBzZWN1cml0eSUyMGNhbWVyYSUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzAyMDY0NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    features: [
      "Pan 360° y Tilt 90°",
      "Zoom óptico 20x",
      "Seguimiento automático",
      "Control remoto WiFi",
    ],
    popular: false,
  },
  {
    id: 4,
    name: "CosCam Indoor Mini",
    category: "Cámara Interior",
    price: "$149",
    image: "https://images.unsplash.com/photo-1765121689322-6befc57dc8db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWN1cml0eSUyMGNhbWVyYSUyMHN1cnZlaWxsYW5jZSUyMHN5c3RlbXxlbnwxfHx8fDE3NzAxNzQ5NDh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    features: [
      "Diseño compacto",
      "Resolución Full HD",
      "Micrófono integrado",
      "App móvil incluida",
    ],
    popular: false,
  },
  {
    id: 5,
    name: "CosCam NVR 8CH",
    category: "Sistema Completo",
    price: "$899",
    image: "https://images.unsplash.com/photo-1592933517548-f65267a96178?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDQ1RWJTIwY2FtZXJhJTIwaW5zdGFsbGF0aW9uJTIwYnVzaW5lc3N8ZW58MXx8fHwxNzcwMjA2NDYwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    features: [
      "8 canales HD",
      "Disco duro 2TB incluido",
      "Acceso remoto web",
      "4 cámaras incluidas",
    ],
    popular: true,
  },
  {
    id: 6,
    name: "CosCam Wireless Pro",
    category: "Sistema Inalámbrico",
    price: "$699",
    image: "https://images.unsplash.com/photo-1765121689322-6befc57dc8db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzZWN1cml0eSUyMG1vbml0b3JpbmclMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc3MDIwNjQ1OXww&ixlib=rb-4.1.0&q=80&w=1080",
    features: [
      "100% inalámbrico",
      "Batería recargable",
      "Panel solar opcional",
      "Notificaciones push",
    ],
    popular: false,
  },
];

export function Products() {
  return (
    <section id="productos" className="py-20 px-4 sm:px-6 lg:px-8 bg-accent/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full mb-4">
            <Camera className="w-4 h-4 text-blue-600" />
            <span className="text-sm text-blue-600 font-medium">
              Nuestros Productos
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Soluciones de Seguridad para{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Cada Necesidad
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Desde cámaras individuales hasta sistemas completos de vigilancia,
            tenemos la solución perfecta para tu hogar o negocio.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                {product.popular && (
                  <div className="absolute top-4 right-4 z-10 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Popular
                  </div>
                )}
                <ImageWithFallback
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div>
                  <div className="text-sm text-blue-600 font-medium mb-1">
                    {product.category}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                  <div className="text-2xl font-bold text-blue-600">
                    {product.price}
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <Check className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-3 rounded-lg hover:shadow-lg transition-all font-medium">
                  Más Información
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
