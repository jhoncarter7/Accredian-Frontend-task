
import PrimaryButton from './primaryButton';
import { MdKeyboardArrowDown } from "react-icons/md";

const NavigationBar = () => {
    return (
      <div className="container mx-auto flex justify-between items-center py-3 px-4">
     
        <div className="flex items-center justify-center">
          <div className="relative flex gap-x-4 items-center">
            <div className=" px-3 py-1  mb-1">
                <h1 className=" text-blue-500 font-bold text-3xl">accredian</h1>
                <p className=" text-gray-500 font-light text-xs">credentials that matter</p>
            </div>
            <div className="relative group">
           <PrimaryButton text="Courses" icon={<MdKeyboardArrowDown/>} className="bg-blue-500 text-white" />
          
          </div>
          </div>
        </div>
  
     
        <div className="flex items-center space-x-6">
          
          
          <a href="#" className="text-gray-700 hover:text-blue-600">Refer & Earn</a>
          <a href="#" className="text-gray-700 hover:text-blue-600">Resources</a>
          <a href="#" className="text-gray-700 hover:text-blue-600">About Us</a>
          <a href="#" className="text-gray-700 hover:text-blue-600 rounded-md px-4 py-2 bg-[#94A3B833]">Login</a>
          <a href="#" className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md">Try for free</a>
        </div>
      </div>
    );
}

export default NavigationBar;