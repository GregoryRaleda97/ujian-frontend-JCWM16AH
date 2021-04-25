import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Table, Spinner } from "react-bootstrap";
// import moment from "moment";

import "./ListHistories.css";

export default function ListHistories(props) {
    // console.log(moment().format("M/D/YYYY, h:mm:ss A"));
    if (props.isLoadingCart) {
        return (
            <div className="list-history">
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
            <div className="list-history">
                <Container>
                    <Row>
                        <Col>
                            <div className="d-flex header-history">
                                <div className="mr-auto p-2">
                                    <h1>Histories</h1>
                                </div>
                                <div className="p-2"></div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Table className="table-list-cart">
                                <thead>
                                    <tr>
                                        <th>No</th>
                                        <th>Transaction ID</th>
                                        <th>Date</th>
                                        <th>Product</th>
                                        <th>Qty Total</th>
                                        <th>Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {props.transactions.map((transaction, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>{transaction.id}</td>
                                                <td>{transaction.date}</td>
                                                <td>
                                                    <ul>
                                                        {transaction.products.map((product, index) => {
                                                            return (<li key={index}>{product}</li>)
                                                        })}
                                                    </ul>
                                                </td>
                                                <td>{transaction.quantity}</td>
                                                <td>{transaction.total}</td>
                                            </tr>
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
