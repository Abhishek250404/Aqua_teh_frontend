import React from 'react';
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
  Truck,
  Wrench,
  ShieldCheck,
  ThumbsUp,
  Heart,
  Home,
  Filter,
  Settings,
  TestTube2,
  Thermometer,
  BatteryCharging,
  Wind
} from 'lucide-react';

const Landingpage = () => {
  // RO-specific images from Unsplash
  const roImages = [
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80', // RO System 1
    'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80', // RO System 2
    'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=800&q=80', // RO System 3
    'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=800&q=80', // RO Installation
    'https://images.unsplash.com/photo-1545235617-9465d2a55698?auto=format&fit=crop&w=800&q=80', // RO Maintenance
    'https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=800&q=80', // Water Testing
    'https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=800&q=80', // RO Filter
    'https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=800&q=80', // RO Service
  ];

  const stats = [
    { value: '5000+', label: 'Happy Customers', icon: <Users className="w-6 h-6" /> },
    { value: '15+', label: 'Years Experience', icon: <Award className="w-6 h-6" /> },
    { value: '98%', label: 'Satisfaction', icon: <Star className="w-6 h-6" /> },
    { value: '45 min', label: 'Response Time', icon: <Clock className="w-6 h-6" /> },
  ];

  const features = [
    { 
      icon: <Filter className="w-8 h-8" />, 
      title: '7-Stage Filtration', 
      desc: 'Advanced purification technology',
      image: roImages[0]
    },
    { 
      icon: <Shield className="w-8 h-8" />, 
      title: 'Quality Guarantee', 
      desc: '100% pure water assurance',
      image: roImages[1]
    },
    { 
      icon: <Wrench className="w-8 h-8" />, 
      title: 'Expert Service', 
      desc: 'Certified technicians',
      image: roImages[2]
    },
    { 
      icon: <Clock className="w-8 h-8" />, 
      title: '24/7 Support', 
      desc: 'Always available for you',
      image: roImages[3]
    },
  ];

  const services = [
    {
      title: 'RO Installation',
      desc: 'Complete RO system setup',
      price: '₹8,999',
      image: roImages[0],
      features: ['Free Demo', '1 Year Warranty', 'Same Day Service']
    },
    {
      title: 'Annual Maintenance',
      desc: 'Year-round protection',
      price: '₹2,999/yr',
      image: roImages[1],
      features: ['4 Services', 'Free Filters', 'Priority Support']
    },
    {
      title: 'Emergency Repair',
      desc: '24/7 repair service',
      price: '₹599',
      image: roImages[2],
      features: ['Same Day', 'Genuine Parts', '90 Days Warranty']
    },
    {
      title: 'Water Testing',
      desc: 'Quality analysis',
      price: '₹499',
      image: roImages[3],
      features: ['10 Parameters', 'Digital Report', 'Expert Advice']
    },
  ];

  const testimonials = [
    { 
      name: 'Rajesh Kumar', 
      role: 'Home Owner', 
      text: 'Best RO service in Chennai! Water quality improved immediately.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
    },
    { 
      name: 'Priya Nair', 
      role: 'Restaurant Owner', 
      text: 'Reliable service and excellent support team.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=200&q=80'
    },
    { 
      name: 'Arun Sharma', 
      role: 'Office Manager', 
      text: 'Professional technicians and timely service.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80'
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-cyan-50 via-blue-50 to-cyan-100">
        {/* Background Pattern */}
       <div
  className="absolute inset-0 opacity-10"
  style={{
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 50L50 0L100 50L50 100Z' fill='%2306b6d4' fill-opacity='0.1'/%3E%3C/svg%3E")`,
  }}
></div>


        {/* Water Droplets */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-cyan-300/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 30 + 20}px`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 5 + 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            <Droplets />
          </motion.div>
        ))}

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-full mb-8">
                <span className="text-white">🏆</span>
                <span className="text-sm font-semibold">#1 RO Service in Chennai</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
                <span className="text-gray-900">Pure Water,</span>
                <br />
                <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                  Healthy Life
                </span>
              </h1>

              <p className="text-xl text-gray-600 mb-10 max-w-xl leading-relaxed">
                Professional RO water purification services with 15+ years experience. 
                Certified experts, same-day service, and 24/7 support.
              </p>

              <div className="flex flex-wrap gap-4 mb-12">
                <motion.a
                  href="tel:+919843021579"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all"
                >
                  <Phone className="w-5 h-5" />
                  Book Free Demo
                </motion.a>

                <motion.a
                  href="#services"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center gap-3 bg-white text-cyan-600 px-8 py-4 rounded-xl font-bold text-lg border-2 border-cyan-600 hover:bg-cyan-50 transition-all"
                >
                  <Play className="w-5 h-5" />
                  View Services
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
                    <div className="text-3xl font-bold text-cyan-600 mb-2">{stat.value}</div>
                    <div className="text-sm text-gray-600 flex items-center justify-center gap-2">
                      <div className="text-cyan-500">{stat.icon}</div>
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
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative">
                <img
                  src={roImages[0]}
                  alt="RO Water Purifier"
                  className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
                />
                
                {/* Floating Badges */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute -top-6 -right-6 bg-gradient-to-r from-emerald-500 to-green-600 text-white p-6 rounded-2xl shadow-xl"
                >
                  <div className="text-center">
                    <div className="text-2xl font-bold">30% OFF</div>
                    <div className="text-sm">First Service</div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                  className="absolute -bottom-6 -left-6 bg-gradient-to-r from-amber-500 to-orange-600 text-white p-6 rounded-2xl shadow-xl"
                >
                  <div className="text-center">
                    <div className="text-2xl font-bold">Free</div>
                    <div className="text-sm">Installation</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Why Choose <span className="text-cyan-600">Our RO Service?</span>
            </h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto">
              Premium water purification solutions with guaranteed results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-b from-white to-cyan-50 border border-cyan-100 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="inline-flex p-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl mb-4 text-white">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-b from-cyan-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Our <span className="text-cyan-600">Services</span>
            </h2>
            <p className="text-gray-600 text-xl">Complete RO solutions for every need</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -15 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-gray-100"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                      <p className="text-gray-600 text-sm mb-4">{service.desc}</p>
                    </div>
                    <span className="text-2xl font-bold text-cyan-600">{service.price}</span>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <motion.a
                    href="tel:+919843021579"
                    whileHover={{ scale: 1.05 }}
                    className="inline-flex items-center justify-center w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all"
                  >
                    Book Now
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* RO Gallery Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Our <span className="text-cyan-600">RO Gallery</span>
            </h2>
            <p className="text-gray-600 text-xl">See our RO installations and services</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {roImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all cursor-pointer group"
              >
                <img
                  src={image}
                  alt={`RO Installation ${index + 1}`}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white font-semibold">RO Service #{index + 1}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-b from-white to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Customer <span className="text-cyan-600">Reviews</span>
            </h2>
            <p className="text-gray-600 text-xl">What our customers say about us</p>
          </div>

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
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
              Get Pure Water Today
            </h2>
            <p className="text-xl mb-12 max-w-3xl mx-auto opacity-90">
              Call now for a free consultation and get 30% off on your first service
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
              <motion.a
                href="tel:+919843021579"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-3 bg-white text-cyan-600 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-all"
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
                className="inline-flex items-center justify-center gap-3 bg-emerald-500 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-emerald-600 transition-all"
              >
                <MessageCircle className="w-6 h-6" />
                WhatsApp Chat
              </motion.a>
            </div>

            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold">24/7</div>
                <div className="text-sm opacity-90">Service</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">98%</div>
                <div className="text-sm opacity-90">Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">45 min</div>
                <div className="text-sm opacity-90">Response</div>
              </div>
            </div>
          </div>
        </div>
      </section>

     
    </div>
    
  );
};

export default Landingpage;