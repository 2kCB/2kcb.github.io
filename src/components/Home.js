import React from "react";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Product from "./Product";
import Form from "react-bootstrap/Form";
import { CartContext } from "../context/CartContexProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home(props) {
  const { cart } = React.useContext(CartContext);

  const [newArr, setNewArr] = useState(props.data);

  useEffect(() => {
    setNewArr(props.data);
  }, [props.data]);

  function changeFilter(event) {
    if (event.target.value == "all") {
      setNewArr(props.data);
    } else {
      setNewArr(
        props.data.filter(
          (prevState) => prevState.category == event.target.value
        )
      );
    }
  }

  const productElement = newArr.map((product) => {
    return (
      <Product
        desc={product.description}
        title={product.title}
        key={product.id}
        id={product.id}
        img={product.image}
        price={product.price}
        rating={product.rating.rate}
        func={props.func}
      />
    );
  });

  return (
    <div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
      <div className="filter-container">
        <h4 styles={{ marginBottom: "0" }}>Choose Category:</h4>
        <Form.Select
          onChange={changeFilter}
          aria-label="Default select example"
        >
          <option value="all">All</option>
          <option value="men's clothing">Men's Clothing</option>
          <option value="women's clothing">Women's Clothing</option>
          <option value="jewelery">Jewlery</option>
          <option value="electronics">Electronics</option>
        </Form.Select>
      </div>
      <div className="grid-container">
        <div className="grid">{productElement}</div>
      </div>
    </div>
  );
}
