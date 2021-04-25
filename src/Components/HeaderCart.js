import React from "react";
import "./HeaderCart.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button } from "react-bootstrap";

export default function HeaderCart() {
  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col>
            <div className="d-flex header-cart">
              <div className="mr-auto p-2">
                <h1>Cart</h1>
              </div>
              <div className="p-2">
                <Button variant="primary">Check Out</Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}
