import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { useState } from "react"
import axios from "axios";

import Navigation from "./Components/Navigation";
import { useDispatch } from "react-redux";
import { fetchCart } from "./Store/Action/cartAction";
import { useEffect } from "react";

import Login from "./Components/Login"
import HomePage from "./Pages/HomePage";
import ProductsPage from "./Pages/ProductPage";
import CartPage from "./Pages/CartPage";
import HistoriesPage from "./Pages/HistoriesPage";
import Dashboard from "./Pages/Dashboard";
import PrivateRoute from './Components/PrivateRoute';
import PublicRoute from './Components/PublicRoute';
import { getToken, removeUserSession, setUserSession } from "./Components/Common";
// import useToken from "./Components/useToken";


// function setToken(userToken) {
//   sessionStorage.setItem('token', JSON.stringify(userToken));
// }

// function getToken() {
//   const tokenString = sessionStorage.getItem('token');
//   const userToken = JSON.parse(tokenString);
//   return userToken?.token
// }

function App() {
  useEffect(() => {
    dispatch(fetchCart());
  }, []);

  const dispatch = useDispatch();

  const [authLoading, setAuthLoading] = useState(true);
  useEffect(() => {
    const token = getToken();
    if (!token) {
      return;
    }

    axios.get(`http://localhost:3000/verifyToken?token=${token}`).then(response => {
      setUserSession(response.data.token, response.data.user);
      setAuthLoading(false);
    }).catch(error => {
      removeUserSession();
      setAuthLoading(false);
    });
  }, []);

  if (authLoading && getToken()) {
    return <div className="content">Checking Authentication...</div>
  }

  // useEffect(() => {
  //   dispatch(fetchCart());
  // }, []);

  // const dispatch = useDispatch();
  // const { token, setToken } = useToken();

  // if (!token) {
  //   return <Login setToken={setToken} />
  // }

  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <PublicRoute path="/login" component={Login} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <Route path="/products">
            <ProductsPage />
          </Route>
          <Route path="/cart">
            <CartPage />
          </Route>
          <Route path="/histories">
            <HistoriesPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
