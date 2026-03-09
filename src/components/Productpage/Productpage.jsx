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
  AlertCircle,
  Share2,
  Facebook,
  Twitter,
  Instagram,
  Youtube
} from 'lucide-react';
import ProductDetail from "../Productpage/ProductDetail";
const Productpage = () => {
  // const [selectedCategory, setSelectedCategory] = useState('all');
  // const [sortBy, setSortBy] = useState('featured');
  // const [viewMode, setViewMode] = useState('grid');
  // const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  // const [isMobile, setIsMobile] = useState(false);
  // const [isTablet, setIsTablet] = useState(false);
  // const [selectedProduct, setSelectedProduct] = useState(null);
  // const [quantity, setQuantity] = useState(1);
  // const [selectedImage, setSelectedImage] = useState(0);
  // const [searchQuery, setSearchQuery] = useState('');
  // const [selectedFilters, setSelectedFilters] = useState({
  //   capacity: [],
  //   priceRange: [0, 50000],
  //   brands: [],
  //   features: []
  // });

  // // Check device type
  // useEffect(() => {
  //   const checkDevice = () => {
  //     const width = window.innerWidth;
  //     setIsMobile(width < 768);
  //     setIsTablet(width >= 768 && width < 1024);
  //   };
  //   checkDevice();
  //   window.addEventListener('resize', checkDevice);
  //   return () => window.removeEventListener('resize', checkDevice);
  // }, []);

  // // Prevent body scroll when product detail is open
  // useEffect(() => {
  //   if (selectedProduct) {
  //     document.body.style.overflow = 'hidden';
  //   } else {
  //     document.body.style.overflow = 'unset';
  //   }
  //   return () => {
  //     document.body.style.overflow = 'unset';
  //   };
  // }, [selectedProduct]);
  // ========== 1. ALL useState HOOKS FIRST ==========
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
  const [selectedFilters, setSelectedFilters] = useState({
    capacity: [],
    priceRange: [0, 50000],
    brands: [],
    features: []
  });

  // ========== 2. ALL useEffect HOOKS SECOND ==========
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
      { value: 'uv', label: 'UV Purification', icon: <Zap className="w-3 h-3 sm:w-4 sm:h-4" /> },
      { value: 'mineral', label: 'Mineral Boost', icon: <Award className="w-3 h-3 sm:w-4 sm:h-4" /> },
      { value: 'tank', label: 'Storage Tank', icon: <Droplets className="w-3 h-3 sm:w-4 sm:h-4" /> },
      { value: 'hot', label: 'Hot Water', icon: <Thermometer className="w-3 h-3 sm:w-4 sm:h-4" /> },
      { value: 'smart', label: 'Smart Monitor', icon: <Battery className="w-3 h-3 sm:w-4 sm:h-4" /> },
      { value: 'warranty', label: '5 Year Warranty', icon: <Shield className="w-3 h-3 sm:w-4 sm:h-4" /> },
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
    // DOMESTIC PRODUCTS (10+ models with reviews)
    {
      id: 1,
      name: 'Aquaguard Magna NXT RO',
      category: 'domestic',
      price: 18999,
      originalPrice: 21999,
      rating: 4.5,
      reviewCount: 124,
      capacity: '8 LPH',
      features: ['UV + UF', 'Mineral Boost', 'Smart Display', 'Copper Technology'],
      description: 'Advanced 7-stage RO purification with mineral boost technology for healthy water.',
      longDescription: 'The Aquaguard Magna NXT RO comes with advanced 7-stage purification process including RO + UV + UF + Mineral Boost technology. It features a smart display panel that shows real-time water quality, filter life, and service alerts. The copper technology adds essential copper ions to water.',
      specifications: {
        'Purification Capacity': '8 LPH',
        'Storage Tank': '7 Liters',
        'Power Consumption': '60 Watts',
        'Purification Stages': '7 Stages (RO+UV+UF+Mineral+Copper)',
        'Installation Type': 'Wall Mounted',
        'Material': 'ABS Food Grade Plastic',
        'Weight': '8.5 kg',
        'Dimensions': '38 x 32 x 48 cm',
        'TDS Control': 'Yes',
        'Filter Life': '6-12 months'
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
        { user: 'Rajesh Kumar', rating: 5, comment: 'Excellent product! Water tastes great. Installation was smooth and the technician was very professional.', date: '2 months ago', verified: true },
        { user: 'Priya Sharma', rating: 4, comment: 'Good quality, installation was smooth. The smart display is very useful to check water quality.', date: '1 month ago', verified: true },
        { user: 'Amit Patel', rating: 5, comment: 'Best RO in this price range. Water quality has improved significantly.', date: '3 months ago', verified: true },
        { user: 'Sneha Reddy', rating: 5, comment: 'Love the copper technology. Water tastes fresh and pure.', date: '2 weeks ago', verified: true },
        { user: 'Vikram Singh', rating: 4, comment: 'Good product. Customer service is responsive.', date: '1 month ago', verified: false },
        { user: 'Neha Gupta', rating: 5, comment: 'Very happy with the purchase. Worth every penny.', date: '2 months ago', verified: true },
        { user: 'Rahul Mehta', rating: 4, comment: 'Works well. The filter change indicator is helpful.', date: '3 months ago', verified: true },
        { user: 'Anjali Desai', rating: 5, comment: 'Excellent after-sales service. Highly recommended.', date: '1 month ago', verified: true },
        { user: 'Suresh Iyer', rating: 4, comment: 'Good product. Installation was done on time.', date: '2 months ago', verified: true },
        { user: 'Deepa Nair', rating: 5, comment: 'Water quality is excellent. No more buying bottled water.', date: '3 weeks ago', verified: true },
        { user: 'Mohan Raj', rating: 5, comment: 'Smart features are great. Can monitor from phone.', date: '1 month ago', verified: true },
        { user: 'Kavita Jain', rating: 4, comment: 'Good value for money. Satisfied with purchase.', date: '2 months ago', verified: true }
      ]
    },
    {
      id: 2,
      name: 'Kent Grand Plus RO',
      category: 'domestic',
      price: 15999,
      originalPrice: 18999,
      rating: 4.7,
      reviewCount: 156,
      capacity: '10 LPH',
      features: ['TDS Controller', 'UV Purification', 'Hot Water', 'Zero Water Wastage'],
      description: 'Kent Grand Plus RO with TDS controller and UV purification. Perfect for domestic use.',
      longDescription: 'The Kent Grand Plus RO features a unique TDS controller that allows you to retain essential minerals in water. It comes with in-tank UV purification that keeps water pure in the storage tank. The hot water feature provides instant hot water for tea and coffee. Zero water wastage technology saves water.',
      specifications: {
        'Purification Capacity': '10 LPH',
        'Storage Tank': '8 Liters',
        'Power Consumption': '60 Watts',
        'Purification Stages': '6 Stages (RO+UV+TDS Control)',
        'Installation Type': 'Wall Mounted',
        'Material': 'ABS Food Grade Plastic',
        'Weight': '9 kg',
        'Dimensions': '40 x 35 x 50 cm',
        'TDS Control': 'Adjustable',
        'Filter Life': '8-12 months'
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
      included: ['RO Unit', 'Installation Kit', 'User Manual', 'Warranty Card', 'Free Installation'],
      reviewList: [
        { user: 'Amit Kumar', rating: 5, comment: 'Best RO in this price range. Hot water feature is very useful.', date: '3 months ago', verified: true },
        { user: 'Priyanka Chopra', rating: 5, comment: 'Excellent product. TDS controller works perfectly.', date: '1 month ago', verified: true },
        { user: 'Rajan Sharma', rating: 4, comment: 'Good quality. Installation was quick.', date: '2 months ago', verified: true },
        { user: 'Sunita Reddy', rating: 5, comment: 'Water tastes great. No more buying bottled water.', date: '2 weeks ago', verified: true },
        { user: 'Vikrant Singh', rating: 4, comment: 'Good product. Customer support is helpful.', date: '1 month ago', verified: false },
        { user: 'Meera Nair', rating: 5, comment: 'Very satisfied with the performance.', date: '2 months ago', verified: true },
        { user: 'Arjun Malhotra', rating: 5, comment: 'Hot water feature is amazing for making tea.', date: '3 months ago', verified: true },
        { user: 'Kiran Bedi', rating: 4, comment: 'Good value for money. Recommended.', date: '1 month ago', verified: true },
        { user: 'Ravi Shastri', rating: 5, comment: 'Zero water wastage is a great feature.', date: '2 months ago', verified: true },
        { user: 'Neelam Kothari', rating: 5, comment: 'Very happy with the purchase.', date: '3 weeks ago', verified: true },
        { user: 'Prakash Raj', rating: 4, comment: 'Good product. Easy to maintain.', date: '1 month ago', verified: true },
        { user: 'Divya Seth', rating: 5, comment: 'Excellent after-sales service.', date: '2 months ago', verified: true }
      ]
    },
    {
      id: 7,
      name: 'Livpure Zinger Plus RO',
      category: 'domestic',
      price: 17999,
      originalPrice: 20999,
      rating: 4.6,
      reviewCount: 98,
      capacity: '12 LPH',
      features: ['7 Stage RO', 'UV LED', 'Mineralizer', 'Smart Sensors'],
      description: 'Livpure Zinger Plus with 7-stage RO purification and smart sensor technology.',
      longDescription: 'Livpure Zinger Plus features 7-stage RO purification with UV LED technology. Smart sensors automatically detect water quality and adjust purification accordingly. The mineralizer adds essential minerals back into water.',
      specifications: {
        'Purification Capacity': '12 LPH',
        'Storage Tank': '9 Liters',
        'Power Consumption': '65 Watts',
        'Purification Stages': '7 Stages',
        'Installation Type': 'Wall Mounted',
        'Material': 'ABS Food Grade',
        'Weight': '8.8 kg',
        'Dimensions': '39 x 33 x 49 cm'
      },
      images: [
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=800&q=80'
      ],
      badge: 'NEW',
      stock: 'In Stock',
      delivery: 'Free Installation',
      warranty: '5 Years',
      brand: 'Livpure',
      model: 'Zinger Plus',
      color: 'White & Silver',
      included: ['RO Unit', 'Installation Kit', 'User Manual', 'Warranty Card'],
      reviewList: [
        { user: 'Sanjay Dutt', rating: 5, comment: 'Smart sensors work great. Water quality is excellent.', date: '1 month ago', verified: true },
        { user: 'Madhuri Dixit', rating: 4, comment: 'Good product. Installation was smooth.', date: '2 months ago', verified: true },
        { user: 'Anil Kapoor', rating: 5, comment: 'Very happy with the performance.', date: '3 months ago', verified: true },
        { user: 'Juhi Chawla', rating: 4, comment: 'Mineralizer adds good taste to water.', date: '2 weeks ago', verified: true },
        { user: 'Boman Irani', rating: 5, comment: 'Excellent value for money.', date: '1 month ago', verified: false },
        { user: 'Tabu Sharma', rating: 5, comment: 'Smart features are very useful.', date: '2 months ago', verified: true },
        { user: 'Naseeruddin Shah', rating: 4, comment: 'Good product. Recommended.', date: '3 months ago', verified: true },
        { user: 'Shabana Azmi', rating: 5, comment: 'Water tastes fresh and pure.', date: '1 month ago', verified: true },
        { user: 'Om Puri', rating: 5, comment: 'Great after-sales service.', date: '2 months ago', verified: true },
        { user: 'Kulbhushan Kharbanda', rating: 4, comment: 'Satisfied with the purchase.', date: '3 weeks ago', verified: true }
      ]
    },
    {
      id: 8,
      name: 'Pureit Eco Water Saver RO',
      category: 'domestic',
      price: 14599,
      originalPrice: 16999,
      rating: 4.4,
      reviewCount: 87,
      capacity: '15 LPH',
      features: ['Water Saving', 'RO+UV', 'Active Copper', 'Wall Mount'],
      description: 'Pureit Eco Water Saver with 70% water saving technology and active copper.',
      longDescription: 'Pureit Eco Water Saver features revolutionary water saving technology that saves up to 70% water compared to regular RO systems. Active copper technology adds essential copper ions to water. RO+UV purification ensures 100% pure water.',
      specifications: {
        'Purification Capacity': '15 LPH',
        'Storage Tank': '10 Liters',
        'Power Consumption': '55 Watts',
        'Purification Stages': '6 Stages',
        'Installation Type': 'Wall Mounted',
        'Material': 'ABS Food Grade',
        'Weight': '8.2 kg',
        'Dimensions': '37 x 31 x 47 cm'
      },
      images: [
        'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80'
      ],
      badge: 'ECO FRIENDLY',
      stock: 'In Stock',
      delivery: 'Free Installation',
      warranty: '3 Years',
      brand: 'Pureit',
      model: 'Eco Saver',
      color: 'White & Green',
      included: ['RO Unit', 'Installation Kit', 'User Manual', 'Warranty Card'],
      reviewList: [
        { user: 'Aamir Khan', rating: 5, comment: 'Water saving feature is excellent. Reduced water bill.', date: '2 months ago', verified: true },
        { user: 'Kiran Rao', rating: 4, comment: 'Good product. Eco-friendly design.', date: '1 month ago', verified: true },
        { user: 'Rani Mukerji', rating: 5, comment: 'Active copper adds good taste.', date: '3 months ago', verified: true },
        { user: 'Vidya Balan', rating: 4, comment: 'Installation was quick and professional.', date: '2 weeks ago', verified: true },
        { user: 'Dia Mirza', rating: 5, comment: 'Great eco-friendly product.', date: '1 month ago', verified: false },
        { user: 'Bipasha Basu', rating: 5, comment: 'Very happy with water quality.', date: '2 months ago', verified: true },
        { user: 'John Abraham', rating: 4, comment: 'Good value for money.', date: '3 months ago', verified: true },
        { user: 'Arshad Warsi', rating: 5, comment: 'Saves a lot of water. Recommended.', date: '1 month ago', verified: true },
        { user: 'Shahid Kapoor', rating: 4, comment: 'Good product. Easy maintenance.', date: '2 months ago', verified: true },
        { user: 'Kareena Kapoor', rating: 5, comment: 'Excellent purchase decision.', date: '3 weeks ago', verified: true }
      ]
    },
    {
      id: 9,
      name: 'Whirlpool 7 Stage RO',
      category: 'domestic',
      price: 16999,
      originalPrice: 19999,
      rating: 4.5,
      reviewCount: 76,
      capacity: '12 LPH',
      features: ['7 Stage RO', 'Mineral Boost', 'TDS Control', 'UV LED'],
      description: 'Whirlpool 7 Stage RO with mineral boost technology and TDS controller.',
      longDescription: 'Whirlpool 7 Stage RO features advanced purification with mineral boost technology. TDS controller lets you adjust mineral content as per preference. UV LED ensures germ-free water in storage tank.',
      specifications: {
        'Purification Capacity': '12 LPH',
        'Storage Tank': '8 Liters',
        'Power Consumption': '60 Watts',
        'Purification Stages': '7 Stages',
        'Installation Type': 'Wall Mounted',
        'Material': 'ABS Food Grade',
        'Weight': '8.5 kg',
        'Dimensions': '38 x 32 x 48 cm'
      },
      images: [
        'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=800&q=80'
      ],
      badge: 'POPULAR',
      stock: 'In Stock',
      delivery: 'Free Installation',
      warranty: '5 Years',
      brand: 'Whirlpool',
      model: '7 Stage RO',
      color: 'White & Blue',
      included: ['RO Unit', 'Installation Kit', 'User Manual', 'Warranty Card'],
      reviewList: [
        { user: 'Rajkumar Hirani', rating: 5, comment: 'Excellent purification. Water tastes great.', date: '2 months ago', verified: true },
        { user: 'Vidhu Vinod', rating: 4, comment: 'Good product. TDS control works well.', date: '1 month ago', verified: true },
        { user: 'Karan Johar', rating: 5, comment: 'Mineral boost is a great feature.', date: '3 months ago', verified: true },
        { user: 'Zoya Akhtar', rating: 4, comment: 'Satisfied with the performance.', date: '2 weeks ago', verified: true },
        { user: 'Anurag Kashyap', rating: 5, comment: 'Good value for money.', date: '1 month ago', verified: false },
        { user: 'Vikramaditya', rating: 5, comment: 'Installation was quick and neat.', date: '2 months ago', verified: true },
        { user: 'Shimit Amin', rating: 4, comment: 'Good product. Recommended.', date: '3 months ago', verified: true },
        { user: 'Abhishek Chaubey', rating: 5, comment: 'Water quality has improved a lot.', date: '1 month ago', verified: true },
        { user: 'Dibakar Banerjee', rating: 4, comment: 'Good after-sales service.', date: '2 months ago', verified: true },
        { user: 'Shoojit Sircar', rating: 5, comment: 'Very happy with the product.', date: '3 weeks ago', verified: true }
      ]
    },
    {
      id: 10,
      name: 'LG Puricare RO',
      category: 'domestic',
      price: 24999,
      originalPrice: 28999,
      rating: 4.8,
      reviewCount: 112,
      capacity: '20 LPH',
      features: ['Smart Inverter', 'UV Nano', 'WiFi Control', 'Voice Assistant'],
      description: 'LG Puricare RO with smart inverter technology and WiFi control. Premium domestic RO.',
      longDescription: 'LG Puricare RO features smart inverter technology for energy efficiency. UV Nano technology ensures 99.99% purification. WiFi control lets you monitor water quality from phone. Voice assistant compatible.',
      specifications: {
        'Purification Capacity': '20 LPH',
        'Storage Tank': '12 Liters',
        'Power Consumption': '45 Watts',
        'Purification Stages': '8 Stages',
        'Installation Type': 'Wall Mounted',
        'Material': 'Premium ABS',
        'Weight': '9.5 kg',
        'Dimensions': '42 x 36 x 52 cm'
      },
      images: [
        'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80'
      ],
      badge: 'PREMIUM',
      stock: 'Limited Stock',
      delivery: 'Premium Installation',
      warranty: '7 Years',
      brand: 'LG',
      model: 'Puricare',
      color: 'White & Silver',
      included: ['RO Unit', 'Installation Kit', 'User Manual', 'Warranty Card', 'Smart Controller'],
      reviewList: [
        { user: 'Mukesh Ambani', rating: 5, comment: 'Best RO in market. Smart features are amazing.', date: '1 month ago', verified: true },
        { user: 'Anand Mahindra', rating: 5, comment: 'Energy efficient and powerful. Worth every rupee.', date: '2 months ago', verified: true },
        { user: 'Kumar Mangalam', rating: 4, comment: 'Excellent build quality. WiFi control is handy.', date: '3 months ago', verified: true },
        { user: 'Natarajan Chandrasekaran', rating: 5, comment: 'Voice control works perfectly.', date: '2 weeks ago', verified: true },
        { user: 'Uday Kotak', rating: 5, comment: 'Premium product with great features.', date: '1 month ago', verified: false },
        { user: 'Deepak Parekh', rating: 4, comment: 'Good investment for health.', date: '2 months ago', verified: true },
        { user: 'Adi Godrej', rating: 5, comment: 'Smart inverter saves electricity.', date: '3 months ago', verified: true },
        { user: 'Cyrus Mistry', rating: 5, comment: 'Very satisfied with performance.', date: '1 month ago', verified: true },
        { user: 'Ratan Tata', rating: 5, comment: 'Excellent product from LG.', date: '2 months ago', verified: true },
        { user: 'Azim Premji', rating: 4, comment: 'Good product. Recommended.', date: '3 weeks ago', verified: true },
        { user: 'Shiv Nadar', rating: 5, comment: 'Water quality is outstanding.', date: '1 month ago', verified: true },
        { user: 'NR Narayana Murthy', rating: 5, comment: 'Technology meets purity.', date: '2 months ago', verified: true }
      ]
    },

    // COMMERCIAL PRODUCTS (10+ models with reviews)
    {
      id: 11,
      name: 'Commercial RO 250 LPH',
      category: 'commercial',
      price: 85999,
      originalPrice: 95999,
      rating: 4.7,
      reviewCount: 67,
      capacity: '250 LPH',
      features: ['Industrial Grade', 'Auto Flush', 'Digital Display', 'SMPS Power'],
      description: 'High-capacity commercial RO system for offices, restaurants, and small businesses.',
      longDescription: 'This commercial RO system is designed for offices, restaurants, and small businesses. Features automatic flush, digital TDS display, and SMPS power supply for stable operation. Produces 250 liters per hour of pure water.',
      specifications: {
        'Purification Capacity': '250 LPH',
        'Storage Tank': '100 Liters',
        'Power Consumption': '400 Watts',
        'Purification Stages': '8 Stages (RO+UV+UF+TDS)',
        'Installation Type': 'Floor Standing',
        'Material': 'Stainless Steel',
        'Weight': '65 kg',
        'Dimensions': '70 x 55 x 140 cm',
        'Motor Power': '0.5 HP',
        'Recovery Rate': '55%'
      },
      images: [
        'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=800&q=80'
      ],
      badge: 'BEST FOR OFFICES',
      stock: 'In Stock',
      delivery: 'Free Delivery & Installation',
      warranty: '3 Years',
      brand: 'Kent',
      model: 'Commercial 250',
      color: 'Silver',
      included: ['RO Unit', 'Storage Tank', 'Pump Set', 'Installation Kit', 'User Manual'],
      reviewList: [
        { user: 'Rahul Bhatia', rating: 5, comment: 'Perfect for our 50 employee office. Water supply is consistent.', date: '1 month ago', verified: true, business: 'IndiGo Airlines' },
        { user: 'Sanjiv Kapoor', rating: 5, comment: 'Great capacity. Installation was smooth.', date: '2 months ago', verified: true, business: 'SpiceJet' },
        { user: 'Vinay Dube', rating: 4, comment: 'Good product. Auto flush works well.', date: '3 months ago', verified: true, business: 'GoAir' },
        { user: 'Leslie Thng', rating: 5, comment: 'Excellent after-sales support.', date: '2 weeks ago', verified: true, business: 'Vistara' },
        { user: 'Sunil Bhaskaran', rating: 5, comment: 'Digital display is very useful.', date: '1 month ago', verified: false, business: 'AirAsia India' },
        { user: 'Rono Dutta', rating: 4, comment: 'Good value for money.', date: '2 months ago', verified: true, business: 'InterGlobe' },
        { user: 'Greg Moran', rating: 5, comment: 'Perfect for our office cafeteria.', date: '3 months ago', verified: true, business: 'Zoomcar' },
        { user: 'Ashish Mohapatra', rating: 5, comment: 'High quality build. Recommended.', date: '1 month ago', verified: true, business: 'OYO' },
        { user: 'Ritesh Agarwal', rating: 5, comment: 'Using in multiple OYO properties. Great performance.', date: '2 months ago', verified: true, business: 'OYO Rooms' },
        { user: 'Kavikrut', rating: 4, comment: 'Good product. Easy maintenance.', date: '3 weeks ago', verified: true, business: 'Radisson Hotels' }
      ]
    },
    {
      id: 12,
      name: 'Commercial RO 500 LPH',
      category: 'commercial',
      price: 145999,
      originalPrice: 165999,
      rating: 4.8,
      reviewCount: 54,
      capacity: '500 LPH',
      features: ['High Recovery', 'Auto Backwash', 'Remote Monitor', 'VFD Control'],
      description: 'High-capacity commercial RO system for large offices, hotels, and factories.',
      longDescription: 'This commercial RO system is designed for large offices, hotels, and factories. Features high recovery rate, auto backwash, and remote monitoring capability. VFD control for energy efficiency.',
      specifications: {
        'Purification Capacity': '500 LPH',
        'Storage Tank': '200 Liters',
        'Power Consumption': '750 Watts',
        'Purification Stages': '9 Stages',
        'Installation Type': 'Floor Standing',
        'Material': 'SS304',
        'Weight': '85 kg',
        'Dimensions': '90 x 70 x 160 cm',
        'Motor Power': '1 HP',
        'Recovery Rate': '65%'
      },
      images: [
        'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80'
      ],
      badge: 'HIGH DEMAND',
      stock: 'In Stock',
      delivery: 'Free Installation',
      warranty: '3 Years',
      brand: 'Ion Exchange',
      model: 'Commercial 500',
      color: 'SS Finish',
      included: ['RO Unit', 'Storage Tank', 'Pump Set', 'Control Panel', 'Installation Kit'],
      reviewList: [
        { user: 'Zubin Saxena', rating: 5, comment: 'Perfect for our hotel. 500 LPH capacity is sufficient.', date: '1 month ago', verified: true, business: 'Radisson Hotels' },
        { user: 'Vikram Lal', rating: 5, comment: 'Remote monitoring is very useful. Can track from home.', date: '2 months ago', verified: true, business: 'Eicher Motors' },
        { user: 'Sulajja Firodia', rating: 4, comment: 'Good product. Energy efficient.', date: '3 months ago', verified: true, business: 'Kinetic Motors' },
        { user: 'Naveen Jindal', rating: 5, comment: 'Using in our factory. Excellent performance.', date: '2 weeks ago', verified: true, business: 'Jindal Steel' },
        { user: 'Sajjan Jindal', rating: 5, comment: 'High quality build. Recommended.', date: '1 month ago', verified: false, business: 'JSW Steel' },
        { user: 'Kumar Mangalam', rating: 4, comment: 'Good investment for business.', date: '2 months ago', verified: true, business: 'Aditya Birla' },
        { user: 'Harsh Goenka', rating: 5, comment: 'VFD control saves electricity.', date: '3 months ago', verified: true, business: 'RPG Group' },
        { user: 'Sanjiv Goenka', rating: 5, comment: 'Excellent after-sales support.', date: '1 month ago', verified: true, business: 'RP-Sanjiv Goenka' },
        { user: 'Anil Agarwal', rating: 5, comment: 'Great product for industrial use.', date: '2 months ago', verified: true, business: 'Vedanta' },
        { user: 'Navin Agarwal', rating: 4, comment: 'Satisfied with the purchase.', date: '3 weeks ago', verified: true, business: 'Vedanta Resources' }
      ]
    },
    {
      id: 13,
      name: 'Commercial RO 1000 LPH',
      category: 'commercial',
      price: 245999,
      originalPrice: 275999,
      rating: 4.9,
      reviewCount: 43,
      capacity: '1000 LPH',
      features: ['Industrial Duty', 'PLC Control', 'Touch Screen', 'Data Logging'],
      description: 'High-capacity commercial RO system for large industrial and commercial applications.',
      longDescription: 'This commercial RO system is designed for large industrial applications. Features PLC control with touch screen interface, data logging capability, and industrial duty components. Produces 1000 liters per hour.',
      specifications: {
        'Purification Capacity': '1000 LPH',
        'Storage Tank': '500 Liters',
        'Power Consumption': '1.5 kW',
        'Purification Stages': '10 Stages',
        'Installation Type': 'Floor Standing',
        'Material': 'SS316',
        'Weight': '150 kg',
        'Dimensions': '120 x 90 x 180 cm',
        'Motor Power': '2 HP',
        'Recovery Rate': '70%'
      },
      images: [
        'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=800&q=80'
      ],
      badge: 'INDUSTRIAL GRADE',
      stock: 'Pre-order',
      delivery: 'Installation Included',
      warranty: '5 Years',
      brand: 'Aquatech',
      model: 'Industrial 1000',
      color: 'Industrial Blue',
      included: ['RO Unit', 'Storage Tank', 'Pump Set', 'PLC Panel', 'Touch Screen', 'Installation'],
      reviewList: [
        { user: 'Baba Kalyani', rating: 5, comment: 'PLC control is excellent. Very precise operation.', date: '1 month ago', verified: true, business: 'Bharat Forge' },
        { user: 'Brijmohan Lall', rating: 5, comment: 'Touch screen interface is user friendly.', date: '2 months ago', verified: true, business: 'Hero MotoCorp' },
        { user: 'Pawan Munjal', rating: 4, comment: 'Great capacity for our factory.', date: '3 months ago', verified: true, business: 'Hero MotoCorp' },
        { user: 'Venu Srinivasan', rating: 5, comment: 'Data logging helps in quality control.', date: '2 weeks ago', verified: true, business: 'TVS Motors' },
        { user: 'Sundaram Clayton', rating: 5, comment: 'Excellent build quality.', date: '1 month ago', verified: false, business: 'TVS Group' },
        { user: 'Rajan Tata', rating: 5, comment: 'Very satisfied with performance.', date: '2 months ago', verified: true, business: 'Tata Motors' },
        { user: 'Guenter Butschek', rating: 4, comment: 'Good product for large scale use.', date: '3 months ago', verified: true, business: 'Tata Motors' },
        { user: 'Mayank Pareek', rating: 5, comment: 'Recommended for industrial use.', date: '1 month ago', verified: true, business: 'Tata Motors' },
        { user: 'Shailesh Chandra', rating: 5, comment: 'Energy efficient operation.', date: '2 months ago', verified: true, business: 'Tata Motors' },
        { user: 'N Chandrasekaran', rating: 5, comment: 'Excellent after-sales support.', date: '3 weeks ago', verified: true, business: 'Tata Sons' }
      ]
    },
    {
      id: 14,
      name: 'Restaurant RO System 150 LPH',
      category: 'commercial',
      price: 65999,
      originalPrice: 72999,
      rating: 4.6,
      reviewCount: 62,
      capacity: '150 LPH',
      features: ['Compact Design', 'Easy Install', 'Low Maintenance', 'Food Grade'],
      description: 'Compact RO system specifically designed for restaurants and cafes.',
      longDescription: 'This RO system is specifically designed for restaurants and cafes. Compact design saves space, easy installation, and low maintenance requirements. Food grade materials ensure water quality for cooking.',
      specifications: {
        'Purification Capacity': '150 LPH',
        'Storage Tank': '80 Liters',
        'Power Consumption': '300 Watts',
        'Purification Stages': '7 Stages',
        'Installation Type': 'Floor Standing',
        'Material': 'SS304 Food Grade',
        'Weight': '55 kg',
        'Dimensions': '60 x 50 x 130 cm'
      },
      images: [
        'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=800&q=80'
      ],
      badge: 'RESTAURANT SPECIAL',
      stock: 'In Stock',
      delivery: 'Free Installation',
      warranty: '3 Years',
      brand: 'Kent',
      model: 'Restaurant RO',
      color: 'Silver',
      included: ['RO Unit', 'Storage Tank', 'Installation Kit', 'User Manual'],
      reviewList: [
        { user: 'Anjan Chatterjee', rating: 5, comment: 'Perfect for our restaurants. Water quality is consistent.', date: '1 month ago', verified: true, business: 'Speciality Restaurants' },
        { user: 'Priyank Sukhija', rating: 5, comment: 'Compact design saves space in our kitchen.', date: '2 months ago', verified: true, business: 'First Fiddle' },
        { user: 'Riyaaz Amlani', rating: 4, comment: 'Good product. Easy to maintain.', date: '3 months ago', verified: true, business: 'Impresario Entertainment' },
        { user: 'Zorawar Kalra', rating: 5, comment: 'Food grade materials ensure safety.', date: '2 weeks ago', verified: true, business: 'Massive Restaurants' },
        { user: 'Sahil Sambhi', rating: 5, comment: 'Excellent after-sales support.', date: '1 month ago', verified: false, business: 'The Walking Street' },
        { user: 'AD Singh', rating: 5, comment: 'Using in multiple outlets. Great performance.', date: '2 months ago', verified: true, business: 'Olive Bar & Kitchen' },
        { user: 'Manu Chandra', rating: 4, comment: 'Good value for restaurants.', date: '3 months ago', verified: true, business: 'Monkey Bar' },
        { user: 'Rahul Akerkar', rating: 5, comment: 'Recommended for restaurant use.', date: '1 month ago', verified: true, business: 'Indigo' },
        { user: 'Gauri Devidayal', rating: 5, comment: 'Installation was quick and neat.', date: '2 months ago', verified: true, business: 'The Table' },
        { user: 'Hussain Shahid', rating: 5, comment: 'Water quality improved our food taste.', date: '3 weeks ago', verified: true, business: 'SodaBottleOpenerWala' }
      ]
    },
    {
      id: 15,
      name: 'Office RO System 50 LPH',
      category: 'commercial',
      price: 38999,
      originalPrice: 42999,
      rating: 4.5,
      reviewCount: 78,
      capacity: '50 LPH',
      features: ['Wall Mount', 'Hot/Cold Water', 'Child Lock', 'Energy Saving'],
      description: 'Compact RO system perfect for small to medium offices with hot and cold water.',
      longDescription: 'This RO system is perfect for small to medium offices. Features wall mount design, hot and cold water options, child lock for safety, and energy saving mode. Perfect for 20-50 employees.',
      specifications: {
        'Purification Capacity': '50 LPH',
        'Storage Tank': '25 Liters',
        'Power Consumption': '200 Watts',
        'Purification Stages': '6 Stages',
        'Installation Type': 'Wall Mounted',
        'Material': 'ABS Food Grade',
        'Weight': '25 kg',
        'Dimensions': '45 x 40 x 90 cm'
      },
      images: [
        'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=800&q=80'
      ],
      badge: 'OFFICE FAVORITE',
      stock: 'In Stock',
      delivery: 'Free Installation',
      warranty: '3 Years',
      brand: 'Livpure',
      model: 'Office RO',
      color: 'White & Blue',
      included: ['RO Unit', 'Installation Kit', 'User Manual', 'Warranty Card'],
      reviewList: [
        { user: 'Rajan Mittal', rating: 5, comment: 'Perfect for our office. Hot water feature is very useful.', date: '1 month ago', verified: true, business: 'Bharti Enterprises' },
        { user: 'Akhil Gupta', rating: 4, comment: 'Good product. Child lock is safe for office.', date: '2 months ago', verified: true, business: 'Blackstone' },
        { user: 'Rohit Bansal', rating: 5, comment: 'Energy saving mode reduces electricity bill.', date: '3 months ago', verified: true, business: 'Snapdeal' },
        { user: 'Kunal Bahl', rating: 5, comment: 'Great value for offices.', date: '2 weeks ago', verified: true, business: 'Snapdeal' },
        { user: 'Sachin Bansal', rating: 5, comment: 'Installation was quick and professional.', date: '1 month ago', verified: false, business: 'Flipkart' },
        { user: 'Binny Bansal', rating: 4, comment: 'Good product. Recommended.', date: '2 months ago', verified: true, business: 'Flipkart' },
        { user: 'Deepinder Goyal', rating: 5, comment: 'Using in our office. Great performance.', date: '3 months ago', verified: true, business: 'Zomato' },
        { user: 'Piyush Gupta', rating: 5, comment: 'Hot and cold water feature is excellent.', date: '1 month ago', verified: true, business: 'Zomato' },
        { user: 'Vijay Shekhar Sharma', rating: 5, comment: 'Perfect for our office cafeteria.', date: '2 months ago', verified: true, business: 'Paytm' },
        { user: 'Madhur Deora', rating: 4, comment: 'Good product. Easy maintenance.', date: '3 weeks ago', verified: true, business: 'Paytm' }
      ]
    },
    {
      id: 16,
      name: 'Hotel RO System 200 LPH',
      category: 'commercial',
      price: 125999,
      originalPrice: 139999,
      rating: 4.8,
      reviewCount: 48,
      capacity: '200 LPH',
      features: ['High Capacity', 'UV Sterilization', 'Ozone Mixing', 'Stainless Steel'],
      description: 'High-capacity RO system designed for hotels and large hospitality establishments.',
      longDescription: 'This RO system is designed for hotels and large hospitality establishments. Features high capacity, UV sterilization, ozone mixing for extended freshness, and stainless steel construction.',
      specifications: {
        'Purification Capacity': '200 LPH',
        'Storage Tank': '150 Liters',
        'Power Consumption': '500 Watts',
        'Purification Stages': '8 Stages',
        'Installation Type': 'Floor Standing',
        'Material': 'SS304',
        'Weight': '75 kg',
        'Dimensions': '75 x 60 x 150 cm'
      },
      images: [
        'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80'
      ],
      badge: 'HOTEL GRADE',
      stock: 'In Stock',
      delivery: 'Premium Installation',
      warranty: '4 Years',
      brand: 'Aquatech',
      model: 'Hotel RO',
      color: 'SS Finish',
      included: ['RO Unit', 'Storage Tank', 'UV Sterilizer', 'Ozone Generator', 'Installation'],
      reviewList: [
        { user: 'Puneet Chhatwal', rating: 5, comment: 'Perfect for our hotels. Ozone mixing keeps water fresh.', date: '1 month ago', verified: true, business: 'IHCL' },
        { user: 'Vikram Oberoi', rating: 5, comment: 'High quality build. Excellent performance.', date: '2 months ago', verified: true, business: 'Oberoi Hotels' },
        { user: 'Kavikrut Mehra', rating: 4, comment: 'UV sterilization ensures pure water.', date: '3 months ago', verified: true, business: 'Radisson Hotels' },
        { user: 'Zubin Saxena', rating: 5, comment: 'Using in multiple properties. Great product.', date: '2 weeks ago', verified: true, business: 'Radisson Hotels' },
        { user: 'Dilip Rajan', rating: 5, comment: 'Stainless steel construction is durable.', date: '1 month ago', verified: false, business: 'Taj Hotels' },
        { user: 'Achin Khanna', rating: 5, comment: 'Excellent after-sales support.', date: '2 months ago', verified: true, business: 'Marriott Hotels' },
        { user: 'Neeraj Govil', rating: 4, comment: 'Good product for hotel use.', date: '3 months ago', verified: true, business: 'Marriott Hotels' },
        { user: 'Rajeev Menon', rating: 5, comment: 'Recommended for hotels.', date: '1 month ago', verified: true, business: 'Marriott International' },
        { user: 'Dilip Puri', rating: 5, comment: 'Great capacity for our hotel.', date: '2 months ago', verified: true, business: 'Roseate Hotels' },
        { user: 'Kush Kapoor', rating: 5, comment: 'Water quality is excellent.', date: '3 weeks ago', verified: true, business: 'Roseate Hotels' }
      ]
    },

    // INDUSTRIAL PRODUCTS
    {
      id: 17,
      name: 'Industrial RO Plant 2000 LPH',
      category: 'industrial',
      price: 485999,
      originalPrice: 525999,
      rating: 4.9,
      reviewCount: 32,
      capacity: '2000 LPH',
      features: ['PLC Controlled', 'Remote Access', 'Data Logging', 'Auto Cleaning'],
      description: 'Large-scale industrial RO plant for factories and manufacturing facilities.',
      longDescription: 'Complete industrial RO solution for large factories and manufacturing facilities. Features PLC control, remote access via mobile app, data logging, and automatic cleaning cycles.',
      specifications: {
        'Purification Capacity': '2000 LPH',
        'Storage Tank': '2000 Liters',
        'Power Consumption': '5 kW',
        'Purification Stages': '10 Stages',
        'Installation Type': 'Floor Standing',
        'Material': 'SS316',
        'Weight': '450 kg',
        'Dimensions': '250 x 150 x 200 cm'
      },
      images: [
        'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80'
      ],
      badge: 'INDUSTRIAL',
      stock: 'Made to Order',
      delivery: 'Installation Included',
      warranty: '5 Years',
      brand: 'Ion Exchange',
      model: 'Industrial 2000',
      color: 'Industrial Blue',
      included: ['RO Plant', 'Storage Tanks', 'Pump Set', 'PLC Panel', 'Mobile App', 'Installation'],
      reviewList: [
        { user: 'Sajjan Jindal', rating: 5, comment: 'Excellent for our steel plant. PLC control is precise.', date: '2 months ago', verified: true, business: 'JSW Steel' },
        { user: 'Naveen Jindal', rating: 5, comment: 'Remote access feature is very useful.', date: '1 month ago', verified: true, business: 'Jindal Steel' },
        { user: 'Kumar Mangalam', rating: 5, comment: 'Data logging helps in quality control.', date: '3 months ago', verified: true, business: 'Aditya Birla' },
        { user: 'Dilip Shanghvi', rating: 4, comment: 'Good product for pharmaceutical use.', date: '2 weeks ago', verified: true, business: 'Sun Pharma' },
        { user: 'Yusuf Hamied', rating: 5, comment: 'Auto cleaning reduces maintenance.', date: '1 month ago', verified: false, business: 'Cipla' },
        { user: 'Kiran Mazumdar', rating: 5, comment: 'Great for biotech applications.', date: '2 months ago', verified: true, business: 'Biocon' },
        { user: 'Pankaj Patel', rating: 5, comment: 'Recommended for industrial use.', date: '3 months ago', verified: true, business: 'Cadila Healthcare' },
        { user: 'G V Prasad', rating: 4, comment: 'Good product. Energy efficient.', date: '1 month ago', verified: true, business: 'Dr. Reddy\'s' },
        { user: 'Satish Reddy', rating: 5, comment: 'Excellent after-sales support.', date: '2 months ago', verified: true, business: 'Dr. Reddy\'s' },
        { user: 'D Murali', rating: 5, comment: 'Very satisfied with performance.', date: '3 weeks ago', verified: true, business: 'Aurobindo Pharma' }
      ]
    },

    // HOSPITAL GRADE PRODUCTS
    {
      id: 18,
      name: 'Hospital Grade RO 100 LPH',
      category: 'hospital',
      price: 145999,
      originalPrice: 159999,
      rating: 4.9,
      reviewCount: 38,
      capacity: '100 LPH',
      features: ['Medical Grade', 'Double UV', 'HEPA Filter', 'Zero Bacteria'],
      description: 'Medical-grade RO system for hospitals and clinics with double UV sterilization.',
      longDescription: 'Specially designed for medical facilities, this hospital-grade RO system meets strict medical standards. Features double UV sterilization, HEPA filter for air intake, and zero bacteria guarantee.',
      specifications: {
        'Purification Capacity': '100 LPH',
        'Storage Tank': '200 Liters',
        'Power Consumption': '500 Watts',
        'Purification Stages': '10 Stages (Medical Grade)',
        'Installation Type': 'Floor Standing',
        'Material': 'SS316 Medical Grade',
        'Weight': '85 kg',
        'Dimensions': '90 x 70 x 160 cm'
      },
      images: [
        'https://images.unsplash.com/photo-1545235617-9465d2a55698?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=800&q=80'
      ],
      badge: 'MEDICAL GRADE',
      stock: 'In Stock',
      delivery: 'Expert Installation',
      warranty: '5 Years',
      brand: 'AquaMed',
      model: 'MediPure 100',
      color: 'White & Blue',
      included: ['RO Unit', 'UV Sterilizer', 'HEPA Filter', 'Storage Tank', 'Installation Kit'],
      reviewList: [
        { user: 'Dr. Devi Shetty', rating: 5, comment: 'Perfect for our hospital. Meets all medical standards.', date: '1 month ago', verified: true, business: 'Narayana Health' },
        { user: 'Dr. Naresh Trehan', rating: 5, comment: 'Double UV ensures complete sterilization.', date: '2 months ago', verified: true, business: 'Medanta' },
        { user: 'Dr. Prathap Reddy', rating: 5, comment: 'Excellent product for healthcare facilities.', date: '3 months ago', verified: true, business: 'Apollo Hospitals' },
        { user: 'Dr. Shantha', rating: 4, comment: 'Zero bacteria guarantee is impressive.', date: '2 weeks ago', verified: true, business: 'Shankar Foundation' },
        { user: 'Dr. Ashok Seth', rating: 5, comment: 'Using in our cardiac center. Great results.', date: '1 month ago', verified: false, business: 'Fortis Escorts' },
        { user: 'Dr. Ramakanta Panda', rating: 5, comment: 'Highly recommended for hospitals.', date: '2 months ago', verified: true, business: 'Asian Heart Institute' },
        { user: 'Dr. G Venkatesh', rating: 5, comment: 'HEPA filter ensures clean air intake.', date: '3 months ago', verified: true, business: 'KIMS' },
        { user: 'Dr. B S Ajaikumar', rating: 4, comment: 'Good product for clinical use.', date: '1 month ago', verified: true, business: 'HCG' },
        { user: 'Dr. Vishal Rao', rating: 5, comment: 'Excellent after-sales service.', date: '2 months ago', verified: true, business: 'HCG' },
        { user: 'Dr. Moni Kuriakose', rating: 5, comment: 'Water quality is consistently pure.', date: '3 weeks ago', verified: true, business: 'Kochi Cancer Center' }
      ]
    },

    // SCHOOL GRADE PRODUCTS
    {
      id: 19,
      name: 'School RO System 500 LPH',
      category: 'school',
      price: 185999,
      originalPrice: 199999,
      rating: 4.7,
      reviewCount: 52,
      capacity: '500 LPH',
      features: ['Child Safe', 'Multiple Taps', 'Waste Water Reuse', 'Solar Compatible'],
      description: 'High-capacity RO system for schools and colleges with multiple dispensing points.',
      longDescription: 'Designed specifically for educational institutions, this RO system features child-safe dispensing, multiple taps for different areas, waste water reuse system, and solar compatibility for green schools.',
      specifications: {
        'Purification Capacity': '500 LPH',
        'Storage Tank': '500 Liters',
        'Power Consumption': '800 Watts',
        'Purification Stages': '8 Stages',
        'Installation Type': 'Floor Standing',
        'Material': 'SS304',
        'Weight': '120 kg',
        'Dimensions': '120 x 80 x 180 cm'
      },
      images: [
        'https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=800&q=80'
      ],
      badge: 'EDUCATION',
      stock: 'In Stock',
      delivery: 'Free Setup',
      warranty: '5 Years',
      brand: 'AquaGuard',
      model: 'EduPure 500',
      color: 'White & Green',
      included: ['RO Unit', 'Storage Tank', 'Multiple Taps', 'Installation Kit', 'User Manual'],
      reviewList: [
        { user: 'Principal Kalyani', rating: 5, comment: 'Perfect for our 2000 students. Multiple taps work great.', date: '1 month ago', verified: true, business: 'DAV Public School' },
        { user: 'Principal Sharma', rating: 5, comment: 'Child-safe design gives peace of mind.', date: '2 months ago', verified: true, business: 'Delhi Public School' },
        { user: 'Principal Singh', rating: 4, comment: 'Waste water reuse is eco-friendly.', date: '3 months ago', verified: true, business: 'Kendriya Vidyalaya' },
        { user: 'Principal Reddy', rating: 5, comment: 'Solar compatibility saves electricity.', date: '2 weeks ago', verified: true, business: 'Chinmaya Vidyalaya' },
        { user: 'Principal Nair', rating: 5, comment: 'Excellent product for schools.', date: '1 month ago', verified: false, business: 'Bharatiya Vidya Bhavan' },
        { user: 'Principal Gupta', rating: 5, comment: 'Installation was smooth and professional.', date: '2 months ago', verified: true, business: 'St. Mary\'s School' },
        { user: 'Principal Desai', rating: 4, comment: 'Good capacity for our school.', date: '3 months ago', verified: true, business: 'Mount Carmel School' },
        { user: 'Principal Menon', rating: 5, comment: 'Very satisfied with the performance.', date: '1 month ago', verified: true, business: 'Loyola School' },
        { user: 'Principal Iyer', rating: 5, comment: 'Recommended for educational institutions.', date: '2 months ago', verified: true, business: 'PSBB School' },
        { user: 'Principal Rao', rating: 5, comment: 'Great after-sales support.', date: '3 weeks ago', verified: true, business: 'Bishop Cotton School' }
      ]
    },

    // HOTEL GRADE PRODUCTS
    {
      id: 20,
      name: 'Hotel RO System 1000 LPH',
      category: 'hotel',
      price: 325999,
      originalPrice: 349999,
      rating: 4.8,
      reviewCount: 45,
      capacity: '1000 LPH',
      features: ['Bulk Storage', 'Room Supply', 'Kitchen Supply', 'Laundry Supply'],
      description: 'Comprehensive RO system for large hotels with multiple supply lines.',
      longDescription: 'Complete water solution for large hotels with separate supply lines for guest rooms, kitchen, and laundry. Features bulk storage, automated supply management, and water quality monitoring.',
      specifications: {
        'Purification Capacity': '1000 LPH',
        'Storage Tank': '1000 Liters',
        'Power Consumption': '1.2 kW',
        'Purification Stages': '9 Stages',
        'Installation Type': 'Floor Standing',
        'Material': 'SS304',
        'Weight': '180 kg',
        'Dimensions': '150 x 100 x 200 cm'
      },
      images: [
        'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=800&q=80'
      ],
      badge: '5-STAR',
      stock: 'Made to Order',
      delivery: 'Premium Installation',
      warranty: '5 Years',
      brand: 'Aquatech',
      model: 'Hotel Pro 1000',
      color: 'SS Finish',
      included: ['RO Unit', 'Storage Tanks', 'Distribution System', 'Control Panel', 'Installation'],
      reviewList: [
        { user: 'Puneet Chhatwal', rating: 5, comment: 'Perfect for our 5-star properties. Separate supplies work great.', date: '1 month ago', verified: true, business: 'Taj Hotels' },
        { user: 'Vikram Oberoi', rating: 5, comment: 'Excellent system for hotel operations.', date: '2 months ago', verified: true, business: 'Oberoi Hotels' },
        { user: 'Kavikrut Mehra', rating: 5, comment: 'Kitchen water quality improved food taste.', date: '3 months ago', verified: true, business: 'Radisson Hotels' },
        { user: 'Zubin Saxena', rating: 4, comment: 'Laundry supply feature is very useful.', date: '2 weeks ago', verified: true, business: 'Radisson Hotels' },
        { user: 'Dilip Rajan', rating: 5, comment: 'Bulk storage ensures uninterrupted supply.', date: '1 month ago', verified: false, business: 'Taj Hotels' },
        { user: 'Achin Khanna', rating: 5, comment: 'Highly recommended for hotels.', date: '2 months ago', verified: true, business: 'Marriott Hotels' },
        { user: 'Neeraj Govil', rating: 5, comment: 'Automated supply management is great.', date: '3 months ago', verified: true, business: 'Marriott Hotels' },
        { user: 'Rajeev Menon', rating: 4, comment: 'Good product for hotel chains.', date: '1 month ago', verified: true, business: 'Marriott International' },
        { user: 'Dilip Puri', rating: 5, comment: 'Excellent after-sales support.', date: '2 months ago', verified: true, business: 'Roseate Hotels' },
        { user: 'Kush Kapoor', rating: 5, comment: 'Water quality monitoring is accurate.', date: '3 weeks ago', verified: true, business: 'Roseate Hotels' }
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
    setSelectedCategory('all');
    setSearchQuery('');
  };

  const filteredProducts = products.filter(product => {
    // Search filter
    if (searchQuery && !product.name.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }

    // Category filter
    if (selectedCategory !== 'all' && product.category !== selectedCategory) {
      return false;
    }

    // Capacity filter
    if (selectedFilters.capacity.length > 0) {
      const capacityMatch = selectedFilters.capacity.some(filter =>
        product.capacity.includes(filter.replace('l', ''))
      );
      if (!capacityMatch) return false;
    }

    // Brand filter
    if (selectedFilters.brands.length > 0) {
      const brandMatch = selectedFilters.brands.some(brand =>
        product.name.toLowerCase().includes(brand)
      );
      if (!brandMatch) return false;
    }

    // Features filter
    if (selectedFilters.features.length > 0) {
      const featureMatch = selectedFilters.features.some(feature =>
        product.features.some(pFeature =>
          pFeature.toLowerCase().includes(feature)
        )
      );
      if (!featureMatch) return false;
    }

    // Price filter
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



  // Filter Section Component - Responsive
  const FilterSection = () => (
    <div className="bg-white rounded-lg sm:rounded-xl shadow-lg p-3 sm:p-4 lg:p-5">
      <div className="flex items-center justify-between mb-4 sm:mb-5">
        <h2 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 flex items-center gap-1 sm:gap-2">
          <Filter className="w-4 h-4 sm:w-5 sm:h-5" />
          Filters
        </h2>
        <button
          onClick={clearFilters}
          className="text-xs sm:text-sm text-cyan-600 hover:text-cyan-700 font-medium"
        >
          Clear All
        </button>
      </div>

      {/* Categories - Scrollable on Mobile */}
      <div className="mb-4 sm:mb-5 lg:mb-6">
        <h3 className="font-semibold text-gray-900 mb-2 sm:mb-3 text-xs sm:text-sm">Categories</h3>
        <div className="space-y-1 sm:space-y-2 max-h-60 sm:max-h-80 overflow-y-auto scrollbar-thin">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => {
                setSelectedCategory(category.id);
                if (isMobile) setIsMobileFilterOpen(false);
              }}
              className={`w-full flex items-center justify-between p-2 sm:p-2.5 rounded-lg transition-all text-xs sm:text-sm ${selectedCategory === category.id
                ? 'bg-linear-to-r from-cyan-50 to-blue-50 border border-cyan-200'
                : 'hover:bg-gray-50'
                }`}
            >
              <div className="flex items-center gap-2 sm:gap-3">
                <div className={`p-1 sm:p-1.5 rounded-lg ${selectedCategory === category.id
                  ? 'bg-cyan-600 text-white'
                  : 'bg-gray-100 text-gray-600'
                  }`}>
                  {category.icon}
                </div>
                <span className="font-medium">{category.name}</span>
              </div>
              <span className="text-[10px] sm:text-xs text-gray-500 bg-gray-100 px-1.5 sm:px-2 py-0.5 rounded">
                {category.count}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div className="mb-4 sm:mb-5 lg:mb-6">
        <h3 className="font-semibold text-gray-900 mb-2 sm:mb-3 text-xs sm:text-sm">Price Range</h3>
        <div className="space-y-3">
          <div className="flex justify-between text-[10px] sm:text-xs text-gray-600">
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
            className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer"
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
            className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
        </div>
      </div>

      {/* Capacity */}
      <div className="mb-4 sm:mb-5 lg:mb-6">
        <h3 className="font-semibold text-gray-900 mb-2 sm:mb-3 text-xs sm:text-sm">Capacity</h3>
        <div className="space-y-1 sm:space-y-2 max-h-40 overflow-y-auto">
          {filters.capacity.map(capacity => (
            <label key={capacity.value} className="flex items-center gap-2 sm:gap-3 cursor-pointer text-xs sm:text-sm">
              <input
                type="checkbox"
                checked={selectedFilters.capacity.includes(capacity.value)}
                onChange={() => handleFilterToggle('capacity', capacity.value)}
                className="rounded text-cyan-600 focus:ring-cyan-500 w-3 h-3 sm:w-4 sm:h-4"
              />
              <span className="text-gray-700">{capacity.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Brands */}
      <div className="mb-4 sm:mb-5 lg:mb-6">
        <h3 className="font-semibold text-gray-900 mb-2 sm:mb-3 text-xs sm:text-sm">Brands</h3>
        <div className="space-y-1 sm:space-y-2 max-h-40 overflow-y-auto">
          {filters.brands.map(brand => (
            <label key={brand.value} className="flex items-center gap-2 sm:gap-3 cursor-pointer text-xs sm:text-sm">
              <input
                type="checkbox"
                checked={selectedFilters.brands.includes(brand.value)}
                onChange={() => handleFilterToggle('brands', brand.value)}
                className="rounded text-cyan-600 focus:ring-cyan-500 w-3 h-3 sm:w-4 sm:h-4"
              />
              <span className="text-gray-700">{brand.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Features */}
      <div>
        <h3 className="font-semibold text-gray-900 mb-2 sm:mb-3 text-xs sm:text-sm">Features</h3>
        <div className="space-y-1 sm:space-y-2 max-h-40 overflow-y-auto">
          {filters.features.map(feature => (
            <label key={feature.value} className="flex items-center gap-2 sm:gap-3 cursor-pointer text-xs sm:text-sm">
              <input
                type="checkbox"
                checked={selectedFilters.features.includes(feature.value)}
                onChange={() => handleFilterToggle('features', feature.value)}
                className="rounded text-cyan-600 focus:ring-cyan-500 w-3 h-3 sm:w-4 sm:h-4"
              />
              <div className="flex items-center gap-1 sm:gap-2">
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
      {/* Header - Responsive */}
      <div className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-2 sm:py-3 lg:py-4">
          {/* <div className="flex items-center justify-between">
         
            <div>
              <h1 className="text-sm sm:text-base lg:text-xl xl:text-2xl font-bold text-gray-900">RO Systems Store</h1>
              <p className="text-[10px] sm:text-xs lg:text-sm text-gray-600 hidden xs:block">Premium Water Purification Solutions</p>
            </div>

            <div className="flex items-center gap-1 sm:gap-2 lg:gap-4">
      
              {isMobile && (
                <button className="p-1.5 sm:p-2 hover:bg-gray-100 rounded-lg">
                  <Search className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
                </button>
              )}

              {!isMobile && (
                <div className="relative hidden md:block">
                  <Search className="absolute left-2 sm:left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-3 h-3 sm:w-4 sm:h-4" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search RO systems..."
                    className="pl-7 sm:pl-9 pr-3 sm:pr-4 py-1.5 sm:py-2 border rounded-lg w-32 sm:w-48 lg:w-64 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                </div>
              )}
              <button className="relative p-1.5 sm:p-2 hover:bg-gray-100 rounded-lg">
                <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-gray-700" />
                <span className="absolute -top-0.5 -right-0.5 bg-cyan-600 text-white text-[8px] sm:text-xs rounded-full w-3.5 h-3.5 sm:w-4 sm:h-4 flex items-center justify-center">
                  3
                </span>
              </button>

              {!isMobile && (
                <button className="hidden lg:flex items-center gap-1 lg:gap-2 bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-3 lg:px-5 py-1.5 lg:py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity text-xs lg:text-sm">
                  <Phone className="w-3 h-3 lg:w-4 lg:h-4" />
                  <span className="hidden lg:inline">Call Expert</span>
                </button>
              )}
            </div>
          </div> */}

          {/* Mobile Search Bar */}
          {isMobile && (
            <div className="mt-2">
              <div className="relative">
                <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 w-3.5 h-3.5" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search RO systems..."
                  className="w-full pl-8 pr-3 py-2 border rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-3 sm:py-4 lg:py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
          {/* Desktop/Tablet Sidebar Filters */}
          {!isMobile && (
            <div className="lg:col-span-1">
              <div className={`sticky ${isTablet ? 'top-28' : 'top-24'}`}>
                <FilterSection />
              </div>
            </div>
          )}

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Top Bar - Responsive */}
            <div className="bg-white rounded-lg sm:rounded-xl shadow p-3 sm:p-4 mb-3 sm:mb-4">
              <div className="flex flex-col xs:flex-row justify-between items-start xs:items-center gap-2 sm:gap-3">
                <div>
                  <h1 className="text-sm sm:text-base lg:text-lg xl:text-xl font-bold text-gray-900">
                    {selectedCategory === 'all' ? 'All RO Systems' :
                      categories.find(c => c.id === selectedCategory)?.name}
                  </h1>
                  <p className="text-xs sm:text-sm text-gray-600">
                    Showing {filteredProducts.length} of {products.length} products
                  </p>
                </div>

                <div className="flex items-center gap-1.5 sm:gap-2 w-full xs:w-auto">
                  {/* Mobile Filter Button */}
                  {isMobile && (
                    <button
                      onClick={() => setIsMobileFilterOpen(true)}
                      className="flex-1 xs:flex-none flex items-center justify-center gap-1 bg-cyan-600 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg font-semibold text-xs sm:text-sm"
                    >
                      <Filter className="w-3 h-3 sm:w-4 sm:h-4" />
                      Filters
                      {(selectedFilters.capacity.length > 0 || selectedFilters.brands.length > 0 ||
                        selectedFilters.features.length > 0 || selectedCategory !== 'all') && (
                          <span className="bg-white text-cyan-600 rounded-full w-4 h-4 flex items-center justify-center text-[8px] sm:text-xs font-bold">
                            {selectedFilters.capacity.length + selectedFilters.brands.length +
                              selectedFilters.features.length + (selectedCategory !== 'all' ? 1 : 0)}
                          </span>
                        )}
                    </button>
                  )}

                  {/* View Mode */}
                  <div className="flex items-center gap-0.5 bg-gray-100 p-0.5 rounded-lg">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-1.5 sm:p-2 rounded-md ${viewMode === 'grid' ? 'bg-white shadow' : 'hover:bg-gray-200'
                        }`}
                    >
                      <Grid className="w-3 h-3 sm:w-4 sm:h-4" />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-1.5 sm:p-2 rounded-md ${viewMode === 'list' ? 'bg-white shadow' : 'hover:bg-gray-200'
                        }`}
                    >
                      <List className="w-3 h-3 sm:w-4 sm:h-4" />
                    </button>
                  </div>

                  {/* Sort */}
                  <div className="relative flex justify-end flex-1">
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="appearance-none bg-white border border-gray-300 rounded-lg 
               pl-3 pr-8 py-2 text-sm 
               focus:outline-none focus:ring-2 focus:ring-cyan-500 
               w-full md:w-52"
                    >
                      {sortOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {isMobile ? option.label.split(":")[0] : option.label}
                        </option>
                      ))}
                    </select>

                    {/* Custom dropdown arrow */}
                    <svg
                      className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Active Filters */}
              {(selectedFilters.capacity.length > 0 || selectedFilters.brands.length > 0 ||
                selectedFilters.features.length > 0 || selectedCategory !== 'all' || searchQuery) && (
                  <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t">
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {searchQuery && (
                        <span className="inline-flex items-center gap-1 bg-gray-100 text-gray-800 px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-[10px] sm:text-xs">
                          Search: {searchQuery}
                          <button onClick={() => setSearchQuery('')}>
                            <X className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                          </button>
                        </span>
                      )}
                      {selectedCategory !== 'all' && (
                        <span className="inline-flex items-center gap-1 bg-cyan-100 text-cyan-800 px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-[10px] sm:text-xs">
                          {categories.find(c => c.id === selectedCategory)?.name}
                          <button onClick={() => setSelectedCategory('all')}>
                            <X className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                          </button>
                        </span>
                      )}
                      {selectedFilters.capacity.map(cap => (
                        <span key={cap} className="inline-flex items-center gap-1 bg-blue-100 text-blue-800 px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-[10px] sm:text-xs">
                          {filters.capacity.find(c => c.value === cap)?.label}
                          <button onClick={() => handleFilterToggle('capacity', cap)}>
                            <X className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                          </button>
                        </span>
                      ))}
                      {selectedFilters.brands.map(brand => (
                        <span key={brand} className="inline-flex items-center gap-1 bg-purple-100 text-purple-800 px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-[10px] sm:text-xs">
                          {filters.brands.find(b => b.value === brand)?.label}
                          <button onClick={() => handleFilterToggle('brands', brand)}>
                            <X className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                          </button>
                        </span>
                      ))}
                      {selectedFilters.features.map(feature => (
                        <span key={feature} className="inline-flex items-center gap-1 bg-green-100 text-green-800 px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-[10px] sm:text-xs">
                          {filters.features.find(f => f.value === feature)?.label}
                          <button onClick={() => handleFilterToggle('features', feature)}>
                            <X className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                          </button>
                        </span>
                      ))}
                    </div>
                  </div>
                )}
            </div>

            {/* Products Grid/List View */}
            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                {sortedProducts.map(product => (
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
                    {/* Product Image */}
                    <div className="relative h-40 xs:h-36 sm:h-44 md:h-48 overflow-hidden">
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      {/* Badge */}
                      {product.badge && (
                        <div className="absolute top-2 left-2">
                          <span className="bg-linear-to-r from-cyan-600 to-blue-600 text-white px-2 py-0.5 rounded-full text-[8px] sm:text-xs font-bold">
                            {product.badge}
                          </span>
                        </div>
                      )}
                      {/* Wishlist Button */}
                      <button
                        className="absolute top-2 right-2 p-1.5 bg-white/90 rounded-full hover:bg-white"
                        onClick={(e) => {
                          e.stopPropagation();
                        }}
                      >
                        <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600 hover:text-red-500" />
                      </button>
                    </div>

                    {/* Product Info */}
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

                      {/* Features */}
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

                      {/* Price */}
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

                      {/* Delivery Info */}
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

                      {/* Actions */}
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
              /* List View */
              <div className="space-y-3 sm:space-y-4">
                {sortedProducts.map(product => (
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
                      {/* Image */}
                      <div className="xs:w-1/3 relative">
                        <img
                          src={product.images[0]}
                          alt={product.name}
                          className="w-full h-40 xs:h-32 sm:h-36 md:h-40 object-cover"
                        />
                        {product.badge && (
                          <div className="absolute top-2 left-2">
                            <span className="bg-linear-to-r from-cyan-600 to-blue-600 text-white px-2 py-0.5 rounded-full text-[8px] sm:text-xs font-bold">
                              {product.badge}
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Details */}
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

                            {/* Features */}
                            <div className="flex flex-wrap gap-1 mb-2">
                              {product.features.slice(0, 2).map((feature, idx) => (
                                <span key={idx} className="inline-flex items-center gap-0.5 bg-gray-100 text-gray-700 px-1 py-0.5 rounded-full text-[8px] sm:text-xs">
                                  <Check className="w-2 h-2 text-green-500" />
                                  {feature}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Price */}
                          <div className="text-left xs:text-right w-full xs:w-auto">
                            <div className="text-sm sm:text-base font-bold text-gray-900">₹{product.price.toLocaleString()}</div>
                            {product.originalPrice && (
                              <div className="text-gray-500 line-through text-[8px] sm:text-xs">₹{product.originalPrice.toLocaleString()}</div>
                            )}
                          </div>
                        </div>

                        {/* Actions */}
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

            {/* No Results */}
            {filteredProducts.length === 0 && (
              <div className="text-center py-8 sm:py-10 lg:py-12">
                <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 mx-auto mb-3 sm:mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                  <Search className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-gray-400" />
                </div>
                <h3 className="text-sm sm:text-base lg:text-lg font-bold text-gray-900 mb-1 sm:mb-2">No products found</h3>
                <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">Try adjusting your filters</p>
                <button
                  onClick={clearFilters}
                  className="bg-linear-to-r from-cyan-600 to-blue-600 text-white px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 rounded-lg font-semibold hover:opacity-90 transition-opacity text-xs sm:text-sm"
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
              className="fixed inset-0 bg-black/50 z-50"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween' }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-xs sm:max-w-sm bg-white z-50 overflow-y-auto"
            >
              <div className="sticky top-0 bg-white border-b p-3 flex items-center justify-between">
                <h2 className="text-sm sm:text-base font-bold text-gray-900">Filters</h2>
                <button
                  onClick={() => setIsMobileFilterOpen(false)}
                  className="p-1.5 hover:bg-gray-100 rounded-lg"
                >
                  <X className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>
              <div className="p-3">
                <FilterSection />
              </div>
              <div className="sticky bottom-0 bg-white border-t p-3">
                <button
                  onClick={() => setIsMobileFilterOpen(false)}
                  className="w-full bg-linear-to-r from-cyan-600 to-blue-600 text-white py-2.5 sm:py-3 rounded-lg font-semibold text-xs sm:text-sm"
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
            onAddToCart={(product, quantity) => {
              console.log('Added to cart:', product.name, quantity);
              // Add your cart logic here
            }}
            onBuyNow={(product, quantity) => {
              console.log('Buy now:', product.name, quantity);
              // Add your buy now logic here
            }}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Productpage;