import React from "react";

const Search = (props) => {
  const onFilterValueChanged = (e) => {
    props.filterValueSelected(e.target.value);
  };

  const onSearchInput = (e) => {
    props.searchBar(e.target.value);
  };

  return (
    <div className="py-5 lg:w-1/2 w-full space-x-1 sm:space-x-3 flex flex-row">
      <select
        id="countries"
        className="border border-gray-300 text-neutral-500 text-sm rounded sm:p-2 p-1 basis-2/6"
        defaultValue={"default"}
        onChange={onFilterValueChanged}
      >
        <option value={"default"}>Select</option>
        <option value="coin">Coin</option>
        <option value="token">Token</option>
      </select>
      <div className="basis-4/6">
        <form
          className="flex space-x-1 sm:space-x-3"
          onSubmit={(e) => props.searchButton(e)}
        >
          <input
            className="border border-gray-300 rounded text-neutral-500 sm:p-2 p-1"
            placeholder="Search"
            onChange={onSearchInput}
          />
          <button
            type="submit"
            className="bg-sky-700 sm:p-2 p-1 text-white rounded text-sm"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default Search;
