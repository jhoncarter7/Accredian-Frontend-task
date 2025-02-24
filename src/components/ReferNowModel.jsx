import React, { useState } from 'react';

const ReferNowModal = ({setIsModalOpen, isModalOpen}) => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    referrerName: '',
    referrerEmail: '',
    recipientName: '',
    recipientEmail: '',
  });


  const closeModal = () => setIsModalOpen(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://accredian-backend-task-4ezl.onrender.com/api/referrals', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Failed to submit referral');
      }

      const data = await response.json();
      console.log('Referral submitted successfully:', data);
      
      // Reset form and close modal
      setFormData({
        referrerName: '',
        referrerEmail: '',
        recipientName: '',
        recipientEmail: '',
      });
      closeModal();
      
      // You might want to show a success message to the user
      alert('Referral submitted successfully!');
    } catch (error) {
      console.error('Error submitting referral:', error);
      alert('Failed to submit referral. Please try again.');
    }
  };

  return (
    <div>
     
      

    
      {isModalOpen && (
        <div className="fixed inset-0 backdrop-blur-sm  bg-transparent flex items-center justify-center z-50 p-4">
       
          <div className="bg-white rounded-lg shadow-2xl w-full max-w-md overflow-hidden max-h-[90vh] flex flex-col">
         
            <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-6 py-4 flex justify-between items-center">
              <h3 className="text-xl font-semibold">Refer a Friend</h3>
              <button onClick={closeModal} className="text-white hover:text-blue-200 transition duration-200">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>

            {/* Modal Body - Scrollable */}
            <div className="px-6 py-5 overflow-y-auto">
              <form onSubmit={handleSubmit}>
                <div className="space-y-5">
                  {/* Your Information Section */}
                  <div className="border-b border-gray-200 pb-4">
                    <h4 className="text-lg font-medium text-gray-800 mb-3">Your Information</h4>
                    
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Your Name*</label>
                      <input
                        type="text"
                        name="referrerName"
                        value={formData.referrerName}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                        placeholder="Enter your name"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Your Email*</label>
                      <input
                        type="email"
                        name="referrerEmail"
                        value={formData.referrerEmail}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>

               
                  <div className="pt-2">
                    <h4 className="text-lg font-medium text-gray-800 mb-3">Friend's Information</h4>
                    
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Friend's Name*</label>
                      <input
                        type="text"
                        name="recipientName"
                        value={formData.recipientName}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                        placeholder="Enter friend's name"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Friend's Email*</label>
                      <input
                        type="email"
                        name="recipientEmail"
                        value={formData.recipientEmail}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                        placeholder="Enter friend's email"
                        required
                      />
                    </div>
                  </div>
                </div>

             
                <div className="mt-6 bg-gradient-to-r from-blue-50 to-indigo-50 p-5 rounded-lg border border-blue-100">
                  <h4 className="text-base font-semibold text-blue-800 mb-3 flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"></path>
                    </svg>
                    Referral Benefits
                  </h4>
                  
                  <div className="flex justify-between">
                    <div className="text-center bg-white p-3 rounded-lg shadow-sm border border-blue-100 w-48">
                      <p className="text-gray-600 text-sm mb-1">You receive</p>
                      <p className="text-lg font-bold text-blue-700">₹10,000</p>
                      <p className="text-xs text-gray-500 mt-1">Cashback after enrollment</p>
                    </div>
                    
                    <div className="text-center bg-white p-3 rounded-lg shadow-sm border border-blue-100 w-48">
                      <p className="text-gray-600 text-sm mb-1">Your friend gets</p>
                      <p className="text-lg font-bold text-blue-700">₹10,000</p>
                      <p className="text-xs text-gray-500 mt-1">Discount on course fee</p>
                    </div>
                  </div>
                </div>

               
                <div className="mt-6 flex justify-end gap-3 pb-2">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="px-5 py-2 border border-gray-300 rounded-md text-gray-700 font-medium hover:bg-gray-50 transition duration-200"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition duration-200 shadow-sm"
                  >
                    Send Invitation
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReferNowModal;