import React from "react";
import logo from "../../assets/logo.png";
import { HiOutlineLocationMarker } from "react-icons/hi";
function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Contact Info Card with Logo */}
        <div className="transform transition-transform hover:scale-[1.02] duration-300">
          <div className="bg-slate-800/70 backdrop-blur-sm p-6 rounded-2xl shadow-2xl border border-teal-500/20 hover:border-teal-400/40 transition-all h-full flex flex-col">
            {/* Logo Section */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-teal-500 rounded-xl flex items-center justify-center shadow-lg">
                <img src={logo} alt="" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-cyan-400">
                  Aqua Tech Ro System
                </h2>
                <p className="text-slate-300 text-sm">Pure Water. Healthy Life. Trusted RO Solutions.</p>
              </div>
            </div>

            <div className="space-y-4 flex-grow">
              <div className="flex items-center gap-3">
                <div className="bg-gradient-to-br from-teal-500/20 to-cyan-500/20 p-2 rounded-lg">
                  <i className="fas fa-building text-cyan-300"></i>
                </div>
                <div>
                  <p className="font-semibold"> 1, 18, 2nd St, TWAD Colony, Tiruppalai</p>
                  <p className="text-slate-300 text-sm">Madurai, Tamil Nadu 625014</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="bg-gradient-to-br from-rose-500/20 to-pink-500/20 p-2 rounded-lg">
                  <i className="fas fa-globe text-rose-300"></i>
                </div>
                <a
                  href="https://aquatechrosystem.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-cyan-300 transition-colors duration-300  underline-offset-2 hover:no-underline"
                >
                  aquatechrosystem.in
                </a>
              </div>

              <div className="flex items-center gap-3">
                <div className="bg-gradient-to-br from-emerald-500/20 to-green-500/20 p-2 rounded-lg">
                  <i className="fas fa-phone text-emerald-300"></i>
                </div>
                <a
                  href="tel:+919843021579"
                  className="text-slate-300 hover:text-emerald-300 transition-colors duration-300"
                >
                  +91 98430 21579
                </a>
              </div>

              <div className="flex items-center gap-3">
                <div className="bg-gradient-to-br from-amber-500/20 to-yellow-500/20 p-2 rounded-lg">
                  <i className="fas fa-envelope text-amber-300"></i>
                </div>
                <a
                  href="mailto:aquatechrosystem@gmail.com"
                  className="text-slate-300 hover:text-amber-300 transition-colors duration-300"
                >
                  aquatechrosystem@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Map Card */}
        <div className="transform transition-transform hover:scale-[1.02] duration-300">
          <div className="relative overflow-hidden rounded-2xl shadow-2xl border border-blue-500/20 hover:border-blue-400/40 transition-all h-full flex flex-col">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent z-10 pointer-events-none"></div>
            <div className="p-4 bg-slate-800/70 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-lg flex items-center justify-center">
                  {/* <i className="fas fa-map-marked-alt text-white"></i> */}
                  <HiOutlineLocationMarker size={25} />
                </div>
                <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-blue-400">
                  Visit Us
                </h2>
              </div>
            </div>
            <iframe
              title="Aquatechro Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.43311754654!2d78.14021647507779!3d9.981035690123408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c724a7f78e55%3A0x1be471c5b566053!2sAqua%20Tech%20Ro%20System!5e0!3m2!1sen!2sin!4v1770128574285!5m2!1sen!2sin"
              width="100%"
              height="200"
              className="rounded-b-2xl transition-all duration-500 flex-grow"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
            <div className="absolute bottom-4 left-4  px-3 py-1.5 rounded-full text-sm border border-slate-700/50">
              <i className="fas fa-map-pin text-rose-400 mr-2"></i>
              Click to navigate
            </div>
          </div>
        </div>

        {/* Quick Links Card with Logo */}
        <div className="transform transition-transform hover:scale-[1.02] duration-300">
          <div className="bg-slate-800/70 backdrop-blur-sm p-6 rounded-2xl shadow-2xl border border-indigo-500/20 hover:border-indigo-400/40 transition-all h-full flex flex-col">
            {/* Logo Section */}
            <div className="flex items-center gap-3 mb-6">
              {/* <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                <i className="fas fa-link text-white text-xl"></i>
              </div> */}
              <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-300 to-indigo-400">
                Quick Links
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-8 flex-grow">
              <a href="/" className="group flex items-center gap-3 p-3 rounded-xl bg-slate-700/40 hover:bg-gradient-to-r hover:from-blue-900/40 hover:to-cyan-900/40 transition-all duration-300 border border-slate-700/50 hover:border-cyan-500/30 h-full">
                <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 p-2 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <i className="fas fa-home text-blue-300"></i>
                </div>
                <div>
                  <span className="font-medium group-hover:text-blue-200 transition-colors block">Home</span>
                  <span className="text-slate-400 text-xs group-hover:text-cyan-300">Main Page</span>
                </div>
              </a>

              <a href="/about" className="group flex items-center gap-3 p-3 rounded-xl bg-slate-700/40 hover:bg-gradient-to-r hover:from-emerald-900/40 hover:to-teal-900/40 transition-all duration-300 border border-slate-700/50 hover:border-emerald-500/30 h-full">
                <div className="bg-gradient-to-br from-emerald-500/20 to-teal-500/20 p-2 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <i className="fas fa-info-circle text-emerald-300"></i>
                </div>
                <div>
                  <span className="font-medium group-hover:text-emerald-200 transition-colors block">About Us</span>
                  <span className="text-slate-400 text-xs group-hover:text-emerald-300">Our Story</span>
                </div>
              </a>

              <a href="/services" className="group flex items-center gap-3 p-3 rounded-xl bg-slate-700/40 hover:bg-gradient-to-r hover:from-violet-900/40 hover:to-purple-900/40 transition-all duration-300 border border-slate-700/50 hover:border-violet-500/30 h-full">
                <div className="bg-gradient-to-br from-violet-500/20 to-purple-500/20 p-2 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <i className="fas fa-cogs text-violet-300"></i>
                </div>
                <div>
                  <span className="font-medium group-hover:text-violet-200 transition-colors block">Services</span>
                  <span className="text-slate-400 text-xs group-hover:text-violet-300">What we do</span>
                </div>
              </a>

              <a href="/contact" className="group flex items-center gap-3 p-3 rounded-xl bg-slate-700/40 hover:bg-gradient-to-r hover:from-amber-900/40 hover:to-orange-900/40 transition-all duration-300 border border-slate-700/50 hover:border-amber-500/30 h-full">
                <div className="bg-gradient-to-br from-amber-500/20 to-orange-500/20 p-2 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <i className="fas fa-envelope text-amber-300"></i>
                </div>
                <div>
                  <span className="font-medium group-hover:text-amber-200 transition-colors block">Contact</span>
                  <span className="text-slate-400 text-xs group-hover:text-amber-300">Get in touch</span>
                </div>
              </a>
            </div>

            {/* Social Media
            <div className="mt-auto">
              <h3 className="text-lg font-semibold mb-4 text-slate-300">Connect With Us</h3>
              <div className="flex gap-2">
                <a href="#" className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white px-2 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 text-sm">
                  <i className="fab fa-facebook-f"></i>
                  <span>FB</span>
                </a>
                <a href="#" className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white px-2 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 text-sm">
                  <i className="fab fa-whatsapp"></i>
                  <span>WA</span>
                </a>
                <a href="#" className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-400 hover:to-rose-500 text-white px-2 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 text-sm">
                  <i className="fab fa-instagram"></i>
                  <span>IG</span>
                </a>
                <a href="#" className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-400 hover:to-indigo-500 text-white px-2 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 text-sm">
                  <i className="fab fa-linkedin-in"></i>
                  <span>IN</span>
                </a>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      {/* Bottom Section - Elegant */}
      <div className="mt-12 pt-6 border-t border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-slate-300 text-sm flex items-center justify-center md:justify-start">
              <i className="fas fa-droplet text-cyan-300 mr-2 animate-pulse"></i>
              Pure Water Solutions for a Better Tomorrow
            </p>
          </div>

          <div className="text-center">
            <p className="text-slate-400 text-sm">
              &copy; {new Date().getFullYear()}{" "}
              <span className="font-bold bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                Aquatechro
              </span>
              . All rights reserved.
            </p>
            <p className="text-slate-500 text-xs mt-1">
              Made with <i className="fas fa-heart text-rose-400 mx-1 animate-pulse"></i> for clean water
            </p>
          </div>

          <div>
            <div className="flex gap-4 text-slate-400 text-sm">
              <a href="#" className="hover:text-cyan-300 transition-colors duration-300">Privacy Policy</a>
              <span className="text-slate-600">•</span>
              <a href="#" className="hover:text-cyan-300 transition-colors duration-300">Terms of Service</a>
              <span className="text-slate-600">•</span>
              <a href="#" className="hover:text-cyan-300 transition-colors duration-300">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;