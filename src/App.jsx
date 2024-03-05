import React from "react";
import WebTraffic from "./components/WebTraffic";
import StockChart from "./components/StockChart";
import EnergyPieChart from "./components/EnergyPieChart";

const App = () => {
  return (
    <>
      <div className="bg-blue-700 overflow-x-hidden w-full py-6 sticky top-0 flex justify-center">
        <h1 className="font-semibold text-3xl text-white">React Charts</h1>
      </div>
      <div className="w-screen overflow-x-hidden bg-blue-200 flex flex-col items-center py-10">
        <p className="text-2xl font-medium">Web Traffic</p>
        <WebTraffic />
        <p className="text-2xl mt-10 mb-5 font-medium">Stock</p>
        <StockChart />
        <p className="text-2xl mt-10 mb-5 font-medium">Energy consumption</p>
        <EnergyPieChart />
      </div>
    </>
  );
};

export default App;
