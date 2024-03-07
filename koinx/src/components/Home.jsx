import React from 'react';
import btc from "../assets/images/btc.png";
import CryptoBox from './CryptoBox';
import TradingChart from './TradingChart';
import img_frame from "../assets/images/img_frame.svg";
import TrendingCoins from './TrendingCoins';
import Header2 from './Header2';

function Home() {
  return (
    <div className="flex pt-16 font-inter">
      <div className="flex flex-col w-[70%]">
        <div className="bg-white ml-16 p-4 w-[90%] h-[850px] mr-6 rounded-3xl">
          <div className="flex items-center p-3 pt-5">
            <img src={btc} className="h-14 w-14 mr-4" alt="Bitcoin Logo" />
            <h3 className="text-4xl font-[600]">Bitcoin</h3>
            <h4 className="ml-3 text-2xl font-semibold text-[#5d667b]">BTC</h4>
            <div className="px-4 py-2 bg-[#768396] ml-12 text-white rounded-lg font-[500] text-2xl align-middle">
              <h3>Rank #1</h3>
            </div>
          </div>
          <div>
            <CryptoBox coinId="bitcoin"/>
            <hr className="h-[1.5px] my-5 w- bg-gray-200 border-0 dark:bg-gray-300" />
            <div>
              <TradingChart/>
            </div>
          </div>
          
        </div>
        <div class="w-[90%] ml-16">
        <Header2/>
        </div>

        
      </div>
      

      <div className="flex flex-col w-[30%] mr-10">
        <div className="bg-[#0052fe] p-4 w-full h-[600px] rounded-3xl">
          <h3 className="text-white text-3xl font-semibold text-center mt-8">
            Get Started for KoinX <br/> For FREE
          </h3>
          <p className="text-white mt-6 text-center">
            With our range of features that you can equip for free, KoinX allows you to be more educated and aware of your tax reports.
          </p>
          <img src={img_frame} className='pt-9 mx-auto h-[250px]' alt="KoinX Frame" />
          <button className="bg-white p-4 mt-5 rounded-lg text-black font-semibold block mx-auto">Get Started For Free 🡢</button>
        </div>

        <div className="bg-white p-4 w-full h-[280px] rounded-3xl mt-6">
          <h3 className='pt-2 pl-3 font-semibold text-3xl'>
            Trending Coins (24h)
            <TrendingCoins />
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Home;
