import React, { useEffect, useState } from "react";
import pizza from "../../assets/1.webp";
import { FaStar } from "react-icons/fa";
import axios from "axios";
const Recipes = () => {
  const [recipeList, setRecipeList] = useState([]);

  const getRecipes = async () => {
    const result = await axios.get("https://dummyjson.com/recipes?limit=50");
    console.log(result.data);
    setRecipeList(result.data.recipes);
  };

  useEffect(() => {
    getRecipes();
  }, []);

  return (
    <>
      <div className="sm:relative">
        <div className=" relative text-xl sm:text-2xl mx-3 sm:mx-10 font-medium">
          Recipe List...
        </div>
        <div className="sm:grid sm:grid-cols-3 sm:gap-4">
          {recipeList.length > 0 &&
            recipeList.map((item: any, index: number) => (
              <>
                <div className="mx-8 sm:my-10 my-2  ">
                  <div className="bg-white sm:max-w-full max-w-full rounded p-2">
                    <div className="flex flex-col justify-center items-center">
                      <img
                        src={item.image}
                        alt=""
                        className="sm:w-2/5 rounded-full sm:my-2 w-2/3"
                      />
                      <h1 className="text-base">Recipe 01</h1>
                      <div className="flex flex-row gap-3 justify-center items-center">
                        <div className="flex flex-row gap-1 justify-center items-center">
                          <FaStar className="text-orange-400" />
                          <FaStar className="text-orange-400" />
                          <FaStar className="text-orange-400" />
                          <FaStar className="text-orange-400" />
                          <FaStar className="text-orange-400" />
                        </div>
                        <div>
                          <h1 className="text-sm">reviews 10</h1>
                        </div>
                      </div>
                      <hr className="border-t-2 border-gray-500 w-full mx-0 my-4" />
                      <div className="flex flex-row gap-10  items-center">
                        <h3 className="text-xs text-gray-500 ">20 minutes</h3>
                        <button className="bg-[#DB9A9A] sm:px-5 sm:py-3 rounded-full text-xs font-semibold  px-3 py-3">
                          Read More..
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ))}
        </div>

        {/*This */}
      </div>
    </>
  );
};

export default Recipes;
