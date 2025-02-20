import React from "react";

const Cards = ({ item }) => {
  return (
    <div className="mt-4 flex justify-center w-full overflow-hidden px-2 my-10">
      <div className="card bg-white shadow-lg rounded-lg w-full max-w-xs sm:max-w-sm transition-transform duration-300 hover:scale-105">
        <figure>
          <img
            src={item.image}
            className="h-80 w-80 object-cover rounded-t-lg"
            alt={item.name}
          />
        </figure>
        <div className="card-body p-4 text-center">
          <h2 className="card-title text-lg sm:text-xl font-semibold">
            {item.name}
            <div className="badge bg-pink-500 text-white ml-2 px-2 py-1 rounded-md text-xs">NEW</div>
          </h2>
          <p className="text-gray-600 text-sm sm:text-base mt-2">{item.title}</p>
          <div className="card-actions flex flex-wrap gap-2 justify-center items-center mt-4">
            <span className="line-through text-red-500 text-sm sm:text-lg">Rs.200</span>
            <div className="bg-yellow-500 px-4 py-2 text-white font-semibold rounded-md cursor-pointer shadow-md hover:bg-yellow-600">
              {item.price}
            </div>
            <div className="bg-purple-600 px-4 py-2 text-white font-semibold rounded-md cursor-pointer shadow-md hover:bg-purple-700">
              Buy Now
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
