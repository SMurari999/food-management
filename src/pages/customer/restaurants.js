import React, { useState } from "react";
import Navbar from "./navbar";

import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

function RestaurantForCustomer() {
  const [restaurants, setRestaurants] = useState([]);

  const getRestaurantsForCustomer = async () => {
    const q = query(collection(db, "Restaurant"));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
      setRestaurants((restaurants) => [...restaurants, doc.data()]);
    });
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-md-6 m-auto py-5 text-center">
            <button
              onClick={getRestaurantsForCustomer}
              className={` ${restaurants.length === 0 ? "btn btn-success w-25 py-2" : "d-none"
                }`}
            >
              Show Restaurants <i className="bi bi-arrow-right-circle"></i>
            </button>
          </div>
        </div>
        <div className="row">
          {restaurants.map((element, index) => {
            return (
              <div className="col-lg-3 col-md-4 col-sm-6" key={index}>
                <div
                  className="card border-secondary mb-3 m-auto"
                  style={{ maxWidth: "18rem" }}
                >
                  <div className="card-header bg-transparent border-success fw-bold">
                    {element.name}
                  </div>
                  
                  
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default RestaurantForCustomer;
