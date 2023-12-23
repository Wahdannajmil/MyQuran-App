import React from "react";

const ProgressBar = ({ completionPercentage }) => {
  return (
    <div className="flex items-center justify-center m-4">
      <div className="bg-gray-200 w-full max-w-md rounded-lg p-4 m-2">
        <p className="text-lg font-bold text-gray-700 mb-2">
          Progress: {completionPercentage.toFixed(2)}%
        </p>
        <div className="bg-gray-300 h-4 rounded-full">
          <div
            className="bg-green-500 h-4 rounded-full"
            style={{ width: `${completionPercentage}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
