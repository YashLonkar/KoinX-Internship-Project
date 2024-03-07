import React from 'react';
import logo from "../assets/images/logo.svg"
function Header() {
  return (
    <div className="bg-white p-[1px] flex items-center justify-between">
      <img src={logo} className='ml-12 h-10'></img>
      <div class='flex flex-row p-5 text-base font-semibold items-center font-inter text-[#0e1529] text-[1.1rem]'>
        <h3  class='mr-10'>Crypto Taxes</h3> 
        <h3  class='mr-10'>Free Tools</h3> 
        <h3  class='mr-12'>Resource Center</h3> 
        <button class='mr-3 font-normal text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text- px-7 py-3  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mr-6'>Get Started</button>
       
      </div>
    </div>
    
  );
}

export default Header;
