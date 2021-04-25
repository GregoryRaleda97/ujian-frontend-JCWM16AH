import React from "react";
import "./Welcome.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container, Row, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";
// import { useSelector } from "react-redux";

export default function Welcome() {
  const history = useHistory();

  function showProducts() {
    history.push("/products");
  }
  return (
    <div className="welcome">
      <Container className="text-center">
        <Row>
          <Col>
            <h1>Welcome to My Store</h1>
            <Button variant="secondary" onClick={showProducts}>
              Go to Products
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
