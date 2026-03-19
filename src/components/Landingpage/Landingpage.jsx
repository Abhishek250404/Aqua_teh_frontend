import React, { useState, useEffect } from 'react';
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
  ExternalLink,
  Menu,
  X,
  ChevronLeft
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
import ProductDetail from "../Productpage/ProductDetail";
import inovia from "../../assets/machine/inovica.webp";
import emira from "../../assets/machine/emira.webp";
import mars from "../../assets/machine/mars.jpg";
import lilly from "../../assets/machine/lilly.jpg";
import sonnet from "../../assets/machine/sonnet.webp";
import waterpia from "../../assets/machine/waterpia.jpg";
import jade from "../../assets/machine/jade.avif";
import dol from "../../assets/machine/dol.jpg";
// Import ProductDetail component

const Landingpage = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const colors = [
    "bg-cyan-600",
    "bg-blue-600",
    "bg-green-600",
    "bg-purple-600",
    "bg-pink-600"
  ];
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
      "images": [waterpia],
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
        lilly
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
        sonnet
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
        mars
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
        emira
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
        dol
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
        jade
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
        inovia
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
    e.stopPropagation();
    alert(`Adding product ${productId} to cart...`);
  };

  // Function to handle Add to Cart from detail view
  const handleAddToCart = (product, quantity) => {
    console.log('Added to cart:', product.name, quantity);
    alert(`${product.name} added to cart!`);
  };

  // Function to handle Buy Now from detail view
  const handleBuyNowFromDetail = (product, quantity) => {
    console.log('Buy now:', product.name, quantity);
    alert(`Proceeding to buy ${product.name}`);
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
    { value: '5000+', label: 'Happy Customers', icon: <Users className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" /> },
    { value: '15+', label: 'Years Experience', icon: <Award className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" /> },
    { value: '98%', label: 'Satisfaction', icon: <Star className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" /> },
    { value: '45 min', label: 'Response Time', icon: <Clock className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" /> },
  ];

  const features = [
    {
      icon: <Filter className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
      title: '7-Stage Filtration',
      desc: 'Advanced purification technology',
      image: flow
    },
    {
      icon: <Shield className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
      title: 'Quality Guarantee',
      desc: '100% pure water assurance',
      image: guran
    },
    {
      icon: <Wrench className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
      title: 'Expert Service',
      desc: 'Certified technicians',
      image: roImages[2]
    },
    {
      icon: <Clock className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
      title: '24/7 Support',
      desc: 'Always available for you',
      image: hours
    },
  ];

  const [activeTab, setActiveTab] = useState(0);
  const services = [
    {
      title: "RO Installation in Madurai",
      desc: "Professional RO water purifier installation in Madurai for homes and offices with proper fitting, leakage check, and TDS testing.",
      features: ["Free Demo", "Same Day Installation", "1 Year Service Support"]
    },
    {
      title: "RO Repair Service in Madurai",
      desc: "Fast and reliable RO repair service in Madurai for low water flow, bad taste, leakage, and all purifier issues.",
      features: ["Quick Response", "Genuine Spare Parts", "Affordable Price"]
    },
    {
      title: "RO Filter Replacement in Madurai",
      desc: "Timely RO filter and membrane replacement service in Madurai to maintain water quality and purifier performance.",
      features: ["Original Filters", "Improved Water Taste", "Longer RO Life"]
    },
    {
      title: "RO AMC Service in Madurai",
      desc: "Annual maintenance service for RO water purifiers with regular checkups, filter changes, and priority support.",
      features: ["4 Services per Year", "Free Checkup", "Priority Service"]
    }
  ];
  const testimonials = [
    {
      name: 'Ramesh Kumar',
      role: 'Home Owner - Madurai',
      text: 'Best RO service in Madurai! Water taste romba improve aayiduchu. Same day service vandhu quick ah fix pannanga.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
    },
    {
      name: 'Priya Lakshmi',
      role: 'Restaurant Owner - Madurai',
      text: 'Very reliable RO service in Madurai. Namma hotel ku regular maintenance pannraanga. Water quality super.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=200&q=80'
    },
    {
      name: 'Arun Prakash',
      role: 'Office Manager - Madurai',
      text: 'Professional technicians and fast response. RO repair service in Madurai la ivanga best nu feel pannom.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80'
    }
  ];

  // Responsive font sizes and spacing
  const getResponsiveClasses = () => {
    return {
      sectionPadding: 'py-12 sm:py-16 md:py-20',
      containerPadding: 'px-4 sm:px-6 lg:px-8',
      headingSize: 'text-3xl sm:text-4xl md:text-5xl font-bold',
      subheadingSize: 'text-lg sm:text-xl md:text-2xl',
      bodyText: 'text-sm sm:text-base md:text-lg',
    };
  };

  const responsive = getResponsiveClasses();

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Mobile Menu Button - Add if needed */}
      <button
        className="fixed top-4 right-4 z-50 lg:hidden bg-white p-2 rounded-lg shadow-lg"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Hero Section */}
      <section className="relative min-h-150 sm:min-h-175 lg:min-h-screen overflow-hidden bg-linear-to-br from-cyan-50 via-blue-50 to-cyan-100">
        {/* Background Pattern - Reduced opacity for mobile */}
        <div
          className="absolute inset-0 opacity-5 sm:opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 50L50 0L100 50L50 100Z' fill='%2306b6d4' fill-opacity='0.1'/%3E%3C/svg%3E")`,
          }}
        ></div>

        {/* Water Droplets - Hidden on very small screens */}
        {windowWidth > 640 && [...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-cyan-300/20 hidden sm:block"
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

        <div className={`relative max-w-7xl mx-auto ${responsive.containerPadding} pt-16 sm:pt-20 lg:pt-24 pb-12 sm:pb-16 lg:pb-20`}>
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 bg-linear-to-r from-cyan-500 to-blue-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full mb-6 sm:mb-8">
                <span className="text-base sm:text-lg">🏆</span>
                <span className="text-sm sm:text-base font-semibold">#1 RO Service in Madurai</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4 sm:mb-6 lg:mb-8">
                <span className="text-gray-900 block">
                  Best RO Water Purifier Service in Madurai
                </span>
                <span className="block mt-2 bg-linear-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent text-md sm:text-xl md:text-2xl lg:text-2xl font-semibold">
                  Same Day RO Service • Installation • Repair
                </span>
                <p className="text-sm mt-2 sm:text-base text-cyan-600 font-semibold">
                  ✔ Same Day Service | ✔ Affordable Price | ✔ Expert Technicians
                </p>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 lg:mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Aqua Tech RO System offers professional RO water purifier service in Madurai for homes and offices.
                We provide installation, repair, filter replacement, and complete maintenance for all types of RO systems.
                Facing bad taste, low water flow, or service issues? Our expert technicians will fix it quickly using genuine spare parts.
              </p>

              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4 mb-8 sm:mb-10 lg:mb-12">
                <motion.a
                  href="tel:+919843021579"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center gap-2 sm:gap-3 bg-linear-to-r from-cyan-600 to-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg shadow-lg hover:shadow-xl transition-all"
                >
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="whitespace-nowrap">Book Free Demo</span>
                </motion.a>

                <motion.a
                  href="#services"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center gap-2 sm:gap-3 bg-white text-cyan-600 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg border-2 border-cyan-600 hover:bg-cyan-50 transition-all"
                >
                  <Play className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>View Services</span>
                </motion.a>
              </div>

              {/* Stats - Responsive grid */}
              <div className="grid grid-cols-5 sm:grid-cols-5 gap-3 sm:gap-4 lg:gap-6 max-w-2xl mx-auto lg:mx-0">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="text-center p-2 sm:p-0"
                  >
                    <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-cyan-600 mb-1 sm:mb-2">
                      {stat.value}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600 flex items-center justify-center gap-1 sm:gap-2">
                      <span className="text-xs sm:text-sm text-gray-600 flex  flex-col items-center justify-center gap-1 sm:gap-2">
                        <span className="text-cyan-500">{stat.icon}</span>
                        <span className="sm:hidden">
                          {stat.label.split(' ')[0]}
                        </span>
                        <span className="hidden sm:inline">
                          {stat.label}
                        </span>
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Hero Image - Hidden on mobile, visible on tablet and up */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative hidden md:block"
            >
              <div className="relative">
                <img
                  src={ro1}
                  alt="RO Water Purifier"
                  className="rounded-2xl sm:rounded-3xl shadow-2xl w-full h-75 sm:h-100 lg:h-125 object-cover"
                />

                {/* Floating Badges - Adjusted positions for tablet */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute -top-10 sm:-top-15 -right-10 sm:-right-18 bg-linear-to-r from-emerald-500 to-green-600 text-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-xl"
                >
                  <div className="text-center">
                    <div className="text-xl sm:text-2xl font-bold">30% OFF</div>
                    <div className="text-xs sm:text-sm">First Service</div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                  className="absolute -bottom-8 sm:-bottom-10 -left-8 sm:-left-10 bg-linear-to-r from-amber-500 to-orange-600 text-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-xl"
                >
                  <div className="text-center">
                    <div className="text-xl sm:text-2xl font-bold">Free</div>
                    <div className="text-xs sm:text-sm">Installation</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className={`py-12 sm:py-16 lg:py-20 bg-white`}>
        <div className={`max-w-7xl mx-auto ${responsive.containerPadding}`}>
          <div className="text-center mb-10 sm:mb-12 lg:mb-16">
            <h2 className={`${responsive.headingSize} mb-4 sm:mb-6 text-gray-900`}>
              Premium <span className="text-cyan-600">RO Products</span>
            </h2>
            <p className={`${responsive.subheadingSize} text-gray-600 max-w-3xl mx-auto px-4`}>
              Explore our wide range of high-quality RO water purifiers from top brands
            </p>
          </div>

          {/* Products Grid - Responsive columns */}
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-10 lg:mb-12">
            {products.slice(0, windowWidth < 640 ? 2 : windowWidth < 768 ? 4 : windowWidth < 1024 ? 6 : 8).map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                onClick={() => handleProductClick(product)}
                className="group bg-white rounded-xl sm:rounded-2xl border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer"
              >
                {/* Product Image */}
                <div className="relative h-40 xs:h-44 sm:h-48 overflow-hidden bg-gray-100">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                  />

                  {/* Category Badge */}
                  <div className="absolute top-2 sm:top-4 left-2 sm:left-4">
                    <span className="px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs font-bold rounded-full bg-linear-to-r from-cyan-500 to-blue-500 text-white">
                      {product.badge || 'NEW'}
                    </span>
                  </div>

                  {/* Quick Actions - Hidden on very small screens */}
                  <div className="absolute top-2 sm:top-4 right-2 sm:right-4 flex gap-1 sm:gap-2">
                    <button
                      className="p-1.5 sm:p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Eye className="w-3 h-3 sm:w-4 sm:h-4 text-gray-700" />
                    </button>
                    <button
                      className="p-1.5 sm:p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-gray-700" />
                    </button>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-3 sm:p-4 lg:p-6">
                  {/* Rating */}
                  <div className="flex items-center gap-0.5 sm:gap-1 mb-1 sm:mb-2 lg:mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3 h-3 sm:w-3.5 sm:h-3.5 lg:w-4 lg:h-4 ${i < Math.floor(product.rating) ? 'text-amber-400 fill-amber-400' : 'text-gray-300'}`}
                      />
                    ))}
                    <span className="text-[10px] sm:text-xs text-gray-500 ml-1">({product.rating})</span>
                  </div>

                  {/* Name */}
                  <h3 className="font-bold text-gray-900 text-sm sm:text-base lg:text-lg mb-1 lg:mb-2 line-clamp-1">
                    {product.name}
                  </h3>

                  {/* Description - Hidden on very small screens */}
                  <p className="text-gray-600 text-xs sm:text-sm mb-2 lg:mb-4 line-clamp-2 hidden xs:block">
                    {product.description}
                  </p>

                  {/* Features - Show fewer on mobile */}
                  <div className="space-y-0.5 sm:space-y-1 mb-3 sm:mb-4 lg:mb-6">
                    {product.features.slice(0, windowWidth < 640 ? 1 : 2).map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-1 sm:gap-2">
                        <CheckCircle className="w-2 h-2 sm:w-3 sm:h-3 text-green-500 shrink-0" />
                        <span className="text-[10px] sm:text-xs text-gray-600 truncate">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Price */}
                  <div className="flex items-center justify-between mb-3 sm:mb-4 lg:mb-6">
                    <div>
                      <div className="text-base sm:text-lg lg:text-xl xl:text-2xl font-bold text-cyan-600">
                        ₹{product.price.toLocaleString()}
                      </div>
                      <div className="text-[10px] sm:text-xs text-gray-500 line-through">
                        ₹{product.originalPrice.toLocaleString()}
                      </div>
                    </div>
                    <span className="text-[8px] sm:text-[10px] lg:text-xs font-bold px-1.5 sm:px-2 py-0.5 sm:py-1 bg-red-100 text-red-600 rounded">
                      SAVE ₹{(product.originalPrice - product.price).toLocaleString('en-IN')}
                    </span>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={(e) => handleBuyNow(product.id, e)}
                      className="flex-1 bg-linear-to-r from-cyan-600 to-blue-600 text-white py-2 sm:py-2.5 lg:py-3 rounded-lg sm:rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-1 sm:gap-2 hover:shadow-lg transition-all"
                    >
                      <ShoppingCart className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span className="hidden xs:inline">Buy</span>
                      <span className="xs:hidden">Buy</span>
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleProductClick(product);
                      }}
                      className="px-2 sm:px-3 lg:px-4 border border-cyan-600 text-cyan-600 rounded-lg sm:rounded-xl font-medium hover:bg-cyan-50 transition-colors flex items-center justify-center"
                    >
                      <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View More Products Button */}
          <div className="text-center">
            <motion.button
              onClick={() => window.location.href = "/product"}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 sm:gap-3 bg-linear-to-r from-cyan-600 to-blue-600 text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-xl font-bold text-sm sm:text-base lg:text-lg shadow-lg hover:shadow-xl transition-all"
            >
              <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>View All Products</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.button>
          </div>

          {/* Brands Banner - Scrollable on mobile */}
          {/* <div className="mt-12 sm:mt-16 lg:mt-20 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-center mb-4 sm:mb-6 lg:mb-8 text-gray-800">
              Trusted by Top Brands
            </h3>
            <div className="flex overflow-x-auto pb-2 sm:pb-0 sm:grid sm:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4 lg:gap-6 items-center scrollbar-hide">
              {['Kent', 'Aquaguard', 'Pureit', 'Livpure', 'AO Smith', 'Blue Star', 'Whirlpool', 'HUL'].map((brand, idx) => (
                <div key={idx} className="flex-shrink-0 w-24 sm:w-auto text-center p-2 sm:p-3 lg:p-4 bg-white rounded-lg sm:rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <span className="font-bold text-gray-800 text-xs sm:text-sm lg:text-base whitespace-nowrap">{brand}</span>
                </div>
              ))}
            </div>
          </div> */}
        </div>
      </section>

      {/* Features Section */}
      <section className={`py-12 sm:py-16 lg:py-20 bg-white`}>
        <div className={`max-w-7xl mx-auto ${responsive.containerPadding}`}>
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className={`${responsive.headingSize} mb-4 sm:mb-6 text-gray-900`}>
              Why Choose <span className="text-cyan-600">Our RO Service?</span>
            </h2>
            <p className={`${responsive.subheadingSize} text-gray-600 max-w-3xl mx-auto px-4`}>
              Premium water purification solutions with guaranteed results
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative overflow-hidden rounded-xl sm:rounded-2xl bg-linear-to-b from-white to-cyan-50 border border-cyan-100 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="h-32 sm:h-40 lg:h-48 overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 sm:p-5 lg:p-6">
                  <div className="inline-flex p-2 sm:p-2.5 lg:p-3 bg-linear-to-r from-cyan-500 to-blue-600 rounded-lg sm:rounded-xl mb-3 sm:mb-4 text-white">
                    {feature.icon}
                  </div>
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold mb-1 sm:mb-2 text-gray-900">{feature.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-600">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className={`py-12 sm:py-16 lg:py-20 bg-linear-to-b from-cyan-50 to-white`}>
        <div className={`max-w-7xl mx-auto ${responsive.containerPadding}`}>
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className={`${responsive.headingSize} mb-4 sm:mb-6 text-gray-900`}>
              Our <span className="text-cyan-600">Services</span>
            </h2>
            <p className={`${responsive.subheadingSize} text-gray-600 max-w-3xl mx-auto px-4`}>
              Expert RO solutions tailored to your needs with guaranteed quality and satisfaction
            </p>
          </div>

          {/* Tab Buttons - Horizontal scroll on mobile */}
          <div className="relative mb-8 sm:mb-12 lg:mb-16">
            <div className="flex overflow-x-auto pb-4 sm:pb-0 sm:flex-wrap sm:justify-center gap-2 sm:gap-3 lg:gap-4 scrollbar-hide">
              {services.map((service, index) => (
                <motion.button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative px-4 sm:px-5 lg:px-7 py-2 sm:py-3 lg:py-4 rounded-full font-semibold transition-all duration-300 shadow-lg whitespace-nowrap text-xs sm:text-sm lg:text-base
                    ${activeTab === index
                      ? "bg-linear-to-r from-cyan-600 via-blue-500 to-cyan-600 text-white shadow-xl shadow-cyan-500/25 scale-105"
                      : "bg-white text-gray-700 hover:bg-cyan-50 hover:shadow-xl border border-cyan-100"
                    }`}
                >
                  <span className="flex items-center gap-1 sm:gap-2 lg:gap-3">
                    {service.icon}
                    {windowWidth >= 640 ? service.title : service.title.split(' ')[0]}
                  </span>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Content Card */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative bg-linear-to-br from-white via-white to-cyan-50 border border-cyan-100/50 shadow-2xl rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden">
              <div className="h-1 bg-linear-to-r from-cyan-500 via-blue-500 to-cyan-500" />

              <div className="p-4 sm:p-6 lg:p-8 xl:p-12">
                <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
                  {/* Left Content */}
                  <div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                      <div className="p-2 sm:p-2.5 lg:p-3 bg-linear-to-r from-cyan-500 to-blue-600 rounded-lg sm:rounded-xl text-white w-fit">
                        {services[activeTab].icon}
                      </div>
                      <div>
                        <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-800">
                          {services[activeTab].title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-4 sm:mb-6 lg:mb-8 leading-relaxed">
                      {services[activeTab].desc}
                    </p>

                    {/* Features - Responsive grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                      {services[activeTab].features.map((feature, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="flex items-center gap-2 sm:gap-3 bg-white/80 backdrop-blur-sm p-2 sm:p-3 lg:p-4 rounded-lg sm:rounded-xl border border-cyan-100 hover:border-cyan-300 transition-all"
                        >
                          <div className="p-1 sm:p-1.5 lg:p-2 bg-green-100 rounded-lg shrink-0">
                            <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-green-600" />
                          </div>
                          <span className="text-xs sm:text-sm lg:text-base text-gray-700 font-medium">{feature}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <motion.a
                      href="tel:+919843021579"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-2 sm:gap-3 bg-linear-to-r from-cyan-600 to-blue-600 text-white px-5 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold text-sm sm:text-base lg:text-lg shadow-lg hover:shadow-xl transition-all w-full sm:w-auto justify-center"
                    >
                      <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                      <span>Book This Service Now</span>
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                    </motion.a>
                  </div>

                  {/* Right Image - Hidden on mobile */}
                  <div className="relative hidden md:block">
                    <div className="relative h-48 sm:h-56 lg:h-64 xl:h-80 rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl">
                      <img
                        src={roImages[activeTab % roImages.length]}
                        alt={services[activeTab].title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />
                    </div>

                    {/* Stats - Hidden on tablet and below */}
                    <div className="mt-4 sm:mt-6 grid grid-cols-3 gap-2 sm:gap-3 lg:gap-4">
                      <div className="text-center p-2 sm:p-3 lg:p-4 bg-white rounded-lg sm:rounded-xl border border-cyan-100">
                        <div className="text-base sm:text-lg lg:text-xl xl:text-2xl font-bold text-cyan-600">24/7</div>
                        <div className="text-[10px] sm:text-xs text-gray-600">Support</div>
                      </div>
                      <div className="text-center p-2 sm:p-3 lg:p-4 bg-white rounded-lg sm:rounded-xl border border-cyan-100">
                        <div className="text-base sm:text-lg lg:text-xl xl:text-2xl font-bold text-cyan-600">100%</div>
                        <div className="text-[10px] sm:text-xs text-gray-600">Guarantee</div>
                      </div>
                      <div className="text-center p-2 sm:p-3 lg:p-4 bg-white rounded-lg sm:rounded-xl border border-cyan-100">
                        <div className="text-base sm:text-lg lg:text-xl xl:text-2xl font-bold text-cyan-600">45 min</div>
                        <div className="text-[10px] sm:text-xs text-gray-600">Response</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Info Bar - Hidden on mobile */}
                <div className="mt-6 sm:mt-8 lg:mt-12 pt-4 sm:pt-6 lg:pt-8 border-t border-cyan-100 hidden sm:block">
                  <div className="flex flex-wrap items-center justify-between gap-4 sm:gap-6">
                    <div className="flex items-center gap-2 sm:gap-3 lg:gap-4">
                      <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-green-500" />
                      <span className="text-xs sm:text-sm text-gray-700">1 Year Service Warranty</span>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3 lg:gap-4">
                      <Clock className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-amber-500" />
                      <span className="text-xs sm:text-sm text-gray-700">Same Day Service Available</span>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3 lg:gap-4">
                      <ThumbsUp className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-blue-500" />
                      <span className="text-xs sm:text-sm text-gray-700">2000+ Satisfied Customers</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Mobile Navigation Arrows */}
          <div className="flex justify-center gap-3 sm:gap-4 mt-6 sm:mt-8 md:hidden">
            <button
              onClick={() => setActiveTab((prev) => (prev === 0 ? services.length - 1 : prev - 1))}
              className="p-2 sm:p-3 bg-white rounded-full shadow-lg border border-cyan-100"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-600" />
            </button>
            <button
              onClick={() => setActiveTab((prev) => (prev === services.length - 1 ? 0 : prev + 1))}
              className="p-2 sm:p-3 bg-white rounded-full shadow-lg border border-cyan-100"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-600" />
            </button>
          </div>

          {/* Bottom Services Preview - Hidden on mobile */}
          <div className="mt-12 sm:mt-16 lg:mt-20 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 hidden sm:grid">
            {services.slice(0, 3).map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="p-4 sm:p-5 lg:p-6 bg-white rounded-xl sm:rounded-2xl border border-cyan-100 shadow-lg hover:shadow-xl transition-all cursor-pointer"
                onClick={() => setActiveTab(index)}
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="p-2 sm:p-2.5 lg:p-3 bg-cyan-100 rounded-lg sm:rounded-xl text-cyan-600">
                    {service.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 text-sm sm:text-base lg:text-lg mb-1">{service.title}</h4>
                    <p className="text-xs sm:text-sm text-gray-600">{service.desc.substring(0, 50)}...</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* RO Gallery Section */}
      <section className={`py-12 sm:py-16 lg:py-20 bg-white`}>
        <div className={`max-w-7xl mx-auto ${responsive.containerPadding}`}>
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className={`${responsive.headingSize} mb-4 sm:mb-6 text-gray-900`}>
              Our <span className="text-cyan-600">RO Gallery</span>
            </h2>
            <p className={`${responsive.subheadingSize} text-gray-600`}>
              See our RO installations and services
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 lg:gap-4">
            {roImages2.slice(0, windowWidth < 640 ? 4 : windowWidth < 1024 ? 6 : 8).map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="relative overflow-hidden rounded-lg sm:rounded-xl shadow-lg hover:shadow-2xl transition-all cursor-pointer group aspect-square"
              >
                <img
                  src={image}
                  alt={`RO Installation ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-2 sm:p-3 lg:p-4">
                  <span className="text-white font-semibold text-xs sm:text-sm">RO Service #{index + 1}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View More Gallery Button for Mobile */}
          {windowWidth < 640 && roImages2.length > 4 && (
            <div className="text-center mt-4 sm:mt-6">
              <button
                onClick={() => {/* Handle view more */ }}
                className="text-cyan-600 font-semibold text-sm hover:text-cyan-700 transition-colors"
              >
                View More Photos →
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Testimonials */}
      <section className={`py-12 sm:py-16 lg:py-20 bg-linear-to-b from-white to-cyan-50`}>
        <div className={`max-w-7xl mx-auto ${responsive.containerPadding}`}>
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className={`${responsive.headingSize} mb-4 sm:mb-6 text-gray-900`}>
              Customer <span className="text-cyan-600">Reviews</span>
            </h2>
            <p className={`${responsive.subheadingSize} text-gray-600`}>
              What our customers say about us
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {testimonials.slice(0, windowWidth < 640 ? 1 : windowWidth < 1024 ? 2 : 3).map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl shadow-lg border border-gray-100"
              >
                <div className="flex items-center gap-1 text-amber-400 mb-3 sm:mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 sm:mb-6 italic text-sm sm:text-base">"{testimonial.text}"</p>
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden shrink-0">
                    <div className="flex items-center gap-3 sm:gap-4">


                      <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full ${colors[index % colors.length]} flex items-center justify-center text-white font-bold text-sm sm:text-base`}>
                        {testimonial.name.charAt(0)}
                      </div>


                    </div>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-sm sm:text-base">{testimonial.name}</div>
                    <div className="text-xs sm:text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View More Reviews Button for Mobile */}
          {windowWidth < 640 && testimonials.length > 1 && (
            <div className="text-center mt-4 sm:mt-6">
              <button
                onClick={() => {/* Handle view more */ }}
                className="text-cyan-600 font-semibold text-sm hover:text-cyan-700 transition-colors"
              >
                View More Reviews →
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-linear-to-r from-cyan-600 to-blue-600">
        <div className={`max-w-7xl mx-auto ${responsive.containerPadding}`}>
          <div className="text-center text-white">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 lg:mb-8">
              Get Pure Water Today
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 lg:mb-12 max-w-3xl mx-auto opacity-90 px-4">
              Call now for a free consultation and get 30% off on your first service
            </p>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 lg:mb-12 max-w-3xl mx-auto opacity-90 px-4">
              Looking for RO service near you in Madurai? Aqua Tech RO System provides fast RO repair, installation, and maintenance at affordable prices.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 lg:gap-6 mb-6 sm:mb-8 lg:mb-12 px-4">
              <motion.a
                href="tel:+919843021579"
                className="inline-flex items-center justify-center gap-2 sm:gap-3 bg-white text-cyan-600 px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-xl font-bold text-sm sm:text-base lg:text-lg shadow-lg"
              >
                📞 Call Now: +91 98430 21579
              </motion.a>

              <motion.a
                href="https://wa.me/919843021579"
                target="_blank"
                className="inline-flex items-center justify-center gap-2 sm:gap-3 bg-emerald-500 text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-xl font-bold text-sm sm:text-base lg:text-lg shadow-lg"
              >
                💬 WhatsApp Now
              </motion.a>

            </div>
            <div className="mt-6 mb-5 text-lg text-white sm:text-md">
              ✔ 1000+ Happy Customers
              ✔ 45 Min Quick Response
              ✔ 100% Satisfaction Guarantee
            </div>
            <div className="grid grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-2xl mx-auto px-4">
              <div className="text-center">
                <div className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold">24/7</div>
                <div className="text-[10px] sm:text-xs lg:text-sm opacity-90">Service</div>
              </div>
              <div className="text-center">
                <div className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold">98%</div>
                <div className="text-[10px] sm:text-xs lg:text-sm opacity-90">Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold">45 min</div>
                <div className="text-[10px] sm:text-xs lg:text-sm opacity-90">Response</div>
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

      {/* Custom CSS for responsive utilities */}
      <style jsx>{`
        @media (max-width: 320px) {
          .xs\\:grid-cols-2 {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
          .xs\\:inline {
            display: inline;
          }
          .xs\\:hidden {
            display: none;
          }
        }
        
        @media (min-width: 321px) and (max-width: 375px) {
          /* Additional breakpoint-specific styles */
        }
        
        @media (min-width: 376px) and (max-width: 420px) {
          /* Additional breakpoint-specific styles */
        }
        
        @media (min-width: 421px) and (max-width: 768px) {
          /* Additional breakpoint-specific styles */
        }
        
        /* Hide scrollbar for Chrome, Safari and Opera */
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        /* Hide scrollbar for IE, Edge and Firefox */
        .scrollbar-hide {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
      `}</style>
    </div>
  );
};

export default Landingpage;