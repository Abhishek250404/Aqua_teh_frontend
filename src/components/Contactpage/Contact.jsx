import React from "react";
import Navbar from "../Navbar/Navbar";
import { motion } from "framer-motion";
import {
    Phone,
    Mail,
    MapPin,
    Clock,
    Globe,
    MessageCircle,
    ArrowRight
} from "lucide-react";

function Contact() {
    return (
        <>
            <Navbar />

            <motion.div
                className="max-w-6xl mx-auto px-4 py-12"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
            >
                {/* Hero Section */}
                <div className="text-center mb-12">
                    <motion.h1
                        className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        Get in <span className="text-blue-600">Touch</span>
                    </motion.h1>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Visit our store or connect with our water purification experts for
                        personalized solutions
                    </p>
                </div>

                {/* Store Image with Overlay */}
                <motion.div
                    className="relative mb-12 rounded-2xl overflow-hidden shadow-2xl"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    <img
                        src="https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                        alt="Aqua Tech RO System Store"
                        className="w-full h-100 object-cover"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent flex items-end">
                        <div className="p-8 text-white">
                            <h3 className="text-2xl font-bold mb-2">Experience Pure Water Solutions</h3>
                            <p className="text-blue-100">Your trusted partner for clean, healthy water</p>
                        </div>
                    </div>
                </motion.div>

                {/* Contact Cards Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                    {/* Store Info Card */}
                    <motion.div
                        className="bg-linear-to-br from-white to-blue-50 rounded-2xl shadow-lg p-8 border border-blue-100"
                        whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    >
                        <div className="flex items-center mb-6">
                            <div className="p-3 bg-blue-100 rounded-xl mr-4">
                                <MapPin className="w-6 h-6 text-blue-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900">Visit Our Store</h3>
                        </div>

                        <div className="space-y-6">
                            <div>
                                <h4 className="font-semibold text-gray-900 mb-2">📍 Location</h4>
                                <p className="text-gray-700 leading-relaxed">
                                    Aqua Tech RO System<br />
                                    1, 18, 2nd Street, TWAD Colony<br />
                                    Tiruppalai, Madurai<br />
                                    Tamil Nadu 625014
                                </p>
                            </div>

                            <div>
                                <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                                    <Clock className="w-4 h-4 mr-2" />
                                    Business Hours
                                </h4>
                                <p className="text-gray-700">
                                    <span className="font-medium">Mon – Sat:</span> 9:00 AM – 9:00 PM<br />
                                    <span className="font-medium">Sunday:</span> 10:00 AM – 5:00 PM
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Methods Card */}
                    <motion.div
                        className="bg-linear-to-br from-white to-blue-50 rounded-2xl shadow-lg p-8 border border-blue-100"
                        whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    >
                        <div className="flex items-center mb-6">
                            <div className="p-3 bg-blue-100 rounded-xl mr-4">
                                <Phone className="w-6 h-6 text-blue-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900">Contact Us</h3>
                        </div>

                        <div className="space-y-6">
                            <div className="group cursor-pointer">
                                <div className="flex items-center text-gray-700 mb-1 group-hover:text-blue-600 transition-colors">
                                    <Phone className="w-4 h-4 mr-3" />
                                    <span className="font-medium">Call Us</span>
                                    <ArrowRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                                <a
                                    href="tel:+919843021579"
                                    className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors"
                                >
                                    +91 98430 21579
                                </a>

                            </div>

                            <div className="group cursor-pointer">
                                <div className="flex items-center text-gray-700 mb-1 group-hover:text-blue-600 transition-colors">
                                    <Mail className="w-4 h-4 mr-3" />
                                    <span className="font-medium">Email Us</span>
                                    <ArrowRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>

                                <a
                                    href="https://mail.google.com/mail/?view=cm&fs=1&to=aquatechrosystemmdu@gmail.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors whitespace-nowrap"
                                >
                                    aquatechrosystemmdu@gmail.com
                                </a>

                            </div>


                            <div className="group cursor-pointer">
                                <div className="flex items-center text-gray-700 mb-1 group-hover:text-blue-600 transition-colors">
                                    <MessageCircle className="w-4 h-4 mr-3" />
                                    <span className="font-medium">WhatsApp</span>
                                    <ArrowRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                                <a
                                    href="https://wa.me/919843021579"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors"
                                >
                                    +91 98430 21579
                                </a>

                            </div>

                            <div className="group cursor-pointer">
                                <div className="flex items-center text-gray-700 mb-1 group-hover:text-blue-600 transition-colors">
                                    <Globe className="w-4 h-4 mr-3" />
                                    <span className="font-medium">Website</span>
                                    <ArrowRight className="w-4 h-4 ml-2 opacity:0 group-hover:opacity-100 transition-opacity" />
                                </div>
                                <a
                                    href="https://www.aquatechrosystem.in"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors"
                                >
                                    www.aquatechrosystem.in
                                </a>

                            </div>
                        </div>
                    </motion.div>

                    {/* Quick Contact Form */}
                    <motion.div
                        className="bg-linear-to-br from-blue-600 to-blue-700 rounded-2xl shadow-xl p-8 text-white"
                        whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    >
                        <h3 className="text-2xl font-bold mb-6">Quick Enquiry</h3>
                        <p className="text-blue-100 mb-6">
                            Have questions? We'll get back to you within 24 hours.
                        </p>

                        <form className="space-y-4">
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/30"
                            />
                            <input
                                type="tel"
                                placeholder="Phone Number"
                                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/30"
                            />
                            <textarea
                                placeholder="Your Message"
                                rows="3"
                                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/30 resize-none"
                            />
                            <button
                                type="submit"
                                className="w-full bg-white text-blue-600 font-semibold py-3 px-6 rounded-xl hover:bg-blue-50 transition-colors duration-300 shadow-lg"
                            >
                                Send Message
                            </button>
                        </form>
                    </motion.div>
                </div>

                {/* Map Section */}
                <motion.div
                    className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                >
                    <div className="p-6 bg-linear-to-r from-blue-50 to-white">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Find Us Here</h3>
                        <p className="text-gray-600">Click for directions to our store</p>
                    </div>
                    <iframe
                        title="Aqua Tech RO System Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.43311754654!2d78.14021647507779!3d9.981035690123408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c724a7f78e55%3A0x1be471c5b566053!2sAqua%20Tech%20Ro%20System!5e0!3m2!1sen!2sin!4v1770128574285!5m2!1sen!2sin"
                        width="100%"
                        height="400"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="bg-gray-100"
                    />
                </motion.div>

                {/* CTA Banner */}
                <motion.div
                    className="mt-12 bg-linear-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 text-center text-white shadow-xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                >
                    <h3 className="text-2xl font-bold mb-4">Ready for Pure Water?</h3>
                    <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                        Schedule a free consultation or visit our store today. Our water purification
                        experts are ready to assist you.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="tel:+919843021579"
                            className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-xl hover:bg-blue-50 transition-colors duration-300 shadow-lg"
                        >
                            Call Now
                        </a>
                        <a
                            href="https://wa.me/919843021579"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-green-500 text-white font-semibold py-3 px-8 rounded-xl hover:bg-green-600 transition-colors duration-300 shadow-lg border border-white/20"
                        >
                            WhatsApp Us
                        </a>
                    </div>
                </motion.div>
            </motion.div>
        </>
    );
}

export default Contact;