import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Star,
  Award,
  Check,
  Zap,
  ShoppingCart,
  Heart,
  ChevronLeft,
  ChevronRight,
  Truck,
  Shield,
  RotateCcw,
  CreditCard,
  Clock,
  Gift,
  ThumbsUp,
  Minus,
  Plus,
  Share2,
  Phone
} from 'lucide-react';

const ProductDetail = ({ product, onClose, onAddToCart, onBuyNow }) => {
  const [activeTab, setActiveTab] = useState('description');
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [showShareOptions, setShowShareOptions] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobileDetail, setIsMobileDetail] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobileDetail(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Prevent body scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  const handleMouseMove = (e) => {
    if (!isZoomed) return;
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setMousePosition({ x, y });
  };

  const handleAddToCart = () => {
    if (onAddToCart) {
      onAddToCart(product, quantity);
    } else {
      console.log('Added to cart:', product.name, quantity);
    }
  };

  const handleBuyNow = () => {
    if (onBuyNow) {
      onBuyNow(product, quantity);
    } else {
      console.log('Buy now:', product.name, quantity);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-100 bg-white overflow-y-auto"
    >
      {/* Sticky Header */}
      <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-md border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-2 sm:py-3 lg:py-4">
          <div className="flex items-center justify-between">
            <motion.button
              whileHover={{ x: -3 }}
              onClick={onClose}
              className="flex items-center gap-1 sm:gap-2 text-gray-600 hover:text-gray-900 group"
            >
              <div className="p-1.5 sm:p-2 rounded-full bg-gray-100 group-hover:bg-gray-200 transition-colors">
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <span className="text-xs sm:text-sm font-medium hidden xs:inline">Back</span>
            </motion.button>

            <div className="flex items-center gap-1 sm:gap-2 lg:gap-3">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsWishlisted(!isWishlisted)}
                className="p-1.5 sm:p-2 hover:bg-gray-100 rounded-full relative group"
              >
                <Heart className={`w-4 h-4 sm:w-5 sm:h-5 transition-colors ${isWishlisted ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleAddToCart}
                className="p-1.5 sm:p-2 hover:bg-gray-100 rounded-full relative"
              >
                <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowShareOptions(!showShareOptions)}
                className="p-1.5 sm:p-2 hover:bg-gray-100 rounded-full relative"
              >
                <Share2 className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
              </motion.button>

              <AnimatePresence>
                {showShareOptions && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-10 sm:top-12 right-2 sm:right-4 bg-white rounded-xl shadow-2xl p-2 sm:p-3 border z-30"
                  >
                    <div className="flex gap-1 sm:gap-2">
                      {['facebook', 'twitter', 'whatsapp', 'telegram'].map((social) => (
                        <motion.button
                          key={social}
                          whileHover={{ y: -2 }}
                          className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gray-100 flex items-center justify-center hover:bg-linear-to-r hover:from-cyan-600 hover:to-blue-600 hover:text-white transition-all"
                        >
                          <span className="capitalize text-xs sm:text-sm">{social[0]}</span>
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

      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-4 sm:py-6 lg:py-8">
        {/* Product Main Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 xl:gap-12 mb-8 sm:mb-10 lg:mb-12">
          {/* Product Images */}
          <div>
            {/* Main Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className={`relative h-64 sm:h-80 md:h-96 lg:h-112.5 xl:h-125 rounded-lg sm:rounded-xl lg:rounded-2xl overflow-hidden mb-2 sm:mb-3 lg:mb-4 bg-linear-to-br from-gray-50 to-gray-100 group ${isZoomed ? 'cursor-zoom-out' : 'cursor-zoom-in'
                }`}
              onClick={() => !isMobileDetail && setIsZoomed(!isZoomed)}
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

              {/* Badges */}
              <div className="absolute top-2 sm:top-3 lg:top-4 left-2 sm:left-3 lg:left-4 z-10 flex flex-col gap-1 sm:gap-2">
                {product.badge && (
                  <motion.span
                    initial={{ x: -50, rotate: -45 }}
                    animate={{ x: 0, rotate: 0 }}
                    transition={{ type: "spring", bounce: 0.5 }}
                    className="bg-linear-to-r from-cyan-600 to-blue-600 text-white px-2 sm:px-3 lg:px-4 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-bold shadow-lg flex items-center gap-0.5 sm:gap-1"
                  >
                    <Award className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                    <span className="hidden xs:inline">{product.badge}</span>
                  </motion.span>
                )}
              </div>

              {/* Discount Badge */}
              {product.originalPrice && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3, type: "spring" }}
                  className="absolute top-2 sm:top-3 lg:top-4 right-2 sm:right-3 lg:right-4 z-10"
                >
                  <span className="bg-linear-to-r from-green-500 to-emerald-500 text-white px-2 sm:px-3 lg:px-4 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs lg:text-sm font-bold shadow-lg">
                    {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                  </span>
                </motion.div>
              )}

              {/* Navigation Arrows */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                className="absolute left-2 sm:left-3 lg:left-4 top-1/2 transform -translate-y-1/2 w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg hover:bg-white z-20"
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                className="absolute right-2 sm:right-3 lg:right-4 top-1/2 transform -translate-y-1/2 w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg hover:bg-white z-20"
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              {/* Image Counter */}
              <div className="absolute bottom-2 sm:bottom-3 lg:bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs z-10">
                {selectedImage + 1} / {product.images.length}
              </div>
            </motion.div>

            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-4 gap-1 sm:gap-2 lg:gap-3 xl:gap-4">
              {product.images.map((image, index) => (
                <motion.button
                  key={index}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedImage(index)}
                  className={`relative h-14 sm:h-16 md:h-20 lg:h-24 rounded-lg sm:rounded-xl overflow-hidden border-2 transition-all ${selectedImage === index
                    ? 'border-cyan-600 shadow-lg shadow-cyan-200'
                    : 'border-transparent hover:border-gray-300'
                    }`}
                >
                  <img src={image} alt={`${product.name} ${index + 1}`} className="w-full h-full object-cover" />
                </motion.button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="mt-4 lg:mt-0">
            {/* Brand and Model */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-wrap items-center gap-1.5 sm:gap-2 lg:gap-3 mb-2 sm:mb-3 lg:mb-4"
            >
              <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-cyan-100 text-cyan-700 rounded-full text-xs sm:text-sm font-medium">
                {product.brand}
              </span>
              <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-purple-100 text-purple-700 rounded-full text-xs sm:text-sm font-medium">
                {product.model}
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 
                font-bold 
                leading-tight sm:leading-snug 
                mb-4 
                bg-linear-to-r from-gray-900 via-cyan-800 to-blue-800 
                bg-clip-text text-transparent"
            >
              {product.name}
            </motion.h1>

            {/* Rating */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap items-center gap-2 sm:gap-3 lg:gap-4 mb-3 sm:mb-4 lg:mb-6"
            >
              <div className="flex items-center gap-0.5 sm:gap-1 bg-amber-50 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-3 h-3 sm:w-4 sm:h-4 ${i < Math.floor(product.rating) ? 'text-amber-400 fill-current' : 'text-gray-300'}`} />
                ))}
                <span className="font-bold ml-0.5 sm:ml-1 text-xs sm:text-sm">{product.rating}</span>
              </div>
              <span className="text-xs sm:text-sm text-gray-500">({product.reviewCount} reviews)</span>
              <span className="text-green-700 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-semibold bg-green-50">
                {product.stock}
              </span>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-4 sm:mb-5 lg:mb-6 p-3 sm:p-4 bg-linear-to-r from-cyan-50 to-blue-50 rounded-lg sm:rounded-xl border border-cyan-100"
            >
              <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed">{product.description}</p>
            </motion.div>

            {/* Price */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="mb-4 sm:mb-5 lg:mb-6 p-4 sm:p-5 lg:p-6 bg-linear-to-r from-gray-50 to-white rounded-lg sm:rounded-xl lg:rounded-2xl border"
            >
              <div className="flex flex-col xs:flex-row items-start xs:items-center gap-2 xs:gap-3 sm:gap-4">
                <div>
                  <span className="text-[10px] sm:text-xs text-gray-500 mb-0.5 block">Special Price</span>
                  <div className="flex items-center flex-wrap gap-2 sm:gap-3">
                    <span className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold bg-linear-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                      ₹{product.price.toLocaleString()}
                    </span>
                    {product.originalPrice && (
                      <>
                        <span className="text-gray-400 line-through text-base sm:text-lg lg:text-2xl">₹{product.originalPrice.toLocaleString()}</span>
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
                    <span className="bg-green-100 text-green-700 px-2 sm:px-3 lg:px-4 py-1 sm:py-1.5 lg:py-2 rounded-full font-bold text-xs sm:text-sm lg:text-base">
                      SAVE ₹{(product.originalPrice - product.price).toLocaleString()}
                    </span>
                  </motion.div>
                )}
              </div>
            </motion.div>

            {/* Key Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mb-4 sm:mb-5 lg:mb-6"
            >
              <h3 className="font-bold text-sm sm:text-base lg:text-lg mb-2 sm:mb-3 flex items-center gap-1 sm:gap-2">
                <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-600" />
                Key Features
              </h3>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {product.features.map((feature, idx) => (
                  <motion.span
                    key={idx}
                    whileHover={{ scale: 1.05, y: -1 }}
                    className="bg-linear-to-r from-cyan-50 to-blue-50 text-cyan-700 px-2 sm:px-3 lg:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium border border-cyan-200 shadow-sm flex items-center gap-1 sm:gap-2"
                  >
                    <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 lg:w-4 lg:h-4 text-green-500" />
                    {feature}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Quantity and Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mb-4 sm:mb-5 lg:mb-6"
            >
              <h3 className="font-bold text-sm sm:text-base lg:text-lg mb-2 sm:mb-3">Select Quantity</h3>
              <div className="flex flex-col xs:flex-row items-start xs:items-center gap-3 sm:gap-4 mb-4 sm:mb-5 lg:mb-6">
                <div className="flex items-center border-2 rounded-lg sm:rounded-xl overflow-hidden">
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 sm:p-2.5 lg:p-3 hover:bg-gray-100 transition-colors"
                  >
                    <Minus className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5" />
                  </motion.button>
                  <motion.span
                    key={quantity}
                    initial={{ scale: 1.2 }}
                    animate={{ scale: 1 }}
                    className="w-12 sm:w-14 text-center font-bold text-sm sm:text-base lg:text-lg"
                  >
                    {quantity}
                  </motion.span>
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 sm:p-2.5 lg:p-3 hover:bg-gray-100 transition-colors"
                  >
                    <Plus className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5" />
                  </motion.button>
                </div>
                <div className="bg-green-100 text-green-700 px-2 sm:px-3 lg:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold">
                  Only 10 left!
                </div>
              </div>

              <div className="flex flex-col xs:flex-row gap-2 sm:gap-3">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleAddToCart}
                  className="flex-1 bg-linear-to-r from-cyan-600 to-blue-600 text-white py-3 sm:py-3.5 lg:py-4 rounded-lg sm:rounded-xl font-bold hover:shadow-lg hover:shadow-cyan-200 transition-all flex items-center justify-center gap-1 sm:gap-2 text-sm sm:text-base group"
                >
                  <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-12 transition-transform" />
                  Add to Cart
                </motion.button>

                <motion.a
                  href="tel:9843021579"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 bg-linear-to-r from-amber-500 to-orange-500 text-white 
                    py-3 sm:py-3.5 lg:py-4 
                    rounded-lg sm:rounded-xl 
                    font-bold 
                    hover:shadow-lg hover:shadow-orange-200 
                    transition-all 
                    flex items-center justify-center 
                    gap-1 sm:gap-2 
                    text-sm sm:text-base group"
                >
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                  Book Now
                </motion.a>
              </div>
            </motion.div>

            {/* Delivery Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="grid grid-cols-2 gap-2 sm:gap-3 p-3 sm:p-4 lg:p-5 bg-linear-to-r from-gray-50 to-white rounded-lg sm:rounded-xl lg:rounded-2xl border"
            >
              {[
                { icon: Truck, label: 'Delivery', value: product.delivery, color: 'text-green-600' },
                { icon: Shield, label: 'Warranty', value: product.warranty, color: 'text-blue-600' },
                { icon: RotateCcw, label: 'Returns', value: '7 Days', color: 'text-purple-600' },
                { icon: CreditCard, label: 'Payment', value: 'Card/UPI/COD', color: 'text-amber-600' }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -2 }}
                  className="flex items-center gap-1.5 sm:gap-2 p-2 sm:p-2.5 rounded-lg hover:bg-white transition-all"
                >
                  <div className={`p-1.5 sm:p-2 rounded-lg bg-${item.color.replace('text-', '')}/10`}>
                    <item.icon className={`w-3 h-3 sm:w-4 sm:h-4 ${item.color}`} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] sm:text-xs text-gray-500">{item.label}</p>
                    <p className="font-semibold text-[10px] sm:text-xs truncate">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Limited Time Offer */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mt-4 sm:mt-5 lg:mt-6 p-3 sm:p-4 bg-linear-to-r from-red-500 to-pink-500 rounded-lg sm:rounded-xl text-white flex flex-col xs:flex-row items-start xs:items-center justify-between gap-2 xs:gap-3"
            >
              <div className="flex items-center gap-2 sm:gap-3">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 shrink-0" />
                <div>
                  <p className="font-bold text-xs sm:text-sm lg:text-base">Limited Time Offer</p>
                  <p className="text-[10px] sm:text-xs opacity-90">Free installation</p>
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-red-600 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg font-bold text-xs sm:text-sm w-full xs:w-auto text-center"
              >
                Claim Now
              </motion.button>
            </motion.div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="mb-8 sm:mb-10 lg:mb-12">
          {/* Tab Headers */}
          <div className="border-b overflow-x-auto scrollbar-hide">
            <div className="flex gap-1 sm:gap-2 min-w-max pb-0.5">
              {[
                { id: 'description', label: 'Description', icon: '📝' },
                { id: 'specifications', label: 'Specs', icon: '⚙️' },
                { id: 'reviews', label: `Reviews (${product.reviewList?.length || 0})`, icon: '⭐' }
              ].map((tab) => (
                <motion.button
                  key={tab.id}
                  whileHover={{ y: -1 }}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-3 sm:px-4 lg:px-6 py-2 sm:py-3 font-semibold text-xs sm:text-sm relative rounded-t-lg transition-all whitespace-nowrap ${activeTab === tab.id
                    ? 'text-cyan-600 bg-linear-to-t from-cyan-50 to-white'
                    : 'text-gray-500 hover:text-gray-700'
                    }`}
                >
                  <span className="hidden xs:inline">{tab.icon}</span> {tab.label}
                  {activeTab === tab.id && (
                    <motion.div
                      layoutId="activeTabBar"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-cyan-600 to-blue-600 rounded-t-full"
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="py-4 sm:py-6 lg:py-8">
            <AnimatePresence mode="wait">
              {activeTab === 'description' && (
                <motion.div
                  key="description"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="bg-linear-to-r from-cyan-50 to-blue-50 p-4 sm:p-6 lg:p-8 rounded-lg sm:rounded-xl lg:rounded-2xl">
                    <p className="text-gray-700 text-xs sm:text-sm lg:text-base leading-relaxed mb-4 sm:mb-5 lg:mb-6">{product.longDescription}</p>

                    <h3 className="text-base sm:text-lg lg:text-xl font-bold mb-3 sm:mb-4 flex items-center gap-1.5 sm:gap-2">
                      <Gift className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-600" />
                      What's in the Box
                    </h3>
                    <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
                      {product.included?.map((item, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-center gap-1.5 sm:gap-2 p-2 sm:p-3 bg-white rounded-lg shadow-sm"
                        >
                          <Check className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 shrink-0" />
                          <span className="text-xs sm:text-sm truncate">{item}</span>
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
                  className="grid grid-cols-1 xs:grid-cols-2 gap-2 sm:gap-3 lg:gap-4"
                >
                  {Object.entries(product.specifications || {}).map(([key, value], idx) => (
                    <motion.div
                      key={key}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="group p-3 sm:p-4 bg-linear-to-r from-gray-50 to-white rounded-lg sm:rounded-xl border hover:border-cyan-200 transition-all hover:shadow-md"
                    >
                      <dt className="text-[10px] sm:text-xs text-gray-500 mb-1 group-hover:text-cyan-600 transition-colors">{key}</dt>
                      <dd className="font-bold text-gray-900 text-xs sm:text-sm lg:text-base">{value}</dd>
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
                  className="space-y-4 sm:space-y-5 lg:space-y-6"
                >
                  {/* Rating Summary */}
                  <div className="bg-linear-to-r from-amber-50 to-orange-50 p-4 sm:p-5 lg:p-6 rounded-lg sm:rounded-xl lg:rounded-2xl mb-4 sm:mb-5 lg:mb-6">
                    <div className="flex flex-col xs:flex-row items-start xs:items-center gap-3 sm:gap-4">
                      <div className="text-center">
                        <span className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-amber-600">{product.rating}</span>
                        <span className="text-xs sm:text-sm text-gray-500 block">out of 5</span>
                        <div className="flex gap-0.5 mt-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`w-3 h-3 sm:w-4 sm:h-4 ${i < Math.floor(product.rating) ? 'text-amber-400 fill-current' : 'text-gray-300'}`} />
                          ))}
                        </div>
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-sm sm:text-base">{product.reviewCount} Verified Reviews</p>
                        <p className="text-xs sm:text-sm text-gray-600">95% recommend this product</p>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full xs:w-auto px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 bg-white rounded-lg sm:rounded-xl font-semibold text-xs sm:text-sm shadow-sm hover:shadow-md transition-all text-center"
                      >
                        Write Review
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
                        className="border-b pb-4 sm:pb-5 last:border-b-0 hover:bg-gray-50 p-3 sm:p-4 rounded-lg transition-all"
                      >
                        <div className="flex flex-col xs:flex-row xs:items-center justify-between gap-2 xs:gap-3 mb-2">
                          <div className="flex items-center gap-2 sm:gap-3">
                            <div className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 rounded-full bg-linear-to-r from-cyan-600 to-blue-600 text-white flex items-center justify-center font-bold text-xs sm:text-sm">
                              {review.user[0]}
                            </div>
                            <div>
                              <span className="font-semibold text-xs sm:text-sm block">{review.user}</span>
                              <span className="text-[10px] sm:text-xs text-gray-500">{review.date}</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-0.5 bg-amber-50 px-2 py-1 rounded-full self-start xs:self-auto">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-2.5 h-2.5 sm:w-3 sm:h-3 ${i < review.rating ? 'text-amber-400 fill-current' : 'text-gray-300'
                                  }`}
                              />
                            ))}
                          </div>
                        </div>
                        <p className="text-gray-700 text-xs sm:text-sm ml-8 sm:ml-10">{review.comment}</p>

                        {/* Review Actions */}
                        <div className="flex items-center gap-3 sm:gap-4 mt-2 ml-8 sm:ml-10">
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            className="text-[10px] sm:text-xs text-gray-500 hover:text-cyan-600 flex items-center gap-0.5 sm:gap-1"
                          >
                            <ThumbsUp className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                            Helpful
                          </motion.button>
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            className="text-[10px] sm:text-xs text-gray-500 hover:text-cyan-600"
                          >
                            Report
                          </motion.button>
                        </div>
                      </motion.div>
                    ))
                  ) : (
                    <p className="text-gray-500 text-center py-6 sm:py-8 text-xs sm:text-sm">No reviews yet. Be the first to review!</p>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Related Products */}
        <div>
          <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4 sm:mb-5 lg:mb-6 flex items-center gap-2">
            <span className="w-1 h-5 sm:h-6 lg:h-8 bg-linear-to-b from-cyan-600 to-blue-600 rounded-full"></span>
            You May Also Like
          </h2>
          {/* Note: Related products logic should be handled by parent component */}
          <p className="text-gray-500 text-center py-4">Related products will be displayed here</p>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductDetail;