import axios from "axios";
import React, { useEffect, useState } from "react";
import { IMAGE_URL, MENU_ULR } from "../assets/api";
import { useParams } from "react-router-dom";

const Menu = () => {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    async function fetchMenu() {
      try {
        const response = await axios.get(`${MENU_ULR}${id}`);
        console.log(
          response.data.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[3]
        );
        setMenu(
          response.data.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[3]
            .card.card.categories[0].itemCards
        );
      } catch (err) {
        setError(err || "Something Not Right");
      } finally {
        setLoading(false);
      }
    }
    fetchMenu();
  }, []);
  if (error) return error || "spmething went wrong";
  if (loading) return loading || "Loading....";

  return (
    <div className="flex items-center justify-center flex-col">
      {menu.map((item) => {
        return (
          <div
            key={item.card.info.id}
            className="w-6/12 flex flex-col border-b  p-4 m-2 "
          >
            <div>
              <span className="text-2xl font-bold mx-2">
                {item.card.info.name}
              </span>
              <span className="text-xl font-bold ">
                Rs.
                {item.card.info.price / 100 ||
                  item.card.info.defaultPrice / 100}
              </span>
            </div>
            <div>
              <span className="w-7/12">{item.card.info.description}</span>
              <span>
                <img
                  src={IMAGE_URL + `${item.card.info.defaultPrice}`}
                  alt="menuImage"
                  className="w-2/12 h-[50px]"
                />
              </span>
              <button className="bg-black text-white p-4 rounded cursor-pointer m-2 w-[150px]">
                Add
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Menu;
