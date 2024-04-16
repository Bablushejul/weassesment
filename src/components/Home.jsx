import React from "react";
import { logout } from "../authSlice";
import { useDispatch, useSelector } from "react-redux";
import { json, useNavigate } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    sessionStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
       // backgroundColor: "cadetblue",
       backgroundSize: "cover",
        backgroundImage: `url("https://wallpapers.com/images/high/blockchain-minimalist-illustration-6tl7o5lapm0h6s5d.webp")`,
      }}
    >
      <button
        className="self-end mr-4 mt-4 bg-blue-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
        onClick={handleLogout}
      >
        Logout
      </button>
      <div className="flex-grow flex items-center justify-center text-center">
        <div className="max-w-md w-full p-6 bg-white rounded-md shadow-md">
          <div
            className="mt-1 px-4 py-2 w-full border rounded-md"
            style={{ color: "#94794d" }}
          >
            "Welcome to our page! 🌟 We're thrilled to have you here. Whether
            you're a first-time visitor or a returning friend, we're excited to
            share our latest updates, products, and stories with you. Take a
            look around, explore what we have to offer, and feel free to reach
            out if you have any questions or just want to say hello. Thanks for
            dropping by!"
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
