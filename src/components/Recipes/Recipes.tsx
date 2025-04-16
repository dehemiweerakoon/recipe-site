/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import pizza from "../../assets/1.webp";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { CiHeart } from "react-icons/ci";

interface Recipe {
  id: number;
  name: string;
  ingredients: string[];
  instructions: string[];
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  servings: number;
  difficulty: "Easy" | "Medium" | "Hard"; // Adjust based on expected values
  cuisine: string;
  caloriesPerServing: number;
  tags: string[];
  userId: number;
  image: string;
  rating: number;
  reviewCount: number;
  mealType: string[];
}
interface favType {
  itemName: string;
  cuisine: string;
  id: number;
}
const Recipes = () => {
  const nav = useNavigate();
  const [idlist, setIdlist] = useState<number[]>([]);

  function getSars(rating: number) {
    const fullStar = rating % 1 >= 0.9 ? Math.ceil(rating) : Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.25 && rating % 1 <= 0.75;
    const emptyStar = 5 - fullStar - (hasHalfStar ? 1 : 0);
    return { fullStar, hasHalfStar, emptyStar };
  }

  const [recipeList, setRecipeList] = useState<Recipe[]>([]);

  const getRecipes = async () => {
    const result = await axios.get("https://dummyjson.com/recipes?limit=50");
    console.log(result.data);
    setRecipeList(result.data.recipes);
  };
  const addFav = (item: favType) => {
    const current = sessionStorage.getItem("fav");
    let favs: favType[] = [];
    const fav = {
      itemName: item.itemName,
      cuisine: item.cuisine,
      id: item.id
    };
    if (current) {
      try {
        const parsed = JSON.parse(current);
        if (Array.isArray(parsed)) {
          favs = parsed;
          parsed.find((fav: favType) => {
            if (fav.itemName == item.itemName) {
              return true;
            }
            return false;
          });
        }
      } catch (err) {
        //
        console.error("Error parsing existing favorites");
      }
    }
    favs.push(fav);
    sessionStorage.setItem("fav", JSON.stringify(favs));
    changeList();
  };
const changeList=()=>{
  const favString = sessionStorage.getItem("fav");
  if (favString) {
    try {
      const parsedFav: favType[] = JSON.parse(favString);
      setIdlist(parsedFav.map((item) => item.id));
    } catch (err) {
      console.error("Failed to parse favorites from sessionStorage:", err);
      setIdlist([]);
    }
  }
}

  useEffect(() => {
    getRecipes();
  }, []);

  useEffect(()=>{
    changeList();
  },[recipeList])

  return (
    <>
      <div className="sm:relative">
        <div className=" relative text-xl sm:text-2xl mx-3 sm:mx-10 font-medium mb-2">
          Recipe List...
        </div>
        <div className="lg:grid lg:grid-cols-3 lg:gap-4">
          {recipeList.length > 0 &&
            recipeList.map((item: any, index: number) => {
              const { fullStar, hasHalfStar, emptyStar } = getSars(item.rating);
              return (
                <>
                  <div className="mx-8 sm:my-3 my-2  " key={index}>
                    <div className="bg-white sm:max-w-full max-w-full rounded p-2">
                      <div className="relative flex flex-col justify-center items-center">
                        <img
                          src={item.image}
                          alt=""
                          className="sm:w-2/5 rounded-full sm:my-2 w-2/3"
                        />
                        <CiHeart
                          className="absolute top-0 right-0 text-2xl"
                          style={{ color: idlist.includes(item.id) ? "red" : "black" }}
                          title="Add to Fav"
                          onClick={() => {
                            addFav({
                              itemName: item.name,
                              cuisine: item.cuisine,
                              id: item.id,
                            });
                          }}
                        />
                        <h1 className="text-base">{item.name}</h1>
                        <div className="flex flex-row gap-3 justify-center items-center">
                          <div className="flex flex-row gap-1 justify-center items-center">
                            {fullStar > 0 &&
                              [...Array(fullStar)].map((_, i) => (
                                <FaStar
                                  key={`full-${i}`}
                                  className="text-yellow-400"
                                />
                              ))}
                            {hasHalfStar && (
                              <FaStarHalfAlt className="text-yellow-400" />
                            )}
                            {emptyStar > 0 &&
                              [...Array(emptyStar)].map((_, i) => (
                                <FaRegStar
                                  key={`empty-${i}`}
                                  className="text-gray-300"
                                />
                              ))}
                          </div>
                          <div>
                            <h1 className="text-sm">
                              reviews {item.reviewCount}
                            </h1>
                          </div>
                        </div>
                        <hr className="border-t-2 border-gray-500 w-full mx-0 my-4" />
                        <div className="flex flex-row gap-10  items-center">
                          <h3 className="text-xs text-gray-500 ">
                            {item.prepTimeMinutes + item.cookTimeMinutes}{" "}
                            minutes
                          </h3>
                          <button
                            className="bg-[#DB9A9A] sm:px-5 sm:py-3 rounded-full text-xs font-semibold  px-3 py-3 cursor-pointer hover:bg-red-300"
                            onClick={() => {
                              nav(`/recipes/${item.id}`);
                            }}
                          >
                            Read More..
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
        </div>

        {/*This */}
      </div>
    </>
  );
};

export default Recipes;
