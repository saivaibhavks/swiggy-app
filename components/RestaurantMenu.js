import { useEffect, useState } from "react";
import "./RestaurantMenu.css";
import { useParams } from "react-router-dom";
import Shimmer from "/components/Shimmer";

export const RestaurantMenu = () => {
  const { resId } = useParams();
  const [menuData, setMenuData] = useState(null);

  useEffect(() => {
    fetchRestData();
  }, []);

  const fetchRestData = async () => {
    try {
      const resp = await fetch(
        `https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.65420&lng=77.23730&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
      );
      const json = await resp.json();
      const data = await json?.data?.cards[2]?.card?.card?.info;
      setMenuData(data);
    } catch (error) {
      console.log("error", error);
    }
  };

  if (menuData === null) {
    return (
      <div style={{ alignItems: "center" }}>
        <Shimmer />;
      </div>
    );
  } else {
    console.log("menu dat", menuData);
    const { name, avgRating, costForTwoMessage, locality, cuisines } = menuData;
    const imgId = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${menuData.cloudinaryImageId}`;

    return (
      <div className="rest-menu">
        <div>
          <img src={imgId} alt="rest-img" />
        </div>
        <div>{name}</div>
        <div>{avgRating}</div>
        <div>{costForTwoMessage}</div>
        <div>{locality}</div>
        <div>{cuisines.join("")}</div>
      </div>
    );
  }
};
