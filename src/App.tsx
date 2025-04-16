/* eslint-disable @typescript-eslint/no-unused-vars */
import "./App.css";
import girlImage from "./assets/girl.jpg";
import recipe from "./assets/chef (1).png";
import orders from "./assets/contact-us.png";
import about from "./assets/info.png";
import favorite from "./assets/heart.png";
import list from "./assets/recipe.png";
import home from "./assets/home-page.jpg";
import { IoIosSearch } from "react-icons/io";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import HomeLayout from "./components/homelayout/HomeLayout";
import NotFound from "./components/NotFound/NotFound";
import Recipes from "./components/Recipes/Recipes";
import Item from "./components/Item/Item";
import AboutUs from "./components/AboutUs/AboutUs";
function App() {
   
   const nav = useNavigate();
  // Function to navigate to the recipes page
  return (
    <>
     
        <div className="min-h-screen " style={{ backgroundColor: "#f5efe9" }}>
          <div className=" w-full grid grid-cols-12">
            <div
              className="row-span-[repeat(50,_minmax(0,_1fr))] bg-white sm:col-span-2 shrink-0 col-span-2 sticky left-0 top-0 h-screen border-r-2 border-gray-300"
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

                  <img src={recipe} alt="" className="px-1 w-9/12"  onClick={()=>{nav("/recipes")}}/>
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
                  onClick={()=>{nav("/recipes")}} // Navigate to the recipes page
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
                   onClick={()=>{nav("/about")}} // Navigate to the about page
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
              className="sm:col-span-10 text-start overflow-auto col-span-9 min-h-screen"
              id="main bar"
            >
              <div className="relative flex flex-row">
                <div className="flex flex-col gap-2 max-w-sm mx-8 my-3">
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
                <div className="sm:absolute mx-end sm:end-1/15  sm:my-3 sm:flex hidden">
                  <img src={list} alt="" />
                </div>
              </div>{" "}
            
              <Routes>
                <Route path="/home" element={<HomeLayout />} />
                <Route path="*" element={<NotFound />} />
                <Route path="/" element={<HomeLayout />} />
                <Route path="/recipes" element={<Recipes />} />
                <Route path="/recipes/:id" element={<Item/>} />
                <Route path="/about" element={<AboutUs/>} />
                </Routes>
           
            </div>
          </div>
        </div>
      
    </>
  );
}

export default App;
