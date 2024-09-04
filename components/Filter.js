import { useState } from "react";
import "./Filter.css";

const Filter = ({ restaurantData, setRestaurantData }) => {
  const [filteredData, setFilteredData] = useState(restaurantData);

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
      <button>Filter</button>
      <button
        onClick={() => {
          filterFunc("top-rated");
        }}
      >
        Top Rated
      </button>
      <button
        onClick={() => {
          filterFunc("less-than-30");
        }}
      >
        Less than 30 mins
      </button>
      <button
        onClick={() => {
          filterFunc("300-600");
        }}
      >
        Rs 300 - Rs 600
      </button>
      <button
        onClick={() => {
          filterFunc("less-than-300");
        }}
      >
        Less than Rs 300
      </button>
      <button
        onClick={() => {
          setRestaurantData(filteredData);
        }}
      >
        Clear Filters
      </button>
    </div>
  );
};

export default Filter;
