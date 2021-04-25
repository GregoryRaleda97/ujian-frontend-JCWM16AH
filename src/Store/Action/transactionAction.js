import axios from "axios";
import { SET_LOADING_TRANSACTIONS, SET_TRANSACTIONS } from "./actionType";
import { url } from "../../urlConfig";

function setLoadingtTransactions(data) {
  return {
    type: SET_LOADING_TRANSACTIONS,
    payload: data,
  };
}

function setTransactions(data) {
  return {
    type: SET_TRANSACTIONS,
    payload: data,
  };
}

export function fetchTransactions() {
  return (dispatch) => {
    dispatch(setLoadingtTransactions(true));
    axios
      .get(`${url}/transactions`)
      .then((transactions) => {
        dispatch(setTransactions(transactions.data));
        dispatch(setLoadingtTransactions(false));
      })
      .catch((error) => {
        dispatch(setLoadingtTransactions(false));
      });
  };
}
