import React from "react";
import { Tabs, Tooltip } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";

const PerformanceAndFundamentals = () => {
  const { TabPane } = Tabs;

  return (
    <div className="bg-gray-100 w-full">
      <div className="mb-4">
        <Tabs
          defaultActiveKey="1"
          tabBarStyle={{
            fontSize: "1.5rem",
            fontWeight: "400", 
            marginBottom: "1.5rem",
          }}
        >
          <TabPane
            tab={<span style={{ fontSize: "1.5rem", fontWeight: "400" }}>Overview</span>}
            key="1"
          >
            <div className="bg-white shadow-lg rounded-lg p-6 w-full">
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-6">Performance</h2>
                <div className="grid grid-cols-2 gap-6 items-center">
                  <div>
                    <p className="text-base text-gray-600">Today's Low</p>
                    <p className="font-semibold text-xl">$46,930.22</p>
                  </div>
                  <div className="text-right">
                    <p className="text-base text-gray-600">Today's High</p>
                    <p className="font-semibold text-xl">$49,343.83</p>
                  </div>
                </div>
                <div className="relative w-full h-2 bg-gray-200 rounded mt-4">
                  <div
                    className="absolute h-2 rounded"
                    style={{
                      width: "60%",
                      background: "linear-gradient(to right, #f5222d, #52c41a)",
                    }}
                  ></div>
                  <div
                    className="absolute top-[-20px] left-[60%] translate-x-[-50%] bg-white px-2 py-0.5 rounded text-sm font-medium text-gray-800 shadow-md"
                  >
                    $48,637.83
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6 items-center mt-8">
                  <div>
                    <p className="text-base text-gray-600">52W Low</p>
                    <p className="font-semibold text-xl">$16,930.22</p>
                  </div>
                  <div className="text-right">
                    <p className="text-base text-gray-600">52W High</p>
                    <p className="font-semibold text-xl">$49,743.83</p>
                  </div>
                </div>
                <div className="relative w-full h-2 bg-gray-200 rounded mt-4">
                  <div
                    className="absolute h-2 rounded"
                    style={{
                      width: "80%",
                      background: "linear-gradient(to right, #f5222d, #52c41a)",
                    }}
                  ></div>
                  <div
                    className="absolute top-[-20px] left-[80%] translate-x-[-50%] bg-white px-2 py-0.5 rounded text-sm font-medium text-gray-800 shadow-md"
                  >
                    $48,637.83
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-6">
                  Fundamentals
                  <Tooltip title="Basic financial metrics">
                    <InfoCircleOutlined className="ml-2 text-gray-500" />
                  </Tooltip>
                </h2>
                <div className="grid grid-cols-2 gap-x-8">
                  <div className="space-y-4 border-r border-gray-200 pr-6">
                    <div className="flex justify-between items-center">
                      <p className="text-base text-gray-600">Bitcoin Price</p>
                      <p className="font-semibold text-lg">$16,815.46</p>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-base text-gray-600">24H Low / 24H High</p>
                      <p className="font-semibold text-lg">$16,382.07 / $16,874.12</p>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-base text-gray-600">7D Low / 7D High</p>
                      <p className="font-semibold text-lg">$16,382.07 / $16,874.12</p>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-base text-gray-600">Trading Volume</p>
                      <p className="font-semibold text-lg">$23,249,202,782</p>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-base text-gray-600">Market Cap Rank</p>
                      <p className="font-semibold text-lg">#1</p>
                    </div>
                  </div>
                  <div className="space-y-4 pl-6">
                    <div className="flex justify-between items-center">
                      <p className="text-base text-gray-600">Market Cap</p>
                      <p className="font-semibold text-lg">$323,507,290,047</p>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-base text-gray-600">Market Cap Dominance</p>
                      <p className="font-semibold text-lg">38.343%</p>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-base text-gray-600">Volume / Market Cap</p>
                      <p className="font-semibold text-lg">0.0718</p>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-base text-gray-600">All-Time High</p>
                      <div>
                        <p className="font-semibold text-lg text-red-600">$69,044.77 (-75.6%)</p>
                        <p className="text-sm text-gray-400">Nov 10, 2021</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-base text-gray-600">All-Time Low</p>
                      <div>
                        <p className="font-semibold text-lg text-green-600">$67.81 (24729.1%)</p>
                        <p className="text-sm text-gray-400">Jul 06, 2013</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabPane>
          <TabPane tab={<span style={{ fontSize: "1.5rem", fontWeight: "400" }}>Fundamentals</span>} key="2">
            <p>Fundamentals content coming soon...</p>
          </TabPane>
          <TabPane tab={<span style={{ fontSize: "1.5rem", fontWeight: "400" }}>News Insights</span>} key="3">
            <p>News Insights content coming soon...</p>
          </TabPane>
          <TabPane tab={<span style={{ fontSize: "1.5rem", fontWeight: "400" }}>Sentiments</span>} key="4">
            <p>Sentiments content coming soon...</p>
          </TabPane>
          <TabPane tab={<span style={{ fontSize: "1.5rem", fontWeight: "400" }}>Team</span>} key="5">
            <p>Team content coming soon...</p>
          </TabPane>
          <TabPane tab={<span style={{ fontSize: "1.5rem", fontWeight: "400" }}>Technicals</span>} key="6">
            <p>Technicals content coming soon...</p>
          </TabPane>
          <TabPane tab={<span style={{ fontSize: "1.5rem", fontWeight: "400" }}>Tokenomics</span>} key="7">
            <p>Tokenomics content coming soon...</p>
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
};

export default PerformanceAndFundamentals;
