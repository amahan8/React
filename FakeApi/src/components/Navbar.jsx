import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const numberofProducts = useSelector((state) => state.cart.totalQuantity);
  return (
    <div className="bg-black text-white py-3 px-24 flex justify-between items-center">
      <Link to="/" className="text-3xl font-semibold">
        e-shop
      </Link>
      <Link to="/cart" className="">
        Cart{""} {numberofProducts}
      </Link>
    </div>
  );
};

export default Navbar;
