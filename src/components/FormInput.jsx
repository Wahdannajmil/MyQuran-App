import React, { useState } from "react";

const FormInput = ({ onTambahKhataman }) => {
  const [nama, setNama] = useState("");
  const [juz, setJuz] = useState("");

  const handleTambahKhataman = () => {
    onTambahKhataman({ nama, juz });
    setNama("");
    setJuz("");
  };

  return (
    <div className="container mx-auto my-8 max-w-md m-4">
      <div className="bg-white rounded-md shadow-md p-8 m-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="nama"
        >
          Nama:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="nama"
          type="text"
          placeholder="Masukkan nama"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
        />

        <label
          className="block text-gray-700 text-sm font-bold mb-2 mt-4"
          htmlFor="juz"
        >
          Juz:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="juz"
          type="text"
          placeholder="Masukkan nomor juz"
          value={juz}
          onChange={(e) => setJuz(e.target.value)}
        />

        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded-full focus:outline-none focus:shadow-outline"
          type="button"
          onClick={handleTambahKhataman}
        >
          Tambah
        </button>
      </div>
    </div>
  );
};

export default FormInput;
