import React from "react";
import "./App.css";

import Home from "./routes/Home";
import Bookings from "./routes/Bookings";
import NoPage from "./components/NoPage";
import Confirmation from "./components/Confirmation";

import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NoPage />} />
          <Route path="/bookings" element={<Bookings />} />
          <Route path="/confirmation" element={<Confirmation />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
