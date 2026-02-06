import { Mail, MapPin, Phone, Send, Linkedin, Twitter, Github } from "lucide-react";

export function NanoAbout() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - Company Info */}
          <div>
            <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
              <Mail className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-purple-300">About Us</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              <span className="text-white">Pioneering the</span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                New Space Era
              </span>
            </h2>
            
            <p className="text-lg text-gray-400 mb-6">
              NanoSpace is at the forefront of the nanosatellite revolution, making space
              technology accessible and affordable. Our mission is to democratize access
              to space through innovative, cost-effective satellite solutions.
            </p>

            <p className="text-gray-400 mb-8">
              Founded in 2020, we've launched over 50 nanosatellites serving customers
              across 15 countries. Our team of aerospace engineers and space enthusiasts
              is dedicated to pushing the boundaries of what's possible with small satellites.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-bold mb-1">Headquarters</h3>
                  <p className="text-gray-400">123 Space Tech Boulevard</p>
                  <p className="text-gray-400">Silicon Valley, CA 94025, USA</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-bold mb-1">Contact</h3>
                  <p className="text-gray-400">+1 (555) 123-4567</p>
                  <p className="text-gray-400">contact@nanospace.tech</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-bold mb-1">Business Hours</h3>
                  <p className="text-gray-400">Monday - Friday: 9:00 AM - 6:00 PM PST</p>
                  <p className="text-gray-400">24/7 Mission Operations Center</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="#"
                className="w-12 h-12 bg-slate-800 border border-purple-500/20 hover:border-purple-500 rounded-xl flex items-center justify-center transition-all hover:bg-gradient-to-r hover:from-purple-600 hover:to-cyan-500 group"
              >
                <Twitter className="w-5 h-5 text-gray-400 group-hover:text-white" />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-slate-800 border border-purple-500/20 hover:border-purple-500 rounded-xl flex items-center justify-center transition-all hover:bg-gradient-to-r hover:from-purple-600 hover:to-cyan-500 group"
              >
                <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-white" />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-slate-800 border border-purple-500/20 hover:border-purple-500 rounded-xl flex items-center justify-center transition-all hover:bg-gradient-to-r hover:from-purple-600 hover:to-cyan-500 group"
              >
                <Github className="w-5 h-5 text-gray-400 group-hover:text-white" />
              </a>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className="bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">
              Get in Touch
            </h3>
            <p className="text-gray-400 mb-6">
              Interested in launching a nanosatellite mission? Let's discuss your project.
            </p>
            
            <form className="space-y-4">
              <div>
                <label className="block text-white mb-2">Full Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-4 py-3 bg-slate-900/50 border border-purple-500/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-500"
                />
              </div>

              <div>
                <label className="block text-white mb-2">Email Address</label>
                <input
                  type="email"
                  placeholder="john@company.com"
                  className="w-full px-4 py-3 bg-slate-900/50 border border-purple-500/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-500"
                />
              </div>

              <div>
                <label className="block text-white mb-2">Company</label>
                <input
                  type="text"
                  placeholder="Your Company"
                  className="w-full px-4 py-3 bg-slate-900/50 border border-purple-500/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-500"
                />
              </div>

              <div>
                <label className="block text-white mb-2">Project Type</label>
                <select className="w-full px-4 py-3 bg-slate-900/50 border border-purple-500/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white">
                  <option>Earth Observation</option>
                  <option>Communications</option>
                  <option>Scientific Research</option>
                  <option>Technology Demonstration</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-white mb-2">Message</label>
                <textarea
                  placeholder="Tell us about your mission requirements..."
                  rows={4}
                  className="w-full px-4 py-3 bg-slate-900/50 border border-purple-500/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-500 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-cyan-500 text-white py-4 rounded-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all flex items-center justify-center gap-2 font-medium"
              >
                Send Message
                <Send className="w-5 h-5" />
              </button>

              <p className="text-sm text-gray-500 text-center">
                We typically respond within 24 hours
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
