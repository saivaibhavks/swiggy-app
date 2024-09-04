import { useState } from "react";
import "./Filter.css";
import Search from "./Search";

const Filter = ({ restaurantData, setRestaurantData }) => {
  const [filteredData, setFilteredData] = useState(restaurantData);
  const [selected, setSelected] = useState("");

  const filterFunc = (type) => {
    let data;
    switch (type) {
      case "top-rated":
        data = filteredData.filter((item) => item.info.avgRating > 4.3);
        setRestaurantData(data);
        break;
      case "less-than-30":
        data = filteredData.filter((item) => item.info.sla.deliveryTime < 30);
        setRestaurantData(data);
        break;
      case "300-600":
        data = filteredData.filter((item) => {
          const costForTwo = parseInt(
            item.info.costForTwo?.split(" ")[0]?.split("₹")[1]
          );
          return costForTwo > 300 && costForTwo < 600;
        });
        setRestaurantData(data);
        break;
      case "less-than-300":
        data = filteredData.filter((item) => {
          const costForTwo = parseInt(
            item.info.costForTwo?.split(" ")[0]?.split("₹")[1]
          );
          return costForTwo < 300;
        });
        setRestaurantData(data);
        break;
    }
  };

  return (
    <div className="filter-container">
      <button
        style={{
          cursor: "auto",
        }}
      >
        Filters
      </button>
      <button
        onClick={() => {
          filterFunc("top-rated");
          setSelected("top-rated");
        }}
        style={{
          backgroundColor: selected === "top-rated" ? "#BFD2C8" : "",
        }}
      >
        Top Rated
      </button>
      <button
        onClick={() => {
          filterFunc("less-than-30");
          setSelected("less-than-30");
        }}
        style={{
          backgroundColor: selected === "less-than-30" ? "#BFD2C8" : "",
        }}
      >
        Less than 30 mins
      </button>
      <button
        onClick={() => {
          filterFunc("300-600");
          setSelected("300-600");
        }}
        style={{
          backgroundColor: selected === "300-600" ? "#BFD2C8" : "",
        }}
      >
        Rs 300 - Rs 600
      </button>
      <button
        onClick={() => {
          filterFunc("less-than-300");
          setSelected("less-than-300");
        }}
        style={{
          backgroundColor: selected === "less-than-300" ? "#BFD2C8" : "",
        }}
      >
        Less than Rs 300
      </button>
      <button
        onClick={() => {
          setRestaurantData(filteredData);
          setSelected("clear-filter");
        }}
        style={{
          backgroundColor: selected === "clear-filter" ? "#BFD2C8" : "",
        }}
      >
        Clear Filters
      </button>
    </div>
  );
};

export default Filter;
