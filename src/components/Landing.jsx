import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";
import Button from "react-bootstrap/Button";
import { BiUser } from "react-icons/bi";
import { BiBellPlus } from "react-icons/bi";
import { logout, auth, db } from "../firebase";
import { Navigate } from "react-router-dom";
import Home from "./Home";

const Landing = () => {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [stock, setStock] = useState("AAPL");

	const api = `${data?.branding.icon_url}?apiKey=r5oV7vG4aDi6H0oysKHuCjUZ_5s3xSmX`;

	const handleChange = (event) => {
		setStock(event.target.value.toUpperCase());
		console.log("value is:", event.target.value);
	};

	const logout = (()=>{
		navigate("/Login");
		return;
	})

	const navigate =useNavigate()

	const fetchData = () => {
		fetch(
			`https://api.polygon.io/v3/reference/tickers/${stock}?apiKey=r5oV7vG4aDi6H0oysKHuCjUZ_5s3xSmX`
		)
			.then((response) => response.json())
			.then((usefulData) => {
				console.log(usefulData);
				setLoading(false);
				setData(usefulData?.results);
			})
			.catch((e) => {
				console.error(`An error occurred: ${e}`);
			});
	};

	return (
		<>
			<Home/>
			<div className="App">
			<Button
					variant="danger"
					type="submit"
					className="logout-button"
					onClick={logout}
				>
					LogOut
				</Button>
				<div className="search-container">
					{loading && <p>Loading...</p>}
					<br />
					<input
						type="text"
						placeholder="Enter ticker symbol"
						className="search"
						onChange={handleChange}
						defaultValue="AAPL"
					></input>
					<Button
						variant="primary"
						type="submit"
						className="search_button"
						onClick={fetchData}
						placeholder="Enter Ticker Symbol"
					>
						Search
					</Button>
				</div>

				<div className="result-container">
					<h1>{data?.name}</h1>
					<table className="table">
						<tr>
							<th>Company</th>
							<th>Stock Ticker</th>
							<th>Market Cap</th>
						</tr>
						<tr>
							<td>{data?.name}</td>
							<td>{data?.ticker}</td>
							<td>{data?.market_cap}</td>
						</tr>
					</table>
					<img src={api} className="logo" />
					<h3>Company Description</h3>
					<p className="company-description">{data?.description ? data?.description : "Data Not Found"}</p>
					<h3>Company Main Page</h3>
					<a href={data?.homepage_url} target="_blank">
						{data?.homepage_url}
					</a>
				</div>
			</div>
		</>
	);
};

export default Landing;
