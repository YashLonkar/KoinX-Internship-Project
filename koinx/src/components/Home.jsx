import React from 'react';
import btc from "../assets/images/btc.png";

function Home() {
  return (
    <div className="flex pt-16">
      <div className="bg-white ml-16 p-4 w-[90%] h-[600px] mr-6 rounded-3xl">
        <div class="flex items-center p-3 pt-5">
          <img src={btc} class="h-14 w-14 mr-4"></img>
          <h3 class="text-4xl font-[600]">Bitcoin</h3>
          <h4 class="ml-3 text-2xl font-semibold text-[#5d667b]">BTC</h4>
          <div class="px-4 py-2 bg-[#768396] ml-12 text-white rounded-lg font-[500] text-2xl align-middle">
            <h3>Rank #1</h3>
          </div>
        </div>
      </div>
      <div className="bg-[#0052fe] mr-16 p-4 w-[35%] h-[600px] rounded-3xl">
        <h3 class="text-white text-3xl font-semibold text-center mt-8">
          Get Started for KoinX <br/> For FREE
        </h3>
        <p class="text-white mt-6 pl-6 pr-6">
        With our range of features that you can equip for free,KoinX allows you to be more educated and aware of your tax reports.
        </p>
      </div>
      
    </div>
  );
}

export default Home;
