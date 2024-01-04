import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import DaftarBelumSelesai from "./pages/DaftarBelumSelesai";
import DaftarSelesai from "./pages/DaftarSelesai";
import NavBar from "./components/Navbar";
import FormInput from "./components/FormInput";
import KhatamanIntentions from "./components/KhatamanIntention";
import Nav from "./components/Nav"
import "./App.css"
import Footer from "./components/Footer";
const App = () => {
  return (
    <>
      <Router>
        <Nav/>
        <KhatamanIntentions />
        {/* <FormInput/> */}
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/daftar-belum-selesai"
            element={<DaftarBelumSelesai />}
          />
          <Route path="/daftar-selesai" element={<DaftarSelesai />} />
        </Routes>
          <Footer/>
      </Router>
    </>
  );
};

export default App;
