"use client";
import React, { useState, useEffect } from 'react';
import { X, Plus, Loader2 } from 'lucide-react';

interface ProductFormProps {
  productId?: string;
  onSubmitSuccess?: (product: any) => void;
  onCancel?: () => void;
}

interface ProductData {
  id: string;
  name: string;
  category: string;
  price: number;
  salePrice?: number;
  description: string;
  features: string[];
  stock?: number;
  bestSeller?: boolean;
  new?: boolean;
  image: string;
}

const ProductForm: React.FC<ProductFormProps> = ({ 
  productId, 
  onSubmitSuccess, 
  onCancel
}) => {
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const [formData, setFormData] = useState<ProductData>({
    id: '',
    name: '',
    category: 'cameras', // Default category
    price: 0,
    salePrice: undefined,
    description: '',
    features: [''],
    stock: 0,
    bestSeller: false,
    new: false,
    image: '/api/placeholder/400/300'
  });

  // Fetch existing product data if editing
  useEffect(() => {
    if (productId) {
      const fetchProduct = async () => {
        try {
          setLoading(true);
          const response = await fetch(`/api/products/${productId}`);
          
          if (!response.ok) {
            throw new Error('Failed to fetch product');
          }
          
          const product = await response.json();
          setFormData(product);
        } catch (err) {
          setError('Error loading product data');
          console.error(err);
        } finally {
          setLoading(false);
        }
      };
      
      fetchProduct();
    }
  }, [productId]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    let parsedValue: string | number | boolean = value;
    
    if (type === 'number') {
      parsedValue = value === '' ? 0 : parseFloat(value);
    } else if (type === 'checkbox') {
      parsedValue = (e.target as HTMLInputElement).checked;
    }
    
    setFormData({
      ...formData,
      [name]: parsedValue
    });
  };

  const handleFeatureChange = (index: number, value: string) => {
    const updatedFeatures = [...formData.features];
    updatedFeatures[index] = value;
    
    setFormData({
      ...formData,
      features: updatedFeatures
    });
  };

  const addFeature = () => {
    setFormData({
      ...formData,
      features: [...formData.features, '']
    });
  };

  const removeFeature = (index: number) => {
    const updatedFeatures = formData.features.filter((_, i) => i !== index);
    
    setFormData({
      ...formData,
      features: updatedFeatures
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      setSubmitting(true);
      setError(null);
      
      // Basic validation
      if (!formData.name.trim()) {
        throw new Error('Product name is required');
      }
      
      if (formData.price <= 0) {
        throw new Error('Price must be greater than zero');
      }
      
      // If no ID provided (new product), generate one
      const finalData = {
        ...formData,
        id: formData.id || `prod-${Date.now()}`,
        features: formData.features.filter(f => f.trim() !== '')
      };
      
      // Determine if this is a create or update operation
      const url = productId 
        ? `/api/products/${productId}`
        : '/api/products';
      
      const method = productId ? 'PUT' : 'POST';
      
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(finalData)
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to save product');
      }
      
      const result = await response.json();
      
      if (onSubmitSuccess) {
        onSubmitSuccess(finalData);
      }
      
    } catch (err: any) {
      setError(err.message || 'An error occurred while saving the product');
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <Loader2 className="w-8 h-8 text-red-600 animate-spin" />
        <span className="ml-2">Loading product data...</span>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-6">
        {productId ? 'Edit Product' : 'Add New Product'}
      </h2>
      
      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-600 rounded-md">
          {error}
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div className="space-y-6">
          {/* Basic Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Product Name*
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Category*
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              >
                <option value="cameras">Security Cameras</option>
                <option value="access">Access Control</option>
                <option value="alarms">Alarm Systems</option>
                <option value="monitoring">Monitoring Equipment</option>
              </select>
            </div>
          </div>
          
          {/* Price Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Regular Price (R)*
              </label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
                min="0"
                step="0.01"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Sale Price (R) (Optional)
              </label>
              <input
                type="number"
                name="salePrice"
                value={formData.salePrice || ''}
                onChange={handleInputChange}
                min="0"
                step="0.01"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
          </div>
          
          {/* Stock and Status */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Stock Quantity
              </label>
              <input
                type="number"
                name="stock"
                value={formData.stock || 0}
                onChange={handleInputChange}
                min="0"
                step="1"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
            
            <div className="flex items-center space-x-2 pt-6">
              <input
                type="checkbox"
                id="bestSeller"
                name="bestSeller"
                checked={formData.bestSeller || false}
                onChange={handleInputChange}
                className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
              />
              <label htmlFor="bestSeller" className="text-sm font-medium text-gray-700">
                Best Seller
              </label>
            </div>
            
            <div className="flex items-center space-x-2 pt-6">
              <input
                type="checkbox"
                id="new"
                name="new"
                checked={formData.new || false}
                onChange={handleInputChange}
                className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
              />
              <label htmlFor="new" className="text-sm font-medium text-gray-700">
                New Product
              </label>
            </div>
          </div>
          
          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Product Description*
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>
          
          {/* Image URL */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Image URL*
            </label>
            <input
              type="text"
              name="image"
              value={formData.image}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>
          
          {/* Features */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="block text-sm font-medium text-gray-700">
                Product Features
              </label>
              <button
                type="button"
                onClick={addFeature}
                className="flex items-center text-sm text-red-600 hover:text-red-700"
              >
                <Plus className="w-4 h-4 mr-1" />
                Add Feature
              </button>
            </div>
            
            <div className="space-y-2">
              {formData.features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <input
                    type="text"
                    value={feature}
                    onChange={(e) => handleFeatureChange(index, e.target.value)}
                    placeholder="Enter product feature"
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                  <button
                    type="button"
                    onClick={() => removeFeature(index)}
                    className="p-2 text-gray-400 hover:text-red-600"
                    disabled={formData.features.length === 1}
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
          
          {/* Form Actions */}
          <div className="flex justify-end space-x-3 pt-4">
            {onCancel && (
              <button
                type="button"
                onClick={onCancel}
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                disabled={submitting}
              >
                Cancel
              </button>
            )}
            
            <button
              type="submit"
              className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 flex items-center"
              disabled={submitting}
            >
              {submitting && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
              {submitting ? 'Saving...' : 'Save Product'}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;