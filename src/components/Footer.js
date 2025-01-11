import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const Footer = () => {
  const cards = [
    {
      name: "BNB",
      price: "$319.34",
      change: "+0.52%",
      chartData: [300, 310, 315, 320, 319],
      color: "green",
    },
    {
      name: "SOL",
      price: "$109.33",
      change: "-2.98%",
      chartData: [120, 118, 115, 112, 109],
      color: "red",
    },
    {
      name: "XRP",
      price: "$0.634810",
      change: "+0.78%",
      chartData: [0.6, 0.61, 0.62, 0.63, 0.634],
      color: "green",
    },
    {
      name: "ADA",
      price: "$0.614869",
      change: "-1.57%",
      chartData: [0.63, 0.62, 0.615, 0.61, 0.614],
      color: "red",
    },
    {
      name: "AVAX",
      price: "$41.05",
      change: "-3.76%",
      chartData: [44, 43, 42, 41, 40],
      color: "red",
    },
  ];

  const trendingCards = [
    {
      name: "BTC",
      price: "$45,332.83",
      change: "+0.52%",
      chartData: [45000, 45100, 45200, 45300, 45332],
      color: "green",
    },
    {
      name: "ETH",
      price: "$2,375.15",
      change: "-0.21%",
      chartData: [2400, 2390, 2380, 2370, 2375],
      color: "red",
    },
    {
      name: "stETH",
      price: "$2,371.72",
      change: "-0.34%",
      chartData: [2375, 2373, 2372, 2371, 2370],
      color: "red",
    },
    {
      name: "UNI",
      price: "$7.3192",
      change: "-4.02%",
      chartData: [7.5, 7.4, 7.35, 7.32, 7.31],
      color: "red",
    },
    {
      name: "CFG",
      price: "$0.773600",
      change: "-1.76%",
      chartData: [0.8, 0.78, 0.77, 0.773, 0.7736],
      color: "red",
    },
  ];

  const renderChart = (data, color) => {
    return (
      <Line
        data={{
          labels: ["1", "2", "3", "4", "5"],
          datasets: [
            {
              data,
              borderColor: color === "green" ? "#22c55e" : "#ef4444",
              backgroundColor: "transparent",
              borderWidth: 2,
              tension: 0.3,
            },
          ],
        }}
        options={{
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
          },
          scales: {
            x: { display: false },
            y: { display: false },
          },
        }}
        height={50}
      />
    );
  };

  const renderCards = (data) => {
    return data.map((card, index) => (
      <div
        key={index}
        className="border border-gray-200 rounded-lg p-4 flex flex-col items-center justify-center text-center shadow-sm"
      >
        <h4 className="text-xl font-bold">{card.name}</h4>
        <p className="text-lg text-gray-700">{card.price}</p>
        <p
          className={`text-sm ${
            card.color === "green" ? "text-green-500" : "text-red-500"
          }`}
        >
          {card.change}
        </p>
        <div className="w-full h-16 mt-2">{renderChart(card.chartData, card.color)}</div>
      </div>
    ));
  };

  return (
    <div className="bg-white shadow-lg mt-10 w-full">
      <div className="max-w-[90%] mx-auto">
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">You May Also Like</h2>
          <div className="grid grid-cols-5 gap-4">{renderCards(cards)}</div>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Trending Coins</h2>
          <div className="grid grid-cols-5 gap-4">{renderCards(trendingCards)}</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
