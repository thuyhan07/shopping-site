import React, { useEffect, useState } from "react";
import CartItem from "./CartItem";

function Cart({ cart, subtotal, subtotalCalc, deleteItem }) {
  useEffect(subtotalCalc, [cart])
  return (
    <div className="cart-page">
      <table className="cart-table">
        <tr>
          <th className="img-col"></th>
          <th className="name-col">PRODUCT</th>
          <th className="price-col">PRICE</th>
          <th className="count-col">QUANTITY</th>
          <th className="total-col">SUBTOTAL</th>
        </tr>
        {cart.map((cartItem, index) => (
          <CartItem cart={cart} deleteItem={deleteItem} index={index} key={cart.at(index).id} />
        ))}
      </table>
      <div className="coupon-container ">
        <input type="text" placeholder="Coupon Code"/>
        <button>APPLY COUPON</button>
      </div>
      <h1 className="subtotal">{`CART TOTALS: $${subtotal}.00`}</h1>
    </div>
  );
}

export default Cart;
