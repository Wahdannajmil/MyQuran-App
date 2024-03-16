import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartSolid, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
import axios from "axios";
import "typeface-poppins";

import "../App.css";

const KhatamanList = ({ khatamanList, onSelesai, onBatalSelesai }) => {
  const [editedKhataman, setEditedKhataman] = useState({ id: null, nama: "", juz: "" });

  const handleEdit = (khataman) => {
    setEditedKhataman({ id: khataman.id, nama: khataman.nama, juz: khataman.juz });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedKhataman({ ...editedKhataman, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      await axios.put(`https://6445e9fcee791e1e29f332a7.mockapi.io/api/v1/login-register/user/${editedKhataman.id}`, editedKhataman);
      Swal.fire({
        icon: "success",
        title: "Berhasil!",
        text: "Khataman berhasil diupdate.",
        timerProgressBar: true,
        timer: 3000,
        willClose: () => {
          window.location.reload();
        }
      });
    } catch (error) {
      console.error("Error updating khataman:", error);
      Swal.fire({
        icon: "error",
        title: "Gagal!",
        text: "Terjadi kesalahan saat mengupdate khataman.",
        timerProgressBar: true,
        timer: 3000,
      });
    }
  };

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
      {khatamanList.length > 0 ? (
        <ul className="w-full max-w-md">
          {khatamanList.map((khataman) => (
            <li
              key={khataman.id}
              className={`bg-white border border-gray-300 rounded-lg p-4 m-4 shadow-md font-poppins ${
                khataman.selesai ? 'bg-green-100' : ''
              }`}
            >
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
                  {/* <button
                    className="text-2xl font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline ml-2"
                    style={{ color: "#1E40AF" }}
                    onClick={() => handleEdit(khataman)}
                  >
                    ✏️
                  </button> */}
                </div>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500 text-center m-4">Daftar khataman kosong.</p>
      )}

      {/* Edit Form */}
      {editedKhataman.id && (
        <div className="fixed bottom-0 left-0 right-0 bg-white p-4 shadow-md">
          <div className="flex items-center justify-between">
            <input
              type="text"
              name="nama"
              value={editedKhataman.nama}
              onChange={handleChange}
              placeholder="Nama"
              className="py-2 px-4 border rounded-md"
            />
            <input
              type="text"
              name="juz"
              value={editedKhataman.juz}
              onChange={handleChange}
              placeholder="Juz"
              className="py-2 px-4 border rounded-md ml-2"
            />
            <button
              onClick={handleSubmit}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-2"
            >
              Simpan
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default KhatamanList;
