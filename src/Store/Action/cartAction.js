import axios from "axios";
import { SET_LOADING_CART, SET_CART, EDIT_CART, DELETE_CART } from "./actionType";
import { url } from "../../urlConfig";

function setLoadingCart(data) {
  return {
    type: SET_LOADING_CART,
    payload: data,
  };
}

function setCart(data) {
  return {
    type: SET_CART,
    payload: data,
  };
}

export function addCartItem(cart, product, stock) {
  let isThere = false;
  let data = {};
  cart.forEach((el) => {
    if (el.id === product.id) {
      isThere = true;
      data = {
        id: el.id,
        product: el.product,
        price: el.price,
        images: el.images,
        quantity: el.quantity + parseInt(stock),
      };
    }
  });
  return (dispatch) => {
    // jika id product ada di cart
    if (isThere) {
      axios
        .put(`${url}/cart/` + product.id, data)
        .then(() => {
          dispatch(fetchCart);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      let data = {
        id: product.id,
        product: product.product,
        price: product.price,
        images: product.images,
        quantity: stock,
      };
      axios
        .post(`${url}/cart`, data)
        .then(() => {
          dispatch(fetchCart);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
}

export function fetchCart() {
  return (dispatch) => {
    dispatch(setLoadingCart(true));
    axios
      .get(`${url}/cart`)
      .then((data) => {
        let cart = data.data.map((el) => {
          return {
            id: el.id,
            product: el.product,
            price: el.price,
            images: el.images,
            quantity: el.quantity,
            edit: false,
          };
        });
        dispatch(setCart(cart));
        dispatch(setLoadingCart(false));
      })
      .catch((error) => {
        dispatch(setLoadingCart(false));
      });
  };
}

// function editCart() {
//   return (dispatch) => {
//     axios.put(`${url}/cart${data.id}`, data)
//       .then(res => {
//         dispatch({
//           type: EDIT_CART,
//           payload: data
//         })
//       })
//       .catch(err => {
//         console.log(err)
//       })
//   };
// }

// export function deleteCart(data) {
//   return (dispatch) => {
//     axios.delete(`${url}/cart/${id}`)
//       .then(res => {
//         dispatch({
//           type: DELETE_CART,
//           payload: id
//         })
//       })
//   }
// }