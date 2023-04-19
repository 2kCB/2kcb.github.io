import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import logo192 from "../images/logo192.png";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContexProvider";
import "./NavbarComp.css";

export default function NavbarComp(props) {
  const { cart } = React.useContext(CartContext);

  const [newArr, setNewArr] = useState(props.data);

  useEffect(() => {
    setNewArr(props.data);
  }, [props.data]);

  var sum = 0;

  for (let i in cart) {
    if (cart.hasOwnProperty(i)) {
      sum = sum + cart[i];
    }
  }

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand style={{ cursor: "pointer" }}>
            <img
              alt=""
              src={logo192}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Fake React Online Store
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <div style={{ display: "flex" }}>
                <Link className="" style={{ paddingTop: "5px" }} to="/cart">
                  <i
                    className="fa-solid fa-cart-shopping fa-xl"
                    style={{ color: "#ffffff" }}
                  ></i>
                </Link>
                <p>{sum}</p>
              </div>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
