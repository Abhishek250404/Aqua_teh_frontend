import React from 'react';
import Navbar from '../Navbar/Navbar';
import { motion } from 'framer-motion';
import {
  Droplets,
  Shield,
  Clock,
  Award,
  CheckCircle,
  Users,
  Star,
  Zap,
  Phone,
  MessageCircle,
  Calendar,
  ArrowRight,
  Play,
  ChevronRight,
  Home,
  Filter,
  Settings,
  Battery,
  TestTube2
} from 'lucide-react';

const Landingpage = () => {
  const stats = [
    { value: '5000+', label: 'Happy Customers', icon: <Users className="w-5 h-5" /> },
    { value: '15+', label: 'Years Experience', icon: <Award className="w-5 h-5" /> },
    { value: '98%', label: 'Satisfaction Rate', icon: <Star className="w-5 h-5" /> },
    { value: '45 min', label: 'Avg Response Time', icon: <Clock className="w-5 h-5" /> },
  ];

  const features = [
    { icon: <Shield />, title: '100% Purity Guarantee', desc: 'Advanced 7-stage filtration' },
    { icon: <Zap />, title: 'Instant Service', desc: 'Same-day installation available' },
    { icon: <Award />, title: 'Certified Experts', desc: 'Trained & certified technicians' },
    { icon: <Battery />, title: 'Smart Monitoring', desc: 'Real-time water quality check' },
  ];

  const services = [
    {
      title: 'RO System Installation',
      desc: 'Professional installation with 2-year warranty',
      price: 'Starting from ₹8,999',
      image: 'https://images.unsplash.com/photo-1541140532154-b024d705b90a?auto=format&fit=crop&w=800'
    },
    {
      title: 'Annual Maintenance Contract',
      desc: 'Regular servicing & filter replacement',
      price: '₹2,999/year',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800'
    },
    {
      title: 'Emergency Repair',
      desc: '24/7 repair service at your doorstep',
      price: '₹599/service',
      image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w-800'
    },
  ];

  const testimonials = [
    { name: 'Rajesh Kumar', role: 'Home Owner', text: 'Best RO service in Chennai! Professional and timely.' },
    { name: 'Priya Nair', role: 'Restaurant Owner', text: 'Water quality improved dramatically. Highly recommend!' },
    { name: 'Arun Sharma', role: 'Office Manager', text: 'Maintenance team is very punctual and skilled.' },
  ];

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden bg-linear-to-br from-blue-900 via-slate-900 to-cyan-900">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
        </div>

        {/* Water Droplets Animation */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-cyan-300/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 20 + 10}px`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.2, 0.8, 0.2],
              rotate: [0, 360, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            <Droplets />
          </motion.div>
        ))}

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <span className="text-cyan-300">🚀</span>
                <span className="text-sm font-semibold text-white">#1 RO Service Provider</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                <span className="bg-linear-to-r from-cyan-300 via-blue-300 to-emerald-300 bg-clip-text text-transparent">
                  Pure Water
                </span>
                <br />
                <span className="text-white">Healthy Living</span>
                <span className="block text-cyan-200 text-4xl mt-4">Guaranteed</span>
              </h1>

              <p className="text-xl text-gray-300 mb-8 max-w-xl">
                Premium RO water purification services with advanced technology,
                certified experts, and 24/7 support for your complete peace of mind.
              </p>

              {/* Hero CTA Buttons */}
              <div className="flex flex-wrap gap-4 mb-12">
                <motion.a
                  href="tel:+919843021579"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center gap-3 bg-linear-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-2xl hover:shadow-cyan-500/30 transition-all"
                >
                  <Phone className="w-5 h-5" />
                  Book Free Consultation
                  <ArrowRight className="w-5 h-5" />
                </motion.a>

                <motion.a
                  href="#services"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-bold text-lg border border-white/20 hover:bg-white/20 transition-all"
                >
                  <Play className="w-5 h-5" />
                  Watch Demo
                </motion.a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-3xl font-bold text-cyan-300 mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-400 flex items-center justify-center gap-1">
                      {stat.icon}
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative bg-linear-to-br from-cyan-500/20 to-blue-600/20 rounded-3xl p-1">
                <img
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80"
                  alt="RO Water Purifier"
                  className="rounded-3xl shadow-2xl w-full"
                />
                {/* Floating Elements */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute -top-4 -right-4 bg-linear-to-r from-cyan-500 to-blue-600 text-white p-4 rounded-2xl shadow-xl"
                >
                  <div className="text-center">
                    <div className="text-2xl font-bold">30% OFF</div>
                    <div className="text-sm">First Service</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronRight className="w-8 h-8 text-cyan-300 rotate-90" />
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-linear-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-linear-to-r from-blue-700 to-cyan-600 bg-clip-text text-transparent">
                Why Choose Us?
              </span>
            </h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto">
              We provide more than just RO service - we deliver peace of mind
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl border border-gray-100 transition-all"
              >
                <div className="inline-flex p-3 bg-linear-to-br from-cyan-50 to-blue-50 rounded-2xl mb-6 text-cyan-600">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Our <span className="text-cyan-300">Premium</span> Services
            </motion.h2>
            <p className="text-gray-400 text-xl">Complete water solutions for every need</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -15 }}
                className="group relative overflow-hidden rounded-3xl bg-linear-to-br from-gray-800 to-gray-900"
              >
                {/* Service Image */}
                <div className="h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-gray-900/80 to-transparent" />
                </div>

                {/* Service Content */}
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold">{service.title}</h3>
                    <span className="text-cyan-300 font-bold">{service.price}</span>
                  </div>
                  <p className="text-gray-400 mb-6">{service.desc}</p>

                  <div className="flex items-center justify-between">
                    <ul className="space-y-2">
                      {['Free Installation', '1 Year Warranty', '24/7 Support'].map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          {item}
                        </li>
                      ))}
                    </ul>

                    <motion.a
                      href="#contact"
                      whileHover={{ scale: 1.1 }}
                      className="bg-cyan-500 text-white p-3 rounded-full hover:bg-cyan-600 transition-colors"
                    >
                      <ArrowRight className="w-5 h-5" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-linear-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What Our <span className="text-cyan-600">Customers</span> Say
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
              >
                <div className="flex items-center gap-2 text-amber-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-linear-to-br from-cyan-500 to-blue-600 rounded-full" />
                  <div>
                    <div className="font-bold">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-linear-to-br from-blue-900 via-slate-900 to-cyan-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-xl rounded-3xl p-12 border border-white/20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready for <span className="text-cyan-300">Pure Water?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
              Get a FREE water quality test and consultation from our experts
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
              <motion.a
                href="tel:+919843021579"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-3 bg-linear-to-r from-cyan-500 to-blue-600 text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-cyan-500/30 transition-all"
              >
                <Phone className="w-6 h-6" />
                Call Now: +91 98430 21579
              </motion.a>

              <motion.a
                href="https://wa.me/919843021579"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-3 bg-linear-to-r from-emerald-500 to-green-600 text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-emerald-500/30 transition-all"
              >
                <MessageCircle className="w-6 h-6" />
                WhatsApp Chat
              </motion.a>

              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-3 bg-white/20 text-white px-10 py-5 rounded-2xl font-bold text-lg border border-white/30 hover:bg-white/30 transition-all"
              >
                <Calendar className="w-6 h-6" />
                Book Appointment
              </motion.a>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-12 text-gray-300">
              <div className="flex items-center gap-3">
                <Shield className="w-6 h-6 text-cyan-300" />
                <span>ISO 9001 Certified</span>
              </div>
              <div className="flex items-center gap-3">
                <Award className="w-6 h-6 text-cyan-300" />
                <span>Award Winning Service</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-6 h-6 text-cyan-300" />
                <span>Same Day Service</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Landingpage;