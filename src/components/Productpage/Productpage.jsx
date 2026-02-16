import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Filter,
  Search,
  ShoppingCart,
  Heart,
  Star,
  Battery,
  Droplets,
  Shield,
  Clock,
  Truck,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Grid,
  List,
  Check,
  X,
  Home,
  Building2,
  Factory,
  Hospital,
  School,
  Hotel,
  Thermometer,
  Wind,
  Zap,
  Settings,
  ShoppingBag,
  Award,
  Users,
  Phone,
  Menu,
  Minus,
  Plus,
  RotateCcw,
  Mail,
  MapPin,
  CreditCard,
  Gift,
  ThumbsUp,
  AlertCircle
} from 'lucide-react';

const Productpage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState('grid');
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedFilters, setSelectedFilters] = useState({
    capacity: [],
    priceRange: [0, 50000],
    brands: [],
    features: []
  });

  // Check if mobile view
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Prevent body scroll when product detail is open
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
    { id: 'all', name: 'All Products', icon: <ShoppingBag className="w-5 h-5" />, count: 42 },
    { id: 'domestic', name: 'Domestic RO', icon: <Home className="w-5 h-5" />, count: 18 },
    { id: 'commercial', name: 'Commercial RO', icon: <Building2 className="w-5 h-5" />, count: 12 },
    { id: 'industrial', name: 'Industrial Plant', icon: <Factory className="w-5 h-5" />, count: 8 },
    { id: 'hospital', name: 'Hospital Grade', icon: <Hospital className="w-5 h-5" />, count: 4 },
    { id: 'school', name: 'School/College', icon: <School className="w-5 h-5" />, count: 6 },
    { id: 'hotel', name: 'Hotel/Restaurant', icon: <Hotel className="w-5 h-5" />, count: 4 },
  ];

  const filters = {
    capacity: [
      { value: '8l', label: '8 LPH' },
      { value: '15l', label: '15 LPH' },
      { value: '25l', label: '25 LPH' },
      { value: '50l', label: '50 LPH' },
      { value: '100l', label: '100 LPH' },
      { value: '200l', label: '200+ LPH' },
    ],
    brands: [
      { value: 'aquaguard', label: 'Aquaguard' },
      { value: 'kent', label: 'Kent' },
      { value: 'pureit', label: 'Pureit' },
      { value: 'livpure', label: 'Livpure' },
      { value: 'whirlpool', label: 'Whirlpool' },
      { value: 'lg', label: 'LG' },
    ],
    features: [
      { value: 'uv', label: 'UV Purification', icon: <Zap className="w-4 h-4" /> },
      { value: 'mineral', label: 'Mineral Boost', icon: <Award className="w-4 h-4" /> },
      { value: 'tank', label: 'Storage Tank', icon: <Droplets className="w-4 h-4" /> },
      { value: 'hot', label: 'Hot Water', icon: <Thermometer className="w-4 h-4" /> },
      { value: 'smart', label: 'Smart Monitor', icon: <Battery className="w-4 h-4" /> },
      { value: 'warranty', label: '5 Year Warranty', icon: <Shield className="w-4 h-4" /> },
    ]
  };

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
      id: 1,
      name: 'Aquaguard Magna NXT RO',
      category: 'domestic',
      price: 18999,
      originalPrice: 21999,
      rating: 4.5,
      reviewCount: 124,
      capacity: '8 LPH',
      features: ['UV + UF', 'Mineral Boost', 'Smart Display'],
      description: 'Advanced 7-stage RO purification with mineral boost technology for healthy water. Removes impurities while retaining essential minerals.',
      longDescription: 'The Aquaguard Magna NXT RO comes with advanced 7-stage purification process including RO + UV + UF + Mineral Boost technology. It features a smart display panel that shows real-time water quality, filter life, and service alerts. The mineral cartridges adds essential minerals like calcium and magnesium back into the purified water.',
      specifications: {
        'Purification Capacity': '8 LPH',
        'Storage Tank': '7 Liters',
        'Power Consumption': '60 Watts',
        'Purification Stages': '7 Stages (RO+UV+UF+Mineral)',
        'Installation Type': 'Wall Mounted',
        'Material': 'ABS Food Grade Plastic',
        'Weight': '8.5 kg',
        'Dimensions': '38 x 32 x 48 cm'
      },
      images: [
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=800&q=80'
      ],
      badge: 'BEST SELLER',
      stock: 'In Stock',
      delivery: 'Free Installation',
      warranty: '5 Years',
      brand: 'Aquaguard',
      model: 'Magna NXT',
      color: 'White & Blue',
      included: ['RO Unit', 'Installation Kit', 'User Manual', 'Warranty Card', 'Free Installation Voucher'],
      reviewList: [
        { user: 'Rajesh K.', rating: 5, comment: 'Excellent product! Water tastes great.', date: '2 months ago' },
        { user: 'Priya S.', rating: 4, comment: 'Good quality, installation was smooth.', date: '1 month ago' }
      ]
    },
    {
      id: 2,
      name: 'Kent Grand Plus RO',
      category: 'domestic',
      price: 15999,
      originalPrice: 18999,
      rating: 4.7,
      reviewCount: 89,
      capacity: '10 LPH',
      features: ['TDS Controller', 'UV Purification', 'Hot Water'],
      description: 'Kent Grand Plus RO with TDS controller and UV purification. Perfect for domestic use with hot water option.',
      longDescription: 'The Kent Grand Plus RO features a unique TDS controller that allows you to retain essential minerals in water. It comes with in-tank UV purification that keeps water pure in the storage tank. The hot water feature provides instant hot water for tea and coffee.',
      specifications: {
        'Purification Capacity': '10 LPH',
        'Storage Tank': '8 Liters',
        'Power Consumption': '60 Watts',
        'Purification Stages': '6 Stages (RO+UV+TDS Control)',
        'Installation Type': 'Wall Mounted',
        'Material': 'ABS Food Grade Plastic',
        'Weight': '9 kg',
        'Dimensions': '40 x 35 x 50 cm'
      },
      images: [
        'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=800&q=80'
      ],
      badge: 'TRENDING',
      stock: 'In Stock',
      delivery: 'Same Day',
      warranty: '7 Years',
      brand: 'Kent',
      model: 'Grand Plus',
      color: 'White & Grey',
      included: ['RO Unit', 'Installation Kit', 'User Manual', 'Warranty Card'],
      reviewList: [
        { user: 'Amit K.', rating: 5, comment: 'Best RO in this price range.', date: '3 months ago' }
      ]
    },
    {
      id: 3,
      name: 'Commercial RO 100 LPH',
      category: 'commercial',
      price: 45999,
      originalPrice: 51999,
      rating: 4.8,
      reviewCount: 45,
      capacity: '100 LPH',
      features: ['Industrial Grade', 'Auto Cleaning', 'Digital Display'],
      description: 'High-capacity commercial RO system for offices and small businesses. Auto-cleaning and digital display.',
      longDescription: 'This commercial RO system is designed for offices, restaurants, and small businesses. It features automatic cleaning cycles, digital TDS display, and high-efficiency membranes. The system produces 100 liters per hour of pure water.',
      specifications: {
        'Purification Capacity': '100 LPH',
        'Storage Tank': '50 Liters',
        'Power Consumption': '200 Watts',
        'Purification Stages': '8 Stages (RO+UV+UF+TDS)',
        'Installation Type': 'Floor Standing',
        'Material': 'Stainless Steel',
        'Weight': '45 kg',
        'Dimensions': '60 x 45 x 120 cm'
      },
      images: [
        'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=800&q=80'
      ],
      badge: 'LIMITED OFFER',
      stock: 'In Stock',
      delivery: 'Free Delivery',
      warranty: '3 Years',
      brand: 'Kent',
      model: 'Commercial 100',
      color: 'Silver',
      included: ['RO Unit', 'Storage Tank', 'Installation Kit', 'User Manual'],
      reviewList: [
        { user: 'Suresh R.', rating: 5, comment: 'Perfect for our office.', date: '2 months ago' }
      ]
    },
    {
      id: 4,
      name: 'Industrial RO Plant 500 LPH',
      category: 'industrial',
      price: 185999,
      originalPrice: 215999,
      rating: 4.9,
      reviewCount: 23,
      capacity: '500 LPH',
      features: ['Multi-stage', 'Auto Backwash', 'Remote Monitor'],
      description: 'Industrial grade RO plant with 500 LPH capacity. Multi-stage purification with auto backwash.',
      longDescription: 'Complete industrial RO solution for factories and large facilities. Features multi-stage pre-treatment, auto backwash, and remote monitoring capability. Produces 500 liters per hour of high-purity water.',
      specifications: {
        'Purification Capacity': '500 LPH',
        'Storage Tank': '1000 Liters',
        'Power Consumption': '1.5 kW',
        'Purification Stages': '10 Stages',
        'Installation Type': 'Floor Standing',
        'Material': 'SS304',
        'Weight': '250 kg',
        'Dimensions': '200 x 100 x 180 cm'
      },
      images: [
        'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80'
      ],
      badge: 'PREMIUM',
      stock: 'Limited Stock',
      delivery: 'Installation Included',
      warranty: '2 Years',
      brand: 'Ion Exchange',
      model: 'IE-500',
      color: 'Industrial Blue',
      included: ['RO Plant', 'Storage Tank', 'Pump Set', 'Control Panel', 'Installation'],
      reviewList: [
        { user: 'Manoj S.', rating: 5, comment: 'Excellent industrial solution.', date: '1 month ago' }
      ]
    },
    {
      id: 5,
      name: 'Hospital Grade RO System',
      category: 'hospital',
      price: 78999,
      originalPrice: 89999,
      rating: 4.9,
      reviewCount: 18,
      capacity: '50 LPH',
      features: ['Medical Grade', 'UV+UF+RO', 'Pure Water'],
      description: 'Hospital-grade RO system with medical-grade filtration. Perfect for clinics and hospitals.',
      longDescription: 'Specially designed for medical facilities, this hospital-grade RO system meets strict medical standards. Features dual-stage UV sterilization and absolute filtration for bacteria-free water.',
      specifications: {
        'Purification Capacity': '50 LPH',
        'Storage Tank': '100 Liters',
        'Power Consumption': '300 Watts',
        'Purification Stages': '9 Stages (Medical Grade)',
        'Installation Type': 'Floor Standing',
        'Material': 'SS316 Medical Grade',
        'Weight': '65 kg',
        'Dimensions': '80 x 60 x 150 cm'
      },
      images: [
        'https://images.unsplash.com/photo-1545235617-9465d2a55698?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80'
      ],
      badge: 'SPECIAL',
      stock: 'In Stock',
      delivery: 'Expert Installation',
      warranty: '5 Years',
      brand: 'AquaMed',
      model: 'MediPure 50',
      color: 'White & Blue',
      included: ['RO Unit', 'UV Sterilizer', 'Storage Tank', 'Installation Kit'],
      reviewList: [
        { user: 'Dr. Sharma', rating: 5, comment: 'Perfect for our clinic.', date: '3 months ago' }
      ]
    },
    {
      id: 6,
      name: 'School RO System 200 LPH',
      category: 'school',
      price: 68999,
      originalPrice: 75999,
      rating: 4.6,
      reviewCount: 32,
      capacity: '200 LPH',
      features: ['Child Safe', 'Energy Saving', 'Easy Maintenance'],
      description: 'High-capacity RO system for schools and colleges. Child-safe design with energy-saving features.',
      longDescription: 'Designed specifically for educational institutions, this RO system features child-safe dispensing, energy-efficient operation, and easy maintenance. Provides clean drinking water for students and staff.',
      specifications: {
        'Purification Capacity': '200 LPH',
        'Storage Tank': '150 Liters',
        'Power Consumption': '400 Watts',
        'Purification Stages': '7 Stages',
        'Installation Type': 'Floor Standing',
        'Material': 'SS304',
        'Weight': '85 kg',
        'Dimensions': '90 x 70 x 160 cm'
      },
      images: [
        'https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80'
      ],
      badge: 'POPULAR',
      stock: 'In Stock',
      delivery: 'Free Setup',
      warranty: '4 Years',
      brand: 'AquaGuard',
      model: 'EduPure 200',
      color: 'White & Green',
      included: ['RO Unit', 'Storage Tank', 'Installation Kit', 'User Manual'],
      reviewList: [
        { user: 'Principal Rao', rating: 5, comment: 'Great for our school.', date: '2 months ago' }
      ]
    }
  ];

  const handleFilterToggle = (filterType, value) => {
    setSelectedFilters(prev => {
      const current = prev[filterType];
      if (current.includes(value)) {
        return {
          ...prev,
          [filterType]: current.filter(item => item !== value)
        };
      } else {
        return {
          ...prev,
          [filterType]: [...current, value]
        };
      }
    });
  };

  const clearFilters = () => {
    setSelectedFilters({
      capacity: [],
      priceRange: [0, 50000],
      brands: [],
      features: []
    });
  };

  const filteredProducts = products.filter(product => {
    if (selectedCategory !== 'all' && product.category !== selectedCategory) {
      return false;
    }

    if (selectedFilters.capacity.length > 0) {
      const capacityMatch = selectedFilters.capacity.some(filter =>
        product.capacity.includes(filter.replace('l', ''))
      );
      if (!capacityMatch) return false;
    }

    if (selectedFilters.brands.length > 0) {
      const brandMatch = selectedFilters.brands.some(brand =>
        product.name.toLowerCase().includes(brand)
      );
      if (!brandMatch) return false;
    }

    if (selectedFilters.features.length > 0) {
      const featureMatch = selectedFilters.features.some(feature =>
        product.features.some(pFeature =>
          pFeature.toLowerCase().includes(feature)
        )
      );
      if (!featureMatch) return false;
    }

    if (product.price < selectedFilters.priceRange[0] || product.price > selectedFilters.priceRange[1]) {
      return false;
    }

    return true;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'newest':
        return b.id - a.id;
      default:
        return 0;
    }
  });
// Product Detail Component - ENHANCED VERSION with catchy design
// Product Detail Component - FIXED with working image navigation
const ProductDetail = ({ product, onClose }) => {
  const [activeTab, setActiveTab] = useState('description');
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [showShareOptions, setShowShareOptions] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Image navigation functions
  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  // Zoom functionality
  const handleMouseMove = (e) => {
    if (!isZoomed) return;
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setMousePosition({ x, y });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-white overflow-y-auto"
    >
      {/* Sticky Header with Glassmorphism */}
      <div className="sticky top-0 z-20 bg-white/80 backdrop-blur-md border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <motion.button
              whileHover={{ x: -5 }}
              onClick={onClose}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 group"
            >
              <div className="p-2 rounded-full bg-gray-100 group-hover:bg-gray-200 transition-colors">
                <ChevronLeft className="w-5 h-5" />
              </div>
              <span className="font-medium">Back to Products</span>
            </motion.button>
            
            <div className="flex items-center gap-3">
              <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsWishlisted(!isWishlisted)}
                className="p-2.5 hover:bg-gray-100 rounded-full relative group"
              >
                <Heart className={`w-5 h-5 transition-colors ${isWishlisted ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  +
                </span>
              </motion.button>
              
              <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-2.5 hover:bg-gray-100 rounded-full relative"
              >
                <ShoppingCart className="w-5 h-5 text-gray-600" />
                <motion.span 
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="absolute -top-1 -right-1 bg-gradient-to-r from-cyan-600 to-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center shadow-lg"
                >
                  3
                </motion.span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowShareOptions(!showShareOptions)}
                className="p-2.5 hover:bg-gray-100 rounded-full relative"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
              </motion.button>

              {/* Share Options Popup */}
              <AnimatePresence>
                {showShareOptions && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-16 right-4 bg-white rounded-xl shadow-2xl p-4 border z-30"
                  >
                    <div className="flex gap-3">
                      {['facebook', 'twitter', 'whatsapp', 'telegram'].map((social) => (
                        <motion.button
                          key={social}
                          whileHover={{ y: -3 }}
                          onClick={() => {
                            // Add share functionality here
                            console.log(`Sharing on ${social}`);
                            setShowShareOptions(false);
                          }}
                          className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gradient-to-r hover:from-cyan-600 hover:to-blue-600 hover:text-white transition-all"
                        >
                          <span className="capitalize text-sm">{social[0]}</span>
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Product Main Section */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
          {/* Product Images with Enhanced Gallery */}
          <div>
            {/* Main Image with Zoom Effect */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className={`relative h-96 lg:h-[500px] rounded-2xl overflow-hidden mb-4 bg-gradient-to-br from-gray-50 to-gray-100 group ${
                isZoomed ? 'cursor-zoom-out' : 'cursor-zoom-in'
              }`}
              onClick={() => setIsZoomed(!isZoomed)}
              onMouseMove={handleMouseMove}
              onMouseLeave={() => setIsZoomed(false)}
            >
              {!isZoomed ? (
                <motion.img
                  key={selectedImage}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700"
                />
              ) : (
                <div
                  className="w-full h-full"
                  style={{
                    backgroundImage: `url(${product.images[selectedImage]})`,
                    backgroundPosition: `${mousePosition.x}% ${mousePosition.y}%`,
                    backgroundSize: '200%',
                    backgroundRepeat: 'no-repeat',
                  }}
                />
              )}
              
              {/* Badge with Animation */}
              {product.badge && (
                <motion.div 
                  initial={{ x: -100, rotate: -45 }}
                  animate={{ x: 0, rotate: 0 }}
                  transition={{ type: "spring", bounce: 0.5 }}
                  className="absolute top-4 left-4 z-10"
                >
                  <span className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg flex items-center gap-1">
                    <Award className="w-3 h-3" />
                    {product.badge}
                  </span>
                </motion.div>
              )}

              {/* Discount Badge */}
              {product.originalPrice && (
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3, type: "spring" }}
                  className="absolute top-4 right-4 z-10"
                >
                  <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                    {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                  </span>
                </motion.div>
              )}

              {/* Image Navigation Arrows - Now Working */}
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg hover:bg-white z-20"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg hover:bg-white z-20"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm z-10">
                {selectedImage + 1} / {product.images.length}
              </div>
            </motion.div>

            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((image, index) => (
                <motion.button
                  key={index}
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedImage(index)}
                  className={`relative h-24 rounded-xl overflow-hidden border-2 transition-all ${
                    selectedImage === index 
                      ? 'border-cyan-600 shadow-lg shadow-cyan-200' 
                      : 'border-transparent hover:border-gray-300'
                  }`}
                >
                  <img src={image} alt={`${product.name} ${index + 1}`} className="w-full h-full object-cover" />
                  {selectedImage === index && (
                    <motion.div 
                      layoutId="selectedImage"
                      className="absolute inset-0 bg-cyan-600/10"
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Product Info with Enhanced Styling */}
          <div>
            {/* Brand and Model */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-3 mb-4"
            >
              <span className="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm font-medium">
                {product.brand}
              </span>
              <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                {product.model}
              </span>
            </motion.div>

            {/* Title with Gradient */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-cyan-800 to-blue-800 bg-clip-text text-transparent"
            >
              {product.name}
            </motion.h1>

            {/* Rating with Animation */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="flex items-center gap-1 bg-amber-50 px-3 py-1.5 rounded-full">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                  >
                    <Star className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'text-amber-400 fill-current' : 'text-gray-300'}`} />
                  </motion.div>
                ))}
                <span className="font-bold ml-1">{product.rating}</span>
              </div>
              <span className="text-gray-500">({product.reviewCount} verified reviews)</span>
              <motion.span 
                animate={{ 
                  backgroundColor: ['#86efac', '#bbf7d0', '#86efac'],
                }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="text-green-700 px-3 py-1.5 rounded-full text-sm font-semibold"
              >
                {product.stock}
              </motion.span>
            </motion.div>

            {/* Description with Highlight */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-6 p-4 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl border border-cyan-100"
            >
              <p className="text-gray-700 text-lg leading-relaxed">{product.description}</p>
            </motion.div>

            {/* Price with Animation */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="mb-8 p-6 bg-gradient-to-r from-gray-50 to-white rounded-2xl border"
            >
              <div className="flex items-center gap-4">
                <div>
                  <span className="text-sm text-gray-500 mb-1 block">Special Price</span>
                  <div className="flex items-center gap-3">
                    <span className="text-5xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                      ₹{product.price.toLocaleString()}
                    </span>
                    {product.originalPrice && (
                      <>
                        <span className="text-gray-400 line-through text-2xl">₹{product.originalPrice.toLocaleString()}</span>
                      </>
                    )}
                  </div>
                </div>
                {product.originalPrice && (
                  <motion.div 
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="ml-auto"
                  >
                    <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full font-bold text-lg">
                      SAVE ₹{(product.originalPrice - product.price).toLocaleString()}
                    </span>
                  </motion.div>
                )}
              </div>
            </motion.div>

            {/* Key Features with Icons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mb-8"
            >
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                <Zap className="w-5 h-5 text-cyan-600" />
                Key Features
              </h3>
              <div className="flex flex-wrap gap-2">
                {product.features.map((feature, idx) => (
                  <motion.span
                    key={idx}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="bg-gradient-to-r from-cyan-50 to-blue-50 text-cyan-700 px-4 py-2.5 rounded-full text-sm font-medium border border-cyan-200 shadow-sm flex items-center gap-2"
                  >
                    <Check className="w-4 h-4 text-green-500" />
                    {feature}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Quantity and Actions with Enhanced Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mb-8"
            >
              <h3 className="font-bold text-lg mb-3">Select Quantity</h3>
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center border-2 rounded-xl overflow-hidden">
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 hover:bg-gray-100 transition-colors"
                  >
                    <Minus className="w-5 h-5" />
                  </motion.button>
                  <motion.span 
                    key={quantity}
                    initial={{ scale: 1.2 }}
                    animate={{ scale: 1 }}
                    className="w-16 text-center font-bold text-lg"
                  >
                    {quantity}
                  </motion.span>
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-3 hover:bg-gray-100 transition-colors"
                  >
                    <Plus className="w-5 h-5" />
                  </motion.button>
                </div>
                <motion.div 
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold"
                >
                  Only 10 left!
                </motion.div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => console.log('Added to cart', quantity)}
                  className="flex-1 bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-4 rounded-xl font-bold hover:shadow-xl hover:shadow-cyan-200 transition-all flex items-center justify-center gap-2 text-lg group relative overflow-hidden"
                >
                  <motion.div
                    className="absolute inset-0 bg-white"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.5 }}
                    style={{ opacity: 0.2 }}
                  />
                  <ShoppingCart className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  Add to Cart
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => console.log('Buy now', quantity)}
                  className="flex-1 bg-gradient-to-r from-amber-500 to-orange-500 text-white py-4 rounded-xl font-bold hover:shadow-xl hover:shadow-orange-200 transition-all flex items-center justify-center gap-2 text-lg group"
                >
                  <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Buy Now
                </motion.button>
              </div>
            </motion.div>

            {/* Delivery Info with Icons and Animation */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="grid grid-cols-2 gap-4 p-6 bg-gradient-to-r from-gray-50 to-white rounded-2xl border"
            >
              {[
                { icon: Truck, label: 'Delivery', value: product.delivery, color: 'text-green-600', bg: 'bg-green-50' },
                { icon: Shield, label: 'Warranty', value: product.warranty, color: 'text-blue-600', bg: 'bg-blue-50' },
                { icon: RotateCcw, label: 'Returns', value: '7 Days Replacement', color: 'text-purple-600', bg: 'bg-purple-50' },
                { icon: CreditCard, label: 'Payment', value: 'Card/UPI/COD', color: 'text-amber-600', bg: 'bg-amber-50' }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -3 }}
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-white transition-all cursor-pointer"
                >
                  <div className={`p-2 rounded-lg ${item.bg}`}>
                    <item.icon className={`w-5 h-5 ${item.color}`} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">{item.label}</p>
                    <p className="font-semibold text-sm">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Limited Time Offer Banner */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mt-6 p-4 bg-gradient-to-r from-red-500 to-pink-500 rounded-xl text-white flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <Clock className="w-6 h-6" />
                <div>
                  <p className="font-bold">Limited Time Offer</p>
                  <p className="text-sm opacity-90">Free installation & 1 year extended warranty</p>
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => console.log('Claim offer')}
                className="bg-white text-red-600 px-4 py-2 rounded-lg font-bold text-sm"
              >
                Claim Now
              </motion.button>
            </motion.div>
          </div>
        </div>

        {/* Product Details Tabs with Enhanced Design */}
        <div className="mb-12">
          <div className="border-b">
            <div className="flex gap-2">
              {[
                { id: 'description', label: '📝 Description', icon: '📝' },
                { id: 'specifications', label: '⚙️ Specifications', icon: '⚙️' },
                { id: 'reviews', label: `⭐ Reviews (${product.reviewList.length})`, icon: '⭐' }
              ].map((tab) => (
                <motion.button
                  key={tab.id}
                  whileHover={{ y: -2 }}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-4 font-semibold relative rounded-t-xl transition-all ${
                    activeTab === tab.id 
                      ? 'text-cyan-600 bg-gradient-to-t from-cyan-50 to-white' 
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {tab.label}
                  {activeTab === tab.id && (
                    <motion.div 
                      layoutId="activeTabBar"
                      className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-t-full"
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </div>

          <div className="py-8">
            <AnimatePresence mode="wait">
              {activeTab === 'description' && (
                <motion.div
                  key="description"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="prose max-w-none"
                >
                  <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-8 rounded-2xl">
                    <p className="text-gray-700 text-lg leading-relaxed mb-6">{product.longDescription}</p>
                    
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                      <Gift className="w-5 h-5 text-cyan-600" />
                      What's in the Box
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {product.included.map((item, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-center gap-2 p-3 bg-white rounded-lg shadow-sm"
                        >
                          <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm">{item}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'specifications' && (
                <motion.div
                  key="specifications"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="grid md:grid-cols-2 gap-6"
                >
                  {Object.entries(product.specifications).map(([key, value], idx) => (
                    <motion.div
                      key={key}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="group p-4 bg-gradient-to-r from-gray-50 to-white rounded-xl border hover:border-cyan-200 transition-all hover:shadow-lg"
                    >
                      <dt className="text-sm text-gray-500 mb-1 group-hover:text-cyan-600 transition-colors">{key}</dt>
                      <dd className="font-bold text-gray-900 text-lg">{value}</dd>
                    </motion.div>
                  ))}
                </motion.div>
              )}

              {activeTab === 'reviews' && (
                <motion.div
                  key="reviews"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  {/* Rating Summary */}
                  <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-2xl mb-8">
                    <div className="flex items-center gap-8">
                      <div className="text-center">
                        <span className="text-5xl font-bold text-amber-600">{product.rating}</span>
                        <span className="text-gray-500 block">out of 5</span>
                        <div className="flex gap-1 mt-2">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'text-amber-400 fill-current' : 'text-gray-300'}`} />
                          ))}
                        </div>
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-lg">{product.reviewCount} Verified Reviews</p>
                        <p className="text-gray-600">95% of customers recommend this product</p>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => console.log('Write review')}
                        className="px-6 py-3 bg-white rounded-xl font-semibold shadow-sm hover:shadow-md transition-all"
                      >
                        Write a Review
                      </motion.button>
                    </div>
                  </div>

                  {/* Reviews List */}
                  {product.reviewList && product.reviewList.length > 0 ? (
                    product.reviewList.map((review, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="border-b pb-6 last:border-b-0 group hover:bg-gray-50 p-4 rounded-xl transition-all"
                      >
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white flex items-center justify-center font-bold">
                              {review.user[0]}
                            </div>
                            <div>
                              <span className="font-semibold block">{review.user}</span>
                              <span className="text-sm text-gray-500">{review.date}</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-1 bg-amber-50 px-3 py-1 rounded-full">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${
                                  i < review.rating ? 'text-amber-400 fill-current' : 'text-gray-300'
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                        <p className="text-gray-700 ml-13">{review.comment}</p>
                        
                        {/* Review Actions */}
                        <div className="flex items-center gap-4 mt-3 ml-13">
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => console.log('Marked helpful')}
                            className="text-sm text-gray-500 hover:text-cyan-600 flex items-center gap-1"
                          >
                            <ThumbsUp className="w-4 h-4" />
                            Helpful
                          </motion.button>
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => console.log('Reported')}
                            className="text-sm text-gray-500 hover:text-cyan-600"
                          >
                            Report
                          </motion.button>
                        </div>
                      </motion.div>
                    ))
                  ) : (
                    <p className="text-gray-500 text-center py-8">No reviews yet. Be the first to review!</p>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Related Products with Enhanced Cards */}
        <div>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1 h-8 bg-gradient-to-b from-cyan-600 to-blue-600 rounded-full"></span>
            You May Also Like
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4).map((relatedProduct, idx) => (
              <motion.div
                key={relatedProduct.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer border hover:shadow-2xl transition-all"
                onClick={() => {
                  setSelectedProduct(relatedProduct);
                  setSelectedImage(0);
                  setQuantity(1);
                }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={relatedProduct.images[0]} 
                    alt={relatedProduct.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                  {relatedProduct.badge && (
                    <div className="absolute top-3 left-3">
                      <span className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                        {relatedProduct.badge}
                      </span>
                    </div>
                  )}
                  {/* Quick View Overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <motion.button 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProduct(relatedProduct);
                        setSelectedImage(0);
                        setQuantity(1);
                      }}
                      className="bg-white text-cyan-600 px-4 py-2 rounded-lg font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform"
                    >
                      Quick View
                    </motion.button>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-1 truncate group-hover:text-cyan-600 transition-colors">
                    {relatedProduct.name}
                  </h3>
                  <div className="flex items-center gap-1 mb-2">
                    <Star className="w-4 h-4 text-amber-400 fill-current" />
                    <span className="text-sm font-semibold">{relatedProduct.rating}</span>
                    <span className="text-xs text-gray-500">({relatedProduct.reviewCount})</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-lg font-bold text-gray-900">₹{relatedProduct.price.toLocaleString()}</span>
                      {relatedProduct.originalPrice && (
                        <span className="text-xs text-gray-500 line-through ml-2">₹{relatedProduct.originalPrice.toLocaleString()}</span>
                      )}
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        console.log('Added to cart:', relatedProduct.name);
                      }}
                      className="p-2 bg-cyan-50 rounded-full text-cyan-600 hover:bg-cyan-600 hover:text-white transition-colors"
                    >
                      <ShoppingCart className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
  // Filter Component (reused for both desktop and mobile)
  const FilterSection = () => (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
          <Filter className="w-5 h-5" />
          Filters
        </h2>
        <button
          onClick={clearFilters}
          className="text-sm text-cyan-600 hover:text-cyan-700 font-medium"
        >
          Clear All
        </button>
      </div>

      {/* Categories */}
      <div className="mb-8">
        <h3 className="font-semibold text-gray-900 mb-4">Categories</h3>
        <div className="space-y-2">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => {
                setSelectedCategory(category.id);
                if (isMobile) setIsMobileFilterOpen(false);
              }}
              className={`w-full flex items-center justify-between p-3 rounded-lg transition-all ${selectedCategory === category.id
                  ? 'bg-linear-to-r from-cyan-50 to-blue-50 border border-cyan-200'
                  : 'hover:bg-gray-50'
                }`}
            >
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-lg ${selectedCategory === category.id
                    ? 'bg-cyan-600 text-white'
                    : 'bg-gray-100 text-gray-600'
                  }`}>
                  {category.icon}
                </div>
                <span className="font-medium">{category.name}</span>
              </div>
              <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                {category.count}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div className="mb-8">
        <h3 className="font-semibold text-gray-900 mb-4">Price Range</h3>
        <div className="space-y-4">
          <div className="flex justify-between text-sm text-gray-600">
            <span>₹{selectedFilters.priceRange[0].toLocaleString()}</span>
            <span>₹{selectedFilters.priceRange[1].toLocaleString()}</span>
          </div>
          <input
            type="range"
            min="0"
            max="50000"
            value={selectedFilters.priceRange[0]}
            onChange={(e) => setSelectedFilters(prev => ({
              ...prev,
              priceRange: [parseInt(e.target.value), prev.priceRange[1]]
            }))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
          <input
            type="range"
            min="0"
            max="50000"
            value={selectedFilters.priceRange[1]}
            onChange={(e) => setSelectedFilters(prev => ({
              ...prev,
              priceRange: [prev.priceRange[0], parseInt(e.target.value)]
            }))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
        </div>
      </div>

      {/* Capacity */}
      <div className="mb-8">
        <h3 className="font-semibold text-gray-900 mb-4">Capacity</h3>
        <div className="space-y-2">
          {filters.capacity.map(capacity => (
            <label key={capacity.value} className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={selectedFilters.capacity.includes(capacity.value)}
                onChange={() => handleFilterToggle('capacity', capacity.value)}
                className="rounded text-cyan-600 focus:ring-cyan-500"
              />
              <span className="text-gray-700">{capacity.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Brands */}
      <div className="mb-8">
        <h3 className="font-semibold text-gray-900 mb-4">Brands</h3>
        <div className="space-y-2">
          {filters.brands.map(brand => (
            <label key={brand.value} className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={selectedFilters.brands.includes(brand.value)}
                onChange={() => handleFilterToggle('brands', brand.value)}
                className="rounded text-cyan-600 focus:ring-cyan-500"
              />
              <span className="text-gray-700">{brand.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Features */}
      <div>
        <h3 className="font-semibold text-gray-900 mb-4">Features</h3>
        <div className="space-y-2">
          {filters.features.map(feature => (
            <label key={feature.value} className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={selectedFilters.features.includes(feature.value)}
                onChange={() => handleFilterToggle('features', feature.value)}
                className="rounded text-cyan-600 focus:ring-cyan-500"
              />
              <div className="flex items-center gap-2">
                <span className="text-cyan-600">{feature.icon}</span>
                <span className="text-gray-700">{feature.label}</span>
              </div>
            </label>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-linear-to-b from-cyan-50 to-white">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl lg:text-2xl font-bold text-gray-900">RO Systems Store</h1>
              <p className="text-xs lg:text-sm text-gray-600">Premium Water Purification Solutions</p>
            </div>

            <div className="flex items-center gap-3 lg:gap-6">
              {/* Mobile Search Icon */}
              {isMobile && (
                <button className="p-2 hover:bg-gray-100 rounded-lg">
                  <Search className="w-5 h-5 text-gray-700" />
                </button>
              )}

              {/* Desktop Search */}
              {!isMobile && (
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search RO systems..."
                    className="pl-10 pr-4 py-2 border rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                </div>
              )}

              <button className="relative p-2 hover:bg-gray-100 rounded-lg">
                <ShoppingCart className="w-5 h-5 lg:w-6 lg:h-6 text-gray-700" />
                <span className="absolute -top-1 -right-1 bg-cyan-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  3
                </span>
              </button>

              {/* Desktop Call Button */}
              {!isMobile && (
                <button className="flex items-center gap-2 bg-linear-to-r from-cyan-600 to-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                  <Phone className="w-5 h-5" />
                  Call Expert
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 lg:py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Desktop Sidebar Filters */}
          {!isMobile && (
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <FilterSection />
              </div>
            </div>
          )}

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Top Bar */}
            <div className="bg-white rounded-xl shadow-lg p-4 lg:p-6 mb-4 lg:mb-8">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <h1 className="text-xl lg:text-2xl font-bold text-gray-900">
                    {selectedCategory === 'all' ? 'All RO Systems' :
                      categories.find(c => c.id === selectedCategory)?.name}
                  </h1>
                  <p className="text-sm lg:text-base text-gray-600">
                    Showing {filteredProducts.length} of {products.length} products
                  </p>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  {/* Mobile Filter Button */}
                  {isMobile && (
                    <button
                      onClick={() => setIsMobileFilterOpen(true)}
                      className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-cyan-600 text-white px-4 py-2 rounded-lg font-semibold"
                    >
                      <Filter className="w-5 h-5" />
                      Filters
                      {(selectedFilters.capacity.length > 0 || selectedFilters.brands.length > 0 ||
                        selectedFilters.features.length > 0 || selectedCategory !== 'all') && (
                        <span className="bg-white text-cyan-600 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                          {selectedFilters.capacity.length + selectedFilters.brands.length +
                            selectedFilters.features.length + (selectedCategory !== 'all' ? 1 : 0)}
                        </span>
                      )}
                    </button>
                  )}

                  {/* View Mode */}
                  <div className="flex items-center gap-2 bg-gray-100 p-1 rounded-lg">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 rounded-md ${viewMode === 'grid' ? 'bg-white shadow' : 'hover:bg-gray-200'
                        }`}
                    >
                      <Grid className="w-4 h-4 lg:w-5 lg:h-5" />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 rounded-md ${viewMode === 'list' ? 'bg-white shadow' : 'hover:bg-gray-200'
                        }`}
                    >
                      <List className="w-4 h-4 lg:w-5 lg:h-5" />
                    </button>
                  </div>

                  {/* Sort */}
                  <div className="relative flex-1 sm:flex-none">
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="appearance-none bg-white border rounded-lg pl-3 pr-8 py-2 text-sm lg:text-base focus:outline-none focus:ring-2 focus:ring-cyan-500 w-full"
                    >
                      {sortOptions.map(option => (
                        <option key={option.value} value={option.value}>
                          {isMobile ? option.label : `Sort by: ${option.label}`}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Active Filters */}
              {(selectedFilters.capacity.length > 0 || selectedFilters.brands.length > 0 ||
                selectedFilters.features.length > 0 || selectedCategory !== 'all') && (
                  <div className="mt-4 lg:mt-6 pt-4 lg:pt-6 border-t">
                    <div className="flex flex-wrap gap-2">
                      {selectedCategory !== 'all' && (
                        <span className="inline-flex items-center gap-2 bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full text-xs lg:text-sm">
                          {categories.find(c => c.id === selectedCategory)?.name}
                          <button onClick={() => setSelectedCategory('all')}>
                            <X className="w-3 h-3 lg:w-4 lg:h-4" />
                          </button>
                        </span>
                      )}
                      {selectedFilters.capacity.map(cap => (
                        <span key={cap} className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs lg:text-sm">
                          {filters.capacity.find(c => c.value === cap)?.label}
                          <button onClick={() => handleFilterToggle('capacity', cap)}>
                            <X className="w-3 h-3 lg:w-4 lg:h-4" />
                          </button>
                        </span>
                      ))}
                      {selectedFilters.brands.map(brand => (
                        <span key={brand} className="inline-flex items-center gap-2 bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs lg:text-sm">
                          {filters.brands.find(b => b.value === brand)?.label}
                          <button onClick={() => handleFilterToggle('brands', brand)}>
                            <X className="w-3 h-3 lg:w-4 lg:h-4" />
                          </button>
                        </span>
                      ))}
                      {selectedFilters.features.map(feature => (
                        <span key={feature} className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs lg:text-sm">
                          {filters.features.find(f => f.value === feature)?.label}
                          <button onClick={() => handleFilterToggle('features', feature)}>
                            <X className="w-3 h-3 lg:w-4 lg:h-4" />
                          </button>
                        </span>
                      ))}
                    </div>
                  </div>
                )}
            </div>

            {/* Products Grid */}
            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                {sortedProducts.map(product => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100 cursor-pointer"
                    onClick={() => {
                      setSelectedProduct(product);
                      setSelectedImage(0);
                      setQuantity(1);
                    }}
                  >
                    {/* Product Image */}
                    <div className="relative h-56 lg:h-48 overflow-hidden">
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      {/* Badge */}
                      {product.badge && (
                        <div className="absolute top-4 left-4">
                          <span className="bg-linear-to-r from-cyan-600 to-blue-600 text-white px-3 py-1.5 rounded-full text-xs font-bold">
                            {product.badge}
                          </span>
                        </div>
                      )}
                      {/* Wishlist Button */}
                      <button 
                        className="absolute top-4 right-4 p-2.5 bg-white/90 rounded-full hover:bg-white"
                        onClick={(e) => {
                          e.stopPropagation();
                          // Add wishlist logic here
                        }}
                      >
                        <Heart className="w-5 h-5 text-gray-600 hover:text-red-500" />
                      </button>
                    </div>

                    {/* Product Info */}
                    <div className="p-5 lg:p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="font-bold text-gray-900 text-base lg:text-lg group-hover:text-cyan-600 transition-colors">
                            {product.name}
                          </h3>
                          <p className="text-sm lg:text-base text-gray-600 mt-1">{product.capacity}</p>
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-amber-400 fill-current" />
                          <span className="font-semibold text-sm lg:text-base">{product.rating}</span>
                          <span className="text-gray-500 text-xs lg:text-sm">({product.reviewCount})</span>
                        </div>
                      </div>

                      {/* Features */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {product.features.slice(0, 2).map((feature, idx) => (
                          <span key={idx} className="text-xs lg:text-sm bg-cyan-50 text-cyan-700 px-2 py-1 rounded">
                            {feature}
                          </span>
                        ))}
                        {product.features.length > 2 && (
                          <span className="text-xs lg:text-sm bg-gray-100 text-gray-600 px-2 py-1 rounded">
                            +{product.features.length - 2} more
                          </span>
                        )}
                      </div>

                      {/* Price */}
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-xl lg:text-2xl font-bold text-gray-900">₹{product.price.toLocaleString()}</span>
                        {product.originalPrice && (
                          <>
                            <span className="text-gray-500 line-through text-sm lg:text-base">₹{product.originalPrice.toLocaleString()}</span>
                            <span className="text-green-600 font-semibold text-xs lg:text-sm">
                              {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                            </span>
                          </>
                        )}
                      </div>

                      {/* Delivery Info */}
                      <div className="flex flex-wrap items-center gap-3 lg:gap-4 text-sm text-gray-600 mb-5 lg:mb-6">
                        <div className="flex items-center gap-2">
                          <Truck className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="text-xs lg:text-sm">{product.delivery}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Shield className="w-4 h-4 text-blue-500 flex-shrink-0" />
                          <span className="text-xs lg:text-sm">{product.warranty}</span>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex gap-3" onClick={(e) => e.stopPropagation()}>
                        <button className="flex-1 bg-linear-to-r from-cyan-600 to-blue-600 text-white py-3.5 lg:py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2 text-sm lg:text-base">
                          <ShoppingCart className="w-5 h-5" />
                          Add to Cart
                        </button>
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedProduct(product);
                            setSelectedImage(0);
                            setQuantity(1);
                          }}
                          className="px-5 lg:px-4 border border-cyan-600 text-cyan-600 rounded-lg font-semibold hover:bg-cyan-50 transition-colors text-sm lg:text-base"
                        >
                          Details
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              /* List View */
              <div className="space-y-4 lg:space-y-6">
                {sortedProducts.map(product => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
                    onClick={() => {
                      setSelectedProduct(product);
                      setSelectedImage(0);
                      setQuantity(1);
                    }}
                  >
                    <div className="md:flex">
                      {/* Image */}
                      <div className="md:w-1/3 relative">
                        <img
                          src={product.images[0]}
                          alt={product.name}
                          className="w-full h-72 md:h-64 object-cover"
                        />
                        {product.badge && (
                          <div className="absolute top-4 left-4">
                            <span className="bg-linear-to-r from-cyan-600 to-blue-600 text-white px-3 py-1.5 rounded-full text-xs font-bold">
                              {product.badge}
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Details */}
                      <div className="md:w-2/3 p-5 lg:p-6">
                        <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-4">
                          <div className="flex-1">
                            <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                            <p className="text-gray-600 text-sm lg:text-base mb-2">{product.capacity}</p>
                            <div className="flex flex-wrap items-center gap-3 lg:gap-4 mb-3">
                              <div className="flex items-center gap-1">
                                <Star className="w-4 h-4 text-amber-400 fill-current" />
                                <span className="font-semibold text-sm lg:text-base">{product.rating}</span>
                                <span className="text-gray-500 text-xs lg:text-sm">({product.reviewCount} reviews)</span>
                              </div>
                              <span className="text-green-600 font-semibold text-sm lg:text-base">{product.stock}</span>
                            </div>

                            {/* Features */}
                            <div className="flex flex-wrap gap-2 mb-4">
                              {product.features.map((feature, idx) => (
                                <span key={idx} className="inline-flex items-center gap-1 bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs lg:text-sm">
                                  <Check className="w-3 h-3 text-green-500" />
                                  {feature}
                                </span>
                              ))}
                            </div>
                          </div>
                          
                          {/* Price */}
                          <div className="text-left md:text-right w-full md:w-auto">
                            <div className="text-2xl lg:text-3xl font-bold text-gray-900">₹{product.price.toLocaleString()}</div>
                            {product.originalPrice && (
                              <div className="text-gray-500 line-through text-sm lg:text-base">₹{product.originalPrice.toLocaleString()}</div>
                            )}
                          </div>
                        </div>

                        {/* Actions */}
                        <div className="flex flex-col sm:flex-row gap-3" onClick={(e) => e.stopPropagation()}>
                          <button className="flex-1 bg-linear-to-r from-cyan-600 to-blue-600 text-white py-3.5 lg:py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2 text-sm lg:text-base">
                            <ShoppingCart className="w-5 h-5" />
                            Add to Cart
                          </button>
                          <button 
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedProduct(product);
                              setSelectedImage(0);
                              setQuantity(1);
                            }}
                            className="flex-1 sm:flex-none px-5 lg:px-6 border border-cyan-600 text-cyan-600 rounded-lg font-semibold hover:bg-cyan-50 transition-colors text-sm lg:text-base py-3.5 lg:py-3"
                          >
                            View Details
                          </button>
                          <button 
                            className="p-3.5 lg:p-3 border border-gray-300 rounded-lg hover:bg-gray-50"
                            onClick={(e) => {
                              e.stopPropagation();
                              // Add wishlist logic here
                            }}
                          >
                            <Heart className="w-5 h-5 text-gray-600" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {/* No Results */}
            {filteredProducts.length === 0 && (
              <div className="text-center py-12 lg:py-16">
                <div className="w-20 h-20 lg:w-24 lg:h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
                  <Search className="w-10 h-10 lg:w-12 lg:h-12 text-gray-400" />
                </div>
                <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-2">No products found</h3>
                <p className="text-sm lg:text-base text-gray-600 mb-6">Try adjusting your filters or search terms</p>
                <button
                  onClick={clearFilters}
                  className="bg-linear-to-r from-cyan-600 to-blue-600 text-white px-6 lg:px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity text-sm lg:text-base"
                >
                  Clear All Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      <AnimatePresence>
        {isMobileFilterOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileFilterOpen(false)}
              className="fixed inset-0 bg-black/50 z-50 lg:hidden"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween' }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-white z-50 lg:hidden overflow-y-auto"
            >
              <div className="sticky top-0 bg-white border-b p-4 flex items-center justify-between">
                <h2 className="text-xl font-bold text-gray-900">Filters</h2>
                <button
                  onClick={() => setIsMobileFilterOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="p-4">
                <FilterSection />
              </div>
              <div className="sticky bottom-0 bg-white border-t p-4">
                <button
                  onClick={() => setIsMobileFilterOpen(false)}
                  className="w-full bg-linear-to-r from-cyan-600 to-blue-600 text-white py-3 rounded-lg font-semibold"
                >
                  Apply Filters
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Product Detail Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <ProductDetail 
            product={selectedProduct} 
            onClose={() => setSelectedProduct(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Productpage;