import React from 'react';
import Navbar from '../Navbar/Navbar';
import { motion } from "framer-motion";
import {
    Droplets,
    Shield,
    Clock,
    Users,
    CheckCircle,
    Award,
    Phone,
    MapPin,
    MessageCircle,
    Zap,
    Heart
} from 'lucide-react';

function Aboutpage() {
    const achievements = [
        { number: "2000+", label: "Happy Customers", icon: <Users className="w-6 h-6" /> },
        { number: "15+", label: "Years Experience", icon: <Award className="w-6 h-6" /> },
        { number: "98%", label: "Customer Satisfaction", icon: <Heart className="w-6 h-6" /> },
        { number: "24/7", label: "Service Support", icon: <Clock className="w-6 h-6" /> },
    ];

    const services = [
        "Domestic RO Water Purifier Installation",
        "Commercial RO Plant Setup",
        "Annual Maintenance Contracts",
        "RO Repair & Spare Parts",
        "Water Quality Testing",
        "Free Demo Service"
    ];

    const team = [
        { name: "Mr. Rajesh Kumar", role: "Founder & CEO", exp: "20+ years in water purification" },
        { name: "Ms. Priya Sharma", role: "Service Head", exp: "12+ years experience" },
        { name: "Mr. Arjun Patel", role: "Technical Expert", exp: "8+ years expertise" },
    ];

    return (
        <>
            <Navbar />

            {/* Hero Banner with Water Drops Effect */}
            <motion.div
                className="relative overflow-hidden bg-linear-to-r from-blue-50 to-cyan-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full"></div>
                    <div className="absolute top-40 right-20 w-32 h-32 bg-cyan-200 rounded-full"></div>
                    <div className="absolute bottom-20 left-1/3 w-24 h-24 bg-blue-100 rounded-full"></div>
                </div>

                <div className="relative max-w-6xl mx-auto px-4 py-16 md:py-24">
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        <motion.div
                            className="lg:w-1/2"
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white rounded-full shadow-sm border border-blue-100">
                                <Droplets className="w-5 h-5 text-blue-600" />
                                <span className="text-sm font-semibold text-blue-700">Since 2008</span>
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
                                Pure Water,
                                <span className="block text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-cyan-500">
                                    Healthy Life.
                                </span>
                            </h1>

                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                At <span className="font-bold text-blue-700">Aqua Tech RO System</span>, we've been providing
                                clean and safe drinking water solutions for over 15 years. Our commitment to quality and
                                customer satisfaction has made us the trusted choice for <span className="font-semibold">2000+ happy families</span>
                                and businesses across the region.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <motion.a
                                    href="tel:+919843021579"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="inline-flex items-center gap-2 bg-linear-to-r from-blue-600 to-cyan-500 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all"
                                >
                                    <Phone className="w-5 h-5" />
                                    Call Now: +91 98430 21579
                                </motion.a>

                                <motion.a
                                    href="https://wa.me/919843021579"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="inline-flex items-center gap-2 bg-white text-blue-600 border border-blue-200 px-6 py-3 rounded-lg font-semibold shadow-sm hover:shadow-md transition-all"
                                >
                                    <MessageCircle className="w-5 h-5" />
                                    WhatsApp Us
                                </motion.a>
                            </div>

                        </motion.div>

                        <motion.div
                            className="lg:w-1/2"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <div className="relative">
                                <div className="bg-linear-to-br from-blue-500 to-cyan-400 rounded-2xl p-8 shadow-2xl text-white">
                                    <div className="text-center mb-8">
                                        <Droplets className="w-16 h-16 mx-auto mb-4" />
                                        <h3 className="text-2xl font-bold mb-2">Why Choose Us?</h3>
                                        <p className="opacity-90">Trusted by 2000+ Customers</p>
                                    </div>

                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3">
                                            <CheckCircle className="w-5 h-5 text-green-300" />
                                            <span>ISO Certified Products</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <CheckCircle className="w-5 h-5 text-green-300" />
                                            <span>1 Year Warranty on All Products</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <CheckCircle className="w-5 h-5 text-green-300" />
                                            <span>Free Installation & Demo</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <CheckCircle className="w-5 h-5 text-green-300" />
                                            <span>24/7 Emergency Service</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Floating Elements */}
                                <motion.div
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ repeat: Infinity, duration: 2 }}
                                    className="absolute -top-4 -right-4 bg-white p-4 rounded-xl shadow-lg"
                                >
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-blue-600">15+</div>
                                        <div className="text-sm text-gray-600">Years</div>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.div>

            {/* Achievements Section */}
            <motion.div
                className="max-w-6xl mx-auto px-4 py-16"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {achievements.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
                        >
                            <div className="flex items-center justify-center w-12 h-12 bg-linear-to-br from-blue-100 to-cyan-100 rounded-lg mb-4 mx-auto">
                                {item.icon}
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-gray-900 mb-1">{item.number}</div>
                                <div className="text-gray-600 font-medium">{item.label}</div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Our Story Section */}
            <motion.div
                className="bg-linear-to-r from-gray-50 to-white py-16"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <div className="max-w-6xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            From humble beginnings to becoming a trusted name in water purification
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-2xl font-bold mb-6 text-gray-900">Our Mission</h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                To provide every home and business with access to clean, safe, and affordable drinking water
                                through innovative RO technology and exceptional customer service.
                            </p>

                            <h3 className="text-2xl font-bold mb-6 text-gray-900">Our Vision</h3>
                            <p className="text-gray-600 leading-relaxed">
                                To become the most trusted and preferred water purification service provider,
                                ensuring health and wellness through pure water solutions.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200"
                        >
                            <h3 className="text-2xl font-bold mb-6 text-gray-900">Core Values</h3>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <Shield className="w-6 h-6 text-blue-500 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-gray-900 mb-1">Quality Assurance</h4>
                                        <p className="text-gray-600">Only certified products with warranty</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <Zap className="w-6 h-6 text-yellow-500 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-gray-900 mb-1">Quick Service</h4>
                                        <p className="text-gray-600">Same-day service for emergencies</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <Heart className="w-6 h-6 text-red-500 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-gray-900 mb-1">Customer Care</h4>
                                        <p className="text-gray-600">Personalized attention to every customer</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.div>

            {/* Services Section */}
            <motion.div
                className="max-w-6xl mx-auto px-4 py-16"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
                    <p className="text-lg text-gray-600">Comprehensive water purification solutions</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-linear-to-br from-blue-50 to-white p-6 rounded-xl border border-blue-100 hover:border-blue-300 transition-all group"
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-linear-to-r from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center">
                                    <CheckCircle className="w-5 h-5 text-white" />
                                </div>
                                <span className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                                    {service}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Team Section */}
            <motion.div
                className="bg-linear-to-r from-blue-900 to-cyan-800 text-white py-16"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <div className="max-w-6xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Expert Team</h2>
                        <p className="text-lg opacity-90">Experienced professionals dedicated to your water safety</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {team.map((member, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                viewport={{ once: true }}
                                className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20"
                            >
                                <div className="text-center">
                                    <div className="w-20 h-20 bg-linear-to-r from-blue-400 to-cyan-300 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold">
                                        {member.name.charAt(0)}
                                    </div>
                                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                                    <p className="text-cyan-200 font-medium mb-3">{member.role}</p>
                                    <p className="text-sm opacity-80">{member.exp}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* Contact CTA */}
            <motion.div
                className="max-w-6xl mx-auto px-4 py-16"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <div className="bg-linear-to-r from-blue-600 to-cyan-500 rounded-2xl p-8 md:p-12 text-center text-white shadow-2xl">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for Pure Water?</h2>
                    <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                        Join our family of 2000+ satisfied customers. Get a free water quality test today!
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all"
                        >
                            <Phone className="w-6 h-6" />
                            Call for Free Demo
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-all"
                        >
                            <MapPin className="w-6 h-6" />
                            Visit Our Store
                        </motion.button>
                    </div>

                    <div className="mt-8 pt-8 border-t border-white/20">
                        <p className="text-lg font-semibold">Aqua Tech RO System</p>
                        <p className="opacity-90">Your Trusted Water Purification Partner Since 2008</p>
                    </div>
                </div>
            </motion.div>
        </>
    );
}

export default Aboutpage;