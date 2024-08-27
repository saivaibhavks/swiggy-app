import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-div">
        <img
          src="https://static.vecteezy.com/system/resources/previews/042/642/799/non_2x/hand-drawn-empanada-logo-template-suitable-for-restaurant-and-cafe-vector.jpg"
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
