const initialState = {
    products: [],
    isLoadingProduct: false,
    isFiltered: false,
    // nilainya ada 4 antara: search, highToLowPrice, LowToHighPrice, dan kosong 
    filteredProduct: [],
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case "SET_LOADING_PRODUCTS":
        return {
          ...state,
          isLoadingProduct: action.payload,
        };
      case "SET_PRODUCTS":
        return {
          ...state,
          products: action.payload,
        };
      case "SET_IS_FILTERED":
        return {
          ...state,
          isFiltered: action.payload,
        };
      case "SET_FILTERED_PRODUCTS":
        return {
          ...state,
          filteredProduct: action.payload
        }
      default:
        return state;
    }
  };
  