/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { use, useEffect, useMemo, useRef, useState } from "react";
import pic01 from "../../assets/pic01.png";
import pic02 from "../../assets/pic02.jpg";
import { FiMinus, FiPlus } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

interface OrderType {
  itemName: string;
  cuisine: string;
  Qty: number;
  id:number;
}

const Order = () => {
  const [orders, setOrders] = useState<OrderType[]>([]);
  const nav = useNavigate();

  useEffect(() => {
    const orderString = sessionStorage.getItem("order");
    if (orderString) {
      try {
        const parsedOrders: OrderType[] = JSON.parse(orderString);
        setOrders(parsedOrders);
      } catch (err) {
        console.error("Failed to parse orders from sessionStorage:", err);
        setOrders([]);
      }
    }
  }, []);

  const updateQty = (index: number, delta: number) => {
    setOrders((prevOrders) => {
      // Create updated orders immutably
      const updatedOrders = prevOrders.map((order, i) => {
        if (i === index) {
          const newQty = Math.max(1, order.Qty + delta);
          return { ...order, Qty: newQty };
        }
        return order;
      });

      // Store in sessionStorage
      sessionStorage.setItem("order", JSON.stringify(updatedOrders));

      return updatedOrders;
    });
  };

  const deleteOrder = (name: string) => {
    setOrders((prevOrders) => prevOrders.filter((_, i) => _.itemName !== name));
    sessionStorage.setItem(
      "order",
      JSON.stringify(orders.filter((_, i) => _.itemName !== name))
    );
  };

  return (
    <>
      <div className="relative flex flex-row sm:mx-20 m-2">
        <img src={pic01} alt="" className="rounded-xl max-w-40 h-40" />
        <img
          src={pic02}
          alt=""
          className="absolute rounded-xl mx-30 my-3 w-40 h-40"
        />
      </div>

      <h1 className="sm:mx-10 mx-2 my-4 text-2xl">Order List</h1>
      <div className="flex flex-col">
        {orders.length === 0 ? <><h1 className="m-5 p-5">No Item Is Added 😥</h1></> : 
        orders.map((order, index) => (
          <div
            key={index}
            className="flex flex-row overflow-y-scroll cursor-pointer gap-10 sm:overflow-hidden border border-black-200 sm:mx-20 mx-2 my-4 justify-between items-center bg-white p-5 rounded-lg shadow-md sm:max-w-4/5"
          
         >
            <h1 className="sm:text-base text-sm"onClick={()=>{(nav("/recipes/"+order.id))}}>{order.itemName}</h1>
            <h1 className="sm:text-base text-sm" onClick={()=>{(nav("/recipes/"+order.id))}}>Type : {order.cuisine}</h1>
            <div className="flex flex-row gap-2 items-center">
              <h1 className="sm:text-base text-sm">Qty</h1>
              <FiMinus
                className="bg-gray-300 p-1 cursor-pointer"
                title="remove"
                onClick={() => {
                  updateQty(index, -1);
                }}
              />
              {order.Qty}
              <FiPlus
                className="bg-gray-300 p-1 cursor-pointer"
                title="add"
                onClick={() => {
                  updateQty(index, 1);
                }}
              />
            </div>
            <button
              className="bg-[#FAAEAE] text-xs py-1 px-3 sm:text-base rounded-lg"
              onClick={() => deleteOrder(order.itemName)}
            >
              Delete Order
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Order;
