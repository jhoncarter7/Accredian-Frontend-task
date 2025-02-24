import React from 'react'
const AnnouncementBar = () => {
    return (
      <div className="w-full bg-blue-100 border-b border-blue-300 py-2 px-4">
        <div className="container mx-auto flex justify-center gapx- items-center">
          <p className="text-sm text-gray-700 px-4">Navigate your ideal career path with tailored expert advice</p>
          <a href="#" className="text-sm font-medium text-blue-600 hover:text-blue-800">Contact Expert</a>
        </div>
      </div>
    );
  };

export default AnnouncementBar;