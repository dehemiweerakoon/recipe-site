/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FiMinus, FiPlus } from "react-icons/fi";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

interface OrderType{
    id:number
    itemName: string;
    cuisine: string;
    Qty: number;
}
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
const Item = () => {
  const itemId = useParams().id;
  const [item, setItem] = useState<Recipe>({} as Recipe);
  const [userId, setUserId] = useState("");
  const [userName, setUserName] = useState(" ");
  //console.log(itemId);
  const [count, setCount] = useState(1);

  function getSars(rating: number) {
    const fullStar = rating % 1 >= 0.9 ? Math.ceil(rating) : Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.25 && rating % 1 <= 0.75;
    const emptyStar = 5 - fullStar - (hasHalfStar ? 1 : 0);
    return { fullStar, hasHalfStar, emptyStar };
  }
  const addCount = () => {
    setCount(count + 1);
  };
  const removeCount = () => {
    if (count <= 1) return;
    else setCount(count - 1);
  };

  const getItem = async () => {
    const result = await axios.get(`https://dummyjson.com/recipes/${itemId}`);
    console.log(result.data);
    setUserId(result.data.userId);
    setItem(result.data);
  };
  const getUser = async () => {
    const result = await axios.get(`http://dummyjson.com/users/${userId}`);
    console.log(result.data);
    setUserName(
      result.data.firstName +
        " " +
        result.data.maidenName +
        " " +
        result.data.lastName
    );
  };
  const SetOrder =()=>{
    const current = sessionStorage.getItem("order");
    let orders:OrderType[] =[]
    const order = {
        itemName: item.name,
        cuisine :item.cuisine,
        id:item.id,
        Qty: count
    }; 
    if (current) {
        try {
          const parsed = JSON.parse(current);
          if (Array.isArray(parsed)) {
            orders = parsed;
            parsed.find((order:OrderType) => {
              if (order.itemName === item.name) {
                order.Qty += count;
                return true; // Stop searching if found
              }
              return false; // Continue searching
            });
          }
        } catch (err) {
          console.error("Error parsing existing orders:", err);
        }
      }
      orders.push(order);
    sessionStorage.setItem("order", JSON.stringify(orders));
    alert("Order Placed Successfully");
  }

  useEffect(() => {
    getItem();
  }, []);
  useEffect(() => {
    if (userId) {
      getUser();
    }
  }, [userId]);

  return (
    <>
      <h1 className="sm:ml-10 ml-2 my-0 text-xl font-medium">{item.name}</h1>
      <div className="bg-white sm:mx-5 mx-1 p-3 my-2 rounded-lg shadow-md sm:max-w-4/5">
        <div className="flex flex-col sm:flex-row gap-2 justify-start px-10">
          <img src={item.image} alt="name" className="w-50 rounded-full " />
          <div className="flex flex-col gap-2 sm:mx-5">
            <h2 className="text-lg">Ingredients</h2>
            <div className="flex flex-col">
              {item.ingredients &&
                item.ingredients.map((ingredient, index) => {
                  return (
                    <div key={index} className="text-sm">
                      {index + 1}. {ingredient}
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
        <div className="sm:mt-2 p-2">
          <div className="relative flex flex-row  gap-5 items-center text-base sm:mx-20 ">
            <h1>Qty</h1>
            <FiMinus
              className="bg-gray-300 p-1 cursor-pointer"
              title="remove"
              onClick={removeCount}
            />
            {count}
            <FiPlus
              className="bg-gray-300 p-1 cursor-pointer"
              title="add"
              onClick={addCount}
            />
            <button className="lg:absolute lg:end-1/2 bg-[#F7AAAA] py-2 px-10 rounded-lg hidden lg:block" onClick={SetOrder}>
              Place Order
            </button>
          </div>
          <button className="m-2 lg:absolute sm:end-1/2 bg-[#F7AAAA] py-2 px-10 rounded-lg block lg:hidden" onClick={SetOrder}>
            Place Order
          </button>
        </div>
        <div className="flex flex-col gap-2 sm:mx-5 mx-2">
          <h1 className="text-lg font-medium">Instructions </h1>
          <div className="flex flex-col gap-0 sm:mx-10 mx-1">
            {item.instructions &&
              item.instructions.map((instruction, index) => {
                return (
                  <div key={index} className="sm:text-sm text-xs">
                    {index + 1}. {instruction}
                  </div>
                );
              })}
          </div>
        </div>
        <div className="mx-2 sm:mx-5 flex flex-row">
          <p className="text-base font-bold">Meal Type :</p>
          <h1 className="mx-2"> {item.mealType}</h1>
        </div>
        <div className="mt-1 sm:mx-5  mx-2 flex flex-col gap-0 text-sm">
          <p>prepare time : {item.prepTimeMinutes} minutes</p>
          <p>cooking time : {item.cookTimeMinutes} minutes</p>
          <p>cousine: {item.cuisine}</p>
        </div>
        <div className="mt-0 sm:mx-5 mx-2 flex flex-row sm:gap-10 gap-2 items-center">
          <p className="text-gray-400">Rating</p>
          <div className="flex">
            {Array.from({ length: getSars(item.rating).fullStar }).map(
              (_, index) => (
                <FaStar className="text-yellow-400" />
              )
            )}
            {getSars(item.rating).hasHalfStar && (
              <FaStarHalfAlt className="text-yellow-400" />
            )}
            {Array.from({ length: getSars(item.rating).emptyStar }).map(
              (_, index) => (
                <FaRegStar className="text-yellow-400" />
              )
            )}
          </div>
          <p className="text-sm">{item.rating}</p>
        </div>
        <div className="mt-0 sm:mx-5 mx-2 flex flex-row gap-10 items-center text-sm sm:text-base">
          Reviews := {item.reviewCount}
        </div>
        <div className="sm:mx-5 mx-2 mt-3 bg-gray-300 p-3 rounded-xl sm:py-4">
          <p className="sm:text-base text-sm ">Created by : {userName}</p>
        </div>
      </div>
    </>
  );
};

export default Item;
