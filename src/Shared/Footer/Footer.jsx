import { Link } from "react-router-dom";
import logo from "../../assets/logo1-removebg-preview.png";
import "./Footer.css";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

import {
  BiLogoFacebook,
  BiLogoTwitter,
  BiLogoInstagramAlt,
} from "react-icons/bi";

const Footer = () => {
  return (
    <footer className="text-white ">
      <div className="bg-black p-12 grid md:grid-cols-3 gap-4 justify-between">
        <div className=" ">
          <img className="w-48" src={logo} alt="" />
          <p>
            Yarpacom USA is ready to pick up your laundry at your Home, Office
            or Airport Laundry Stations and return them at your desired time.
          </p>
        </div>
        <div className=" ">
          <h3 className="text-xl font-bold">Informations</h3>
          <ul className="footer_link">
            <li>Home</li>
            <li>Blog</li>
            <li>About Us </li>
            <li>Contact</li>
            <div className="flex gap-2 items-center">
              <li>Download App</li>
              <p className="px-4 py-2 bg-[#1FA1E0] text-white text-xs rounded-full">
                same me{" "}
              </p>
            </div>
          </ul>
        </div>
        <div className="">
          <h3 className="text-xl font-bold">Subscribe Us Today</h3>
          <div>
            <p className="text-xs mt-8 mb-4">
              Subscribe Us & Recive Our Offers and Updates Your Inbox Directly.
            </p>
            <div className="bg-gray-900 rounded-xl py-1 flex justify-between px-2">
              <input
                className="bg-transparent outline-none"
                type="text"
                placeholder="Enter Your Email"
              />
              <Link>
                <p className="px-8 py-3 bg-[#1FA1E0] text-white text-xs rounded-full">
                  Sign Up
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* copy right section  */}
      <div className="w-full items-center py-4 px-12 bg-[#1FA1E0] flex justify-between">
        <div className="">
          <p>© 2023 Yarpacom. All Rights Reserved.</p>
        </div>
        <div className="flex gap-4 social_link">
          <Tippy content="FaceBook">
            <Link className="icon">
              <BiLogoFacebook size={28} />
            </Link>
          </Tippy>
          <Tippy content="Twitter">
            <Link className="icon">
              <BiLogoTwitter size={28} />
            </Link>
          </Tippy>

          <Tippy content="Instagram">
            <Link className="icon">
              <BiLogoInstagramAlt size={28} />
            </Link>
          </Tippy>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
