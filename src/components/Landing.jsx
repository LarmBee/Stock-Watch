import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { BiUser } from "react-icons/bi";
import { BiBellPlus } from "react-icons/bi";
import { Navigate } from "react-router-dom";
import Home from "./Home";
import { Nav } from "react-bootstrap";
import logout from "../images/logout.png";


const Landing = () => {
	const [data, setData] = useState(null);
	const [stock, setStock] = useState("AAPL");

	const api = `${data?.branding.icon_url}?apiKey=r5oV7vG4aDi6H0oysKHuCjUZ_5s3xSmX`;

	const handleChange = (event) => {
		setStock(event.target.value.toUpperCase());
		console.log("value is:", event.target.value);
	};

	const logout1 = () => {
		navigate("/Login");
		return;
	};

	const navigate = useNavigate();

	const fetchData = () => {
		fetch(
			`https://api.polygon.io/v3/reference/tickers/${stock}?apiKey=r5oV7vG4aDi6H0oysKHuCjUZ_5s3xSmX`
		)
			.then((response) => response.json())
			.then((usefulData) => {
				console.log(usefulData);
				setData(usefulData?.results);
			})
			.catch((e) => {
				console.error(`An error occurred: ${e}`);
			});
	};

	return (
		<>
			<div className="App">
				<nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
					<div className="flex items-center flex-shrink-0 text-white mr-6">
						<span className="font-semibold text-xl tracking-tight">
							StockMinder
						</span>
					</div>
					<div className="block">
						<button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white" onClick={logout1}>
							<span className="text-red-500 text-2xl ">Logout</span>
							<img src={logout} alt="Logout" />
						</button>
					</div>
				</nav>
				<div className="search-container">
					<br />
					<input
						type="text"
						placeholder="Enter ticker symbol"
						className="search text-black font-semibold"
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
					<h1 className="text-5xl font-semibold mt-10">{data?.name}</h1>
					<table className="table">
						<tr className="text-4xl">
							<th>Company</th>
							<th>Stock Ticker</th>
							<th>Market Cap</th>
						</tr>
						<tr className="text-2xl">
							<td>{data?.name}</td>
							<td>{data?.ticker}</td>
							<td>{data?.market_cap}</td>
						</tr>
					</table>
					<img src={api} className="logo mr-20" />
					<h3 className="text-4xl underline">Company Description</h3>
					<p className="company-description text-2xl">
						{data?.description ? data?.description : "Data Not Found"}
					</p>
					<h3 className="text-4xl underline">Company Main Page</h3>
					<a href={data?.homepage_url} target="_blank" className="text-2xl">
						{data?.homepage_url}
					</a>
				</div>
			</div>
		</>
	);
};

export default Landing;
