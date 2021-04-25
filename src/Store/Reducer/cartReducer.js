const initialState = {
    cart: [],
    isLoadingCart: false,
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case "SET_LOADING_CART":
        return {
          ...state,
          isLoadingCart: action.payload,
        };
      case "SET_CART":
        return {
          ...state,
          cart: action.payload,
        };
      default:
        return state;
    }
  };
  