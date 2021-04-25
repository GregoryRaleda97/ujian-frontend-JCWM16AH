import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table, Container, Row, Col, Spinner } from "react-bootstrap";
import "./ListProduct.css";
import AddToCartComponent from "./AddToCartComponent";

export default function ListProducts(props) {
  if (props.isLoadingProduct) {
    return (
      <div className="list-products">
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
      <div className="list-products">
        <Container>
          <Row>
            <Col>
              <Table>
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Stock</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {props.products.map((product) => {
                    return (
                      <tr key={product.id}>
                        <td>{product.id}</td>
                        <td>
                          <img
                            src={product.imgUrl}
                            alt={product.name}
                            className="img-responsive img-fluid"
                          />
                        </td>
                        <td>{product.product.toUpperCase()}</td>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                        <td>{product.stock}</td>
                        <td>
                          <AddToCartComponent product={product} />
                        </td>
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
