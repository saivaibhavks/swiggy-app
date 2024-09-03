import "./Filter.css";

const Filter = ({ setRestaurantData }) => {
  const filterFunc = (type) => {
    switch (type) {
      case "pure-veg":
        setRestaurantData([]);
    }
  };

  return (
    <div className="filter-container">
      <button>Filter</button>
      <button
        onClick={() => {
          filterFunc("pure-veg");
        }}
      >
        Pure Veg
      </button>
      <button>Less than 30 mins</button>
      <button>Rs 300 - Rs 600</button>
      <button>Less than Rs 300</button>
    </div>
  );
};

export default Filter;
