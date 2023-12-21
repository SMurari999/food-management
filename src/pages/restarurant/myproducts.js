import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductCard from "../../components/productcard";
import { getAuth } from "firebase/auth";
import { db } from "../../firebase";
import { collection, query, getDocs, deleteDoc, doc } from "firebase/firestore";
import Navbar from "./navbar";

function MyProducts() {
  const navigate = useNavigate();
  const [products, setproducts] = useState([]);

  const getMyProducts = async () => {
    console.log("Inside fun");
    const q = query(
        collection(
          db,
          localStorage.getItem("role") +
          "/" +
          getAuth().currentUser.email +
          "/products"
    ));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
      setproducts((products) => [...products, doc.data()]);
    });
  };

  const addProducts = () => {
    navigate("/addproducts");
  };

  const deleteProduct = async (product) => {
    await deleteDoc(
      doc(
        db,
        "Restarurant/" + getAuth().currentUser.email + "/products",
        product
      )
    );
    setproducts([]);
    getMyProducts();
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto">
        <div className="my-3 flex justify-center">
          <button
            onClick={getMyProducts}
            className={`${
              products.length === 0 ? "bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 focus:outline-none focus:shadow-outline-green" : "hidden"
            }`}
          >
            Show Products <i className="bi bi-arrow-right-circle"></i>
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((element, index) => (
            <div 
            
            >
             <ProductCard key={index} element={element} deleteProduct={deleteProduct} />
            </div>
          ))}
          <div className="mb-4">
            <button
              onClick={addProducts}
              className={`${
                products.length === 0
                  ? "hidden"
                  : "bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 focus:outline-none focus:shadow-outline-green"
              }`}
            >
              <h1>+</h1>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyProducts;
