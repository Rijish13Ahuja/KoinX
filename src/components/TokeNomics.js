import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const TokeNomics = () => {
  const data = {
    labels: ["Crowdsale investors: 80%", "Foundation: 20%"],
    datasets: [
      {
        label: "Initial Distribution",
        data: [80, 20],
        backgroundColor: ["#007bff", "#ff9900"], 
        borderWidth: 1,
      },
    ],
  };
  const options = {
    plugins: {
      legend: {
        display: true,
        position: "right",
        labels: {
          font: {
            size: 14,
          },
        },
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mt-10">
      <h2 className="text-3xl font-bold mb-6">Tokenomics</h2>
      <h3 className="text-2xl font-semibold mb-6">Initial Distribution</h3>
      <div className="flex items-center">
        <div className="w-1/2 h-64">
          <Doughnut data={data} options={options} />
        </div>
      </div>
      <div className="mt-8">
  <p className="text-xl text-gray-700 leading-relaxed">
    Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique ornare vestibulum nunc dignissim vel consequat.
    Leo etiam nascetur bibendum amet enim sit eget leo amet. At metus orci augue fusce eleifend lectus eu fusce
    adipiscing. Volutpat ultrices nibh sodales massa habitasse urna felis augue. Gravida aliquam fermentum augue eu.
    Imperdiet bibendum amet aliquam donec. Eget justo dui metus odio rutrum. Vel ipsum eget in at curabitur sem posuere
    facilisis vitae. Sed lorem sit mauris id eget arcu ut. Vulputate ipsum aliquet odio nisi eu ac risus.
  </p>
</div>

    </div>
  );
};

export default TokeNomics;
