import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <main className="container mx-auto lg:px-20 px-2">
        <Link to="/coin-list">
          <p className="p-10 underline text-sky-700 hover:text-sky-500">Check out the top 50 cryptocurrencies</p>
        </Link>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
