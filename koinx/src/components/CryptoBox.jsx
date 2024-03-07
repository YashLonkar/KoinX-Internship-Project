// CryptoBox.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const formatNumberWithCommas = (number) => {
    if (number >= 1e5 && number < 1e7) {
      // Format in lakhs
      return (number / 1e5).toFixed(2) + 'L';
    } else if (number >= 1e7 && number < 1e9) {
      // Format in crores
      return (number / 1e7).toFixed(2) + 'Cr';
    } else {
      // Format in regular comma-separated format
      return number.toLocaleString();
    }
  };
  
const CryptoBox = ({ coinId }) => {
  const [cryptoData, setCryptoData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr%2Cusd&include_24hr_change=true`
        );
        setCryptoData(response.data[coinId]);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); // Fetch data when the component mounts

    const intervalId = setInterval(fetchData, 86400000); // Update data every 24 hours

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [coinId]);

  if (!cryptoData) {
    return <div>Loading...</div>;
  }


  const roundedChange = cryptoData.usd_24h_change.toFixed(2);
  const changeStyle = roundedChange >= 0 ? 'text-green-600 bg-green-100 font-bold p-[0.8px] w-20 text-center' : 'text-red-600 bg-red-100 font-bold';
  const arrowIcon = roundedChange >= 0 ? '▲' : '▼';
  const arrowColor = roundedChange >= 0 ? 'text-green-600' : 'text-red-600';

  
  return (
    <div className="crypto-box pl-4 pt-7 flex">
      {/* <h2>{coinId}</h2> */}
      <div>
      <p class='text-4xl font-bold font-inter mb-2'>${cryptoData.usd.toLocaleString()}</p>
      <p class="text-xl font-[500] mb-4">₹ {cryptoData.inr.toLocaleString()}</p>
      </div>
      
      <div>
      <div class='ml-9'>
      <p className={`Change (24hr): ${changeStyle}`}>
      <span className={arrowColor}>{arrowIcon}</span> {Math.abs(roundedChange)}%
      </p>
      </div>
      </div>
        <h3 class="font-[400] text-[14px] pl-3 text-[#768396]">(24H)</h3>
      {/* Add other information as needed */}
    </div>
  );
};

export default CryptoBox;
