import { useState } from "react";
import "./Search.css";

const Search = ({ restaurantData, setRestaurantData }) => {
  const [inputSearch, setInputSearch] = useState("");
  const inputChange = (event) => {
    console.log("event", event);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter"
        value={inputSearch}
        onChange={(e) => {
          const str = e.target.value.toLowerCase();
          console.log("str", str);
          const data = restaurantData.filter((item) => {
            const name = item.info.name.toLowerCase();
            console.log("name", name);
            return name.includes(str);
          });

          console.log("data", data);
          setInputSearch(e.target.value);
          setRestaurantData(data);
        }}
      />
    </div>
  );
};

export default Search;
