import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./Navigation.css";

export default function Navigation() {
  return (
    <React.Fragment>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
        <Navbar.Brand>Ujian FrontEnd</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto link-router">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/products" className="nav-link">
                PRODUCTS
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/cart" className="nav-link">
                CART
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/histories" className="nav-link">
                HISTORY
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-link">
                LOGIN
              </Link>
            </li>
          </Nav>
          <Nav>
            <Nav.Link href="#">Beli Beli</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </React.Fragment>
  );
}
