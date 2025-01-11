import React from "react";
import Navbar from "./components/Navbar";
import CryptoOverview from "./components/CryptoOverview";
import RightPanel from "./components/RightPanel";
import PerformanceAndFundamentals from "./components/PerformanceAndFundamentals";
import Sentiment from "./components/Sentiment";
import AboutBitcoin from "./components/AboutBitcoin";
import Tokenomics from "./components/TokeNomics";
import Team from "./components/Team";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App bg-gray-100 min-h-screen">
      <div className="w-full">
        <Navbar />
      </div>
      <div className="px-6 lg:px-10 py-10 flex flex-col lg:flex-row space-y-10 lg:space-y-0 lg:space-x-10 max-w-[90%] mx-auto">
        <div className="lg:w-3/4 flex-grow">
          <CryptoOverview />
          <div className="mt-10">
            <PerformanceAndFundamentals />
          </div>
          <div className="mt-10">
            <Sentiment />
          </div>
          <div className="mt-10">
            <AboutBitcoin />
          </div>
          <div className="mt-10">
            <Tokenomics />
          </div>
          <div className="mt-10">
            <Team />
          </div>
        </div>
        <div className="lg:w-1/4 flex-grow">
          <RightPanel />
        </div>
      </div>
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
}

export default App;
