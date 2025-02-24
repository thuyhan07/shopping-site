import React, { useEffect, useState } from "react";
import Shop from "./pages/Shop/Shop";
import Cart from "./pages/ShoppingCart/Cart";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

function App({ products, index }) {
  const [subtotal, setSubtotal] = useState(0);
  const [cartCount, setCartCount] = useState(0);
  const [cart, setCart] = useState([]);

  const getCartCount = cart.map((item) => item.count);

  const subtotalCalc = () => {
    let total = 0;
    cart.map((cartItem) => {
      total += cartItem.count * cartItem.discounted;
    });
    setSubtotal(total);
  };

  const cartCounter = () => {
    let count = 0;
    cart.map((cartItem) => {
      count += cartItem.count;
    });
    setCartCount(count);
  };

  const addToCart = (item) => {
    let inCart = false;
    cart.forEach((product) => {
      if (product.id === item.id) {
        inCart = true;
      }
    });
    if (inCart === true) {
      item.count = item.count + 1;
      setCart([...cart]);
    } else {
      setCart([...cart, item]);
      item.count = item.count + 1;
    }
  };

  const deleteItem = (item) => {
    let newCart = cart.filter((cartItem) => cartItem.id !== item.id);
    item.count = 0;
    setCart(newCart);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar
          cart={cart}
          cartCount={cartCount}
          cartCounter={cartCounter}
          getCartCount={getCartCount}
        />
        <Routes>
          <Route path="/" element={<Shop addToCart={addToCart} />}></Route>
          <Route
            path="/cart"
            element={
              <Cart
                cart={cart}
                subtotal={subtotal}
                subtotalCalc={subtotalCalc}
                deleteItem={deleteItem}
              />
            }
          ></Route>
        </Routes>
      </BrowserRouter>
      {/* <button onClick={()=>{console.log(cart)}} >CHECK CART</button> */}
    </div>
  );
}

export default App;
