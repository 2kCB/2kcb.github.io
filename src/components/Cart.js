import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Cart.css";
import { CartContext } from "../context/CartContexProvider";
import CartItem from "./CartItem";
import { ToastContainer, toast } from "react-toastify";

export default function Cart(props) {
  const itemId = props.id;
  const { cart, getTotalCartAmount } = React.useContext(CartContext);

  const [newArr, setNewArr] = useState(props.data);

  useEffect(() => {
    setNewArr(props.data);
  }, [props.data]);

  const cartElement = newArr.map((product) => {
    if (cart[product.id] !== 0) {
      return (
        <CartItem
          image={product.image}
          key={product.id}
          id={product.id}
          title={product.title}
          quantity={cart[product.id]}
          price={product.price}
        />
      );
    }
  });

  const totalCartPrice = getTotalCartAmount(newArr);

  const numberFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  const totalCartFormatter = numberFormatter.formatToParts(totalCartPrice);

  return (
    <div className="cart-body">
      <Link className="return" to="/">
        <p className="return-text"> &#8592; Continue Shopping</p>
      </Link>
      <div className="cart-flex">{cartElement}</div>
      <p style={{ textAlign: "right" }}>
        {"Cart total: "}
        {totalCartFormatter[0].value}
        {totalCartFormatter[1].value}
        {totalCartFormatter[2].value}
        {totalCartFormatter[3].value}
      </p>
    </div>
  );
}
