import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const auth = getAuth();
      await signOut(auth);
      navigate("/getStarted");
    } catch (error) {
      console.error("Error logging out:", error.message);
      alert("Issue while logging out");
    }
  };

  return (
    <nav className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex space-x-4">
          <button
            onClick={() => navigate("/home")}
            className={`text-white focus:outline-none ${
              location.pathname === "/home" ? "font-bold" : ""
            }`}
          >
            Home
          </button>
          <button
            onClick={() => navigate("/myproducts")}
            className={`text-white focus:outline-none ${
              location.pathname === "/myproducts" ? "font-bold" : ""
            }`}
          >
            My Products
          </button>
          <button
            onClick={() => navigate("/addproducts")}
            className={`text-white focus:outline-none ${
              location.pathname === "/addproduct" ? "font-bold" : ""
            }`}
          >
            Add Product
          </button>
        </div>

        <div>
          <button
            onClick={handleLogout}
            className="text-white cursor-pointer hover:underline focus:outline-none"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
