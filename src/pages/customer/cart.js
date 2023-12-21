import React from "react";
import Navbar from "./navbar";
import { useState } from "react";
function CartProduct() {
    const [quantity, setquantity]=useState([
        1
    ]);
    const decreasequantity = ()=>
    {   if (quantity>0) {
        setquantity(quantity-1);
    }
    }
    const increasequantity = ()=>{
        setquantity(Number(quantity)+1);
    }
  return (
    <>
      <Navbar />
      <div className="container mx-auto my-8">
        <div className="max-w-md mx-auto bg-white p-8 border rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">
            Product Name: {localStorage.getItem("cartProductName")}
          </h2>
          <p className="text-lg">
            Quantity: {quantity} 
          </p>
          <div className="mt-4">
                    <button onClick ={() =>{
                        decreasequantity(localStorage.getItem("cartQuantityQuantity"));
                    } }
            className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2">
              Decrease Quantity
            </button>
                    <button onClick ={() =>{
                        increasequantity(localStorage.getItem("cartQuantityQuantity"));
                    } }
            className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2">
              Increase Quantity
            </button>
            <button 
            className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2 mt-3 flex justify-center">
              Check OUT
            </button>
            {/* Add more buttons or elements as needed */}
          </div>
        </div>
      </div>
    </>
  );
}

export default CartProduct;
