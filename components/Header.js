import "./Header.css";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-div">
        <img src={logo} alt="image" className="logo-img" />
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
