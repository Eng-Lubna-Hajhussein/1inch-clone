import React from "react";
import { Route, Routes, HashRouter } from "react-router-dom";
import Home from "./pages/Home";
import Swap from "./pages/Swap";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/swap" element={<Swap />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
