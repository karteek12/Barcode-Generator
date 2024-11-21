import React from "react";
import Header from "./Components/Header";
import StockCreationForm from "./Components/StockCreationForm";
import Sidebar from "./Components/Sidebar";

const App = () => {
  return (
    <div className="h-screen flex flex-col bg-gray-100">
      <Header />
      <div className="flex-grow flex p-6 space-x-6">
        <div className="flex-grow">
          <StockCreationForm />
        </div>
        <div className="w-1/4">
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default App;
