import "./Search.css";

const Search = ({ restaurantData, setRestaurantData }) => {
  const inputChange = (event) => {
    console.log("event", event);
  };

  return (
    <div className="cont">
      <input
        type="text"
        placeholder="Enter"
        value="search"
        onChange={inputChange}
      />
    </div>
  );
};

export default Search;
