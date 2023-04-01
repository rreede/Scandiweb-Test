import { useState } from "react";
import "./App.css";
import HeaderMain from "./HeaderMain";
import MainContent from "./MainContent";
import Footer from "./Footer";
import ProductAdd from "./ProductAdd";

function Root() {
  return (
    <div className="App">
      <HeaderMain />
      <MainContent />
      <Footer />
    </div>
  );
}

export default Root;
