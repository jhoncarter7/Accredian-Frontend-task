import React, { useState } from "react";
import PrimaryButton from "./PrimaryButton";
import ReferNowModal from "./ReferNowModel";

const WorkFlow = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className=" mx-auto my-8  ">
      <div className="bg-blue-50 relative overflow-hidden  mx-auto pb-8">
        <h2 className="text-[#1A202C]  mx-auto text-center font-semibold  py-8">
          How Do I <span className="text-blue-600 ">Refer</span>
        </h2>
        <img src="/work.png" alt="" sizes="" className="hidden md:block h-1/2 w-3/4 mx-auto" />
        <img src="/workmobile.png" alt="" sizes="" className="block md:hidden   mx-auto" />
        <PrimaryButton text="Refer Now" className="bg-blue-500 text-white mx-auto mt-8" onClick={() => setIsModalOpen(true)} />
      </div>
      {isModalOpen && <ReferNowModal setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen}/>}
    </div> 
  );
};

export default WorkFlow;
