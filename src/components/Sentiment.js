import React from "react";
import { Tooltip } from "antd";
import { InfoCircleOutlined, RightOutlined } from "@ant-design/icons";

const Sentiment = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-4">
          Sentiment
          <Tooltip title="Market sentiment analysis">
            <InfoCircleOutlined className="ml-2 text-gray-500" />
          </Tooltip>
        </h2>
      </div>
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Key Events</h3>
        <div className="flex space-x-4">
          <div className="bg-blue-100 rounded-lg p-4 flex items-start space-x-4 w-1/2">
            <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center text-lg">
              <i className="fas fa-bullhorn"></i>
            </div>
            <div>
              <p className="font-semibold text-base text-gray-800 mb-1">
                Lorem ipsum dolor sit amet consectetur.{" "}
                <span className="font-bold">
                  Dui vel quis dignissim mattis enim tincidunt.
                </span>
              </p>
              <p className="text-sm text-gray-600">
                Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est
                faucibus metus quis. Amet sapien quam viverra adipiscing
                condimentum. Ac consectetur et pretium in a bibendum in. Sed
                vitae sit nisi viverra natoque lacinia libero enim.
              </p>
            </div>
          </div>
          <div className="bg-green-100 rounded-lg p-4 flex items-start space-x-4 w-1/2 relative">
            <div className="bg-green-600 text-white rounded-full w-10 h-10 flex items-center justify-center text-lg">
              <i className="fas fa-chart-line"></i>
            </div>
            <div>
              <p className="font-semibold text-base text-gray-800 mb-1">
                Lorem ipsum dolor sit amet consectetur.{" "}
                <span className="font-bold">
                  Dui vel quis dignissim mattis enim tincidunt.
                </span>
              </p>
              <p className="text-sm text-gray-600">
                Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est
                faucibus metus quis. Amet sapien quam viverra adipiscing
                condimentum. Ac consectetur et pretium in a bibendum in. Sed
                vitae sit nisi viverra natoque lacinia libero enim.
              </p>
            </div>
            <button className="absolute top-1/2 right-[-10px] transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg">
              <RightOutlined className="text-gray-600" />
            </button>
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-4">
          Analyst Estimates
          <Tooltip title="Buy/Sell/Hold sentiment based on analysis">
            <InfoCircleOutlined className="ml-2 text-gray-500" />
          </Tooltip>
        </h3>
        <div className="flex items-center space-x-8">
          <div className="text-center">
            <div className="text-green-500 font-bold text-4xl">76%</div>
            <p className="text-gray-600 text-base mt-2">Buy</p>
          </div>
          <div className="flex-grow">
            <div className="relative h-2 bg-gray-200 rounded">
              <div
                className="absolute h-2 bg-green-500 rounded"
                style={{ width: "76%" }}
              ></div>
            </div>
            <div className="flex justify-between text-sm mt-2">
              <span className="text-gray-600">Buy</span>
              <span className="text-gray-600">76%</span>
            </div>

            <div className="relative h-2 bg-gray-200 rounded mt-4">
              <div
                className="absolute h-2 bg-gray-400 rounded"
                style={{ width: "8%" }}
              ></div>
            </div>
            <div className="flex justify-between text-sm mt-2">
              <span className="text-gray-600">Hold</span>
              <span className="text-gray-600">8%</span>
            </div>

            <div className="relative h-2 bg-gray-200 rounded mt-4">
              <div
                className="absolute h-2 bg-red-500 rounded"
                style={{ width: "16%" }}
              ></div>
            </div>
            <div className="flex justify-between text-sm mt-2">
              <span className="text-gray-600">Sell</span>
              <span className="text-gray-600">16%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sentiment;
