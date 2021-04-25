import React, { useEffect } from "react";
import "./ProductPage.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../Store/Action/productAction";
import FilterListProducts from "../Components/FilterListProduct";
import ListProducts from "../Components/ListProduct";

export default function ProductsPage() {
  const dispatch = useDispatch();
  const {
    products,
    isLoadingProduct,
    isFiltered,
    filteredProduct,
  } = useSelector((state) => state.productReducer);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div className="products-page">
      <FilterListProducts />
      <ListProducts products={!isFiltered ? products : filteredProduct} isLoadingProduct={isLoadingProduct} />
    </div>
  );
}
