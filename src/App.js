import React from "react";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Thanks from "./pages/Thanks";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/thanks" element={<Thanks />} />
      </Routes>
    </>
  );
};
