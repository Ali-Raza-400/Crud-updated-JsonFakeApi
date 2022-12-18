import React from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Create from "./component/create";
import Edit from "./component/edit";
import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import View from "./component/View";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route element={<Create />} />
          <Route path="/" element={<View/>} />
          <Route path="/add" element={<Create />} />
          <Route path="/update/:id" element={<Edit />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
};

export default App;
