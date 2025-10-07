import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageA from "./views/MyPageA";
import PageB from "./views/MyPageB";
import PageC from "./views/MyPageC";
import PageD from "./views/MyPageD";
import NotFound from "./views/NotFound";
import Home from "./views/Home";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mypagea" element={<PageA />} />
        <Route path="/mypageb" element={<PageB />} />
        <Route path="/mypagec" element={<PageC />} />
        <Route path="/mypaged" element={<PageD />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

