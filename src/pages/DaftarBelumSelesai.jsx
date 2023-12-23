import React, { useState, useEffect } from "react";
import axios from "axios";
import KhatamanList from "../components/KhatamanList";

const DaftarBelumSelesai = () => {
  const [belumSelesaiList, setBelumSelesaiList] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://6445e9fcee791e1e29f332a7.mockapi.io/api/v1/login-register/user?selesai=false"
      )
      .then((response) => {
        setBelumSelesaiList(response.data);
      })
      .catch((error) => {
        console.error("Error fetching belum selesai data:", error);
      });
  }, []);

  const handleSelesai = (id) => {
    axios
      .put(
        `https://6445e9fcee791e1e29f332a7.mockapi.io/api/v1/login-register/user/${id}`,
        { selesai: true }
      )
      .then(() => {
        setBelumSelesaiList((prevList) =>
          prevList.filter((khataman) => khataman.id !== id)
        );
      })
      .catch((error) => {
        console.error("Error marking khataman as selesai:", error);
      });
  };

  const handleBatalSelesai = (id) => {
    // Tidak perlu melakukan perubahan pada DaftarBelumSelesai karena item tetap belum selesai
  };

  return (
    <div>
      {belumSelesaiList.length > 0 ? (
        <KhatamanList
          khatamanList={belumSelesaiList}
          onSelesai={handleSelesai}
          onBatalSelesai={handleBatalSelesai}
        />
      ) : (
        <p className="text-gray-500 text-center m-4">Daftar Kosong</p>
      )}
    </div>
  );
};

export default DaftarBelumSelesai;
