import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="flex justify-between px-20 py-6 bg-red-200">
        <div className="">Brand</div>
        {/* Nav Links */}
        <div className="nav-links">
          <ul className="flex gap-6">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
          </ul>
        </div>
        {/* Social Icons */}
        <div className="social-icons">
          <ul className="flex gap-4">
            <li>F</li>
            <li>I</li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
