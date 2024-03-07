import React from 'react';

const HeaderItem = ({ text }) => (
  <div className="relative cursor-pointer">
    <h3 className='mr-12 hover:text-blue-500 relative group'>
      {text}
      <div className="absolute bottom-0 left-0 w-full bg-transparent h-0.5 transition-all duration-300 group-hover:bg-blue-500"></div>
    </h3>
  </div>
);

function Header2() {
  return (
    <div className="p-[1px] flex items-center justify-between mt-3 w-90%">
      <div className='flex flex-row p-5 text-base font-medium items-center font-inter text-[#0e1529] text-[1.1rem]'>
        <HeaderItem text="Overview" />
        <HeaderItem text="Fundamentals" />
        <HeaderItem text="News Insights" />
        <HeaderItem text="Sentiments" />
        <HeaderItem text="Team" />
        <HeaderItem text="Technicals" />
        <HeaderItem text="Tokenomics" />
      </div>
    </div>
  );
}

export default Header2;
