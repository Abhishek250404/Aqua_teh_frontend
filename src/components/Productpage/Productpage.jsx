import React, { useState } from 'react';
import { motion } from 'framer-motion';
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
  Phone
} from 'lucide-react';

const Productpage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState('grid');
  const [selectedFilters, setSelectedFilters] = useState({
    capacity: [],
    priceRange: [0, 50000],
    brands: [],
    features: []
  });

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
      reviews: 124,
      capacity: '8 LPH',
      features: ['UV + UF', 'Mineral Boost', 'Smart Display'],
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80',
      badge: 'BEST SELLER',
      stock: 'In Stock',
      delivery: 'Free Installation',
      warranty: '5 Years'
    },
    {
      id: 2,
      name: 'Kent Grand Plus RO',
      category: 'domestic',
      price: 15999,
      originalPrice: 18999,
      rating: 4.7,
      reviews: 89,
      capacity: '10 LPH',
      features: ['TDS Controller', 'UV Purification', 'Hot Water'],
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80',
      badge: 'TRENDING',
      stock: 'In Stock',
      delivery: 'Same Day',
      warranty: '7 Years'
    },
    {
      id: 3,
      name: 'Commercial RO 100 LPH',
      category: 'commercial',
      price: 45999,
      originalPrice: 51999,
      rating: 4.8,
      reviews: 45,
      capacity: '100 LPH',
      features: ['Industrial Grade', 'Auto Cleaning', 'Digital Display'],
      image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=800&q=80',
      badge: 'LIMITED OFFER',
      stock: 'In Stock',
      delivery: 'Free Delivery',
      warranty: '3 Years'
    },
    {
      id: 4,
      name: 'Industrial RO Plant 500 LPH',
      category: 'industrial',
      price: 185999,
      originalPrice: 215999,
      rating: 4.9,
      reviews: 23,
      capacity: '500 LPH',
      features: ['Multi-stage', 'Auto Backwash', 'Remote Monitor'],
      image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=800&q=80',
      badge: 'PREMIUM',
      stock: 'Limited Stock',
      delivery: 'Installation Included',
      warranty: '2 Years'
    },
    {
      id: 5,
      name: 'Hospital Grade RO System',
      category: 'hospital',
      price: 78999,
      originalPrice: 89999,
      rating: 4.9,
      reviews: 18,
      capacity: '50 LPH',
      features: ['Medical Grade', 'UV+UF+RO', 'Pure Water'],
      image: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?auto=format&fit=crop&w=800&q=80',
      badge: 'SPECIAL',
      stock: 'In Stock',
      delivery: 'Expert Installation',
      warranty: '5 Years'
    },
    {
      id: 6,
      name: 'School RO System 200 LPH',
      category: 'school',
      price: 68999,
      originalPrice: 75999,
      rating: 4.6,
      reviews: 32,
      capacity: '200 LPH',
      features: ['Child Safe', 'Energy Saving', 'Easy Maintenance'],
      image: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=800&q=80',
      badge: 'POPULAR',
      stock: 'In Stock',
      delivery: 'Free Setup',
      warranty: '4 Years'
    },
    {
      id: 7,
      name: 'Hotel RO Plant 300 LPH',
      category: 'hotel',
      price: 99999,
      originalPrice: 119999,
      rating: 4.7,
      reviews: 28,
      capacity: '300 LPH',
      features: ['Commercial Grade', 'Low Maintenance', 'High Output'],
      image: 'https://images.unsplash.com/photo-1589820296156-2454bb8a6ad1?auto=format&fit=crop&w=800&q=80',
      badge: 'RECOMMENDED',
      stock: 'In Stock',
      delivery: 'Professional Install',
      warranty: '3 Years'
    },
    {
      id: 8,
      name: 'Compact Domestic RO 6L',
      category: 'domestic',
      price: 12999,
      originalPrice: 14999,
      rating: 4.3,
      reviews: 156,
      capacity: '6 LPH',
      features: ['Space Saving', 'Wall Mount', 'Quick Install'],
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80',
      badge: 'ECONOMY',
      stock: 'In Stock',
      delivery: 'Free Installation',
      warranty: '3 Years'
    },
    {
      id: 9,
      name: 'Office RO System 25 LPH',
      category: 'commercial',
      price: 32999,
      originalPrice: 36999,
      rating: 4.5,
      reviews: 41,
      capacity: '25 LPH',
      features: ['Office Use', 'Compact Design', 'Easy Service'],
      image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=800&q=80',
      badge: 'OFFICE PICK',
      stock: 'In Stock',
      delivery: 'Quick Setup',
      warranty: '4 Years'
    },
    {
      id: 10,
      name: 'Pureit Advanced RO',
      category: 'domestic',
      price: 16999,
      originalPrice: 19999,
      rating: 4.4,
      reviews: 92,
      capacity: '8 LPH',
      features: ['Germ Kill', 'Mineral Guard', 'Save Water'],
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80',
      badge: 'NEW',
      stock: 'In Stock',
      delivery: 'Free Demo',
      warranty: '5 Years'
    },
    {
      id: 11,
      name: 'Restaurant RO 150 LPH',
      category: 'hotel',
      price: 75999,
      originalPrice: 84999,
      rating: 4.8,
      reviews: 36,
      capacity: '150 LPH',
      features: ['Food Grade', 'High Capacity', 'Easy Clean'],
      image: 'https://images.unsplash.com/photo-1589820296156-2454bb8a6ad1?auto=format&fit=crop&w=800&q=80',
      badge: 'BEST VALUE',
      stock: 'In Stock',
      delivery: 'Expert Install',
      warranty: '3 Years'
    },
    {
      id: 12,
      name: 'College RO Plant 400 LPH',
      category: 'school',
      price: 119999,
      originalPrice: 139999,
      rating: 4.7,
      reviews: 19,
      capacity: '400 LPH',
      features: ['Heavy Duty', 'Auto Operation', 'Low Cost'],
      image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=800&q=80',
      badge: 'BULK OFFER',
      stock: 'Available Soon',
      delivery: 'Installation Team',
      warranty: '2 Years'
    },
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

  return (
    <div className="min-h-screen bg-linear-to-b from-cyan-50 to-white">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">RO Systems Store</h1>
              <p className="text-sm text-gray-600">Premium Water Purification Solutions</p>
            </div>

            <div className="flex items-center gap-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search RO systems..."
                  className="pl-10 pr-4 py-2 border rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>

              <button className="relative p-2 hover:bg-gray-100 rounded-lg">
                <ShoppingCart className="w-6 h-6 text-gray-700" />
                <span className="absolute -top-1 -right-1 bg-cyan-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  3
                </span>
              </button>

              <button className="flex items-center gap-2 bg-linear-to-r from-cyan-600 to-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                <Phone className="w-5 h-5" />
                Call Expert
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar Filters */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                  <Filter className="w-5 h-5" />
                  Filters
                </h2>
                <button
                  onClick={clearFilters}
                  className="text-sm text-cyan-600 hover:text-cyan-700"
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
                      onClick={() => setSelectedCategory(category.id)}
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
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Top Bar */}
            <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">
                    {selectedCategory === 'all' ? 'All RO Systems' :
                      categories.find(c => c.id === selectedCategory)?.name}
                  </h1>
                  <p className="text-gray-600">
                    Showing {filteredProducts.length} of {products.length} products
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  {/* View Mode */}
                  <div className="flex items-center gap-2 bg-gray-100 p-1 rounded-lg">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 rounded-md ${viewMode === 'grid' ? 'bg-white shadow' : 'hover:bg-gray-200'
                        }`}
                    >
                      <Grid className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 rounded-md ${viewMode === 'list' ? 'bg-white shadow' : 'hover:bg-gray-200'
                        }`}
                    >
                      <List className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Sort */}
                  <div className="relative">
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="appearance-none bg-white border rounded-lg pl-4 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    >
                      {sortOptions.map(option => (
                        <option key={option.value} value={option.value}>
                          Sort by: {option.label}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Active Filters */}
              {(selectedFilters.capacity.length > 0 || selectedFilters.brands.length > 0 ||
                selectedFilters.features.length > 0 || selectedCategory !== 'all') && (
                  <div className="mt-6 pt-6 border-t">
                    <div className="flex flex-wrap gap-2">
                      {selectedCategory !== 'all' && (
                        <span className="inline-flex items-center gap-2 bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full text-sm">
                          {categories.find(c => c.id === selectedCategory)?.name}
                          <button onClick={() => setSelectedCategory('all')}>
                            <X className="w-4 h-4" />
                          </button>
                        </span>
                      )}
                      {selectedFilters.capacity.map(cap => (
                        <span key={cap} className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                          {filters.capacity.find(c => c.value === cap)?.label}
                          <button onClick={() => handleFilterToggle('capacity', cap)}>
                            <X className="w-4 h-4" />
                          </button>
                        </span>
                      ))}
                      {selectedFilters.brands.map(brand => (
                        <span key={brand} className="inline-flex items-center gap-2 bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                          {filters.brands.find(b => b.value === brand)?.label}
                          <button onClick={() => handleFilterToggle('brands', brand)}>
                            <X className="w-4 h-4" />
                          </button>
                        </span>
                      ))}
                      {selectedFilters.features.map(feature => (
                        <span key={feature} className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                          {filters.features.find(f => f.value === feature)?.label}
                          <button onClick={() => handleFilterToggle('features', feature)}>
                            <X className="w-4 h-4" />
                          </button>
                        </span>
                      ))}
                    </div>
                  </div>
                )}
            </div>

            {/* Products Grid */}
            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sortedProducts.map(product => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100"
                  >
                    {/* Product Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      {/* Badge */}
                      {product.badge && (
                        <div className="absolute top-4 left-4">
                          <span className="bg-linear-to-r from-cyan-600 to-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                            {product.badge}
                          </span>
                        </div>
                      )}
                      {/* Wishlist Button */}
                      <button className="absolute top-4 right-4 p-2 bg-white/90 rounded-full hover:bg-white">
                        <Heart className="w-5 h-5 text-gray-600 hover:text-red-500" />
                      </button>
                      {/* Quick View */}
                      <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/60 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button className="w-full bg-white text-cyan-600 py-2 rounded-lg font-semibold hover:bg-gray-100">
                          Quick View
                        </button>
                      </div>
                    </div>

                    {/* Product Info */}
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="font-bold text-gray-900 group-hover:text-cyan-600 transition-colors">
                            {product.name}
                          </h3>
                          <p className="text-sm text-gray-600 mt-1">{product.capacity}</p>
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-amber-400 fill-current" />
                          <span className="font-semibold">{product.rating}</span>
                          <span className="text-gray-500 text-sm">({product.reviews})</span>
                        </div>
                      </div>

                      {/* Features */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {product.features.slice(0, 2).map((feature, idx) => (
                          <span key={idx} className="text-xs bg-cyan-50 text-cyan-700 px-2 py-1 rounded">
                            {feature}
                          </span>
                        ))}
                      </div>

                      {/* Price */}
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-2xl font-bold text-gray-900">₹{product.price.toLocaleString()}</span>
                        {product.originalPrice && (
                          <span className="text-gray-500 line-through">₹{product.originalPrice.toLocaleString()}</span>
                        )}
                        {product.originalPrice && (
                          <span className="text-green-600 font-semibold text-sm">
                            {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                          </span>
                        )}
                      </div>

                      {/* Delivery Info */}
                      <div className="flex items-center justify-between text-sm text-gray-600 mb-6">
                        <div className="flex items-center gap-2">
                          <Truck className="w-4 h-4 text-green-500" />
                          <span>{product.delivery}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Shield className="w-4 h-4 text-blue-500" />
                          <span>{product.warranty}</span>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex gap-3">
                        <button className="flex-1 bg-linear-to-r from-cyan-600 to-blue-600 text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                          <ShoppingCart className="w-5 h-5" />
                          Add to Cart
                        </button>
                        <button className="px-4 border border-cyan-600 text-cyan-600 rounded-lg font-semibold hover:bg-cyan-50 transition-colors">
                          Details
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              /* List View */
              <div className="space-y-6">
                {sortedProducts.map(product => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                  >
                    <div className="md:flex">
                      {/* Image */}
                      <div className="md:w-1/3 relative">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-64 md:h-full object-cover"
                        />
                        {product.badge && (
                          <div className="absolute top-4 left-4">
                            <span className="bg-linear-to-r from-cyan-600 to-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                              {product.badge}
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Details */}
                      <div className="md:w-2/3 p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                            <p className="text-gray-600 mb-3">{product.capacity}</p>
                            <div className="flex items-center gap-4 mb-4">
                              <div className="flex items-center gap-1">
                                <Star className="w-4 h-4 text-amber-400 fill-current" />
                                <span className="font-semibold">{product.rating}</span>
                                <span className="text-gray-500 text-sm">({product.reviews} reviews)</span>
                              </div>
                              <span className="text-green-600 font-semibold">{product.stock}</span>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-3xl font-bold text-gray-900">₹{product.price.toLocaleString()}</div>
                            {product.originalPrice && (
                              <div className="text-gray-500 line-through">₹{product.originalPrice.toLocaleString()}</div>
                            )}
                          </div>
                        </div>

                        {/* Features */}
                        <div className="flex flex-wrap gap-2 mb-6">
                          {product.features.map((feature, idx) => (
                            <span key={idx} className="inline-flex items-center gap-1 bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                              <Check className="w-3 h-3 text-green-500" />
                              {feature}
                            </span>
                          ))}
                        </div>

                        {/* Actions */}
                        <div className="flex gap-4">
                          <button className="flex-1 bg-linear-to-r from-cyan-600 to-blue-600 text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                            <ShoppingCart className="w-5 h-5" />
                            Add to Cart
                          </button>
                          <button className="px-6 border border-cyan-600 text-cyan-600 rounded-lg font-semibold hover:bg-cyan-50 transition-colors">
                            View Details
                          </button>
                          <button className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50">
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
              <div className="text-center py-16">
                <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
                  <Search className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">No products found</h3>
                <p className="text-gray-600 mb-6">Try adjusting your filters or search terms</p>
                <button
                  onClick={clearFilters}
                  className="bg-linear-to-r from-cyan-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                >
                  Clear All Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productpage;