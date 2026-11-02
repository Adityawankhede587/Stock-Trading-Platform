import React from "react";
import { Routes, Route } from "react-router-dom";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";
import Profile from "./Profile";
import Orders from "./Orders";
import Holdings from "./Holdings";
import Positions from "./Positions";
import Funds from "./Funds";
import Apps from "./Apps";

const Home = () => {
  return (
    <>
      <TopBar />

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/holdings" element={<Holdings />} />
        <Route path="/positions" element={<Positions />} />
        <Route path="/funds" element={<Funds />} />
        <Route path="/apps" element={<Apps />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
};

export default Home;