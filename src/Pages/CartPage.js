import React, { useEffect } from "react";

import { fetchCart } from "../Store/Action/cartAction";
import "./CartPage.css";
import HeaderCart from "../Components/HeaderCart";
import ListCart from "../Components/ListCart";
import { useSelector, useDispatch } from "react-redux";

export default function CartPage() {
  const dispatch = useDispatch();
  const { cart, isLoadingCart } = useSelector((state) => state.cartReducer);

  useEffect(() => {
    dispatch(fetchCart());
  }, []);

  console.log(cart);

  return (
    <div className="cart-page">
      <HeaderCart />
      <ListCart cart={cart} isLoadingCart={isLoadingCart} />
    </div>
  );
}
