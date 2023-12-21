// Signup.js
import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, app } from "../firebase";
import { getFirestore, setDoc, doc, collection,addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase";
const Signup = () => {
  const db=getFirestore();
    const navigation=useNavigate();
  const [formData, setFormData] = useState({
    username:"",
    email: "",
    password: "",
    name:"",
    phone_number:"",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  

  const handleSubmit =async (e) => {
    e.preventDefault();
  
    try {
      await setDoc(
        doc(db, localStorage.getItem("role"), formData.email),
        {
          role: localStorage.getItem("role"),
          username: formData.username,
          name: formData.name,
          phone_number: formData.phone_number,
          email: formData.email,
        }
      );
        const userCredential = await createUserWithEmailAndPassword(
            auth,
            formData.email,
            formData.password
          ).then(async(data)=>{
          });        
          const user = userCredential.user;

        console.log("User registered successfully!");

      } catch (error) {
        console.error("Error registering user:", error.message);
      }
      navigation("/login");
    console.log("Form submitted with data:", formData);
  };

  return (
    <div className="mt-5">
      <div className="flex flex-col flex items-center justify-center ">
  <button
    onClick={() => {
      navigation("/login");
    }}
    type="button"
    className="bg-green-500 text-white py-2 px-4 rounded-full hover:bg-green-600 focus:outline-none focus:shadow-outline-green active:bg-green-700"
  >
    Login<i className="bi bi-box-arrow-right ml-2"></i>
  </button>
  <p>already have an account?</p>
</div>

    <div className="flex items-center justify-center min-h-screen">
      
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-600">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
              autoComplete="off"
              required

            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-600">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
              autoComplete="off"

              required
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="phone_number" className="block text-sm font-medium text-gray-600">
              phone number
            </label>
            <input
              type="text"
              id="phone_number"
              name="phone_number"
              value={formData.phone_number}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
              input='numeric'
              pattern="[0-9]*" 
              autoComplete="off"
               
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
              autoComplete="off"

              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Signup;
