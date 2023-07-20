import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import logout from "../images/logout.png";
import mainimg from '../images/12219241_4911339.svg';

const Home = (props) => {
	const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/Result");
  };

  return (
    <div className="flex flex-col min-h-screen max-h-screen">
      <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="font-semibold text-xl tracking-tight">StockMinder</span>
        </div>
        <div className="block">
		
          <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
		  <span className="text-red-500 text-2xl ">Logout</span>
			<img src={logout} alt="Logout" />
          </button>
        </div>
      </nav>
      <div className="flex flex-1">
        <div className="flex flex-col justify-center overflow-hidden w-1/2 border-solid border-cyan-400">
          <p className="text-7xl mt-12 pl-28 overflow-hidden">Streamline</p>
          <p className="text-7xl ml-8 pl-28 overflow-hidden">your</p>
          <p className="text-7xl ml-16 pl-28 text-teal-200 overflow-hidden">portfolio</p>
          <p className="text-3xl pl-28 mt-12 overflow-hidden">Welcome to StockMinder</p>
          <p className="text-2xl pl-28 mt-2">Discover real-time stock information at your fingertips.<br/> StockView is your go-to app for tracking and analyzing <br/>stock data from a wide range of sources</p>

          <button className="ml-28 mt-4 w-40 bg-blue-500 text-white font-bold py-2 px-4 rounded" onClick={handleButtonClick}>
            Get Started
          </button>
        </div>
        <div className=" h-2/6 shadow-none w-96 mt-24">
          <img src={mainimg} alt="Stocks" className="w-full h-full shadow-xl rounded"/>
        </div>
      </div>
      <footer className="bg-black h-16 flex items-center">
        <p className="text-white mx-auto">Made by Brandon Kanute</p>
      </footer>
    </div>
  );
};

export default Home;
