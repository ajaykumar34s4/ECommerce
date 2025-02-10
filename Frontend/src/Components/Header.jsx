import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import img from "../assets/flipkart logo.png";
import search from "../assets/search.png";

const Header = ({ cartItemCount}) => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.clear(); 
    setIsLoggedIn(false);
    navigate("/");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  const goToHome = () => {
    navigate("/");
  };

  const Gotocart = () => {
    navigate("/cart");
  };
  
  return (
    <>
      {isLoggedIn ? (
        <div className="flex bg-blue-500 items-center justify-center gap-15">
        <div className="flex flex-col">
          <img src={img} alt="flipkart logo" className="w-20 cursor-pointer" onClick={goToHome} />
          <a href="#" className="font-semibold">
            Explore <span className="text-orange-400 font-semibold">Plus</span>
          </a>
        </div>
        <div className="m-6 flex">
          <input
            type="text"
            placeholder="Search for Products, Brands and more"
            className="bg-white w-100 p-2 border-white-2 focus-visible:outline-none focus:ring-0 cursor-pointer rounded-bl-sm rounded-tl-sm"
          />
          <img src={search} alt="search" className="w-10 p-2 bg-white cursor-pointer rounded-tr-sm rounded-br-sm" />
        </div>
        <div className="flex justify-around">
          <button
            className="bg-white py-1 px-10 font-semibold text-red-500 cursor-pointer rounded-lg"
            onClick={handleLogout}
          >
            Logout
          </button>
          

        </div>
        <button
              className="text-white text-xl font-semibold rounded-lg cursor-pointer"
              onClick={Gotocart}
            >
              Cart 
              <sup className="ml-2 text-lg ">{cartItemCount > 0 ? cartItemCount : 0}</sup>
            </button>
      </div>
      ) : (
        <div className="flex bg-blue-500 items-center justify-center gap-15">
          <div className="flex flex-col">
            <img src={img} alt="flipkart logo" className="w-20"/>
            <div className="font-semibold">
              Explore <span className="text-orange-400 font-semibold">Plus</span>
          </div>
          </div>
          <div className="m-6 flex">
            <input
              type="text"
              placeholder="Search for Products, Brands and more"
              className="bg-white w-100 p-2 border-white-2 focus-visible:outline-none focus:ring-0 cursor-pointer rounded-bl-sm rounded-tl-sm"
            />
            <img src={search} alt="search" className="w-10 p-2 bg-white cursor-pointer rounded-tr-sm rounded-br-sm" />
          </div>
          <div>
            <button
              className="bg-white py-1 px-10 font-semibold text-blue-500 cursor-pointer rounded-sm"
              onClick={handleLogin}
            >
              Login
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
