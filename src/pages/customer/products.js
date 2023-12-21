import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

import Navbar from "./navbar";

function CustomerProduct() {
    const navigate = useNavigate();
    let restaurantArray = [];
    const [productInformation, setProductInformation] = useState([]);
    const [productsVisible, setProductsVisible] = useState(false);
  
    const getProductCard = async () => {
      setProductsVisible(true);
      restaurantArray = [];
      
      // Corrected collection name to "Restaurant"
      const q = query(collection(db, "Restaurant"));
      const querySnapshot = await getDocs(q);
  
      querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
        restaurantArray.push(doc.data());
      });
  
      for (let i = 0; i < restaurantArray.length; i++) {
        // Corrected collection name to "Restaurant"
        const q = query(
          collection(
            db,
            "Restaurant/" + restaurantArray[i].email + "/products"
          )
        );
        const querySnapshot = await getDocs(q);
  
        querySnapshot.forEach((doc) => {
          console.log(doc.id, " => ", doc.data());
          setProductInformation((productInformation) => [
            ...productInformation,
            doc.data(),
          ]);
        });
      }
    };
  
    
  

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-md-6 m-auto text-center py-5">
            <button
              onClick={getProductCard}
              className={`${!productsVisible ? "btn btn-success w-25 py-2" : "hidden"
                }`}
            >
              Show Products <i className="bi bi-arrow-right-circle"></i>
            </button>
          </div>
        </div>
        <div className="row">
          {productInformation.map((element, index) => {
            return (
              <div className="col-lg-3 col-md-4 col-sm-6" key={index}>
                <div
                  className="card text-bg-light mb-3 m-auto"
                  style={{ maxWidth: "18rem" }}
                >
                  <div className="flex flex-col card border-secondary max-w-xs mx-auto h-20 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-lg">
      <div className="card-header bg-transparent border-success font-bold flex flex-col justify-center items-center p-[10px]">
        {element.name}
        
      
      <div className="card-body text-secondary">
        <div className="card-text">Quantity : {element.quantity}</div>
      </div>
      </div>
    </div>
                    <button
                      onClick={() => {
                        localStorage.setItem("cartProductName", element.name);
                        localStorage.setItem("cartProductQty", 1);
                        navigate("/Cart");
                      }}
                      className="bg-green-500 ml-[80px] text-white py-2 px-4 rounded-full hover:bg-green-600 focus:outline-none focus:shadow-outline-green active:bg-green-700"
                    >
                      Add to Cart
                    </button>
                  
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default CustomerProduct;
