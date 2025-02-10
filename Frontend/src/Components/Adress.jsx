import { useState } from "react";
import img from "../assets/loginlogo.png";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";


const AddressPage = () => {
  const navigate = useNavigate();
  const [name,setName]=useState("");
  const [states, setState] = useState("");
  const [address,setAddress]=useState("");
  const [locality,setLocality]=useState("");
  const [pincode,setPincode]=useState("");
  return (
    <>
      <Header />
      <div className="flex p-5 gap-1 justify-center">
        <div className="bg-blue-500 p-5 w-100  rounded-lg">
          <p className="text-4xl pt-5 font-semibold">Address</p>
          <p className="text-black-300 pt-3">
            Fill Your Address to Deliver the Order to Your Home.
          </p>
          <img src={img} alt="Login" className="pt-50 pl-17 pb-2" />
        </div>
        <div className="bg-gray-200 p-3  rounded-lg">
          <div className="flex flex-col items-center ">
            <input
              type="text"
              placeholder="Enter your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-100 border-2 m-2 p-1 cursor-pointer rounded-lg"
            />
            <input
              type="text"
              placeholder="Enter your State"
              value={states}
              onChange={(e) => setState(e.target.value)}
              className="w-100 border-2 mt-7 p-1 cursor-pointer rounded-lg"
            />
            <textarea
              type="text"
              rows={3 }
              placeholder="Enter your Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-100 border-2 mt-7 p-2 cursor-pointer rounded-lg"
            />
            <input
              type="text"
              placeholder="Enter Pincode"
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
              className="w-100 border-2 mt-7 p-1 cursor-pointer rounded-lg"
            />
            <textarea
              type="text"
              placeholder="Enter your Landmark"
              value={locality}
              onChange={(e) => setLocality(e.target.value)}
              className="w-100 border-2 mt-7 p-1 cursor-pointer rounded-lg"
            />
            <button className="text-white bg-orange-400 p-3 mt-4 w-full rounded-lg">Add Address</button>
            
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AddressPage;
