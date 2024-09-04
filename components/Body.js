import { useEffect, useState } from "react";
import "./Body.css";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import Filter from "./Filter";
import Search from "./Search";

const Body = () => {
  const [restaurantData, setRestaurantData] = useState([]);

  const fetchProducts = async () => {
    try {
      const resp = await fetch(
        "https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65420&lng=77.23730&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const jsonResp = await resp.json();
      const restData =
        jsonResp?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;

      console.log(
        "json",
        jsonResp?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setRestaurantData(restData);
    } catch (err) {
      console.log("error is ", err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return restaurantData.length === 0 ? (
    <div className="container">
      <Shimmer />
      <Shimmer />
      <Shimmer />
      <Shimmer />
      <Shimmer />
      <Shimmer />
      <Shimmer />
      <Shimmer />
    </div>
  ) : (
    <>
      <Search
        restaurantData={restaurantData}
        setRestaurantData={setRestaurantData}
      />
      <Filter
        restaurantData={restaurantData}
        setRestaurantData={setRestaurantData}
      />
      <div className="container">
        {restaurantData.map((item) => {
          return <RestaurantCard data={item.info} />;
        })}
      </div>
    </>
  );
};

export default Body;
