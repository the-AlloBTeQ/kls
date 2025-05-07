"use client";
import React, { useState, useEffect } from 'react';
import { 
  ShoppingCart, 
  Filter, 
  Search, 
  Plus, 
  Minus, 
  X, 
  ChevronDown, 
  ChevronRight,
  Camera, 
  Lock, 
  Bell, 
  Shield
} from 'lucide-react';

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  salePrice?: number;
  image: string;
  description: string;
  features: string[];
  bestSeller?: boolean;
  new?: boolean;
}

interface CartItem extends Product {
  quantity: number;
}

const StorePage = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedProduct, setExpandedProduct] = useState<string | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Categories definition
  const categories = [
    { id: 'all', name: 'All Products', icon: <Shield className="w-5 h-5" /> },
    { id: 'cameras', name: 'Security Cameras', icon: <Camera className="w-5 h-5" /> },
    { id: 'access', name: 'Access Control', icon: <Lock className="w-5 h-5" /> },
    { id: 'alarms', name: 'Alarm Systems', icon: <Bell className="w-5 h-5" /> },
    { id: 'monitoring', name: 'Monitoring Equipment', icon: <Search className="w-5 h-5" /> }
  ];

  // Fetch products from the database
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        // Replace with your actual API endpoint
        const response = await fetch('/api/products');
        
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (err) {
        setError('Error loading products. Please try again later.');
        setLoading(false);
        console.error('Error fetching products:', err);
        
        // Fallback to dummy data if API fails
        setProducts([
          {
            id: '1',
            name: 'HD Security Camera',
            category: 'cameras',
            price: 1299.99,
            image: '/api/placeholder/400/300',
            description: '1080p HD security camera with night vision and motion detection',
            features: [
              '1080p Full HD Resolution',
              'Night Vision up to 30m',
              'Smart Motion Detection',
              'IP66 Weather Resistant'
            ],
            bestSeller: true
          },
          {
            id: '2',
            name: 'Access Control Panel',
            category: 'access',
            price: 2499.99,
            image: '/api/placeholder/400/300',
            description: 'Advanced access control panel with biometric capabilities',
            features: [
              'Facial Recognition',
              'Fingerprint Scanner',
              'RFID Card Support',
              'Cloud Management'
            ],
            new: true
          }
        ]);
      }
    };

    fetchProducts();
  }, []);

  // Filter products by category and search query
  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const addToCart = (product: Product) => {
    setCart(currentCart => {
      const existingItem = currentCart.find(item => item.id === product.id);
      if (existingItem) {
        return currentCart.map(item =>
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...currentCart, { ...product, quantity: 1 }];
    });
    
    // Optional: Save cart to localStorage for persistence
    saveCartToLocalStorage([...cart, { ...product, quantity: 1 }]);
  };

  const updateQuantity = (productId: string, change: number) => {
    setCart(currentCart => {
      const updatedCart = currentCart.map(item => {
        if (item.id === productId) {
          const newQuantity = Math.max(0, item.quantity + change);
          return newQuantity === 0 
            ? null 
            : { ...item, quantity: newQuantity };
        }
        return item;
      }).filter(Boolean) as CartItem[];
      
      // Save updated cart to localStorage
      saveCartToLocalStorage(updatedCart);
      
      return updatedCart;
    });
  };

  // Save cart to localStorage for persistence
  const saveCartToLocalStorage = (cartItems: CartItem[]) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('kls-cart', JSON.stringify(cartItems));
    }
  };

  // Load cart from localStorage on component mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedCart = localStorage.getItem('kls-cart');
      if (savedCart) {
        try {
          setCart(JSON.parse(savedCart));
        } catch (err) {
          console.error('Error parsing saved cart:', err);
        }
      }
    }
  }, []);

  const cartTotal = cart.reduce((total, item) => {
    const itemPrice = item.salePrice || item.price;
    return total + (itemPrice * item.quantity);
  }, 0);

  const toggleProductDetails = (productId: string) => {
    if (expandedProduct === productId) {
      setExpandedProduct(null);
    } else {
      setExpandedProduct(productId);
    }
  };

  // Handle checkout process
  const handleCheckout = async () => {
    try {
      // Replace with your actual checkout API endpoint
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          items: cart.map(item => ({
            productId: item.id,
            quantity: item.quantity,
            price: item.salePrice || item.price
          })),
          total: cartTotal
        }),
      });
      
      if (!response.ok) {
        throw new Error('Checkout failed');
      }
      
      // Handle successful checkout
      const data = await response.json();
      
      // Clear cart and redirect to confirmation page
      setCart([]);
      localStorage.removeItem('kls-cart');
      window.location.href = `/checkout/confirmation?orderId=${data.orderId}`;
      
    } catch (error) {
      console.error('Checkout error:', error);
      alert('There was an error processing your order. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Store Header */}
      <section className="relative bg-gray-900 py-16">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/90 to-gray-900/90" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0">
              <h1 className="text-4xl font-bold text-white mb-2">Security Equipment Store</h1>
              <p className="text-xl text-gray-300">
                Professional-grade security equipment with expert installation options
              </p>
            </div>
            <button 
              onClick={() => setIsCartOpen(true)}
              className="relative flex items-center space-x-2 bg-white text-gray-900 px-6 py-3 rounded-md hover:bg-gray-100 transition-colors"
            >
              <ShoppingCart className="w-5 h-5" />
              <span className="font-medium">My Cart ({cart.reduce((total, item) => total + item.quantity, 0)})</span>
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                  {cart.length}
                </span>
              )}
            </button>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search Bar */}
        <div className="relative mb-8">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            className="block w-full bg-white border border-gray-300 rounded-md py-3 pl-10 pr-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
            placeholder="Search security products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="w-full md:w-64 bg-white rounded-lg shadow-sm p-6 h-fit">
            <div className="flex items-center space-x-2 mb-6">
              <Filter className="w-5 h-5 text-red-600" />
              <h2 className="text-lg font-semibold">Categories</h2>
            </div>
            <div className="space-y-2">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`w-full flex items-center text-left px-4 py-3 rounded-md transition-colors ${
                    selectedCategory === category.id 
                      ? 'bg-red-600 text-white' 
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <span className="mr-3">{category.icon}</span>
                  {category.name}
                </button>
              ))}
            </div>
            
            <div className="mt-8 pt-8 border-t border-gray-200">
              <h3 className="text-lg font-semibold mb-4">Our Services</h3>
              <div className="space-y-3">
                <a href="/services/installation" className="block text-gray-700 hover:text-red-600">
                  Professional Installation
                </a>
                <a href="/services/maintenance" className="block text-gray-700 hover:text-red-600">
                  Maintenance Plans
                </a>
                <a href="/services/consulting" className="block text-gray-700 hover:text-red-600">
                  Security Consulting
                </a>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            {loading ? (
              // Loading state
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">Loading products...</p>
                <div className="mt-4 flex justify-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600"></div>
                </div>
              </div>
            ) : error ? (
              // Error state
              <div className="text-center py-12 bg-red-50 rounded-lg border border-red-200 p-6">
                <p className="text-red-600 text-lg">{error}</p>
                <button 
                  onClick={() => window.location.reload()}
                  className="mt-4 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
                >
                  Try Again
                </button>
              </div>
            ) : filteredProducts.length === 0 ? (
              // No results state
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
                <button 
                  onClick={() => {setSelectedCategory('all'); setSearchQuery('');}}
                  className="mt-4 text-red-600 hover:text-red-700"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              // Products grid
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map(product => (
                  <div key={product.id} className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100 hover:border-red-200 hover:shadow-md transition-all duration-300">
                    <div className="relative">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-56 object-cover"
                      />
                      {product.bestSeller && (
                        <span className="absolute top-2 left-2 bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded">
                          BEST SELLER
                        </span>
                      )}
                      {product.new && (
                        <span className="absolute top-2 left-2 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded">
                          NEW
                        </span>
                      )}
                      {product.salePrice && (
                        <span className="absolute top-2 right-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
                          SALE
                        </span>
                      )}
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 text-gray-900">{product.name}</h3>
                      <p className="text-gray-600 mb-4">{product.description}</p>
                      
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          {product.salePrice ? (
                            <div className="flex items-center">
                              <span className="text-xl font-bold text-red-600">R{product.salePrice.toFixed(2)}</span>
                              <span className="ml-2 text-sm line-through text-gray-500">R{product.price.toFixed(2)}</span>
                            </div>
                          ) : (
                            <span className="text-xl font-bold text-gray-900">R{product.price.toFixed(2)}</span>
                          )}
                        </div>
                        <button
                          onClick={() => addToCart(product)}
                          className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors"
                        >
                          Add to Cart
                        </button>
                      </div>
                      
                      <button
                        onClick={() => toggleProductDetails(product.id)}
                        className="w-full flex items-center justify-between text-gray-700 py-2 border-t border-gray-100"
                      >
                        <span className="font-medium">Product Details</span>
                        {expandedProduct === product.id ? (
                          <ChevronDown className="h-5 w-5" />
                        ) : (
                          <ChevronRight className="h-5 w-5" />
                        )}
                      </button>
                      
                      {expandedProduct === product.id && (
                        <div className="mt-3 space-y-2">
                          <h4 className="font-medium text-gray-900">Key Features:</h4>
                          <ul className="space-y-1 pl-2">
                            {product.features.map((feature, index) => (
                              <li key={index} className="flex items-start">
                                <ChevronRight className="h-4 w-4 text-red-600 mt-1 mr-1 flex-shrink-0" />
                                <span className="text-gray-600">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="bg-gray-50 py-16 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-red-600 to-red-800 rounded-xl shadow-xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-4">Need Help Choosing the Right Equipment?</h2>
            <p className="mb-6 max-w-3xl mx-auto">
              Our security experts can help you select the perfect security system tailored to your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="/contact" 
                className="px-6 py-3 bg-white text-red-600 font-medium rounded-md hover:bg-gray-100 transition-colors"
              >
                Get Expert Advice
              </a>
              <a 
                href="tel:0795965491" 
                className="px-6 py-3 bg-transparent border-2 border-white text-white font-medium rounded-md hover:bg-white/10 transition-colors"
              >
                Call Us: 079 596 5491
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Shopping Cart Sidebar */}
      {isCartOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-lg">
            <div className="flex flex-col h-full">
              <div className="p-6 border-b">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold">Your Cart</h2>
                  <button 
                    onClick={() => setIsCartOpen(false)}
                    className="text-gray-500 hover:text-gray-700 text-2xl"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto p-6">
                {cart.length === 0 ? (
                  <div className="text-center py-8">
                    <ShoppingCart className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-500">Your cart is empty</p>
                    <button
                      onClick={() => setIsCartOpen(false)}
                      className="mt-4 text-red-600 font-medium hover:text-red-700"
                    >
                      Continue Shopping
                    </button>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {cart.map(item => (
                      <div key={item.id} className="flex space-x-4 border-b pb-4">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-20 h-20 object-cover rounded-md flex-shrink-0"
                        />
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900">{item.name}</h3>
                          <p className="text-gray-600 text-sm mb-2">
                            {item.salePrice ? (
                              <>
                                <span className="font-medium text-red-600">R{item.salePrice.toFixed(2)}</span>
                                <span className="ml-1 line-through text-gray-400 text-xs">R{item.price.toFixed(2)}</span>
                              </>
                            ) : (
                              <span>R{item.price.toFixed(2)}</span>
                            )}
                          </p>
                          <div className="flex items-center mt-2">
                            <button
                              onClick={() => updateQuantity(item.id, -1)}
                              className="p-1 rounded-md bg-gray-100 hover:bg-gray-200"
                            >
                              <Minus className="h-4 w-4" />
                            </button>
                            <span className="mx-3 font-medium">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, 1)}
                              className="p-1 rounded-md bg-gray-100 hover:bg-gray-200"
                            >
                              <Plus className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                        <div className="flex flex-col items-end">
                          <span className="font-bold text-gray-900">
                            R{((item.salePrice || item.price) * item.quantity).toFixed(2)}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, -item.quantity)}
                            className="text-red-600 text-sm mt-4 hover:text-red-700"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="p-6 border-t bg-gray-50">
                {cart.length > 0 && (
                  <>
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between text-gray-600">
                        <span>Subtotal</span>
                        <span>R{cartTotal.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between text-gray-600">
                        <span>Shipping</span>
                        <span>Calculate at checkout</span>
                      </div>
                      <div className="border-t border-gray-200 pt-2 mt-2"></div>
                      <div className="flex justify-between text-lg font-bold">
                        <span>Total</span>
                        <span>R{cartTotal.toFixed(2)}</span>
                      </div>
                    </div>
                    <button
                      onClick={handleCheckout}
                      className="w-full bg-red-600 text-white py-3 rounded-md hover:bg-red-700 transition-colors font-medium"
                    >
                      Proceed to Checkout
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StorePage;