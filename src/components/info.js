import React, { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

function Info() {
  const auth = getAuth();
  const user = auth.currentUser;

  const [info, setInfo] = useState({
    name: "loading...",
    username: "loading...",
    phone_number: "loading...",
  });

  useEffect(() => {
    const getInfo = async () => {
      const docRef = doc(db, localStorage.getItem('role'),getAuth().currentUser.email);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        setInfo(docSnap.data());
      } else {
        console.log("No such document!");
      }
    };
    getInfo();
  }, []);

  return (
    <div className="container mx-auto bg-light-subtle min-h-screen flex items-center justify-center">
  <div className="w-96">
    <div className="card mx-auto my-3">
      <img
        src="https://img.lovepik.com/element/40061/9105.png_1200.png"
        className="card-img-top"
        alt="Profile Avatar"
      />
      <div className="card-body">
        <h5 className="card-title text-center text-2xl font-bold mb-4">YOUR PROFILE</h5>
        <ul className="list-group list-group-flush">
          <li className="list-group-item bg-light-subtle">Name: {info.name}</li>
          <li className="list-group-item bg-light-subtle">Username: {info.username}</li>
          <li className="list-group-item bg-light-subtle">Phone Number: {info.phone_number}</li>
        </ul>
      </div>
    </div>
  </div>
</div>

  );
}

export default Info;
