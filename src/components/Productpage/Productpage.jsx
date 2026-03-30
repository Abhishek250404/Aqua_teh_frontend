
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ShoppingCart,
  Heart,
  Star,
  Shield,
  Truck,
  Check,
  Home,
  Building2,
  Factory,
  Hospital,
  School,
  Hotel,
  ShoppingBag,
} from 'lucide-react';
import ProductDetail from "../Productpage/ProductDetail";
import inovia from "../../assets/machine/inovica.webp";
import emira from "../../assets/machine/emira.webp";
import mars from "../../assets/machine/mars.jpg";
import lilly from "../../assets/machine/lilly.jpg";
import hi5 from "../../assets/machine/product-jpeg.jpg";
import pure from "../../assets/machine/purosisblack.webp";
import roma from "../../assets/machine/roma.jpg";
import soft from "../../assets/machine/soft.jpg";
import soft2 from "../../assets/machine/soft2.jpg";
import sonnet from "../../assets/machine/sonnet.webp";
import waterpia from "../../assets/machine/waterpia.jpg";
import jade from "../../assets/machine/jade.avif";
import flip from "../../assets/machine/flip.jpg";
import big from "../../assets/machine/25lit.jpg";
import dol from "../../assets/machine/dol.jpg";
const Productpage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState('grid');
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  useEffect(() => {
    const checkDevice = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      setIsTablet(width >= 768 && width < 1024);
    };
    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);
  useEffect(() => {
    if (selectedProduct) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProduct]);
  const categories = [
    { id: 'all', name: 'All Products', icon: <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5" />, count: 42 },
    { id: 'domestic', name: 'Domestic RO', icon: <Home className="w-4 h-4 sm:w-5 sm:h-5" />, count: 18 },
    { id: 'commercial', name: 'Commercial RO', icon: <Building2 className="w-4 h-4 sm:w-5 sm:h-5" />, count: 12 },
    { id: 'industrial', name: 'Industrial Plant', icon: <Factory className="w-4 h-4 sm:w-5 sm:h-5" />, count: 8 },
    { id: 'hospital', name: 'Hospital Grade', icon: <Hospital className="w-4 h-4 sm:w-5 sm:h-5" />, count: 4 },
    { id: 'school', name: 'School/College', icon: <School className="w-4 h-4 sm:w-5 sm:h-5" />, count: 6 },
    { id: 'hotel', name: 'Hotel/Restaurant', icon: <Hotel className="w-4 h-4 sm:w-5 sm:h-5" />, count: 4 },
  ];
  const sortOptions = [
    { value: 'featured', label: 'Featured' },
    { value: 'newest', label: 'Newest First' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'rating', label: 'Highest Rated' },
    { value: 'popular', label: 'Most Popular' },
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
    {
      "id": 9,
      "name": "Aqua Roma RO",
      "category": "domestic",
      "price": 13999,
      "originalPrice": 16999,
      "rating": 4.4,
      "reviewCount": 85,
      "capacity": "10 LPH",
      "features": ["Compact Design", "Energy Saving", "RO + UV", "Wall Mount"],
      "description": "Budget-friendly RO purifier with essential features for daily use.",
      "longDescription": "Aqua Roma RO offers essential RO+UV purification in a compact design. Energy saving technology reduces power consumption and wall mount design saves counter space.",
      "specifications": {
        "Purification Capacity": "10 LPH",
        "Storage Tank": "8 Liters",
        "Power Consumption": "48 Watts",
        "Purification Stages": "6 Stages",
        "Installation Type": "Wall Mounted",
        "Material": "ABS Food Grade",
        "Weight": "7.2 kg",
        "Dimensions": "35 x 27 x 44 cm",
        "Filter Life": "6-8 months"
      },
      "images": [
        roma
      ],
      "badge": "BUDGET PICK",
      "stock": "In Stock",
      "delivery": "Standard Delivery",
      "warranty": "2 Years",
      "brand": "Aqua Roma",
      "model": "AR-ES10",
      "color": "White & Blue",
      "included": ["RO Unit", "Installation Kit", "User Manual", "Warranty Card"],
      "reviewList": [
        { "user": "Sanjay Dutt", "rating": 4, "comment": "Good budget option.", "date": "2 months ago", "verified": true },
        { "user": "Madhuri Dixit", "rating": 4, "comment": "Works well for small family.", "date": "1 month ago", "verified": true }
      ]
    },
    {
      "id": 10,
      "name": "Whale 25 Liters RO",
      "category": "commercial",
      "price": 28999,
      "originalPrice": 32999,
      "rating": 4.6,
      "reviewCount": 60,
      "capacity": "25 LPH",
      "features": ["High Storage", "Commercial Use", "Heavy Duty", "Floor Standing"],
      "description": "Large capacity RO system for offices, shops, and small businesses.",
      "longDescription": "Whale 25 Liters RO is designed for commercial use with heavy duty components. Large storage tank ensures continuous water supply and floor standing design offers stability.",
      "specifications": {
        "Purification Capacity": "25 LPH",
        "Storage Tank": "25 Liters",
        "Power Consumption": "120 Watts",
        "Purification Stages": "7 Stages",
        "Installation Type": "Floor Standing",
        "Material": "Stainless Steel + ABS",
        "Weight": "18 kg",
        "Dimensions": "50 x 45 x 85 cm",
        "TDS Control": "Yes",
        "Filter Life": "8-12 months"
      },
      "images": [
        big
      ],
      "badge": "COMMERCIAL",
      "stock": "In Stock",
      "delivery": "Free Delivery & Installation",
      "warranty": "3 Years",
      "brand": "Whale",
      "model": "WH-C25",
      "color": "White & Grey",
      "included": ["RO Unit", "Storage Tank", "Installation Kit", "User Manual", "Warranty Card"],
      "reviewList": [
        { "user": "Rahul Bhatia", "rating": 5, "comment": "Perfect for our office.", "date": "1 month ago", "verified": true, "business": "Tech Solutions" },
        { "user": "Sanjiv Kapoor", "rating": 5, "comment": "Great capacity and build.", "date": "2 months ago", "verified": true, "business": "Kapoor Enterprises" }
      ]
    },
    {
      "id": 11,
      "name": "Purosis RO",
      "category": "domestic",
      "price": 14999,
      "originalPrice": 17999,
      "rating": 4.5,
      "reviewCount": 78,
      "capacity": "12 LPH",
      "features": ["RO + UV", "Mineral Boost", "TDS Control", "Auto Shutoff"],
      "description": "Modern purifier with balanced mineral technology for healthy water.",
      "longDescription": "Purosis RO combines RO and UV purification with mineral boost technology that adds essential minerals back into water. TDS controller ensures optimal mineral content and auto shutoff saves water.",
      "specifications": {
        "Purification Capacity": "12 LPH",
        "Storage Tank": "9 Liters",
        "Power Consumption": "55 Watts",
        "Purification Stages": "7 Stages",
        "Installation Type": "Wall Mounted",
        "Material": "ABS Food Grade",
        "Weight": "8 kg",
        "Dimensions": "38 x 30 x 46 cm",
        "TDS Control": "Yes",
        "Filter Life": "8-10 months"
      },
      "images": [
        pure
      ],
      "badge": "HEALTHY CHOICE",
      "stock": "In Stock",
      "delivery": "Free Installation",
      "warranty": "3 Years",
      "brand": "Purosis",
      "model": "PS-MB12",
      "color": "White & Blue",
      "included": ["RO Unit", "Installation Kit", "User Manual", "Warranty Card", "Mineral Cartridge"],
      "reviewList": [
        { "user": "Anil Kapoor", "rating": 5, "comment": "Mineral boost makes water tasty.", "date": "2 months ago", "verified": true },
        { "user": "Juhi Chawla", "rating": 4, "comment": "Good product overall.", "date": "1 month ago", "verified": true }
      ]
    }
  ];
  return (
    <div className="min-h-screen bg-linear-to-b from-cyan-50 to-white">
      <div className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-2 sm:py-3 lg:py-4">
          <div className="flex items-center justify-between">
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-3 sm:py-4 lg:py-6">
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {products.map(product => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="group bg-white rounded-lg sm:rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 cursor-pointer"
                onClick={() => {
                  setSelectedProduct(product);
                  setSelectedImage(0);
                  setQuantity(1);
                }}
              >
                <div className="relative h-48 xs:h-44 sm:h-52 md:h-56 overflow-hidden bg-gray-50">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                  />
                  {product.badge && (
                    <div className="absolute top-2 left-2">
                      <span className="bg-linear-to-r from-cyan-600 to-blue-600 text-white px-2 py-0.5 rounded-full text-[8px] sm:text-xs font-bold">
                        {product.badge}
                      </span>
                    </div>
                  )}
                  <button
                    className="absolute top-2 right-2 p-1.5 bg-white/90 rounded-full hover:bg-white"
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                  >
                    <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600 hover:text-red-500" />
                  </button>
                </div>
                <div className="p-2 sm:p-3">
                  <div className="flex items-start justify-between mb-1 sm:mb-2">
                    <div>
                      <h3 className="font-bold text-gray-900 text-xs sm:text-sm group-hover:text-cyan-600 transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-[10px] sm:text-xs text-gray-600 mt-0.5">{product.capacity}</p>
                    </div>
                    <div className="flex items-center gap-0.5">
                      <Star className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-amber-400 fill-current" />
                      <span className="font-semibold text-[10px] sm:text-xs">{product.rating}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1 mb-2">
                    {product.features.slice(0, 2).map((feature, idx) => (
                      <span key={idx} className="text-[8px] sm:text-xs bg-cyan-50 text-cyan-700 px-1 py-0.5 rounded">
                        {feature}
                      </span>
                    ))}
                    {product.features.length > 2 && (
                      <span className="text-[8px] sm:text-xs bg-gray-100 text-gray-600 px-1 py-0.5 rounded">
                        +{product.features.length - 2}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-1 sm:gap-2 mb-2">
                    <span className="text-sm sm:text-base font-bold text-gray-900">₹{product.price.toLocaleString()}</span>
                    {product.originalPrice && (
                      <>
                        <span className="text-gray-500 line-through text-[8px] sm:text-xs">₹{product.originalPrice.toLocaleString()}</span>
                        <span className="text-green-600 font-semibold text-[8px] sm:text-xs">
                          {Math.round((1 - product.price / product.originalPrice) * 100)}%
                        </span>
                      </>
                    )}
                  </div>
                  <div className="flex items-center gap-2 text-[8px] sm:text-xs text-gray-600 mb-2">
                    <div className="flex items-center gap-0.5 sm:gap-1">
                      <Truck className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-green-500" />
                      <span className="truncate">{product.delivery}</span>
                    </div>
                    <div className="flex items-center gap-0.5 sm:gap-1">
                      <Shield className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-blue-500" />
                      <span>{product.warranty}</span>
                    </div>
                  </div>
                  <div className="flex gap-1 sm:gap-2" onClick={(e) => e.stopPropagation()}>
                    <button className="flex-1 bg-linear-to-r from-cyan-600 to-blue-600 text-white py-1.5 sm:py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-0.5 sm:gap-1 text-[10px] sm:text-xs">
                      <ShoppingCart className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                      Add
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProduct(product);
                        setSelectedImage(0);
                        setQuantity(1);
                      }}
                      className="px-2 sm:px-3 border border-cyan-600 text-cyan-600 rounded-lg font-semibold hover:bg-cyan-50 transition-colors text-[10px] sm:text-xs"
                    >
                      View
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="space-y-3 sm:space-y-4">
            {products.map(product => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="group bg-white rounded-lg sm:rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => {
                  setSelectedProduct(product);
                  setSelectedImage(0);
                  setQuantity(1);
                }}
              >
                <div className="flex flex-col xs:flex-row">
                  <div className="xs:w-1/3 relative bg-gray-50">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-48 xs:h-32 sm:h-36 md:h-40 object-contain p-2"
                    />
                    {product.badge && (
                      <div className="absolute top-2 left-2">
                        <span className="bg-linear-to-r from-cyan-600 to-blue-600 text-white px-2 py-0.5 rounded-full text-[8px] sm:text-xs font-bold">
                          {product.badge}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="xs:w-2/3 p-2 sm:p-3">
                    <div className="flex flex-col xs:flex-row justify-between items-start gap-1 sm:gap-2 mb-1 sm:mb-2">
                      <div className="flex-1">
                        <h3 className="text-xs sm:text-sm font-bold text-gray-900 mb-0.5">{product.name}</h3>
                        <p className="text-[10px] sm:text-xs text-gray-600 mb-1">{product.capacity}</p>
                        <div className="flex items-center gap-1 sm:gap-2 mb-1">
                          <div className="flex items-center gap-0.5">
                            <Star className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-amber-400 fill-current" />
                            <span className="font-semibold text-[10px] sm:text-xs">{product.rating}</span>
                          </div>
                          <span className="text-green-600 font-semibold text-[8px] sm:text-xs">{product.stock}</span>
                        </div>
                        <div className="flex flex-wrap gap-1 mb-2">
                          {product.features.slice(0, 2).map((feature, idx) => (
                            <span key={idx} className="inline-flex items-center gap-0.5 bg-gray-100 text-gray-700 px-1 py-0.5 rounded-full text-[8px] sm:text-xs">
                              <Check className="w-2 h-2 text-green-500" />
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="text-left xs:text-right w-full xs:w-auto">
                        <div className="text-sm sm:text-base font-bold text-gray-900">₹{product.price.toLocaleString()}</div>
                        {product.originalPrice && (
                          <div className="text-gray-500 line-through text-[8px] sm:text-xs">₹{product.originalPrice.toLocaleString()}</div>
                        )}
                      </div>
                    </div>
                    <div className="flex gap-1 sm:gap-2" onClick={(e) => e.stopPropagation()}>
                      <button className="flex-1 bg-linear-to-r from-cyan-600 to-blue-600 text-white py-1.5 sm:py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-0.5 sm:gap-1 text-[10px] sm:text-xs">
                        <ShoppingCart className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                        Add to Cart
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedProduct(product);
                          setSelectedImage(0);
                          setQuantity(1);
                        }}
                        className="px-2 sm:px-3 border border-cyan-600 text-cyan-600 rounded-lg font-semibold hover:bg-cyan-50 transition-colors text-[10px] sm:text-xs"
                      >
                        Details
                      </button>
                      <button
                        className="p-1.5 sm:p-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                        onClick={(e) => {
                          e.stopPropagation();
                        }}
                      >
                        <Heart className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-gray-600" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
      <AnimatePresence>
        {selectedProduct && (
          <ProductDetail
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
            onAddToCart={(product, quantity) => {
              console.log('Added to cart:', product.name, quantity);
            }}
            onBuyNow={(product, quantity) => {
              console.log('Buy now:', product.name, quantity);
            }}
          />
        )}
      </AnimatePresence>
    </div>
  );
};
export default Productpage;