import React from "react";

const Banner = () => {
  return (
    <>
      <div className="max-w-screen-2xl mx-auto  container md:px-20 px-4  flex flex-col md:flex-row ">
        <div className=" w-full order-2 mb-5 md:order-1 md:w-1/2 md:mt-32 mt-12">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold ">
              Hello, welcome here to learn something{" "}
              <span className="text-pink-500">new everyday</span>
            </h1>
            <p className="text-xl">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex
              eveniet praesentium minus odio voluptatum qui beatae. Nam
              asperiores neque incidunt quaerat rem, quo pariatur libero!
            </p>
            
          <form className="flex w-full  mt-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-tl-md rounded-bl-md  bg-white border border-pink-500 focus:ring-0 focus:outline-none"
            />
            <div>
              <button className="bg-pink-500 px-4 py-3 rounded-br-md rounded-tr-md cursor-pointer text-white">Join</button>
            </div>
          </form>
          </div>

        </div>
        <div className="order-1 md:order-2 w-full md:w-1/2 md:mt-32 mt-15  ">
        <img src="/banner.1.png" alt="" className="ml-auto" />
        </div>
      </div>
    </>
  );
};

export default Banner;
