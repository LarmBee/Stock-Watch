import React, { useState } from "react";
import "./Home.css";
import man from "../images/man.png";
import pic1 from "../images/pic1.jpg";

const Home = (props) => {
	const [bgColor, setBgColor] = useState("#ff816a");

	const handleButtonClick = () => {
		setBgColor("#00FF00");
		setTimeout(() => {
			setBgColor("#ff816a");
		}, 2000);
	};
	return (
		<div className="homepage">
			<nav className="home-content">
				<div className="navbar-left"></div>
				<div className="navbar-center">
					<span>StockApp</span>
				</div>
				<div className="navbar-right">
					<span>Hi ,Brandon</span>
					<img src={man} alt="User avatar" />
				</div>
			</nav>
			<div className="homepage-content">
				<img src={pic1} className="image-back"/>
				<p className="homepage-text">Keep tabs of your Stock portfolio</p>
				<button
					className="home-button"
					style={{ backgroundColor: bgColor }}
					onClick={handleButtonClick}
				>
					Get Started
				</button>
			</div>
			<p className="homepage-instructions">
				<ul>
					<li>Check current stock information easily </li>
					<br />
					<li>
						All you have to do is input any stock ticker symbol (APPL, TSLA ...)
					</li>
					<br />
					<li>Hit the search button</li>
				</ul>
			</p>
		</div>
	);
};

export default Home;
