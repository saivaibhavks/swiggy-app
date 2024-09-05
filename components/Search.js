import "./Search.css";

const Search = ({ inputSearch, setInputSearch }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Enter"
        value={inputSearch}
        onChange={(e) => {
          setInputSearch(e.target.value.toLowerCase());
        }}
      />
    </div>
  );
};

export default Search;
