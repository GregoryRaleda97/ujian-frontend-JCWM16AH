import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import productReducer from "./Reducer/productReducer";
import cartReducer from "./Reducer/cartReducer";
import transactionReducer from "./Reducer/transactionReducer";

const reducer = combineReducers({ productReducer, cartReducer, transactionReducer });
const store = createStore(reducer, applyMiddleware(thunk));

export default store
