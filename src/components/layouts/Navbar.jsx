import { Link, useLocation } from "react-router-dom";
import * as Icons from "../../assets/icons";

const Navbar = () => {
  const location = useLocation();

  return (
    <>
      <div className={`${location.pathname === "/" && "bg-primary"}`}>
        <div className="container">
          <nav className={`flex justify-between py-6`}>
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
                <li>
                  <Link to="/blogs">Blogs</Link>
                </li>
              </ul>
            </div>
            {/* Social Icons */}
            <div className="social-icons">
              <div className="flex gap-4">
                <Icons.UserIcon className="" />
                <Icons.SearchIcon className="" />
                <Icons.HeartIcon />
                <Icons.CartIcon />
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
