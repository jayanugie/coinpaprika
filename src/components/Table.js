import React from "react";

const Table = ({ coins }) => {
  return (
    <table className="w-full text-xs sm:text-sm md:text-base">
      <tr className="text-left bg-sky-600 text-white">
        <th>ID</th>
        <th>Name</th>
        <th>Symbol</th>
        <th>Rank</th>
        <th>Type</th>
        <th>Active</th>
        <th>Action</th>
      </tr>
      {coins.map((coin, i) => (
        <tr key={i}>
          <td className=" text-sky-600">{coin.id}</td>
          <td>{coin.name}</td>
          <td>{coin.symbol}</td>
          <td>{coin.rank}</td>
          <td>{coin.type}</td>
          <td>{coin.is_active}</td>
          <td>
            <button className=" bg-red-500 text-white p-2 rounded-sm">
              Delete
            </button>
          </td>
        </tr>
      ))}
    </table>
  );
};

export default Table;
