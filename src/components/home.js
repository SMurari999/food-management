import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../pages/restarurant/navbar";
const Home = () => {
  const navigate = useNavigate();

  return (
    
    <div className="relative">
      <div className="card relative text-white text-center">
            
        <div className="card-img-overlay flex flex-col justify-center items-center">
          <h1 className="text-5xl font-bold mb-5 text-yellow-400">ZERO FOOD WASTAGE</h1>
          <p className="text-lg mb-3 text-blue-300">
            <strong>WASTED FOOD TAKES A BITE OUT OF YOUR BUDGET</strong>
          </p>
          <p className="text-sm mb-6 text-gray-300">
            Feeding the hungry and the one in need adds yourself one good deed.
          </p>

          <button
            onClick={() => {
              navigate("/getstarted");
            }}
            type="button"
            className="bg-green-500 text-white py-2 px-4 rounded-full hover:bg-green-600 focus:outline-none focus:shadow-outline-green active:bg-green-700"
          >
            GET STARTED <i className="bi bi-box-arrow-right ml-2"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
