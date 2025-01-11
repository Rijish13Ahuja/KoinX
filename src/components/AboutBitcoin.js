import React from "react";

const AboutBitcoin = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-8 mt-10">
      <div className="mb-6">
        <h2 className="text-4xl font-bold mb-4">About Bitcoin</h2>
      </div>

      <div className="mb-8">
        <h3 className="text-3xl font-semibold mb-4">What is Bitcoin?</h3>
        <p className="text-xl text-gray-700 leading-relaxed">
          Bitcoin’s price today is US$16,951.82, with a 24-hour trading volume of
          $19.14 B. BTC is +0.36% in the last 24 hours. It is currently -7.70% from
          its 7-day all-time high of $18,366.66, and 3.40% from its 7-day all-time
          low of $16,394.75. BTC has a circulating supply of 19.24 M BTC and a max
          supply of 21 M BTC.
        </p>
      </div>
      <hr className="border-t border-gray-200 my-6" />
      <div>
        <h3 className="text-3xl font-semibold mb-4">Lorem ipsum dolor sit amet</h3>
        <p className="text-xl text-gray-700 leading-relaxed mb-6">
          Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis tristique
          pharetra. Diam id et lectus urna et tellus aliquam dictum at. Viverra diam
          suspendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien morbi
          sodales odio sed rhoncus. Ultricies urna volutpat pendisse enim facilisi diam ut
          sed. Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus.
        </p>
        <p className="text-xl text-gray-700 leading-relaxed mb-6">
          Diam praesent massa dapibus magna aliquam a dictumst volutpat. Egestas vitae
          pellentesque auctor amet. Nunc sagittis libero adipiscing cursus felis
          pellentesque interdum. Odio cursus phasellus velit in senectus enim dui. Turpis
          tristique placerat interdum sed volutpat. Id imperdiet magna eget eros donec
          cursus nunc. Mauris faucibus diam mi nunc praesent massa turpis a. Integer
          dignissim augue viverra nulla et quis lobortis phasellus. Integer pellentesque
          enim convallis ultricies at.
        </p>
        <p className="text-xl text-gray-700 leading-relaxed">
          Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa vel
          convallis duis ac. Mi adipiscing semper scelerisque porttitor pulvinar nunc
          risus. Fermentum potenti iaculis lacinia congue ipsum fames amet dui. Purus
          ultrices tincidunt volutpat in eget. Ullamcorper dui.
        </p>
      </div>
      <hr className="border-t border-gray-200 my-8" />
      <div className="mb-8">
        <h3 className="text-3xl font-semibold mb-6">Already Holding Bitcoin?</h3>
        <div className="grid grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="bg-gradient-to-r from-green-400 to-blue-500 text-white p-6 rounded-lg shadow-lg flex flex-col justify-between">
            <div>
              <h4 className="text-2xl font-semibold mb-4">Calculate your Profits</h4>
              <p className="text-lg leading-relaxed">
                Easily calculate how much profit you’ve made from your Bitcoin holdings.
              </p>
            </div>
            <button className="mt-6 bg-white text-green-500 font-medium py-2 px-4 rounded-lg shadow-md hover:bg-gray-100 flex items-center justify-center">
              Check Now <span className="ml-2">→</span>
            </button>
          </div>
          {/* Card 2 */}
          <div className="bg-gradient-to-r from-orange-400 to-red-500 text-white p-6 rounded-lg shadow-lg flex flex-col justify-between">
            <div>
              <h4 className="text-2xl font-semibold mb-4">Calculate your tax liability</h4>
              <p className="text-lg leading-relaxed">
                Stay compliant by calculating taxes on your Bitcoin transactions.
              </p>
            </div>
            <button className="mt-6 bg-white text-orange-500 font-medium py-2 px-4 rounded-lg shadow-md hover:bg-gray-100 flex items-center justify-center">
              Check Now <span className="ml-2">→</span>
            </button>
          </div>
        </div>
      </div>
      <p className="text-xl text-gray-700 leading-relaxed">
        Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa vel
        convallis duis ac. Mi adipiscing semper scelerisque porttitor pulvinar nunc
        risus. Fermentum potenti iaculis lacinia congue ipsum fames amet dui. Purus
        ultrices tincidunt volutpat in eget. Ullamcorper dui.
      </p>
    </div>
  );
};

export default AboutBitcoin;
