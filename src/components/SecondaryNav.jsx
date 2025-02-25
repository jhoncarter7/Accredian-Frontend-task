import React from 'react'
const SecondaryNav = () => {
    return (
      <div className="py-2 px-4">
        <div className=" container md:max-w-4xl mx-auto  ">
          <div className="flex justify-center items-center space-x-4 md:space-x-8 bg-[#1A73E81C] md:w-1/2 mx-auto p-2 rounded-4xl">
            <a href="#" className="text-blue-600 font-medium border-b-2 border-blue-600 pb-1 ">Refer</a>
            <a href="#" className="text-[#4B4B4B] hover:text-blue-600">Benefits</a>
            <a href="#" className="text-[#4B4B4B] hover:text-blue-600">FAQs</a>
            <a href="#" className="text-[#4B4B4B] hover:text-blue-600">Support</a>
          </div>
        </div>
      </div>
    );
  };

export default SecondaryNav;