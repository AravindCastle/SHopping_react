import React from "react";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Home from "./component/Home";
import ProductListing from "./component/ProductListing";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          {/* Home Route */}
          <Route path="/" element={<Home />} />

          {/* Products Route */}
          <Route path="/products" element={<ProductListing />} />

        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App; 
