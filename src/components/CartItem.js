import React, { useContext } from "react";
import { CartContext } from "../context/CartContexProvider";
import Button from "react-bootstrap/Button";

export default function CartItem(props) {
  const { addToCart, subtractToCart, removeAll } = useContext(CartContext);

  const itemId = props.id;
  // Currency Formatter
  const numberFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  const priceFormatter = numberFormatter.formatToParts(props.price);

  const newPrice = Number(
    `${priceFormatter[1].value}${priceFormatter[2].value}${priceFormatter[3].value}`
  );

  const totalPriceFormatter = numberFormatter.formatToParts(
    newPrice * props.quantity
  );

  return (
    <div className="cart-item-container">
      <div className="cart-img-container">
        <img className="cart-item-img" src={props.image}></img>
      </div>
      <div className="cart-description">
        <p className="cart-title">{props.title}</p>
        <div>
          {priceFormatter[0].value}
          {priceFormatter[1].value}
          {priceFormatter[2].value}
          {priceFormatter[3].value}
          {/* <span style={{ color: "gray", fontSize: ".7rem" }}>x</span> */}
          <div
            style={{
              display: "flex",
            }}
          >
            <button
              className="button"
              onClick={() => {
                addToCart(itemId);
              }}
            >
              +
            </button>

            <p>Qty: {props.quantity}</p>

            <button
              className="button"
              onClick={() => {
                subtractToCart(itemId);
              }}
            >
              -
            </button>
          </div>
        </div>
        <p style={{ textAlign: "right" }}>
          <b>Total: </b>
          {priceFormatter[0].value}
          {totalPriceFormatter[1].value}
          {totalPriceFormatter[2].value}
          {totalPriceFormatter[3].value}
        </p>
      </div>
    </div>
  );
}
