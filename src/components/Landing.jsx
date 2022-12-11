import React, { useState, useEffect } from "react";
import "../App.css";
import Button from "react-bootstrap/Button";
import { BiUser } from "react-icons/bi";
import { BiBellPlus } from "react-icons/bi";

const Landing = () => {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [stock, setStock] = useState("AAPL");

	const api = `${data?.branding.icon_url}?apiKey=r5oV7vG4aDi6H0oysKHuCjUZ_5s3xSmX`;

	const handleChange = (event) => {
		setStock(event.target.value.toUpperCase());
		console.log("value is:", event.target.value);
	};

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
			<div className="App">
				<div className="search-container">
					{loading && <p>Loading...</p>}
					<label>
						<u>INPUT STOCK TICKER</u>
					</label>
					<br />
					<input
						type="text"
						placeholder="Enter ticker symbol"
						className="search"
						onChange={handleChange}
					></input>
					<Button
						variant="primary"
						type="submit"
						className="search_button"
						onClick={fetchData}
					>
						Search
					</Button>
				</div>
				<hr className="line" />
				<div className="result-container">
					<img src={api} className="logo" />
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
					<h3>Company Description</h3>
					<p>{data?.description ? data?.description : "Data Not Found"}</p>
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
