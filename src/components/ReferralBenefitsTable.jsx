import  React, { useState } from 'react';
import { RiArrowRightSLine } from "react-icons/ri";

const ReferralBenefitsTable = () => {
  const [isEnrolled, setIsEnrolled] = useState(true);
  
  const programCategories = [
    { id: 'all', name: 'ALL PROGRAMS', active: true },
    { id: 'product', name: 'PRODUCT MANAGEMENT', active: false },
    { id: 'strategy', name: 'STRATEGY & LEADERSHIP', active: false },
    { id: 'business', name: 'BUSINESS MANAGEMENT', active: false },
    { id: 'fintech', name: 'FINTECH', active: false },
    { id: 'senior', name: 'SENIOR MANAGEMENT', active: false },
    { id: 'data', name: 'DATA SCIENCE', active: false },
    { id: 'digital', name: 'DIGITAL TRANSFORMATION', active: false },
    { id: 'analytics', name: 'BUSINESS ANALYTICS', active: false },
  ];
  
  const programs = [
    {
      id: 1,
      name: 'Professional Certificate Program in Product Management',
      referrerBonus: '₹7,000',
      refereeBonus: '₹9,000',
    },
    {
      id: 2,
      name: 'PG Certificate Program in Strategic Product Management',
      referrerBonus: '₹5,000',
      refereeBonus: '₹11,000',
    },
    {
      id: 3,
      name: 'Executive Program in Data Driven Product Management',
      referrerBonus: '₹10,000',
      refereeBonus: '₹10,000',
    },
    {
      id: 4,
      name: 'Executive Program in Product Management and Digital Transformation',
      referrerBonus: '₹10,000',
      refereeBonus: '₹10,000',
    },
    {
      id: 5,
      name: 'Executive Program in Product Management',
      referrerBonus: '₹10,000',
      refereeBonus: '₹10,000',
    },
    {
      id: 6,
      name: 'Advanced Certification in Product Management',
      referrerBonus: '₹10,000',
      refereeBonus: '₹10,000',
    },
    {
      id: 7,
      name: 'Executive Program in Product Management and Project Management',
      referrerBonus: '₹10,000',
      refereeBonus: '₹10,000',
    },
  ];

  return (
    <div className="max-w-5xl mx-auto p-4">
      <h2 className="text-xl font-semibold text-center">
          What Are The <span className="text-blue-500">Referral Benefits</span>?
        </h2>
      <div className="relative right-0 h-10">
        
        <div className="absolute flex  container  gap-2 justify-end">
          <span className="text-sm text-gray-600  flex ">Enrolled</span>
          <button 
            className={`relative inline-flex h-6 w-11 items-center rounded-full ${isEnrolled ? 'bg-blue-500' : 'bg-gray-300'}`}
            onClick={() => setIsEnrolled(!isEnrolled)}
          >
            <span 
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${isEnrolled ? 'translate-x-6' : 'translate-x-1'}`}
            />
          </button>
        </div>
      </div>

      <div className="flex gap-4">
        {/* Left sidebar with program categories */}
        <div className="w-64 space-y-1 rounded-xl shadow-md">
          {programCategories.map((category) => (
            <div 
              key={category.id}
              className={`p-3 text-sm font-medium flex justify-between items-center cursor-pointer ${
                category.active ? 'bg-blue-500 text-white rounded-t-md' : 'hover:bg-gray-100 text-gray-700'
              }`}
            >
              <span>{category.name}</span>
               
                <span className={`${category.active ? 'text-white ' : ''}`}>
                 <RiArrowRightSLine className='size-4 '/>
                </span>
              
            </div>
          ))}
        </div>

        {/* Right side with table */}
        <div className="flex-1">
          <div className="shadow-md rounded-md overflow-hidden">
            {/* Table header */}
            <div className="grid grid-cols-12 bg-[#1A73E859] text-sm font-medium text-blue-800">
              <div className="col-span-6 p-3 border-r border-[#00000038]">Programs</div>
              <div className="col-span-3 p-3 text-center border-r border-[#00000038]">Referrer Bonus</div>
              <div className="col-span-3 p-3 text-center">Referee Bonus</div>
            </div>
            
            {/* Table body */}
            <div className="bg-blue-50">
              {programs.map((program) => (
                <div key={program.id} className="grid grid-cols-12 text-sm">
                  <div className="col-span-6 p-3 border-r border-[#00000038] flex items-center  space-x-6">
                    <span className="text-blue-500 mr-2 min-w-8">
                      <img src="/cap.png" alt="" className='w-6 h-4' />
                    </span>
                    <span className='text-[#3C4852]'>{program.name}</span>
                  </div>
                  <div className="col-span-3 p-3 text-center border-r border-[#00000038] text-[#3C4852]">{program.referrerBonus}</div>
                  <div className="col-span-3 p-3 text-center text-[#3C4852]">{program.refereeBonus}</div>
                </div>
              ))}
            </div>
          </div>
          
        
          
        </div>
        
      </div>
      <div className="mt-4 flex justify-end">
            <button className="flex items-center gap-1 border rounded-md px-4 py-2 text-sm text-gray-600 hover:bg-gray-50">
              Show More
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
    </div>
  );
};

export default ReferralBenefitsTable;