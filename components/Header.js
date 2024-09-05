import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-div">
        <img
          src="https://i.pinimg.com/originals/b3/8a/a1/b38aa1b21050b0e769a97eb751d12829.png"
          alt="image"
          className="logo-img"
        />
      </div>

      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to={`/about`}>About us</Link>
        </li>

        <li>
          <Link to={`/contact`}>Contact Us</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
