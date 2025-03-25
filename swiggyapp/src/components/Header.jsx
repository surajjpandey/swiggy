import React from "react";
import { LOGO_URL } from "../assets/api";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-around items-center ">
      <Link to={"/"}>
        <img src={LOGO_URL} className="w-[80px] h-[80px]" />
      </Link>
      <Link to={"/search"}>
        <span className="text-2xl font-bold">Search</span>
      </Link>
      <Link to={"/cart"}>
        <span className="text-2xl font-bold">Cart</span>
      </Link>
      <Link to={"/products"}>
        <span className="text-2xl font-bold">Products</span>
      </Link>
      <Link to={"/login"}>
        <span className="text-2xl font-bold">Login</span>
      </Link>
    </div>
  );
};

export default Header;
