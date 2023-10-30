import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { AiOutlineMenu } from "react-icons/ai";
import { MdArrowDropDown } from "react-icons/md";
import logo from "../../assets/logo1-removebg-preview.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleDropdownToggle = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const navbarClasses = `p-6 ${isScrolled ? "scrolled" : ""}`;

  return (
    <nav className={navbarClasses}>
      <input type="checkbox" name="" id="toggler" />
      <label htmlFor="toggler" className="menu-icon">
        <AiOutlineMenu size={24} />
      </label>
      <div className="w-52">
        <img src={logo} alt="" />
      </div>
      <div className="nav-links">
        <ul>
          <li>
            <Link to="" className="text-[#1FA1E0]">
              Home
            </Link>
          </li>
          <li>
            <Link to="">About Us</Link>
          </li>
          <li
            onMouseEnter={handleDropdownToggle}
            onMouseLeave={handleDropdownToggle}
          >
            <Link to="" className="flex items-center">
              Pay Here/Scan2Pay <MdArrowDropDown />{" "}
            </Link>
            {isDropdownVisible && (
              <div className="dropdown-menu">
                <li>
                  <Link>Blog Full</Link>
                </li>
              </div>
            )}
          </li>
          <li>
            <Link to="">App Store </Link>
          </li>
          <li>
            <Link to="">Join Our Team</Link>
          </li>
          <li>
            <Link to="">Contact</Link>
          </li>
          <li>
            <Link to="">LogIn</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
