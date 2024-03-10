import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartSolid, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
import "typeface-poppins";

import "../App.css";

const KhatamanList = ({ khatamanList, onSelesai, onBatalSelesai }) => {
  // Fungsi untuk mengurutkan khataman berdasarkan juz dari angka kecil ke besar
  const sortedKhatamanList = khatamanList.sort((a, b) => a.juz - b.juz);

  const handleSelesai = (id, nama) => {
    onSelesai(id);
    Swal.fire({
      icon: "success",
      title: "Khataman Selesai!",
      text: `Khataman ${nama} Selesai!`,
      timerProgressBar: true,
      timer: 3000,
      willClose: () => {
        // Do something when modal closes
      }
    });
  };

  const handleBatalSelesai = (id, nama) => {
    onBatalSelesai(id);
    Swal.fire({
      icon: "info",
      title: "Batal Selesai",
      text: `Batal Selesai Khataman ${nama}`,
      timerProgressBar: true,
      timer: 3000,
      willClose: () => {
        // Do something when modal closes
      }
    });
  };

  return (
    <div className="container mx-auto my-8 max-w-md">
      {sortedKhatamanList.length > 0 ? (
        <ul className="w-full max-w-md">
          {sortedKhatamanList.map((khataman) => (
            <li key={khataman.id} className={`bg-white border border-gray-300 rounded-lg p-4 m-4 shadow-md font-poppins ${khataman.selesai ? 'bg-green-100' : ''}`}>
              <div className="flex justify-between items-center text-black">
                <div className="text-lg">
                  Juz {khataman.juz} - {khataman.nama}
                  {khataman.selesai && (
                    <span className="ml-2 text-green-500">
                      <FontAwesomeIcon icon={faCheckCircle} /> Selesai
                    </span>
                  )}
                </div>
                <div>
                  {!khataman.selesai ? (
                    <button
                      className="text-2xl font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
                      style={{ color: "#ff4d6d" }}
                      onClick={() => handleSelesai(khataman.id, khataman.nama)}
                    >
                      <FontAwesomeIcon icon={faHeartRegular} />
                    </button>
                  ) : (
                    <button
                      className="text-2xl font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
                      style={{ color: "#ff4d6d" }}
                      onClick={() => handleBatalSelesai(khataman.id, khataman.nama)}
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
