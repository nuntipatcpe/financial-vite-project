import { useState } from "react";
// import "./App.css";
import Aside from "./components/layouts/Aside";
import Footer from "./components/layouts/Footer";
import Header from "./components/layouts/Header";
import Forex from "./components/pages/Forex";
import Futures from "./components/pages/Futures";

import { Route, Routes, Navigate } from "react-router-dom";

function App() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    console.log("handleOpen");
    setOpen(true);
  };

  const handleClose = () => {
    console.log("handleClose");
    setOpen(false);
  };

  return (
    <div className="app">
      <Aside open={open} handleClose={handleClose} />
      <div className={open ? "container" : "container open"}>
        <Header open={open} handleOpen={handleOpen} />
        <div className="content">
          <Routes>
            <Route path="/" element={<Navigate to="/futures" />} />
            <Route path="/futures" element={<Futures />} />
            <Route path="/forex" element={<Forex />} />
            <Route path="*" element={<>404</>} />
          </Routes>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
