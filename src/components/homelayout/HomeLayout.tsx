import React from "react";

import home from "../../assets/home-page.jpg";
const HomeLayout = () => {
  return (
    <>
          <div className="sm:relative sm:flex sm:flex-row sm:my-5">
                <h1 className="text-2xl sm:text-3xl mx-3 sm:mx-10">
                  Learn , Cook Eat Your Food
                </h1>
                <div className="flex flex-row sm:flex gap-10">
                  <div className="sm:absolute sm:my-0 sm:end-2/15 end-2/5 absolute cursor-none">
                    <h1 className="lg:text-2xl font-bold text-orange-700 text-base">
                      {" "}
                      50 +{" "}
                    </h1>
                    <h1 className="text-xs lg:text-sm"> Recipes</h1>
                  </div>
                  <div className="sm:absolute sm:my-0 sm:end-1/15 end-1/5 absolute cursor-none">
                    <h1 className="lg:text-2xl font-bold text-orange-700 text-base">
                      {" "}
                      10 +
                    </h1>
                    <h1 className="text-xs lg:text-sm"> Orders</h1>
                  </div>
                </div>
              </div>
              <div className="sm:mx-20 sm:my-5 mx-3 my-10 p-3 w-[90%] h-[73%] relative rounded-lg">
                <img
                  src={home}
                  alt=""
                  className="absolute inset-0 w-full h-full sm:object-fit object-cover rounded-lg opacity-75"
                />
                <h1 className="absolute sm:end-1/5 sm:top-1/5 mx-4 sm:text-xl font-bold sm:max-w-xs ">
                  Discover delicious, easy to follow recipes for every craving
                  your next favorite meal starts here!
                </h1>
              </div>
    </>
  )
}

export default HomeLayout