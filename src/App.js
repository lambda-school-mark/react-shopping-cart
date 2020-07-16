import React, { useState } from "react";
import { Route } from "react-router-dom";
import data from "./data";

// Components
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";
import productContext from "./contexts/productContext";

function App() {
  const [products] = useState(data);
  const [cart, setCart] = useState([]);

  const addItem = (item) => {
    setCart(...cart, item);
  };

  return (
    <div className="App">
      <productContext.Provider value={(products, addItem)}>
        <Navigation cart={cart} />

        {/* Routes */}
        <Route exact path="/">
          <Products products={products} addItem={addItem} />
        </Route>

        <Route path="/cart">
          <ShoppingCart cart={cart} />
        </Route>
      </productContext.Provider>
    </div>
  );
}

export default App;
