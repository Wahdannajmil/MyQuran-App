import React, { useState, useEffect } from "react";
import axios from "axios";
import KhatamanList from "../components/KhatamanList";
import ProgressBar from "../components/ProgressBar";

const Home = () => {
  const [khatamanList, setKhatamanList] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://6445e9fcee791e1e29f332a7.mockapi.io/api/v1/login-register/user"
      )
      .then((response) => {
        setKhatamanList(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleSelesai = (id) => {
    axios
      .put(
        `https://6445e9fcee791e1e29f332a7.mockapi.io/api/v1/login-register/user/${id}`,
        { selesai: true }
      )
      .then(() => {
        setKhatamanList((prevList) =>
          prevList.map((khataman) =>
            khataman.id === id ? { ...khataman, selesai: true } : khataman
          )
        );
      })
      .catch((error) => {
        console.error("Error marking khataman as selesai:", error);
      });
  };

  const handleBatalSelesai = (id) => {
    axios
      .put(
        `https://6445e9fcee791e1e29f332a7.mockapi.io/api/v1/login-register/user/${id}`,
        { selesai: false }
      )
      .then(() => {
        setKhatamanList((prevList) =>
          prevList.map((khataman) =>
            khataman.id === id ? { ...khataman, selesai: false } : khataman
          )
        );
      })
      .catch((error) => {
        console.error("Error marking khataman as not selesai:", error);
      });
  };

  const jumlahSelesai = khatamanList.filter((khataman) => khataman.selesai).length;
  const totalKhataman = khatamanList.length;
  const completionPercentage = (jumlahSelesai / totalKhataman) * 100;

  return (
    <div>
      <ProgressBar completionPercentage={completionPercentage} />
      <KhatamanList
        khatamanList={khatamanList}
        onSelesai={handleSelesai}
        onBatalSelesai={handleBatalSelesai}
      />
    </div>
  );
};

export default Home;
