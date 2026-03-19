import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Droplets,
  Shield,
  Clock,
  Award,
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
  Wind,
  Eye,
  ShoppingCart,
  ExternalLink
} from 'lucide-react';
import { CheckCircle } from "lucide-react";
import ro1 from "../../assets/li1.jpg";
import flow from "../../assets/flow.jpg";
import guran from "../../assets/guran.jpg";
import hours from "../../assets/24hours.jpg";
import in1 from "../../assets/in1.jpeg";
import in2 from "../../assets/in2.jpeg";
import in3 from "../../assets/in3.jpeg";
import in4 from "../../assets/in4.jpeg";
import in5 from "../../assets/in5.jpeg";
import in6 from "../../assets/in6.jpeg";
import in7 from "../../assets/in7.jpeg";
import in8 from "../../assets/in8.jpeg";

// Import ProductDetail component
import ProductDetail from "../Productpage/ProductDetail";

const Landingpage = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  const products = [
    {
      "id": 1,
      "name": "Water Pia RO",
      "category": "domestic",
      "price": 12999,
      "originalPrice": 15999,
      "rating": 4.4,
      "reviewCount": 82,
      "capacity": "10 LPH",
      "features": ["RO + UV + UF", "TDS Control", "Wall Mount", "Auto Cutoff"],
      "description": "Affordable domestic RO system with multi-stage purification.",
      "longDescription": "Water Pia RO offers 6-stage purification with RO, UV and UF technologies. It features TDS controller to retain essential minerals and auto cutoff for water savings.",
      "specifications": {
        "Purification Capacity": "10 LPH",
        "Storage Tank": "8 Liters",
        "Power Consumption": "50 Watts",
        "Purification Stages": "6 Stages",
        "Installation Type": "Wall Mounted",
        "Material": "ABS Plastic",
        "TDS Control": "Yes",
        "Weight": "7.5 kg",
        "Dimensions": "35 x 28 x 45 cm",
        "Filter Life": "6-8 months"
      },
      "images": [
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80"
      ],
      "badge": "BEST SELLER",
      "stock": "In Stock",
      "delivery": "Free Installation",
      "warranty": "2 Years",
      "brand": "Water Pia",
      "model": "WP-RO10",
      "color": "White & Blue",
      "included": ["RO Unit", "Installation Kit", "User Manual", "Warranty Card"],
      "reviewList": [
        { "user": "Rajesh Kumar", "rating": 5, "comment": "Good product for the price.", "date": "2 months ago", "verified": true },
        { "user": "Priya Sharma", "rating": 4, "comment": "Installation was smooth.", "date": "1 month ago", "verified": true }
      ]
    },
    {
      "id": 2,
      "name": "Water Lilly RO",
      "category": "domestic",
      "price": 13999,
      "originalPrice": 16999,
      "rating": 4.5,
      "reviewCount": 95,
      "capacity": "12 LPH",
      "features": ["Copper Filter", "UV LED", "Mineral Booster", "TDS Controller"],
      "description": "Stylish RO purifier with copper enrichment technology for health benefits.",
      "longDescription": "Water Lilly RO features advanced copper filter technology that adds essential copper ions to water. The UV LED ensures germ-free water and mineral booster retains natural taste.",
      "specifications": {
        "Purification Capacity": "12 LPH",
        "Storage Tank": "10 Liters",
        "Power Consumption": "55 Watts",
        "Purification Stages": "7 Stages",
        "Material": "Food Grade ABS",
        "Installation Type": "Wall Mounted",
        "Weight": "8.2 kg",
        "Dimensions": "38 x 30 x 47 cm",
        "TDS Control": "Yes",
        "Filter Life": "8-10 months"
      },
      "images": [
        "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=800&q=80"
      ],
      "badge": "TRENDING",
      "stock": "In Stock",
      "delivery": "Free Installation",
      "warranty": "3 Years",
      "brand": "Water Lilly",
      "model": "WL-CO12",
      "color": "White & Gold",
      "included": ["RO Unit", "Installation Kit", "User Manual", "Warranty Card", "Copper Cartridge"],
      "reviewList": [
        { "user": "Amit Patel", "rating": 5, "comment": "Copper technology is great.", "date": "3 months ago", "verified": true },
        { "user": "Sneha Reddy", "rating": 4, "comment": "Water tastes good.", "date": "2 weeks ago", "verified": true }
      ]
    },
    {
      "id": 3,
      "name": "Sonnet RO",
      "category": "domestic",
      "price": 11999,
      "originalPrice": 14999,
      "rating": 4.3,
      "reviewCount": 70,
      "capacity": "10 LPH",
      "features": ["RO + UV", "Compact Design", "Low Power", "Wall Mount"],
      "description": "Compact purifier suitable for small families and apartments.",
      "longDescription": "Sonnet RO is designed for small families with limited space. It combines RO and UV purification in a compact body, consuming low power while delivering pure water.",
      "specifications": {
        "Purification Capacity": "10 LPH",
        "Storage Tank": "7 Liters",
        "Power Consumption": "45 Watts",
        "Purification Stages": "5 Stages",
        "Installation Type": "Wall Mounted",
        "Material": "ABS Plastic",
        "Weight": "6.8 kg",
        "Dimensions": "32 x 25 x 42 cm",
        "Filter Life": "6 months"
      },
      "images": [
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80"
      ],
      "badge": "VALUE PICK",
      "stock": "In Stock",
      "delivery": "Free Installation",
      "warranty": "2 Years",
      "brand": "Sonnet",
      "model": "SN-105",
      "color": "White & Grey",
      "included": ["RO Unit", "Installation Kit", "User Manual", "Warranty Card"],
      "reviewList": [
        { "user": "Vikram Singh", "rating": 4, "comment": "Good for small family.", "date": "2 months ago", "verified": true },
        { "user": "Neha Gupta", "rating": 4, "comment": "Compact and works well.", "date": "1 month ago", "verified": true }
      ]
    },
    {
      "id": 4,
      "name": "Aqua Mars RO",
      "category": "domestic",
      "price": 14999,
      "originalPrice": 17999,
      "rating": 4.6,
      "reviewCount": 110,
      "capacity": "12 LPH",
      "features": ["Alkaline Filter", "TDS Adjuster", "LED Indicators", "RO + UV"],
      "description": "Advanced RO with alkaline water feature for pH balance.",
      "longDescription": "Aqua Mars RO features alkaline filter technology that balances water pH for better health. TDS adjuster lets you control mineral content and LED indicators show purification status.",
      "specifications": {
        "Purification Capacity": "12 LPH",
        "Storage Tank": "9 Liters",
        "Power Consumption": "60 Watts",
        "Purification Stages": "7 Stages",
        "Installation Type": "Wall Mounted",
        "Material": "ABS Food Grade",
        "Weight": "8.5 kg",
        "Dimensions": "40 x 32 x 48 cm",
        "TDS Control": "Yes",
        "Filter Life": "8-12 months"
      },
      "images": [
        "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=800&q=80"
      ],
      "badge": "POPULAR",
      "stock": "In Stock",
      "delivery": "Free Installation",
      "warranty": "3 Years",
      "brand": "Aqua Mars",
      "model": "AM-ALK12",
      "color": "White & Blue",
      "included": ["RO Unit", "Installation Kit", "User Manual", "Warranty Card", "Alkaline Cartridge"],
      "reviewList": [
        { "user": "Rahul Mehta", "rating": 5, "comment": "Alkaline water tastes great.", "date": "2 months ago", "verified": true },
        { "user": "Anjali Desai", "rating": 5, "comment": "Excellent product.", "date": "1 month ago", "verified": true }
      ]
    },
    {
      "id": 5,
      "name": "Emira Clean Water RO",
      "category": "domestic",
      "price": 15999,
      "originalPrice": 18999,
      "rating": 4.5,
      "reviewCount": 88,
      "capacity": "15 LPH",
      "features": ["UV Sterilization", "Smart Indicator", "High Flow", "Auto Flush"],
      "description": "High-performance RO purifier for larger families with smart features.",
      "longDescription": "Emira Clean Water RO delivers high flow rate for larger families. UV sterilization ensures 99.99% pure water and smart indicators display real-time water quality and filter status.",
      "specifications": {
        "Purification Capacity": "15 LPH",
        "Storage Tank": "10 Liters",
        "Power Consumption": "65 Watts",
        "Purification Stages": "7 Stages",
        "Installation Type": "Wall Mounted",
        "Material": "ABS Food Grade",
        "Weight": "9 kg",
        "Dimensions": "42 x 34 x 50 cm",
        "TDS Control": "Yes",
        "Filter Life": "8-10 months"
      },
      "images": [
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80"
      ],
      "badge": "FAMILY PACK",
      "stock": "In Stock",
      "delivery": "Free Installation",
      "warranty": "3 Years",
      "brand": "Emira",
      "model": "EC-SM15",
      "color": "White & Silver",
      "included": ["RO Unit", "Installation Kit", "User Manual", "Warranty Card"],
      "reviewList": [
        { "user": "Suresh Iyer", "rating": 5, "comment": "Perfect for our family of 5.", "date": "2 months ago", "verified": true },
        { "user": "Deepa Nair", "rating": 4, "comment": "Smart indicators are useful.", "date": "3 weeks ago", "verified": true }
      ]
    },
    {
      "id": 6,
      "name": "Dolphin RO",
      "category": "domestic",
      "price": 13499,
      "originalPrice": 16499,
      "rating": 4.4,
      "reviewCount": 76,
      "capacity": "10 LPH",
      "features": ["RO + UV + UF", "Auto Flush", "Child Lock", "TDS Control"],
      "description": "Reliable purifier with auto-cleaning system and child safety lock.",
      "longDescription": "Dolphin RO offers comprehensive RO+UV+UF purification with auto flush technology that cleans membranes automatically. Child lock prevents accidental hot water dispensing.",
      "specifications": {
        "Purification Capacity": "10 LPH",
        "Storage Tank": "8 Liters",
        "Power Consumption": "55 Watts",
        "Purification Stages": "6 Stages",
        "Installation Type": "Wall Mounted",
        "Material": "ABS Food Grade",
        "Weight": "7.8 kg",
        "Dimensions": "36 x 28 x 45 cm",
        "TDS Control": "Yes",
        "Filter Life": "6-8 months"
      },
      "images": [
        "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=800&q=80"
      ],
      "badge": "SAFETY FIRST",
      "stock": "In Stock",
      "delivery": "Free Installation",
      "warranty": "2 Years",
      "brand": "Dolphin",
      "model": "DL-SF10",
      "color": "White & Blue",
      "included": ["RO Unit", "Installation Kit", "User Manual", "Warranty Card"],
      "reviewList": [
        { "user": "Mohan Raj", "rating": 4, "comment": "Child lock is a great feature.", "date": "2 months ago", "verified": true },
        { "user": "Kavita Jain", "rating": 5, "comment": "Reliable product.", "date": "1 month ago", "verified": true }
      ]
    },
    {
      "id": 7,
      "name": "Aqua Jade RO",
      "category": "domestic",
      "price": 14999,
      "originalPrice": 17999,
      "rating": 4.6,
      "reviewCount": 90,
      "capacity": "12 LPH",
      "features": ["Mineral Cartridge", "TDS Controller", "LED Display", "RO + UV"],
      "description": "Premium RO purifier with mineral retention technology.",
      "longDescription": "Aqua Jade RO features mineral cartridge that adds essential minerals back into purified water. LED display shows real-time water quality and TDS controller lets you adjust mineral levels.",
      "specifications": {
        "Purification Capacity": "12 LPH",
        "Storage Tank": "9 Liters",
        "Power Consumption": "58 Watts",
        "Purification Stages": "7 Stages",
        "Installation Type": "Wall Mounted",
        "Material": "Premium ABS",
        "Weight": "8.3 kg",
        "Dimensions": "38 x 30 x 47 cm",
        "TDS Control": "Yes",
        "Filter Life": "8-10 months"
      },
      "images": [
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80"
      ],
      "badge": "PREMIUM",
      "stock": "In Stock",
      "delivery": "Free Installation",
      "warranty": "3 Years",
      "brand": "Aqua Jade",
      "model": "AJ-MN12",
      "color": "White & Green",
      "included": ["RO Unit", "Installation Kit", "User Manual", "Warranty Card", "Mineral Cartridge"],
      "reviewList": [
        { "user": "Prakash Raj", "rating": 5, "comment": "Mineral retention works well.", "date": "2 months ago", "verified": true },
        { "user": "Divya Seth", "rating": 4, "comment": "Good value for money.", "date": "1 month ago", "verified": true }
      ]
    },
    {
      "id": 8,
      "name": "Innovica RO",
      "category": "domestic",
      "price": 16999,
      "originalPrice": 19999,
      "rating": 4.7,
      "reviewCount": 102,
      "capacity": "15 LPH",
      "features": ["Smart Sensors", "Auto Shutoff", "High Recovery", "WiFi Ready"],
      "description": "Smart RO system with efficient water recovery and sensor technology.",
      "longDescription": "Innovica RO features smart sensors that detect water quality and adjust purification automatically. High recovery technology saves up to 70% water and WiFi connectivity lets you monitor from phone.",
      "specifications": {
        "Purification Capacity": "15 LPH",
        "Storage Tank": "10 Liters",
        "Power Consumption": "62 Watts",
        "Purification Stages": "8 Stages",
        "Installation Type": "Wall Mounted",
        "Material": "Premium ABS",
        "Weight": "9.2 kg",
        "Dimensions": "42 x 34 x 50 cm",
        "TDS Control": "Yes",
        "Recovery Rate": "70%",
        "Filter Life": "10-12 months"
      },
      "images": [
        "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=800&q=80"
      ],
      "badge": "SMART CHOICE",
      "stock": "Limited Stock",
      "delivery": "Free Installation",
      "warranty": "4 Years",
      "brand": "Innovica",
      "model": "IN-SM15",
      "color": "White & Silver",
      "included": ["RO Unit", "Installation Kit", "User Manual", "Warranty Card", "Smart Controller"],
      "reviewList": [
        { "user": "Amit Kumar", "rating": 5, "comment": "Smart sensors work perfectly.", "date": "1 month ago", "verified": true },
        { "user": "Priyanka Chopra", "rating": 5, "comment": "Water savings are noticeable.", "date": "2 months ago", "verified": true }
      ]
    },

  ];


  // Function to handle product click for detailed view
  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setSelectedImage(0);
    setQuantity(1);
  };

  // Function to handle Buy Now
  const handleBuyNow = (productId, e) => {
    e.stopPropagation(); // Prevent triggering the parent click
    alert(`Adding product ${productId} to cart...`);
  };

  // Function to handle Add to Cart from detail view
  const handleAddToCart = (product, quantity) => {
    console.log('Added to cart:', product.name, quantity);
    alert(`${product.name} added to cart!`);
    // Add your cart logic here
  };

  // Function to handle Buy Now from detail view
  const handleBuyNowFromDetail = (product, quantity) => {
    console.log('Buy now:', product.name, quantity);
    alert(`Proceeding to buy ${product.name}`);
    // Add your buy now logic here
  };

  const roImages2 = [
    in1,
    in2,
    in3,
    in4,
    in5,
    in6,
    in7,
    in8,
  ];

  const roImages = [
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1545235617-9465d2a55698?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=800&q=80',
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
      image: flow
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Quality Guarantee',
      desc: '100% pure water assurance',
      image: guran
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
      image: hours
    },
  ];

  const [activeTab, setActiveTab] = useState(0);
  const services = [
    {
      title: "RO Installation",
      desc: "Complete RO system setup for homes & offices",
      features: ["Free Demo", "1 Year Warranty", "Same Day Service"]
    },
    {
      title: "Annual Maintenance",
      desc: "Year-round RO protection & servicing",
      features: ["4 Services", "Free Filters", "Priority Support"]
    },
    {
      title: "Emergency Repair",
      desc: "24/7 instant RO repair service",
      features: ["Same Day", "Genuine Parts", "90 Days Warranty"]
    },
    {
      title: "Water Testing",
      desc: "Advanced water quality analysis",
      features: ["10 Parameters", "Digital Report", "Expert Advice"]
    }
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
      <section className="relative min-h-screen overflow-hidden bg-linear-to-br from-cyan-50 via-blue-50 to-cyan-100">
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
              <div className="inline-flex items-center gap-2 bg-linear-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-full mb-8">
                <span className="text-white">🏆</span>
                <span className="text-sm font-semibold">#1 RO Service in Madurai</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
                <span className="text-gray-900">Pure Water,</span>
                <br />
                <span className="bg-linear-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
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
                  className="inline-flex items-center justify-center gap-3 bg-linear-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all"
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
                  src={ro1}
                  alt="RO Water Purifier"
                  className="rounded-3xl shadow-2xl w-full h-125 object-cover"
                />

                {/* Floating Badges */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute -top-15 -right-18 bg-linear-to-r from-emerald-500 to-green-600 text-white p-6 rounded-2xl shadow-xl"
                >
                  <div className="text-center">
                    <div className="text-2xl font-bold">30% OFF</div>
                    <div className="text-sm">First Service</div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                  className="absolute -bottom-10 -left-10 bg-linear-to-r from-amber-500 to-orange-600 text-white p-6 rounded-2xl shadow-xl"
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

      {/* Products Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Premium <span className="text-cyan-600">RO Products</span>
            </h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto">
              Explore our wide range of high-quality RO water purifiers from top brands
            </p>
          </div>

          {/* Products Grid - Show 4 initially */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {products.slice(0, 4).map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                onClick={() => handleProductClick(product)}
                className="group bg-white rounded-2xl border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer"
              >
                {/* Product Image */}
                <div className="relative h-48 overflow-hidden bg-gray-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 text-xs font-bold rounded-full ${product.category === 'Premium' ? 'bg-linear-to-r from-amber-500 to-orange-500 text-white' :
                      product.category === 'Best Seller' ? 'bg-linear-to-r from-red-500 to-pink-500 text-white' :
                        product.category === 'Featured' ? 'bg-linear-to-r from-cyan-500 to-blue-500 text-white' :
                          'bg-linear-to-r from-emerald-500 to-green-500 text-white'
                      }`}>
                      {product.category}
                    </span>
                  </div>

                  {/* Quick Actions */}
                  <div className="absolute top-4 right-4 flex gap-2">
                    <button
                      className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Eye className="w-4 h-4 text-gray-700" />
                    </button>
                    <button
                      className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Heart className="w-4 h-4 text-gray-700" />
                    </button>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-amber-400 fill-amber-400' : 'text-gray-300'}`}
                      />
                    ))}
                    <span className="text-sm text-gray-500 ml-2">({product.rating})</span>
                  </div>

                  {/* Name */}
                  <h3 className="font-bold text-gray-900 text-lg mb-2 line-clamp-1">
                    {product.name}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {product.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-1 mb-6">
                    {product.features.slice(0, 2).map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-3 h-3 text-green-500" />
                        <span className="text-xs text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Price */}
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <div className="text-2xl font-bold text-cyan-600">₹{product.price.toLocaleString()}</div>
                      <div className="text-sm text-gray-500 line-through">₹{product.originalPrice.toLocaleString()}</div>
                    </div>
                    <span className="text-xs font-bold px-2 py-1 bg-red-100 text-red-600 rounded">
                      SAVE ₹{(product.originalPrice - product.price).toLocaleString('en-IN')}
                    </span>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={(e) => handleBuyNow(product.id, e)}
                      className="flex-1 bg-linear-to-r from-cyan-600 to-blue-600 text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:shadow-lg transition-all"
                    >
                      <ShoppingCart className="w-4 h-4" />
                      Buy Now
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleProductClick(product);
                      }}
                      className="px-4 border border-cyan-600 text-cyan-600 rounded-xl font-medium hover:bg-cyan-50 transition-colors flex items-center justify-center"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Products Grid - Show 4 more on desktop */}
          <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {products.slice(4, 8).map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                onClick={() => handleProductClick(product)}
                className="group bg-white rounded-2xl border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer"
              >
                {/* Product Image */}
                <div className="relative h-48 overflow-hidden bg-gray-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 text-xs font-bold rounded-full ${product.category === 'Premium' ? 'bg-linear-to-r from-amber-500 to-orange-500 text-white' :
                      product.category === 'Best Seller' ? 'bg-linear-to-r from-red-500 to-pink-500 text-white' :
                        product.category === 'Featured' ? 'bg-linear-to-r from-cyan-500 to-blue-500 text-white' :
                          'bg-linear-to-r from-emerald-500 to-green-500 text-white'
                      }`}>
                      {product.category}
                    </span>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-amber-400 fill-amber-400' : 'text-gray-300'}`}
                      />
                    ))}
                    <span className="text-sm text-gray-500 ml-2">({product.rating})</span>
                  </div>

                  {/* Name */}
                  <h3 className="font-bold text-gray-900 text-lg mb-2 line-clamp-1">
                    {product.name}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {product.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-1 mb-6">
                    {product.features.slice(0, 2).map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-3 h-3 text-green-500" />
                        <span className="text-xs text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Price */}
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <div className="text-2xl font-bold text-cyan-600">₹{product.price.toLocaleString()}</div>
                      <div className="text-sm text-gray-500 line-through">₹{product.originalPrice.toLocaleString()}</div>
                    </div>
                    <span className="text-xs font-bold px-2 py-1 bg-red-100 text-red-600 rounded">
                      SAVE ₹{(product.originalPrice - product.price).toLocaleString('en-IN')}
                    </span>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={(e) => handleBuyNow(product.id, e)}
                      className="flex-1 bg-linear-to-r from-cyan-600 to-blue-600 text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:shadow-lg transition-all"
                    >
                      <ShoppingCart className="w-4 h-4" />
                      Buy Now
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View More Button for Mobile */}
          <div className="block lg:hidden text-center mb-8">
            <button
              onClick={() => window.location.href = "/products"}
              className="text-cyan-600 font-bold text-lg hover:text-cyan-700 transition-colors flex items-center justify-center gap-2 mx-auto"
            >
              View More Products
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* View All Products Button */}
          <div className="text-center">
            <motion.button
              onClick={() => window.location.href = "/product"}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-linear-to-r from-cyan-600 to-blue-600 text-white px-10 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all"
            >
              <ShoppingCart className="w-5 h-5" />
              View All Products
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>

          {/* Brands Banner */}
          <div className="mt-20 bg-linear-to-r from-cyan-50 to-blue-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">
              Trusted by Top Brands
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 items-center">
              {['Kent', 'Aquaguard', 'Pureit', 'Livpure', 'AO Smith', 'Blue Star', 'Whirlpool', 'HUL'].map((brand, idx) => (
                <div key={idx} className="text-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <span className="font-bold text-gray-800">{brand}</span>
                </div>
              ))}
            </div>
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
                className="group relative overflow-hidden rounded-2xl bg-linear-to-b from-white to-cyan-50 border border-cyan-100 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="inline-flex p-3 bg-linear-to-r from-cyan-500 to-blue-600 rounded-xl mb-4 text-white">
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
      <section className="py-20 bg-linear-to-b from-cyan-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Our <span className="text-cyan-600"> Services</span>
            </h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto">
              Expert RO solutions tailored to your needs with guaranteed quality and satisfaction
            </p>
          </div>

          <div className="relative">
            {/* Tab Buttons with Floating Effect */}
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              {services.map((service, index) => (
                <motion.button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative px-7 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg
              ${activeTab === index
                      ? "bg-linear-to-r from-cyan-600 via-blue-500 to-cyan-600 text-white shadow-xl shadow-cyan-500/25 scale-105"
                      : "bg-white text-gray-700 hover:bg-cyan-50 hover:shadow-xl border border-cyan-100"
                    }`}
                >
                  <span className="flex items-center gap-3">
                    {service.icon}
                    {service.title}
                  </span>
                  {activeTab === index && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-linear-to-r from-cyan-400 to-blue-400 rounded-full"
                    />
                  )}
                </motion.button>
              ))}
            </div>

            {/* Content Display with Slide Animation */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              {/* Floating Background Elements */}
              <div className="absolute inset-0 overflow-hidden rounded-3xl">
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-linear-to-br from-cyan-200/20 to-blue-200/10 rounded-full blur-3xl" />
                <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-linear-to-tr from-cyan-100/20 to-blue-100/10 rounded-full blur-3xl" />
              </div>

              {/* Main Content Card */}
              <div className="relative bg-linear-to-br from-white via-white to-cyan-50 border border-cyan-100/50 shadow-2xl rounded-3xl overflow-hidden backdrop-blur-sm">
                {/* Decorative Top Border */}
                <div className="h-1 bg-linear-to-r from-cyan-500 via-blue-500 to-cyan-500" />

                <div className="p-8 md:p-12">
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div>
                      <div className="inline-flex items-center gap-3 mb-6">
                        <div className="p-3 bg-linear-to-r from-cyan-500 to-blue-600 rounded-xl text-white">
                          {services[activeTab].icon}
                        </div>
                        <div>
                          <h3 className="text-3xl md:text-4xl font-bold text-gray-800">
                            {services[activeTab].title}
                          </h3>
                          <p className="text-cyan-600 font-semibold mt-2">
                            {services[activeTab].price}
                          </p>
                        </div>
                      </div>

                      <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                        {services[activeTab].desc}
                      </p>

                      {/* Features Grid */}
                      <div className="grid sm:grid-cols-2 gap-4 mb-8">
                        {services[activeTab].features.map((feature, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="flex items-center gap-4 bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-cyan-100 hover:border-cyan-300 transition-all"
                          >
                            <div className="p-2 bg-green-100 rounded-lg">
                              <CheckCircle className="w-5 h-5 text-green-600" />
                            </div>
                            <span className="text-gray-700 font-medium">{feature}</span>
                          </motion.div>
                        ))}
                      </div>

                      {/* CTA Button */}
                      <motion.a
                        href="tel:+919843021579"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-3 bg-linear-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all"
                      >
                        <Phone className="w-5 h-5" />
                        Book This Service Now
                        <ArrowRight className="w-5 h-5" />
                      </motion.a>
                    </div>

                    {/* Right Image/Visual */}
                    <div className="relative">
                      <div className="relative h-64 lg:h-80 rounded-2xl overflow-hidden shadow-2xl">
                        <img
                          src={roImages[activeTab]}
                          alt={services[activeTab].title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />
                      </div>

                      {/* Stats Bar */}
                      <div className="mt-6 grid grid-cols-3 gap-4">
                        <div className="text-center p-4 bg-white rounded-xl border border-cyan-100">
                          <div className="text-2xl font-bold text-cyan-600">24/7</div>
                          <div className="text-sm text-gray-600">Support</div>
                        </div>
                        <div className="text-center p-4 bg-white rounded-xl border border-cyan-100">
                          <div className="text-2xl font-bold text-cyan-600">100%</div>
                          <div className="text-sm text-gray-600">Guarantee</div>
                        </div>
                        <div className="text-center p-4 bg-white rounded-xl border border-cyan-100">
                          <div className="text-2xl font-bold text-cyan-600">45 min</div>
                          <div className="text-sm text-gray-600">Response</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Info Bar */}
                  <div className="mt-12 pt-8 border-t border-cyan-100">
                    <div className="flex flex-wrap items-center justify-between gap-6">
                      <div className="flex items-center gap-4">
                        <ShieldCheck className="w-6 h-6 text-green-500" />
                        <span className="text-gray-700">1 Year Service Warranty</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <Clock className="w-6 h-6 text-amber-500" />
                        <span className="text-gray-700">Same Day Service Available</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <ThumbsUp className="w-6 h-6 text-blue-500" />
                        <span className="text-gray-700">2000+ Satisfied Customers</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation Arrows for Mobile */}
              <div className="flex justify-center gap-4 mt-8 md:hidden">
                <button
                  onClick={() => setActiveTab((prev) => (prev === 0 ? services.length - 1 : prev - 1))}
                  className="p-3 bg-white rounded-full shadow-lg border border-cyan-100"
                >
                  <ChevronRight className="w-5 h-5 text-cyan-600 rotate-180" />
                </button>
                <button
                  onClick={() => setActiveTab((prev) => (prev === services.length - 1 ? 0 : prev + 1))}
                  className="p-3 bg-white rounded-full shadow-lg border border-cyan-100"
                >
                  <ChevronRight className="w-5 h-5 text-cyan-600" />
                </button>
              </div>
            </motion.div>
          </div>

          {/* Bottom Services Grid Preview */}
          <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.slice(0, 3).map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="p-6 bg-white rounded-2xl border border-cyan-100 shadow-lg hover:shadow-xl transition-all cursor-pointer"
                onClick={() => setActiveTab(index)}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-cyan-100 rounded-xl text-cyan-600">
                    {service.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">{service.title}</h4>
                    <p className="text-sm text-gray-600">{service.desc.substring(0, 60)}...</p>
                  </div>
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
            {roImages2.map((image, index) => (
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
                  className="w-full h-64 object-contain group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white font-semibold">RO Service #{index + 1}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-linear-to-b from-white to-cyan-50">
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
      <section className="py-20 bg-linear-to-r from-cyan-600 to-blue-600">
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

      {/* Product Detail Modal */}
      {selectedProduct && (
        <ProductDetail
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={handleAddToCart}
          onBuyNow={handleBuyNowFromDetail}
        />
      )}
    </div>
  );
};

export default Landingpage;