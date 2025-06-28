import React from "react";

const Newsletter = () => {
  return (
    <div className="w-full bg-black">
      <div className="max-w-[1240px] text-white mx-auto py-16 px-4 grid lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h3 className="font-bold md:text-2xl text-xl">
            What should we do for better practice?
          </h3>
          <p className="pb-2">Drop your beautiful comments here</p>
        </div>
        
        {/* input */}
        <div>
      <div className="flex items-center justify-between flex-col sm:flex-row">
          <input
            className="rounded-md py-1 px-2 border-none focus:outline-secondary flex w-full mr-2 my-2"
            type="text"
            placeholder="Write Comment"
          />

          <button className="bg-secondary font-bold py-1 px-6 rounded-md text-black">
            Submit
          </button> 
          
          </div>
          <p className=" text-[14px] hidden md:block">
            What's in your mind? drop <span className="underline text-secondary cursor-pointer">here</span>
          </p>
        </div>

      </div>
    </div>
  );
};

export default Newsletter;
