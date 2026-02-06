import { Satellite, Mail, Phone, MapPin } from "lucide-react";

export function NanoFooter() {
  return (
    <footer className="bg-slate-950 border-t border-purple-500/20 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-lg blur-sm"></div>
                <div className="relative bg-gradient-to-r from-purple-600 to-cyan-500 p-2 rounded-lg">
                  <Satellite className="w-5 h-5 text-white" />
                </div>
              </div>
              <div>
                <div className="text-lg font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  NanoSpace
                </div>
                <div className="text-xs text-purple-300/60">Nanosatellite Technology</div>
              </div>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Making space accessible through innovative nanosatellite solutions.
              Leading the new space revolution.
            </p>
            <div className="flex gap-2">
              <div className="w-8 h-8 bg-slate-900 border border-purple-500/20 rounded-lg flex items-center justify-center">
                <Mail className="w-4 h-4 text-purple-400" />
              </div>
              <div className="w-8 h-8 bg-slate-900 border border-purple-500/20 rounded-lg flex items-center justify-center">
                <Phone className="w-4 h-4 text-purple-400" />
              </div>
              <div className="w-8 h-8 bg-slate-900 border border-purple-500/20 rounded-lg flex items-center justify-center">
                <MapPin className="w-4 h-4 text-purple-400" />
              </div>
            </div>
          </div>

          {/* Missions */}
          <div>
            <h3 className="text-white font-bold mb-4">Missions</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-purple-400 transition-colors">
                  Earth Observation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition-colors">
                  Communications
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition-colors">
                  Scientific Research
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition-colors">
                  Technology Demo
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition-colors">
                  Active Missions
                </a>
              </li>
            </ul>
          </div>

          {/* Technology */}
          <div>
            <h3 className="text-white font-bold mb-4">Technology</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-purple-400 transition-colors">
                  CubeSat Platform
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition-colors">
                  Payload Integration
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition-colors">
                  Ground Station Network
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition-colors">
                  Mission Operations
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition-colors">
                  Data Services
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-bold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-purple-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition-colors">
                  Our Team
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition-colors">
                  News & Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-purple-500/20">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>© 2026 NanoSpace. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-purple-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-purple-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-purple-400 transition-colors">
                Legal
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
