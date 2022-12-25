import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
// import { capitalizeFirstLetter } from "../helpers/helpers";

const CoinDetail = () => {
  const [coin, setCoin] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchCoin = async () => {
      const { data } = await axios.get(
        `https://api.coinpaprika.com/v1/coins/${id}`
      );
      setCoin(data);
      console.log(data);
    };

    fetchCoin();
    // eslint-disable-next-line
  }, []);
  // eslint-enable-next-line

  return (
    <div>
      <Navbar />
      <main className="container mx-auto lg:px-20 px-2">
        <p className=" text-sm text-neutral-500 py-5">Cont Detail</p>
        <div className="rounded-md shadow-md sm:p-5 p-2 bg-white mb-5">
          <p className=" text-sky-700 font-semibold">Coin Detail</p>
          <div className="flex space-x-28 p-5">
            <ul className="space-y-5 text-neutral-600">
              <li>ID</li>
              <li>Name</li>
              <li>Symbol</li>
              <li>Type</li>
              <li>Active</li>
              <li>Is New</li>
            </ul>
            <ul className="space-y-5 font-semibold">
              <li>{coin.id}</li>
              <li>{coin.name}</li>
              <li>{coin.symbol}</li>
              <li>{coin.type}</li>
              <li>{coin.is_active}</li>
              <li>{coin.is_new}</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CoinDetail;
