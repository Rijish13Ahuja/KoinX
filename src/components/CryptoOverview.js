import React, { useState, useEffect } from "react";
import TradingViewWidget from "./TradingViewWidget"; 
import axios from "axios";

const CryptoOverview = () => {
  const [cryptoData, setCryptoData] = useState(null);
  const [interval, setInterval] = useState("7D");

  useEffect(() => {
    const fetchCryptoData = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/simple/price",
          {
            params: {
              ids: "bitcoin",
              vs_currencies: "usd,inr",
              include_24hr_change: true,
            },
          }
        );
        setCryptoData(response.data.bitcoin);
      } catch (error) {
        console.error("Error fetching crypto data:", error);
      }
    };

    fetchCryptoData();
  }, []);

  return (
    <div className="bg-gray-100 flex justify-between items-start">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full">
        <div className="text-sm text-gray-500 mb-4">
          <span>Cryptocurrencies</span>
          <span className="mx-2 text-gray-400"> &gt; </span>
          <span className="font-semibold text-gray-700">Bitcoin</span>
        </div>
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center space-x-4">
            <img
              src="https://cryptologos.cc/logos/bitcoin-btc-logo.png"
              alt="Bitcoin"
              className="w-12 h-12"
            />
            <div>
              <h1 className="text-3xl font-bold flex items-center space-x-2">
                <span>Bitcoin</span>
                <span className="text-gray-500 text-lg">BTC</span>
              </h1>
              <span className="text-sm bg-gray-200 text-gray-700 px-2 py-1 rounded-md">
                Rank #1
              </span>
            </div>
          </div>
          <div className="text-right">
            <h2 className="text-4xl font-bold">
              ${cryptoData ? cryptoData.usd.toLocaleString() : "Loading..."}
            </h2>
            <h3 className="text-gray-500 text-xl">
              ₹{cryptoData ? cryptoData.inr.toLocaleString() : "Loading..."}
            </h3>
            <p
              className={`text-sm ${
                cryptoData?.usd_24h_change > 0
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {cryptoData?.usd_24h_change !== undefined
                ? `${cryptoData.usd_24h_change.toFixed(2)}%`
                : "N/A"}{" "}
              (24H)
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center mb-6 border-b pb-3">
          <h2 className="text-lg font-semibold">Bitcoin Price Chart (USD)</h2>
          <div className="flex space-x-2">
            {["1H", "24H", "7D", "1M", "3M", "1Y", "ALL"].map((tab) => (
              <button
                key={tab}
                onClick={() => setInterval(tab)}
                className={`px-4 py-2 text-sm rounded ${
                  interval === tab
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
        <div>
          <div className="w-full h-[600px] bg-gray-100 rounded-md overflow-hidden">
            <TradingViewWidget />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CryptoOverview;
