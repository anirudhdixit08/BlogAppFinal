import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaHeart } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-100 text-gray-800 border-t">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="text-center md:text-start">
              <div className="text-2xl font-bold mb-4">
                Blogify<span className="text-blue-500">Pro</span>
                <div className="text-xs text-gray-500 font-normal mt-1">Where Stories Come Alive</div>
              </div>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Blogify is your interactive platform to share stories, ideas, and inspiration. Join a vibrant community of creators and readers.
              </p>
              <div className="flex space-x-4 justify-center md:justify-start">
                <a href="#" className="text-gray-500 hover:text-blue-500 transition-colors duration-300">
                  <FaTwitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-500 hover:text-blue-500 transition-colors duration-300">
                  <FaInstagram className="h-5 w-5" />
                </a>
                <a href="https://www.linkedin.com/in/anirudh-dixit-49750328a/" className="text-gray-500 hover:text-blue-500 transition-colors duration-300">
                  <FaLinkedin className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-500 hover:text-blue-500 transition-colors duration-300">
                  <BsYoutube className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Blog Categories */}
            <div className="text-center md:text-start">
              <h3 className="text-lg font-semibold mb-4 text-gray-800">Blog Categories</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/blogs" className="text-gray-600 hover:text-blue-500 transition-colors duration-300">
                    Technology
                  </Link>
                </li>
                <li>
                  <Link to="/blogs" className="text-gray-600 hover:text-blue-500 transition-colors duration-300">
                    Lifestyle
                  </Link>
                </li>
                <li>
                  <Link to="/blogs" className="text-gray-600 hover:text-blue-500 transition-colors duration-300">
                    Business
                  </Link>
                </li>
                <li>
                  <Link to="/blogs" className="text-gray-600 hover:text-blue-500 transition-colors duration-300">
                    Health & Wellness
                  </Link>
                </li>
                <li>
                  <Link to="/blogs" className="text-gray-600 hover:text-blue-500 transition-colors duration-300">
                    Travel
                  </Link>
                </li>
                <li>
                  <Link to="/blogs" className="text-gray-600 hover:text-blue-500 transition-colors duration-300">
                    Education
                  </Link>
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div className="text-center md:text-start">
              <h3 className="text-lg font-semibold mb-4 text-gray-800">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-gray-600 hover:text-blue-500 transition-colors duration-300">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/blogs" className="text-gray-600 hover:text-blue-500 transition-colors duration-300">
                    All Blogs
                  </Link>
                </li>
                <li>
                  <Link to="/creators" className="text-gray-600 hover:text-blue-500 transition-colors duration-300">
                    Creators
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-gray-600 hover:text-blue-500 transition-colors duration-300">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-600 hover:text-blue-500 transition-colors duration-300">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard" className="text-gray-600 hover:text-blue-500 transition-colors duration-300">
                    Dashboard
                  </Link>
                </li>
              </ul>
            </div>

            {/* Support & Legal */}
            <div className="text-center md:text-start">
              <h3 className="text-lg font-semibold mb-4 text-gray-800">Support & Legal</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors duration-300">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors duration-300">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors duration-300">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors duration-300">
                    Cookie Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors duration-300">
                    Report Issue
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors duration-300">
                    Feedback
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-600 text-sm mb-4 md:mb-0">
                <p>&copy; 2024 Blogify. All rights reserved.</p>
              </div>
              <div className="text-gray-600 text-sm flex items-center">
                <span>Made with</span>
                <FaHeart className="h-4 w-4 mx-1 text-red-500" />
                <span>by Blogify Team</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;