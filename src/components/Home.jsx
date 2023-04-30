import React, {useState} from "react";
import "./Home.css";
import man from '../images/man.png'
import pic1 from '../images/pic1.jpg'

const Home = (props) => {
    const [bgColor, setBgColor]=useState("#ff816a")

    const handleButtonClick = () => {
        setBgColor('#00FF00');
        setTimeout(()=>{
            setBgColor('#ff816a')
        },2000)
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
                <div className="background-image"/>
                <p className="homepage-text">
                    Keep tabs of your Stock portfolio
                </p>
                <button className="home-button" style={{ backgroundColor: bgColor }} onClick={handleButtonClick}>Get Started</button>
            </div>
		</div>
	);
};

export default Home;
