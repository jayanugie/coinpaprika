import axios from "axios";
import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Search from "../components/Search";
import Table from "../components/Table";

const CoinList = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchingCoins = async () => {
    setLoading(true);
    const data = await axios.get("https://api.coinpaprika.com/v1/coins");
    setCoins(data.data.slice(0,50));
    setLoading(false);
  };

  useEffect(() => {
    fetchingCoins();
  }, []);

  return (
    <div>
      <Navbar />
      <main className="container mx-auto lg:px-20 px-2">
        <p className=" text-sm text-neutral-500 py-5">Cont List</p>
        <div className="rounded-md shadow-md sm:p-5 p-2 bg-white mb-5">
          <p className=" text-sky-700 font-semibold">Coin List</p>
          <Search />
          <Table loading={loading} coins={ coins }/>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CoinList;
