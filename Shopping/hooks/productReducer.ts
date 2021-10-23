const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
const ADD_TO_CART = 'ADD_TO_CART';
const ADD_FAVORITE_LIST = 'ADD_FAVORITE_LIST';
const REMOVE_FAVORITE_LIST = 'REMOVE_FAVORITE_LIST';
const SET_DARK_MODE = 'SET_DARK_MODE';

const productState = {
  cartItems: [],
  favoriteItems: [],
  products: [],
  isDarkMode: false
}

const productReducer = (state: any, action: any) => {
  switch (action.type) {
    case ADD_TO_CART:
      let isContains = state.cartItems.includes(action.payload);

      if (!isContains)
        state.cartItems.push(action.payload);

      return {
        ...state,
        cartItems: state.cartItems
      }

    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter((item: { id: any; }) => item.id !== action.payload.id)
      }

    case ADD_FAVORITE_LIST:
      let isContainsFavorite = state.favoriteItems.includes(action.payload);

      if (!isContainsFavorite)
        state.favoriteItems.push(action.payload);

      return {
        ...state,
        favoriteItems: state.favoriteItems
      }

    case REMOVE_FAVORITE_LIST:
      // set isFavorite=false for item in state.products
      let products = state.products.map((item: any, _: any) => {
        if (item.id === action.payload.id) {
          item.isFavorite = false;
        }
      });

      return {
        ...state,
        products: products,
        favoriteItems: state.favoriteItems.filter((item: { id: any; }) => item.id !== action.payload.id)
      }

    case SET_DARK_MODE:
      return {
        ...state,
        isDarkMode: action.payload
      }
    default:
      return state;
  }
}

export {productReducer, productState, REMOVE_FROM_CART, ADD_TO_CART, REMOVE_FAVORITE_LIST, ADD_FAVORITE_LIST, SET_DARK_MODE};
