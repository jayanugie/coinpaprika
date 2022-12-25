import React from "react";
import { Link } from "react-router-dom";
import { capitalizeFirstLetter } from "../helpers/helpers";
import Loading from "./Loading";

const Table = ({ coins, loading }) => {
  if (loading) {
    return <Loading />;
  }

  return (
    <table className="w-full text-xs sm:text-sm md:text-base">
      <thead className="text-left bg-sky-600 text-white">
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Symbol</th>
          <th>Rank</th>
          <th>Type</th>
          <th>Active</th>
          <th>Action</th>
        </tr>
      </thead>
      {coins.map((coin, i) => (
        <tbody key={i} className="text-neutral-500">
          <tr>
            <td className="text-sky-600">
              <Link to={`/coin-list/${coin.id}`}>{coin.id}</Link>
            </td>
            <td>{coin.name}</td>
            <td>{coin.symbol}</td>
            <td>{coin.rank}</td>
            <td>{capitalizeFirstLetter(coin.type.toString())}</td>
            <td>{capitalizeFirstLetter(coin.is_active.toString())}</td>
            <td>
              <button className=" bg-red-500 text-white sm:p-2 p-0.5 rounded-sm">
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      ))}
    </table>
  );
};

export default Table;
