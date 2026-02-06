import { Telescope, Radio, Globe, Camera, Wifi, Database } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const missions = [
  {
    id: 1,
    name: "EarthWatch-1",
    category: "Earth Observation",
    status: "Active",
    icon: Camera,
    image: "https://images.unsplash.com/photo-1597674758836-c1aca6a8a175?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlYXJ0aCUyMGZyb20lMjBzcGFjZSUyMGJsdWUlMjBwbGFuZXR8ZW58MXx8fHwxNzcwMzgwNjM0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "High-resolution imaging for climate monitoring and disaster response.",
    specs: ["Resolution: 3m", "Orbit: 500km SSO", "Launch: 2024"],
  },
  {
    id: 2,
    name: "SkyLink-Alpha",
    category: "Communications",
    status: "Active",
    icon: Radio,
    image: "https://images.unsplash.com/photo-1768283808210-41196886ebf4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGFjZSUyMHN0YXRpb24lMjBvcmJpdCUyMGVhcnRofGVufDF8fHx8MTc3MDMwODYwNXww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "IoT connectivity for remote areas and maritime applications.",
    specs: ["Frequency: S-Band", "Coverage: Global", "Launched: 2023"],
  },
  {
    id: 3,
    name: "StarScope-2",
    category: "Scientific Research",
    status: "In Development",
    icon: Telescope,
    image: "https://images.unsplash.com/photo-1597674758836-c1aca6a8a175?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGFjZSUyMHRlbGVzY29wZSUyMGFzdHJvbm9teXxlbnwxfHx8fDE3NzAzODA2MzV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Studying cosmic rays and space weather phenomena.",
    specs: ["Payload: 2kg", "Mission: 2 years", "Launch: Q2 2026"],
  },
  {
    id: 4,
    name: "OceanNet-3",
    category: "Environmental",
    status: "Active",
    icon: Globe,
    image: "https://images.unsplash.com/photo-1762290899574-7a628ca71587?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2NrZXQlMjBsYXVuY2glMjBzcGFjZSUyMG1pc3Npb258ZW58MXx8fHwxNzcwMzYwMTgzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Monitoring ocean temperatures and tracking marine ecosystems.",
    specs: ["Sensors: Multispectral", "Data: 50GB/day", "Launched: 2025"],
  },
  {
    id: 5,
    name: "DataRelay-X",
    category: "Communications",
    status: "In Development",
    icon: Wifi,
    image: "https://images.unsplash.com/photo-1597674758836-c1aca6a8a175?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pY2F0aW9uJTIwc2F0ZWxsaXRlJTIwbmV0d29ya3xlbnwxfHx8fDE3NzAzODA2MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Inter-satellite laser communication demonstration mission.",
    specs: ["Data Rate: 10 Gbps", "Range: 5000km", "Launch: 2026"],
  },
  {
    id: 6,
    name: "CloudDB-1",
    category: "Technology Demo",
    status: "Planning",
    icon: Database,
    image: "https://images.unsplash.com/photo-1768283808210-41196886ebf4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGFjZSUyMHN0YXRpb24lMjBvcmJpdCUyMGVhcnRofGVufDF8fHx8MTc3MDMwODYwNXww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Testing edge computing and AI processing in orbit.",
    specs: ["Storage: 1TB SSD", "Processor: AI Chip", "Launch: 2027"],
  },
];

const statusColors = {
  Active: "bg-green-500/20 text-green-400 border-green-500/30",
  "In Development": "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
  Planning: "bg-blue-500/20 text-blue-400 border-blue-500/30",
};

export function NanoMissions() {
  return (
    <section id="missions" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
            <Telescope className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-purple-300">Our Missions</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="text-white">Active & Upcoming</span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Space Missions
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Our constellation of nanosatellites is transforming how we observe Earth,
            communicate globally, and conduct scientific research in space.
          </p>
        </div>

        {/* Missions Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {missions.map((mission) => {
            const Icon = mission.icon;
            return (
              <div
                key={mission.id}
                className="group relative bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all hover:shadow-2xl hover:shadow-purple-500/20"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={mission.image}
                    alt={mission.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-800 via-slate-800/50 to-transparent"></div>
                  
                  {/* Status Badge */}
                  <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium border backdrop-blur-sm ${statusColors[mission.status as keyof typeof statusColors]}`}>
                    {mission.status}
                  </div>

                  {/* Icon */}
                  <div className="absolute bottom-4 left-4 bg-gradient-to-r from-purple-600 to-cyan-500 p-3 rounded-xl">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <div className="text-sm text-purple-400 mb-1">
                      {mission.category}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {mission.name}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {mission.description}
                    </p>
                  </div>

                  {/* Specs */}
                  <div className="space-y-1">
                    {mission.specs.map((spec, index) => (
                      <div
                        key={index}
                        className="text-xs text-gray-500 flex items-center gap-2"
                      >
                        <div className="w-1 h-1 bg-purple-500 rounded-full"></div>
                        {spec}
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <button className="w-full bg-slate-700/50 hover:bg-gradient-to-r hover:from-purple-600 hover:to-cyan-500 text-gray-300 hover:text-white py-2 rounded-lg transition-all text-sm font-medium">
                    Learn More
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
