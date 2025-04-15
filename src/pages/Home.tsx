import React from 'react';
import Text from "./Text.js";
import girlImage from "../assets/girl.jpg";
import recipe from "../assets/chef (1).png";
import orders from "../assets/contact-us.png";
import about from "../assets/info.png";
import favorite from "../assets/heart.png";
import list from "../assets/recipe.png";
import home from "../assets/home-page.jpg";
import { IoIosSearch } from "react-icons/io";

const Home = () => {


  return (
    <>
      <div className="min-h-screen " style={{ backgroundColor: "#f5efe9" }}>
          <div className=" w-full grid grid-cols-12">
            <div
              className="row-span-[repeat(50,_minmax(0,_1fr))] bg-white sm:col-span-2 shrink-0 col-span-2"
              id="sidebar"
            >
              <div className="flex items-center sm:hidden h-screen ">
                <div className="items-center flex flex-col gap-10 justify-center bg-white p-2 rounded">
                  <img
                    src={girlImage}
                    alt=""
                    className="w-10 h-10 object-cover border border-black-600 rounded-full"
                  />
                  <h3 className="text-center sm:text-xl text-sm">
                    Chef Madavi
                  </h3>

                  <img src={recipe} alt="" className="px-1 w-9/12" />
                  <img src={favorite} alt="" className="px-1 w-9/12" />
                  <img src={about} alt="" className="px-1 w-9/12" />
                  <img src={orders} alt="" className="px-1 w-9/12" />
                </div>
              </div>

              <div className="hidden sm:flex relative items-center justify-center mt-8">
                <h1 className="font-medium bold text- italic">Chefie</h1>
              </div>

              <div className="hidden sm:flex relative  justify-center h-screen">
                <div className="absolute items-center flex flex-col gap-10 justify-center bg-white p-2 rounded">
                  <img
                    src={girlImage}
                    alt=""
                    className="w-40 h-40 object-cover border border-black-600 rounded-full"
                  />
                  <h3
                    className="text-xl font-semibold"
                    style={{ fontFamily: "Inria Serif" }}
                  >
                    Chef Madavi
                  </h3>
                  <button
                    type="submit"
                    className="bg-white cursor-pointer border border-black-600 rounded w-15/16 text-lg flex flex-row justify-center"
                    
                  >
                    <img src={recipe} alt="" className="px-1 w-8 py-1"></img>
                    Recipes
                  </button>
                  <button
                    type="submit"
                    className="bg-white cursor-pointer border border-black-600 rounded  w-15/16 text-lg flex flex-row justify-center"
                  >
                    <img src={favorite} alt="" className="px-1 w-8 py-1"></img>
                    Favorite
                  </button>
                  <button
                    type="submit"
                    className="bg-white cursor-pointer border border-black-600 rounded w-15/16 text-lg flex flex-row justify-center"
                  >
                    <img src={about} alt="" className="px-1 w-8 py-1"></img>
                    About Us
                  </button>
                  <button
                    type="submit"
                    className="bg-white cursor-pointer border border-black-600 rounded   w-15/16 text-lg flex flex-row justify-center"
                  >
                    <img src={orders} alt="" className="px-1 w-8 py-1"></img>
                    Orders{" "}
                  </button>
                </div>
              </div>
            </div>
            <div
              className="sm:col-span-10 text-start overflow-auto col-span-9"
              id="main bar"
            >
              <div className="relative flex flex-row">
                <div className="flex flex-col gap-2 max-w-sm mx-8 my-7">
                  <label htmlFor="simple-search" className="sr-only">
                    Search
                  </label>
                  <div className="relative sm:w-[250px] w-[140px]">
                    <input
                      type="text"
                      className="bg-white border border-white-300 text-gray-900 text-sm rounded-lg focus:ring-white-500 focus:border-white-500 block w-full pl-4 p-2.5"
                      placeholder="Search Recipes..."
                      id="simple-search"
                    />
                    <div className="absolute inset-y-0 right-2 flex items-center pl-3 pointer-events-auto">
                      <IoIosSearch className="text-gray-500" />
                    </div>
                  </div>
                </div>
                <div className="sm:absolute mx-end sm:end-1/15  sm:my-7 sm:flex hidden">
                  <img src={list} alt="" />
                </div>
              </div>
              <div className="sm:relative sm:flex sm:flex-row sm:my-5">
                <h1 className="text-2xl sm:text-3xl mx-3 sm:mx-10">
                  Learn , Cook Eat Your Food
                </h1>
                <div className="flex flex-row sm:flex gap-10">
                  <div className="sm:absolute sm:my-0 sm:end-2/15 end-2/5 absolute cursor-none">
                    <h1 className="sm:text-2xl font-bold text-orange-700 text-base">
                      {" "}
                      50 +{" "}
                    </h1>
                    <h1 className="text-xs sm:text-sm"> Recipes</h1>
                  </div>
                  <div className="sm:absolute sm:my-0 sm:end-1/15 end-1/5 absolute cursor-none">
                    <h1 className="sm:text-2xl font-bold text-orange-700 text-base">
                      {" "}
                      10 +
                    </h1>
                    <h1 className="text-xs sm:text-sm"> Orders</h1>
                  </div>
                </div>
              </div>
              <div className="sm:mx-20 sm:my-5 mx-3 my-10 p-3 w-[90%] h-[69%] relative rounded-lg">
                <img
                  src={home}
                  alt=""
                  className="absolute inset-0 w-full h-full sm:object-fill object-cover rounded-lg "
                />
                <h1 className="absolute sm:end-1/5 sm:top-1/5 mx-4 sm:text-xl font-bold sm:max-w-xs ">
                  Discover delicious, easy to follow recipes for every craving
                  your next favorite meal starts here!
                </h1>
              </div>
            </div>
          </div>
        </div> 
    </>
  );
};

export default Home;
