import React from 'react'
import { useState,useEffect } from 'react';

const Result = () => {

  const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
   
	useEffect(() => {
	  fetch(`https://api.polygon.io/v3/reference/tickers/AAPL?apiKey=r5oV7vG4aDi6H0oysKHuCjUZ_5s3xSmX`)
		.then(response => response.json())
		.then((usefulData) => {
		  console.log(usefulData);
		  setLoading(false);
		  setData(usefulData?.results);
		})
		.catch((e) => {
		  console.error(`An error occurred: ${e}`)
		});
	}, []);
   
	return (
	  <>
		<div className="App">
		  {loading && <p>Loading...</p>}
		  <h3>{!loading && <p>{data.name}</p>}</h3>
		  <p>{data?.ticker}</p>
		  <p>{data?.name}</p>
		  <p>{data?.currency_name}</p>
		  <p>{data?.market_cap}</p>
		  <p>{data?.description}</p>
		  <h5>Detailed Information</h5>
		  <pre className="data">{JSON.stringify(data, null, 2)}</pre>
		</div>
	  </>
  
  )
}

export default Result