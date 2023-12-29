import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/navbar";
import Cart from "./Pages/Cart/cart";
import Shop from "./Pages/Shop/shop";
import { ShopContextProvider } from "./context/shop-context";

const App = () => {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
};

export default App;
