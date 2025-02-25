import React, { useState } from 'react'
import PrimaryButton from './PrimaryButton';
import { MdKeyboardArrowDown } from "react-icons/md";
import { HiMenu, HiX } from "react-icons/hi";

const NavigationBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };

    return (
      <div className="lg:container  lg:mx-auto py-3 px-4">
        {/* Desktop and Mobile Navigation */}
        <div className="flex justify-between items-center">
    
          <div className="flex items-center justify-center">
            <div className="px-3 py-1 mb-1">
              <h1 className="text-blue-500 font-bold text-3xl">accredian</h1>
              <p className="text-gray-500 font-light text-xs">credentials that matter</p>
            </div>
          </div>

          {/* Desktop Navigation - hidden on mobile */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="relative group">
              <PrimaryButton text="Courses" icon={<MdKeyboardArrowDown/>} className="bg-blue-500 text-white" />
            </div>
            <a href="#" className="text-gray-700 hover:text-blue-600">Refer & Earn</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">Resources</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">About Us</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 rounded-md px-4 py-2 bg-[#94A3B833]">Login</a>
            <a href="#" className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md">Try for free</a>
          </div>

          {/* Mobile menu button - visible only on mobile */}
          <div className="lg:hidden">
            <button 
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {isMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu - shown when menu is open */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 py-4 bg-white shadow-lg rounded-lg">
            <div className="flex flex-col space-y-4 px-4">
              <div className="py-2">
                <PrimaryButton text="Courses" icon={<MdKeyboardArrowDown/>} className="bg-blue-500 text-white w-full justify-center" />
              </div>
              <a href="#" className="text-gray-700 hover:text-blue-600 py-2">Refer & Earn</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 py-2">Resources</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 py-2">About Us</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 rounded-md px-4 py-2 bg-[#94A3B833] text-center">Login</a>
              <a href="#" className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md text-center">Try for free</a>
            </div>
          </div>
        )}
      </div>
    );
}

export default NavigationBar;