import { Rocket, Zap, Globe } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function NanoHero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-slate-950 to-slate-950"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-600/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        {/* Stars */}
        <div className="absolute inset-0 opacity-50">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random(),
                animation: `twinkle ${2 + Math.random() * 3}s infinite`,
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 px-4 py-2 rounded-full backdrop-blur-sm">
              <Rocket className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-purple-300">
                Next Generation Space Technology
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-white">Revolutionizing</span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                Space Access
              </span>
            </h1>

            <p className="text-xl text-gray-300 max-w-2xl">
              Building cutting-edge nanosatellites for Earth observation, 
              communications, and scientific research. Making space accessible 
              for everyone.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <button className="group relative bg-gradient-to-r from-purple-600 to-cyan-500 text-white px-8 py-4 rounded-lg overflow-hidden transition-all hover:shadow-2xl hover:shadow-purple-500/50">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Explore Missions
                  <Rocket className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>
              <button className="border-2 border-purple-500/50 text-purple-300 px-8 py-4 rounded-lg hover:bg-purple-500/10 transition-all backdrop-blur-sm">
                Learn More
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  50+
                </div>
                <div className="text-sm text-gray-400">Satellites Launched</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  24/7
                </div>
                <div className="text-sm text-gray-400">Operations</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  15+
                </div>
                <div className="text-sm text-gray-400">Countries</div>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-cyan-500/20 rounded-3xl blur-3xl"></div>
            <div className="relative rounded-3xl overflow-hidden border border-purple-500/20 shadow-2xl shadow-purple-500/20">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1597674758836-c1aca6a8a175?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYXRlbGxpdGUlMjBzcGFjZSUyMGVhcnRoJTIwb3JiaXR8ZW58MXx8fHwxNzcwMzgwNjMxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Satellite in orbit around Earth"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
            </div>
            
            {/* Floating Icons */}
            <div className="absolute -top-6 -right-6 bg-slate-900/80 backdrop-blur-sm border border-purple-500/20 p-4 rounded-2xl shadow-xl">
              <Globe className="w-8 h-8 text-cyan-400" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-slate-900/80 backdrop-blur-sm border border-purple-500/20 p-4 rounded-2xl shadow-xl">
              <Zap className="w-8 h-8 text-purple-400" />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 1; }
        }
      `}</style>
    </section>
  );
}
