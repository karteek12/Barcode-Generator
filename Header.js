import React from "react";

const Header = () => {
  return (
    <header className="flex items-center justify-between bg-white shadow p-4">
      <div className="flex items-center">
        
        <span className="ml-2 text-lg font-semibold">Kitaabh</span>
      </div>
      <div className="flex items-center space-x-4">
        <select className="border border-gray-300 p-2 rounded">
          <option>Company Name</option>
        </select>
        <input
          type="text"
          placeholder="Search"
          className="border border-gray-300 p-2 rounded w-48"
        />
        <div className="flex space-x-4">
          <button className="bg-gray-200 p-2 rounded">+</button>
          <button className="bg-gray-200 p-2 rounded">🔔</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
