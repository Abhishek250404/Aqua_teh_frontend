import React from "react";
import { motion } from "framer-motion";
// import Navbar from "../Navbar/Navbar";
import { Droplets, Wrench, ShieldCheck, RefreshCcw } from "lucide-react";
import {
    PhoneOutlined,
    MessageOutlined,
    CalendarOutlined,
    ClockCircleOutlined,
    SafetyCertificateOutlined,
    CheckCircleOutlined
} from '@ant-design/icons';
function Servicepage() {
    return (
        <>
            {/* <Navbar /> */}

            {/* HERO SECTION - Premium */}
            <motion.section
                className="relative bg-linear-to-br from-blue-900 via-slate-900 to-emerald-900 text-white py-24 overflow-hidden"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                {/* Premium background effect */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-blue-800/30 via-transparent to-transparent" />

                {/* Water ripple animation */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-[radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-size-[40px_40px] animate-pulse" />
                </div>

                <div className="relative max-w-6xl mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                            <span className="text-emerald-300">★</span>
                            <span className="text-sm font-medium">Trusted Water Solutions</span>

                        </div>

                        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                            <span className="bg-linear-to-r from-cyan-300 to-emerald-300 bg-clip-text text-transparent">
                                Elite Water Purification
                            </span>
                            <br />
                            <span className="text-white">Services & Solutions</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto font-light">
                            Experience purity redefined with our advanced RO systems and
                            <span className="text-cyan-300 font-semibold"> expert maintenance services</span>
                        </p>
                    </motion.div>
                </div>

                {/* Floating elements */}
                <motion.div
                    className="absolute bottom-10 left-1/4 w-20 h-20 bg-cyan-500/20 rounded-full blur-xl"
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                />
            </motion.section>

            {/* SERVICES SECTION - Premium */}
            <section className="py-20 bg-linear-to-b from-slate-50 to-white">
                <div className="max-w-7xl mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            <span className="bg-linear-to-r from-blue-700 to-cyan-600 bg-clip-text text-transparent">
                                Our Services
                            </span>
                        </h2>
                        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                            Comprehensive water purification solutions with cutting-edge technology
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                className="group relative"
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                {/* Card with gradient border */}
                                <div className="absolute inset-0 bg-linear-to-br from-blue-500 via-cyan-500 to-emerald-500 rounded-3xl blur-sm group-hover:blur-md transition-all duration-300 opacity-0 group-hover:opacity-70" />

                                <div className="relative bg-white rounded-2xl p-8 shadow-xl border border-gray-100 group-hover:shadow-2xl transition-all duration-300 h-full">
                                    {/* Icon container with gradient */}
                                    <div className="inline-flex p-4 rounded-2xl bg-linear-to-br from-blue-50 to-cyan-50 mb-6">
                                        <div className="text-3xl text-gradient">
                                            {service.icon}
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                                        {service.title}
                                    </h3>

                                    <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                                        {service.description}
                                    </p>

                                    {/* Premium badge */}
                                    <div className="inline-flex items-center gap-1 text-xs font-semibold text-cyan-600 bg-cyan-50 px-3 py-1 rounded-full">
                                        <span>⭐</span>
                                        <span>Trusted Service</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA SECTION - Premium */}
            <motion.section
                className="relative py-20 overflow-hidden"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
            >
                {/* Background gradient */}
                <div className="absolute inset-0 bg-linear-to-br from-blue-900 via-slate-900 to-emerald-900" />

                {/* Animated background elements */}
                <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-0 left-0 w-64 h-64 bg-cyan-500 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 right-0 w-64 h-64 bg-emerald-500 rounded-full blur-3xl" />
                </div>

                <div className="relative max-w-5xl mx-auto px-4 text-center">
                    <motion.div
                        initial={{ scale: 0.95, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/20"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Need RO Service or Installation?
                        </h2>

                        <p className="text-gray-200 mb-10 text-lg max-w-2xl mx-auto">
                            Schedule an RO service or consultation with our experienced technicians
                        </p>

                        <div className="flex flex-col sm:flex-row justify-center gap-6">
                            {/* Premium Call Button */}
                            <motion.a
                                href="tel:+919843021579"
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.98 }}
                                className="group relative inline-flex items-center justify-center gap-3 bg-linear-to-r from-cyan-500 to-blue-600 text-white px-10 py-4 rounded-2xl font-bold text-lg shadow-2xl overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-linear-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                                <span className="relative flex items-center gap-2">
                                    <PhoneOutlined className="text-xl" />
                                    Call Now
                                </span>
                            </motion.a>

                            {/* Premium WhatsApp Button */}
                            <motion.a
                                href="https://wa.me/919843021579"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.98 }}
                                className="group relative inline-flex items-center justify-center gap-3 bg-linear-to-r from-emerald-500 to-green-600 text-white px-10 py-4 rounded-2xl font-bold text-lg shadow-2xl overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-linear-to-r from-green-600 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                                <span className="relative flex items-center gap-2">
                                    <MessageOutlined className="text-xl" />
                                    Chat on WhatsApp
                                </span>
                            </motion.a>

                            {/* Schedule Button */}
                            
                        </div>

                        {/* Contact Info */}
                        <div className="mt-12 pt-8 border-t border-white/20">
                            <div className="flex flex-wrap justify-center gap-8 text-gray-300">
                                <div className="flex items-center gap-3">
                                    <ClockCircleOutlined />
                                    <span>24/7 Emergency Service</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <SafetyCertificateOutlined />
                                    <span>Certified Technicians</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <CheckCircleOutlined />
                                    <span>1-Year Service Warranty</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.section>
        </>
    );
}

const services = [
    {
        title: "RO Installation",
        description: "Professional installation of all branded RO water purifiers.",
        icon: <Droplets size={36} />,
    },
    {
        title: "RO Repair & Service",
        description: "Quick diagnosis and repair by certified technicians.",
        icon: <Wrench size={36} />,
    },
    {
        title: "Annual Maintenance",
        description: "Affordable AMC plans to keep your RO running smoothly.",
        icon: <ShieldCheck size={36} />,
    },
    {
        title: "Filter Replacement",
        description: "Genuine RO filters and membrane replacement service.",
        icon: <RefreshCcw size={36} />,
    },
];

export default Servicepage;
