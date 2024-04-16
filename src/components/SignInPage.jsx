import React, { useEffect, useState } from "react";
import Image1 from "../assets/WhatsApp Image 2024-04-15 at 20.51.58.jpeg";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../authSlice";
import { json, useNavigate } from "react-router-dom";

const SignInPage = () => {
  const user = JSON.parse(sessionStorage.getItem('user'));
  console.log(user)
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const isToken = useSelector(state=>state.auth.token)


  const handleOnChange = (e) => {
    setInputs((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  };

  useEffect(()=>{
dispatch(login(user))
  },[user])

  const loginHandler = async () => {
    try{
        const res = await axios.post(`https://reqres.in/api/login`,inputs)

        console.log(res)

        sessionStorage.setItem("user", JSON.stringify(res.data.token));

        dispatch(login(res.data.token))

        navigate("/")
        

    }catch(error){

        console.log(error)

    }
  }

  console.log(inputs)

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url("https://wallpapers.com/images/high/glowing-blockchain-lights-s84k6jugyy31lai3.webp")`,
        backgroundSize: "cover",
        //backgroundColor:"#F5F1EC"
        backgroundColor:"midnightblue"
      }}
    >
      <div className="max-w-md w-full p-6 bg-white rounded-md shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
        <div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={inputs?.email}
              onChange={handleOnChange}
              className="mt-1 px-4 py-2 w-full border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={inputs?.password}
              onChange={handleOnChange}
              className="mt-1 px-4 py-2 w-full border rounded-md"
            />
          </div>
          <button
            //type="submit"
            onClick={loginHandler}
            className="w-full bg-blue-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
