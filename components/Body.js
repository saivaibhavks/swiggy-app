import { useEffect, useState } from "react";
import data from "../constants/data";
import "./Body.css";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  const [restaurantData, setRestaurantData] = useState([]);

  const fetchProducts = async () => {
    try {
      const resp = await fetch(
        "https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65420&lng=77.23730&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const jsonResp = await resp.json();
      console.log(
        "json",
        jsonResp?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (err) {
      console.log("error is ", err);
    }
  };

  useEffect(() => {
    fetchProducts();
  });

  return (
    <div className="container">
      {data.map((item) => {
        return <RestaurantCard data={item.info} />;
      })}
    </div>
  );
};

export default Body;
