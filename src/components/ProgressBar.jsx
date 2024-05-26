import React from "react";

const ProgressBar = ({ completionPercentage }) => {
  // Membulatkan persentase ke bilangan bulat terdekat
  const roundedPercentage = Math.round(completionPercentage);

  return (
    <div className="flex items-center justify-center m-4">
      <div className="bg-white w-full max-w-md rounded-lg p-4 m-2 shadow-lg">
        <p className="text-lg font-bold text-gray-800 mb-2">
          Progres: {roundedPercentage}%
        </p>
        <div className="bg-gray-300 h-6 rounded-full overflow-hidden">
          <div
            className="bg-gradient-to-r from-green-400 to-green-600 h-6 rounded-full"
            style={{ width: `${roundedPercentage}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
