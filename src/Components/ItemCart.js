import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

export default function ItemCart(props) {
  return (
    <React.Fragment>
      <tr>
        <td>{props.index + 1}</td>
        <td>
          <img
            // src={props.cart.images[{index}]}
            alt=""
            className="img-responsive img-fluid"
          />
        </td>
        <td>{props.cart.product.toUpperCase()}</td>
        <td>{props.cart.quantity}</td>
        <td>{props.cart.price * props.cart.quantity}</td>
        <td>
          <Button variant="success">Edit</Button>{" "}
          <Button variant="danger">Delete</Button>
        </td>
      </tr>
    </React.Fragment>
  );
}
