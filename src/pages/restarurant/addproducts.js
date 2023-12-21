import React, { useState } from "react";
import Navbar from "./navbar";

import { getFirestore, setDoc, doc } from "firebase/firestore";

import { app } from "../../firebase";

import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function AddProduct() {
  const db = getFirestore(app);
  const auth = getAuth();
  const navigate = useNavigate();
    const [formData, setFormdata] = useState({
        name:'',
        qty:'',

    });
    
    const handleChange = async(e) => {
        const { name, value } = e.target;
        setFormdata((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
  const addData = async () => {
    // Add a new document in collection "cities"
    await setDoc(
      doc(
        db,
        localStorage.getItem("role") +
          "/" +
          auth.currentUser.email +
          "/products",
        formData.name
      ),
      {
        name: formData.name,
        quantity: formData.qty,
      }
    );
      navigate('/myproducts');
  };

  return (
    <>
      <Navbar />
      <div className="container py-5">
        <div className="mx-auto max-w-md">
          <h3 className="text-center text-2xl font-semibold mb-6">
            Add Your Product Here
          </h3>
          <div className="grid grid-cols-1 gap-4">
            <input
            type="text"
            id="name"
            name='name'
             value={formData.name}
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded"
              autoComplete="off"

              placeholder="Enter Product Name"
            />
            <input
            type="text"
            id="qty"  
            name='qty'
           
            autoComplete="off"

              value={formData.qty}
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded"
              placeholder="Enter Product Quantity"
            />
            

            <button
              onClick={addData}
              className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 focus:outline-none focus:shadow-outline-green"
            >
                <p>ADD PRODUCT</p>
              <i className="bi bi-check-circle"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddProduct;
