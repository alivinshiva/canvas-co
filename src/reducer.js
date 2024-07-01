export const initialState = {
  basket: [],
  user: null,
};
// Selector for returing the total value of the cart
export const getBasketTotal = (basket) => {
  return basket?.reduce((amount, item) => Number(item.price) + amount, 0);
};
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          "cant remove product (id: ${action.id}) as its not in the basket"
        );
      }
      return {
        ...state,
        basket: newBasket,
      };
      case "SET_USER":
        return{
          ...state,
          user: action.user
        }
    default:
      return state;
  }
};
export default reducer;
