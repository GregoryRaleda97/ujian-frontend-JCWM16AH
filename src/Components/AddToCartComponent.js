import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { addCartItem } from "../Store/Action/cartAction";
import { useHistory } from "react-router-dom";

export default function AddToCartComponent(props) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cartReducer.cart);
  const history = useHistory();

  function addCart() {
    let stock = parseInt(prompt("Masukan jumlah stock: "));
    if (!stock) {
      // guard close
      return;
    }
    if (stock <= 0 || stock > props.product.stock) {
      alert(
        "Jumlah stock tidak boleh kurang dari sama dengan 0 dan tidak boleh lebih dari " +
          props.product.stock
      );
      return;
    }
    dispatch(addCartItem(cart, props.product, stock));
    history.push("/cart");
  }
  return (
    <React.Fragment>
      <Button variant="primary" onClick={addCart}>
        Add to Cart
      </Button>
    </React.Fragment>
  );
}
