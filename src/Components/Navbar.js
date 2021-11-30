import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="nav__logo">
        <img className="nav-logo" src="scribd_white.svg" alt="" />
      </div>
      <div className="nav__btns">
        <button className="nav__btns-a">Register for 30 Days</button>
        <button className="nav__btns-b">Sign In</button>
      </div>
    </div>
  );
};

export default Navbar;
