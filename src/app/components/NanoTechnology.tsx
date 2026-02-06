import {
  Cpu,
  Battery,
  Antenna,
  Shield,
  Sun,
  Zap,
  Thermometer,
  Radio,
  Camera,
} from "lucide-react";

const features = [
  {
    icon: Cpu,
    title: "Advanced Computing",
    description: "Radiation-hardened processors with AI/ML capabilities for on-orbit data processing.",
  },
  {
    icon: Battery,
    title: "Power Systems",
    description: "High-efficiency solar panels and lithium-ion batteries for 24/7 operations.",
  },
  {
    icon: Antenna,
    title: "Communication",
    description: "S-band and UHF transceivers with deployable antennas for global coverage.",
  },
  {
    icon: Shield,
    title: "Radiation Protection",
    description: "Multi-layer shielding to protect electronics from cosmic rays and solar events.",
  },
  {
    icon: Sun,
    title: "Attitude Control",
    description: "Magnetorquers and reaction wheels for precise 3-axis stabilization.",
  },
  {
    icon: Thermometer,
    title: "Thermal Management",
    description: "Passive and active systems to maintain optimal operating temperatures.",
  },
];

const specs = [
  {
    label: "Form Factor",
    value: "3U CubeSat",
    detail: "10 × 10 × 30 cm",
  },
  {
    label: "Mass",
    value: "4.5 kg",
    detail: "Including payload",
  },
  {
    label: "Power",
    value: "12W Average",
    detail: "18W Peak",
  },
  {
    label: "Data Rate",
    value: "Up to 1 Mbps",
    detail: "S-band downlink",
  },
  {
    label: "Orbit",
    value: "LEO 400-600 km",
    detail: "Sun-synchronous",
  },
  {
    label: "Mission Life",
    value: "3-5 Years",
    detail: "Design lifetime",
  },
];

const capabilities = [
  {
    icon: Camera,
    title: "Earth Imaging",
    metrics: ["3m Resolution", "30km Swath", "RGB + NIR"],
  },
  {
    icon: Radio,
    title: "IoT Connectivity",
    metrics: ["1M+ Devices", "Global Coverage", "Low Latency"],
  },
  {
    icon: Zap,
    title: "Scientific Payloads",
    metrics: ["2kg Capacity", "Custom Sensors", "Real-time Data"],
  },
];

export function NanoTechnology() {
  return (
    <>
      {/* Features Section */}
      <section id="technology" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
              <Cpu className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-purple-300">Technology</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="text-white">Cutting-Edge</span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Nanosatellite Systems
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our nanosatellites pack advanced technology into a compact form factor,
              delivering enterprise-grade performance at a fraction of traditional costs.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-slate-900/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6 hover:border-purple-500/50 transition-all hover:shadow-2xl hover:shadow-purple-500/10"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-600/10 to-cyan-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  
                  <div className="relative">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Specifications Grid */}
          <div className="bg-slate-900/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              Technical Specifications
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {specs.map((spec, index) => (
                <div
                  key={index}
                  className="bg-slate-800/50 border border-purple-500/10 rounded-xl p-6 hover:border-purple-500/30 transition-all"
                >
                  <div className="text-sm text-purple-400 mb-2">
                    {spec.label}
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">
                    {spec.value}
                  </div>
                  <div className="text-sm text-gray-500">
                    {spec.detail}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-900 via-slate-900 to-cyan-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-600 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Mission Capabilities
            </h2>
            <p className="text-xl text-purple-200">
              Versatile platforms for diverse applications
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-all"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-6">
                    {capability.title}
                  </h3>
                  <div className="space-y-3">
                    {capability.metrics.map((metric, idx) => (
                      <div
                        key={idx}
                        className="bg-white/5 border border-white/10 rounded-lg py-2 px-4 text-purple-200"
                      >
                        {metric}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
