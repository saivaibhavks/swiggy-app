import "./Header.css";

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
        <li>Home</li>
        <li>About us</li>
        <li>Products</li>
        <li>Contact Us</li>
      </ul>
    </div>
  );
};

export default Header;
