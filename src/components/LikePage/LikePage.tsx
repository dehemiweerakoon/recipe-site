/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface OrderType {
  itemName: string;
  cuisine: string;
  Qty: number;
  id: number;
}

const LikePage = () => {
  const [fav, setfav] = useState<OrderType[]>([]);
  const nav = useNavigate();

  useEffect(() => {
    const favtring = sessionStorage.getItem("fav");
    if (favtring) {
      try {
        const parsedfav: OrderType[] = JSON.parse(favtring);
        setfav(parsedfav);
      } catch (err) {
        console.error("Failed to parse fav from sessionStorage:", err);
        setfav([]);
      }
    }
  }, []);

  const deleteOrder = (name: string) => {
    setfav((prevfav) => prevfav.filter((_) => _.itemName !== name));
    sessionStorage.setItem(
      "fav",
      JSON.stringify(fav.filter((_) => _.itemName !== name))
    );
  };

  return (
    <>
      <h1 className="sm:mx-10 mx-2 my-4 text-2xl">Favorite List</h1>
      <div className="flex flex-col">
        {fav.length === 0 ? (
          <>
            <h1 className="m-5 p-5">No Item Is Added 😥</h1>
          </>
        ) : (
          fav.map((order, index) => (
            <div
              key={index}
              className="flex flex-row overflow-y-scroll cursor-pointer gap-10 sm:overflow-hidden border border-black-200 sm:mx-20 mx-2 my-4 justify-between items-center bg-white p-5 rounded-lg shadow-md sm:max-w-4/5"
            >
              <h1
                className="sm:text-base text-sm"
                onClick={() => {
                  nav("/recipes/" + order.id);
                }}
              >
                {order.itemName}
              </h1>
              <h1
                className="sm:text-base text-sm"
                onClick={() => {
                  nav("/recipes/" + order.id);
                }}
              >
                Type : {order.cuisine}
              </h1>
              <button
                className="bg-[#D4FAAE] text-xs py-1 px-3 sm:text-base rounded-lg"
                onClick={() => deleteOrder(order.itemName)}
              >
                Remove Favorite
              </button>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default LikePage;
