import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import "typeface-poppins";

import "../App.css";

const KhatamanList = ({ khatamanList, onSelesai, onBatalSelesai }) => {
  const handleSelesai = (id) => {
    onSelesai(id);
    alert(`Khataman ${khatamanList.find((khataman) => khataman.id === id).nama} Selesai!`);
  };

  const handleBatalSelesai = (id) => {
    onBatalSelesai(id);
    alert(`Batal Selesai Khataman ${khatamanList.find((khataman) => khataman.id === id).nama}`);
  };

  return (
    <div className="container mx-auto my-8 max-w-md">
      {khatamanList.length > 0 ? (
        <ul className="w-full max-w-md">
          {khatamanList.map((khataman) => (
            <li key={khataman.id} className="bg-white border border-gray-300 rounded-lg p-4 m-4 shadow-md font-poppins">
              <div className="flex justify-between items-center text-white">
                <div className="text-lg text-black">
                  Juz {khataman.juz} - {khataman.nama}
                </div>
                <div>
                  {!khataman.selesai ? (
                    <button
                      className="text-white text-2xl font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
                      style={{ color: "#ff4d6d" }}
                      onClick={() => handleSelesai(khataman.id)}
                    >
                      <FontAwesomeIcon icon={faHeartRegular} />
                    </button>
                  ) : (
                    <button
                      className="text-white text-2xl font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
                      style={{ color: "#ff4d6d" }}
                      onClick={() => handleBatalSelesai(khataman.id)}
                    >
                      <FontAwesomeIcon icon={faHeartSolid} />
                    </button>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500 text-center m-4">Daftar khataman kosong.</p>
      )}
    </div>
  );
};

export default KhatamanList;
