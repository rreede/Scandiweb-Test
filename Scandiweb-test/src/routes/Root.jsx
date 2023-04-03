import { useState } from "react";
import "./App.css";
import HeaderMain from "./HeaderMain";
import MainContent from "./MainContent";
import Footer from "./Footer";
import ProductAdd from "./ProductAdd";

function Root() {
  return (
    <div className="App">
      <form action="http://localhost:80/Scandiweb-Test/Scandiweb-test/src/routes/code.php" method="POST">
      <HeaderMain />
      <MainContent className="MainContent" />
      </form>
      <Footer />
    </div>
  );
}

export default Root;
