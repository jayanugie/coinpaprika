import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Search from "../components/Search";

const CoinList = () => {
  return (
    <div>
      <Navbar />
      <main className="container mx-auto lg:px-20 px-5">
        <p className=" text-sm text-neutral-500 py-5">Cont List</p>
        <div className="rounded-md shadow-md p-5 bg-white">
          <p className=" text-sky-700 font-semibold">Coin List</p>
          <Search />

        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CoinList;
