// TrendingCoins.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TrendingCoins = () => {
  const [trendingCoins, setTrendingCoins] = useState([]);

  useEffect(() => {
    const fetchTrendingCoins = async () => {
      try {
        const response = await axios.get('https://api.coingecko.com/api/v3/search/trending');
        const trendingCoinsData = response.data.coins.slice(0, 3).map((item) => item.item);

        // Fetch additional data for each trending coin
        const detailedCoinsData = await Promise.all(
          trendingCoinsData.map(async (coin) => {
            const coinDetails = await axios.get(`https://api.coingecko.com/api/v3/coins/${coin.id}`);
            const percentageChange =
              coinDetails.data.market_data.price_change_percentage_24h || 0;

            return {
              id: coin.id,
              name: coin.name,
              symbol: coin.symbol,
              logo: coinDetails.data.image.small,
              percentageChange: Number(percentageChange.toFixed(2)), // Round to 2 decimal places
              arrowIcon: percentageChange > 0 ? '▲' : '▼', // Up arrow for positive, down arrow for negative
              arrowColor: percentageChange > 0 ? 'text-green-500' : 'text-red-500', // Green for positive, red for negative
            };
          })
        );

        setTrendingCoins(detailedCoinsData);
      } catch (error) {
        console.error('Error fetching trending coins:', error);
      }
    };

    fetchTrendingCoins();
  }, []);

  return (
    <div className="bg-white mt-4 pt-3 rounded-lg text-xl font-semibold">
  <ul>
    {trendingCoins.map((coin) => (
      <li key={coin.id} className="mb-4 p-1 flex justify-between items-center">
        <div className="flex items-center">
          <img src={coin.logo} alt={`${coin.name} logo`} className="h-8 w-8 mr-2 inline-block " />
          {coin.name} ({coin.symbol})
        </div>

        <div className="flex items-center">
          <div
            className={`h-10 w-15 0 p-1 rounded overflow-hidden ${
              coin.percentageChange > 0 ? 'bg-green-100' : 'bg-red-100'
            }`}
          >
            <span className={`text-xl ${coin.arrowColor}`}>
              {coin.arrowIcon} {coin.percentageChange}%
            </span> 
          </div>
        </div>
      </li>
    ))}
  </ul>
</div>



  );
};

export default TrendingCoins;
