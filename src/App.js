import React, { useState, useEffect } from "react";
import styles from "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComp from "./components/NavbarComp";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import logo192 from "./images/logo192.png";
import Cart from "./components/Cart";
import CartContexProvider from "./context/CartContexProvider";

export const CartContext = React.createContext();

export default function App() {
  const [data, setData] = useState([]);

  const getApi = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setData(json);
      });
  };

  useEffect(() => {
    getApi();
  }, []);

  return (
    <div className="App">
      <CartContexProvider data={data}>
        <BrowserRouter>
          <NavbarComp data={data} />
          <Routes>
            <Route path="/" element={<Home data={data} />}></Route>
            <Route path="/cart" element={<Cart data={data} />}></Route>
          </Routes>
        </BrowserRouter>
      </CartContexProvider>
    </div>
  );
}
