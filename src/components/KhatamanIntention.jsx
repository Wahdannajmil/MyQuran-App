import React from "react";
import "typeface-poppins";
import "../App.css";

const KhatamanIntentions = () => {
  return (
    <div className="m-8 max-w-md mx-auto pt-12 font-poppins">
      <h2 className="text-black text-2xl font-bold m-4">Niatkan khataman ini (baca al-fatihah) untuk:</h2>
      <ul className="text-black pl-6 list-inside">
        {[
          "Nabi Muhammad serta sahabat-sahabatnya.",
          "Ibu/Mbah Hj. Husniati",
          "Mbah Masruri",
          "Mbah Suparkah",
          "Mbah Darjo Masilan",
          "Mbah Aisyah",
          "Mbah Karto Sarpin Sk",
          "Mbah Sastro Seno Sk",
          "Mbah H Nur Ali",
          "Mbah Saerozi Sk",
          "Mbah Miun Sk",
          "Mbah Saibani Sk",
          "Mbah Samsuri Sk",
          "Mbah Jono Sk",
          "Mbah Midi",
          "Mbah Masirah",
          "Mbah Yah Sk",
          "Mbah Marjan",
          "Mbah Suyuti Sk",
          "Mbah Kurdi Sk",
          "Mbah H Jazeri Arif",
          "Lik Suhadak",
          "Lik Supriyanto",
          "Mbah Tasmono SK",
          "Lik Sih",
          "Totok Sudarto",
          "Siti Fatimah"
        ].map((item, index) => (
          <li key={index} className="mb-2">
            <span className="text-red-500">&#8226;</span> {item}
          </li>
        ))}
      </ul>
      <h3 className="text-lg m-4 text-black">
        Supaya kita semua diberi kemudahan, kelancaran, keberkahan, dan kesuksesan.
        Serta diberi keselamatan dan dijauhkan dari segala musibah dan marabahaya.
      </h3>
    </div>
    
  );
};

export default KhatamanIntentions;
