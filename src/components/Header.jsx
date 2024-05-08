import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaXmark, FaBars } from "react-icons/fa6";
import logo from "../assets/images/logo.png";
import { FaPhoneAlt, FaUserCircle } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navItems = [
    {
      link: "Home",
      path: "home",
    },
    {
      link: "About",
      path: "about",
    },
    {
      link: "Properties",
      path: "properties",
    },
    {
      link: "Services",
      path: "services",
    },
    {
      link: "Testimonials",
      path: "testimonials",
    },
    {
      link: "Contact",
      path: "contact",
    },
  ];

  return (
    <>
      <nav
        className={`${"light bg-transparent "} flex justify-between items-center gap-4 lg:px-20 px-4 py-3  top-0 z-30`}
      >
        <div id="logo">
          <img
            src={logo}
            alt="company logo"
            className="lg:w-[150px] w-[120px]"
          />
        </div>

        <ul className="lg:flex justify-center items-center gap-8 hidden">
          {navItems.map(({ link, path }) => (
            <Link
              key={path}
              className="text-black text-[15px] uppercase font-semibold cursor-pointer px-3 py-2 rounded-lg hover:bg-gold hover:text-white"
              to={path}
              spy={true}
              offset={-100}
              smooth={true}
            >
              {link}
            </Link>
          ))}
        </ul>

        {/* mobile menu icon starts here */}
        <div
          className="flex justify-center items-center lg:hidden"
          onClick={toggleMenu}
        >
          <div>
            {isMenuOpen ? (
              <FaXmark className="text-black text-2xl cursor-pointer" />
            ) : (
              <FaBars className="text-black text-2xl cursor-pointer" />
            )}
          </div>
        </div>

        <div
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } w-full h-fit bg-bggray p-4 absolute top-[80px] left-0`}
          onClick={closeMenu}
        >
          <ul className="flex flex-col justify-center items-center gap-2 w-full">
            {navItems.map(({ link, path }) => (
              <Link
                key={path}
                className="text-black  uppercase font-semibold cursor-pointer p-3 rounded-lg hover:bg-gold hover:text-black w-full text-left mx-10"
                to={path}
                spy={true}
                offset={-100}
                smooth={true}
              >
                {link}
              </Link>
            ))}
          </ul>
        </div>

        <div></div>
      </nav>
    </>
  );
};

export default Header;
