import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-blue-500 p-4">
      <div className="flex items-center space-x-4">
        <Link to="/" className="text-white">Home</Link>
        <Link to="/products" className="text-white">Products</Link>
        <Link to="/restaurants" className="text-white">Restaurants</Link>
      </div>
      <div className="flex items-center space-x-4">
        <Link to="/cart" className="text-white">Cart</Link>
        <Link to="/logout" className="text-white">Logout</Link>
      </div>
    </nav>
  );
};

export default Navbar;
