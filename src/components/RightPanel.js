import React, { useEffect, useState } from "react";
import axios from "axios";

const RightPanel = () => {
  const [trendingCoins, setTrendingCoins] = useState([]);

  useEffect(() => {
    const fetchTrendingCoins = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/search/trending"
        );
        setTrendingCoins(response.data.coins.slice(0, 3));
      } catch (error) {
        console.error("Error fetching trending coins:", error);
      }
    };

    fetchTrendingCoins();
  }, []);

  return (
    <div className="space-y-6">
      <div className="bg-blue-500 text-white rounded-lg shadow-md p-6 flex flex-col justify-center items-center space-y-6 h-[700px]">
        <h2 className="text-2xl font-bold text-center">Get Started with KoinX for FREE</h2>
        <p className="text-center text-base leading-relaxed">
          With our range of features that you can equip for free, KoinX allows you to be more
          educated and aware of your tax reports.
        </p>
        <img src="https://www.shutterstock.com/image-vector/beauty-cartoon-business-woman-use-260nw-597025328.jpg" alt="KoinX Illustration" className="w-40 h-auto" />
        <button className="bg-white text-blue-500 font-semibold px-5 py-3 rounded-lg shadow-md hover:bg-gray-100">
          Get Started for FREE &rarr;
        </button>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold mb-6">Trending Coins (24h)</h2>
        <ul className="space-y-5">
          {trendingCoins.map((coin) => (
            <li key={coin.item.id} className="flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <img src={coin.item.small} alt={coin.item.name} className="w-8 h-8 rounded-full" />
                <span className="text-base font-semibold">
                  {coin.item.name} ({coin.item.symbol.toUpperCase()})
                </span>
              </div>
              <span className="text-base font-bold text-green-600">
                {coin.item.price_btc.toFixed(2)}%
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RightPanel;
