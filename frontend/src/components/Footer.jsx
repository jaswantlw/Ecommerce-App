import React from "react";
import { assets } from "../assets/assets";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img
            src={assets.logo}
            alt="Logo"
            className="mb-5 w-32"
          />
          <p className="w-full md:w-2/3 text-gray-600">
            Welcome to Forever — where timeless
            design meets everyday elegance. We’re
            dedicated to creating pieces that
            last, inspire, and feel as good as
            they look. Discover the art of staying
            in style, season after season.
          </p>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">
            COMPANY
          </p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <NavLink to={"/"}>
              <li className="hover:underline cursor-pointer">
                Home
              </li>
            </NavLink>
            <li className="hover:underline cursor-pointer">
              About Us
            </li>
            <li className="hover:underline cursor-pointer">
              Delivery
            </li>
            <li className="hover:underline cursor-pointer">
              Privacy Policy
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">
            GET IN TOUCH
          </p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+1-212-456-7890</li>
            <li>contact@foreveryou.com</li>
          </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className="py-5 text-sm text-center text-gray-500">
          Copyright 2025 © forever.com — All
          Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
