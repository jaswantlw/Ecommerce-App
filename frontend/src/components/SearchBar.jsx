import React, { useContext } from "react";
import { useLocation } from "react-router-dom"; // ✅ FIXED
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";

const SearchBar = () => {
  const {
    search,
    setSearch,
    showSearched,
    setShowSearched,
  } = useContext(ShopContext);

  const location = useLocation();

  const visible = location.pathname.includes("collection") && showSearched; // ✅ Simplified logic

  if (!visible) return null; // ✅ Early return to avoid nesting

  return (
    <div className="border-t border-b bg-gray-50 text-center">
      <div className="inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 outline-none bg-inherit text-sm"
          type="text"
          placeholder="Search"
        />
        <img src={assets.search_icon} className="w-4" />
      </div>
      <img
        src={assets.cross_icon}
        className="inline w-3 cursor-pointer"
        onClick={() => setShowSearched(false)}
      />
    </div>
  );
};

export default SearchBar;
