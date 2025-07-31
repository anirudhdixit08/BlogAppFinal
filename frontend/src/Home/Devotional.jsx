import React, { useState } from "react";
import { useAuth } from "../context/AuthProvider";
import { Link } from "react-router-dom";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

function CategoryFilter() {
  const { blogs } = useAuth();
  const [selectedCategory, setSelectedCategory] = useState("Devotion");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Get unique categories from blogs
  const categories = blogs ? [...new Set(blogs.map(blog => blog.category))] : [];
  
  // Filter blogs based on selected category
  const filteredBlogs = blogs?.filter((blog) => blog.category === selectedCategory);
  
  console.log(filteredBlogs);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setIsDropdownOpen(false);
  };

  return (
    <div>
      <div className="container mx-auto my-12 p-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Category Explorer</h1>
            <p className="text-gray-600">Currently viewing: <span className="font-semibold text-blue-600">{selectedCategory}</span></p>
          </div>
          
          {/* Enhanced Category Dropdown */}
          <div className="relative mt-4 md:mt-0">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Choose Category
            </label>
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full md:w-64 px-4 py-3 bg-white border-2 border-gray-200 rounded-lg shadow-sm hover:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 flex items-center justify-between text-left"
              >
                <span className="font-medium text-gray-900">{selectedCategory}</span>
                <ChevronDownIcon 
                  className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
                    isDropdownOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute z-50 w-full md:w-64 mt-1 bg-white border-2 border-gray-200 rounded-lg shadow-lg overflow-hidden">
                  <div className="max-h-60 overflow-y-auto">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => handleCategorySelect(category)}
                        className={`w-full px-4 py-3 text-left hover:bg-blue-50 transition-colors duration-150 ${
                          selectedCategory === category 
                            ? 'bg-blue-100 text-blue-700 font-semibold' 
                            : 'text-gray-700'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span>{category}</span>
                          {selectedCategory === category && (
                            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                          )}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            {/* Click outside to close dropdown */}
            {isDropdownOpen && (
              <div 
                className="fixed inset-0 z-40" 
                onClick={() => setIsDropdownOpen(false)}
              />
            )}
          </div>
        </div>
        
        <div className="text-center mb-8">
          <p className="text-gray-600 text-lg">
            Explore blogs from different categories and discover amazing content
          </p>
          <div className="mt-2 flex justify-center items-center space-x-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-gray-500">
              {filteredBlogs?.length || 0} blogs found
            </span>
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredBlogs && filteredBlogs.length > 0 ? (
            filteredBlogs.map((blog, index) => (
              <Link
                to={`/blog/${blog._id}`}
                key={index}
                className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 bg-white"
              >
                <img
                  src={blog?.blogImage?.url}
                  alt={blog?.title}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="inline-block px-2 py-1 bg-blue-600/80 backdrop-blur-sm rounded-full text-xs font-medium mb-2">
                    {blog?.category}
                  </div>
                  <h2 className="text-lg font-bold line-clamp-2">{blog?.title}</h2>
                </div>
              </Link>
            ))
          ) : (
            <div className="col-span-full flex flex-col h-64 items-center justify-center text-gray-500">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <p className="text-lg font-medium">
                {selectedCategory === "Devotion" ? "Loading..." : `No blogs found in ${selectedCategory} category`}
              </p>
              <p className="text-sm text-gray-400 mt-1">Try selecting a different category</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CategoryFilter;