import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-div">
        <img
          src="https://media.istockphoto.com/id/1197390071/vector/food-delivery-by-motorcycle-with-five-stars-vector-icon-online-food-delivery-by-motorcycle.jpg?s=612x612&w=0&k=20&c=N4FWDRHEIudr5UIFtnh0SQ8jqVoYyv9PX6rEePItL5Y="
          alt="image"
          className="logo-img"
        />
      </div>

      <ul>
        <li>Home</li>
        <li>About us</li>
        <li>Products</li>
        <li>Contact Us</li>
      </ul>
    </div>
  );
};

export default Header;
