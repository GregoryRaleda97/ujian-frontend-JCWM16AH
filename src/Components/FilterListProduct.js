import React, { useState } from "react";
import "./FilterListProduct.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button, Form, Dropdown } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";

import {
    showProductsBySearch,
    sortByDefault,
    sortByPublishedDate,
    sortHighToLowPrice,
    sortLowToHighPrice,
} from "../Store/Action/productAction";

export default function FilterListProducts() {
    const [search, setSearch] = useState("");
    const { products, filteredProduct, isFiltered } = useSelector(
        (state) => state.productReducer
    );
    const dispatch = useDispatch();

    function handleSearch(e) {
        setSearch(e.target.value);
    }

    function searchProducts(e) {
        e.preventDefault();
        dispatch(showProductsBySearch(search, products));
    }

    function sortByPublishDate() {
        dispatch(sortByPublishedDate(search, products));
    }

    function sortByHighToLowPrice() {
        dispatch(sortHighToLowPrice(isFiltered, products, filteredProduct));
    }

    function sortByLowToHighPrice() {
        dispatch(sortLowToHighPrice(isFiltered, products, filteredProduct));
    }

    function sortDefault() {
        setSearch("");
        dispatch(sortByDefault());
    }

    return (
        <React.Fragment>
            <Container>
                <Row>
                    <Col>
                        <div className="d-flex filter-list-products">
                            <div className="mr-auto p-2">
                                <h1>Products</h1>
                            </div>
                            <div className="p-2">
                                <Form onSubmit={searchProducts}>
                                    <Row>
                                        <Col className="d-flex">
                                            <div className="mr-auto p-1">
                                                <Form.Control
                                                    placeholder="Search"
                                                    value={search}
                                                    onChange={handleSearch}
                                                />
                                            </div>
                                            <div className="p-1">
                                                <Button variant="outline-success" type="submit">
                                                    Search
                        </Button>
                                            </div>
                                            <div className="p-1">
                                                <Dropdown>
                                                    <Dropdown.Toggle
                                                        variant="success"
                                                        id="dropdown-basic"
                                                    >
                                                        Sort By
                          </Dropdown.Toggle>

                                                    <Dropdown.Menu>
                                                        <Dropdown.Item onClick={sortByPublishDate}>
                                                            Publish Date
                            </Dropdown.Item>
                                                        <Dropdown.Item onClick={sortByHighToLowPrice}>
                                                            Price High to Low
                            </Dropdown.Item>
                                                        <Dropdown.Item onClick={sortByLowToHighPrice}>
                                                            Price Low to High
                            </Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </div>
                                            <div className="p-1">
                                                <Button variant="warning" onClick={sortDefault}>
                                                    Refresh
                        </Button>
                                            </div>
                                        </Col>
                                    </Row>
                                </Form>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    );
}
