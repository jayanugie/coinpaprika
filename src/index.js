import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// pages
import Home from "./pages/Home";
import CoinList from "./pages/CoinList";
import CoinDetail from "./pages/CoinDetail";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/coin-list" element={<CoinList />} />
      <Route path="/coin-list/:id" element={<CoinDetail />} />
    </Routes>
  </BrowserRouter>
);
