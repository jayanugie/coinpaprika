import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { capitalizeFirstLetter } from "../helpers/helpers";
import Loading from "./Loading";
import ReactPaginate from "react-paginate";

const Table = ({ loading, coins }) => {
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 5;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(coins.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(coins.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, coins]);

  const handlePageClick = (e) => {
    const newOffset = (e.selected * itemsPerPage) % coins.length;
    setItemOffset(newOffset);
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <>
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
        {currentItems.map((coin, i) => (
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
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={10}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
        containerClassName="flex sm:space-x-2 space-x-1 justify-end sm:pt-5 pt-2 text-xs sm:text-base"
        pageLinkClassName="border sm:px-2 px-1 sm:py-0.5 border-sky-200 rounded-md hover:bg-sky-200"
        previousLinkClassName="border sm:px-2 px-1 sm:py-0.5 rounded-md hover:bg-sky-200"
        nextLinkClassName="border sm:px-2 px-1 sm:py-0.5 rounded-md hover:bg-sky-200"
        activeLinkClassName="bg-sky-500 text-white"
      />
    </>
  );
};

export default Table;
