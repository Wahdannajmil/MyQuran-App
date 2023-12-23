import React, { useState, useEffect } from "react";
import axios from "axios";
import KhatamanList from "../components/KhatamanList";

const DaftarSelesai = () => {
  const [selesaiList, setSelesaiList] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://6445e9fcee791e1e29f332a7.mockapi.io/api/v1/login-register/user?selesai=true"
      )
      .then((response) => {
        setSelesaiList(response.data);
      })
      .catch((error) => {
        console.error("Error fetching selesai data:", error);
      });
  }, []);

  const handleSelesai = (id) => {
    // Tidak perlu melakukan perubahan pada DaftarSelesai karena item tetap selesai
  };

  const handleBatalSelesai = (id) => {
    axios
      .put(
        `https://6445e9fcee791e1e29f332a7.mockapi.io/api/v1/login-register/user/${id}`,
        { selesai: false }
      )
      .then(() => {
        setSelesaiList((prevList) =>
          prevList.filter((khataman) => khataman.id !== id)
        );
      })
      .catch((error) => {
        console.error("Error marking khataman as not selesai:", error);
      });
  };

  return (
    <div>
      {selesaiList.length > 0 ? (
        <KhatamanList
          khatamanList={selesaiList}
          onSelesai={handleSelesai}
          onBatalSelesai={handleBatalSelesai}
        />
      ) : (
        <p className="text-gray-500 text-center m-4">Daftar Kosong</p>
      )}
    </div>
  );
};

export default DaftarSelesai;
