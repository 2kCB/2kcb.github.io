import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import { CartContext } from "../context/CartContexProvider";
import { ToastContainer, toast } from "react-toastify";

export default function Product(props) {
  const { addToCart, cart } = React.useContext(CartContext);

  const [itemId, setItemId] = React.useState();

  useEffect(() => setItemId(props.id), [props.id]);

  const numberFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const newPrice = numberFormatter.formatToParts(props.price);

  function oldPrice(a) {
    return Number(a) + 5;
  }
  const notify = () =>
    toast.info("Item added to cart!", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  function handleClick() {
    notify();
    addToCart(itemId);
  }

  return (
    <div className="product-card">
      <div className="img-container">
        <img className="product-image" src={props.img}></img>
        <div onClick={handleClick} className="cart-container">
          <i className="fa-solid fa-cart-plus"></i>
        </div>
      </div>
      <h3 className="product-title">{props.title}</h3>
      <p className="product-price">
        <span>
          ${newPrice[1].value}.
          <span className="product-price2">{newPrice[3].value}</span>
        </span>
        <span className="product-rating">
          <i
            className="fa-solid fa-star fa-xs"
            style={{ color: "#1e3050" }}
          ></i>
          {props.rating}
          <span className="product-rating2">/5</span>
        </span>
      </p>
      <p className="old-price">Was: ${oldPrice(newPrice[1].value)}</p>
      <p className="product-desc">{props.desc}</p>
    </div>
  );
}
