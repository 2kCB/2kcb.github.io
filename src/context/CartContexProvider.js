import React, { useContext, useEffect, useState } from "react";

export const CartContext = React.createContext();

export default function CartContexProvider(props) {
  const getDefaultCart = () => {
    let cart = {};
    for (let i = 1; i < props.data.length + 1; i++) {
      cart[i] = 0;
    }
    return cart;
  };
  const [cart, setCart] = useState();

  useEffect(() => {
    setCart(getDefaultCart());
  }, [props.data]);

  function addToCart(itemId) {
    setCart((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  }

  function subtractToCart(itemId) {
    setCart((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  }

  function removeAll(itemId) {
    setCart((prev) => ({ ...prev, [itemId]: 0 }));
  }

  const getTotalCartAmount = (data) => {
    let totalAmount = 0;
    for (const item in cart) {
      if (cart[item] > 0) {
        let itemInfo = data.find((product) => product.id === Number(item));
        totalAmount += cart[item] * itemInfo.price;
      }
    }
    return totalAmount;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        addToCart,
        subtractToCart,
        removeAll,
        getTotalCartAmount,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
}
