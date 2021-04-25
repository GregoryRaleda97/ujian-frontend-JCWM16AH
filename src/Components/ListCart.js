import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Table, Spinner } from "react-bootstrap";

import "./ListCart.css";
import ItemCart from "./ItemCart";
// import EditCart from "./EditCart";

export default function ListCart(props) {
    if (props.isLoadingCart) {
        return (
            <div className="list-cart">
                <Container>
                    <Row>
                        <Col className="text-center">
                            <Spinner animation="grow" />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    } else {
        return (
            <div className="list-cart">
                <Container>
                    <Row>
                        <Col>
                            <Table className="table-list-cart">
                                <thead>
                                    <tr>
                                        <th>No</th>
                                        <th>Image</th>
                                        <th>Name</th>
                                        <th>Quantity</th>
                                        <th>Total</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {props.cart.map((cart, index) => {
                                        return (
                                            <ItemCart cart={cart} index={index} key={index} />
                                        );
                                    })}
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
