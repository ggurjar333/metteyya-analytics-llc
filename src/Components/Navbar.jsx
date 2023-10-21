import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-gray-700  h-16 fixed w-full">
      <div className="flex flex-row px-5 justify-between align-middle">
        <img src="/profile.png" className="h-16  block" alt="logo" />
        <div className="flex flex-row py-4 text-white">
          <Link to={"/"} className="text-xl font-extralight">
            Home
          </Link>
          <Link to={"/"} className="text-xl ml-8 font-extralight">
            Services
          </Link>
          <Link to={"/"} className="text-xl ml-8 font-extralight">
            Work
          </Link>
          <Link
            to={"/"}
            className="text-xl ml-8 rounded-full font-extralight px-8 my-auto  bg-purple-400"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
