import { createContext, useReducer } from "react";

export const CartsContext = createContext()

export const cartsReducer = (state, action) => {

    switch(action.type){

      //get carts item from localStorage
      case `SET_CARTS`:
        return {
          cart: action.payload
        }

        //adding product to the cart in localStorage
      case `ADD_TO_CART`:
        return{
          cart: [action.payload, ...state.cart]
        }

        default:
          return state
    }
}

export const CartsContextProvider = ({children }) => {
  const [state, dispatch] = useReducer(cartsReducer,{
    cart: []
  })

  return (
    <CartsContextProvider.Provider value={{ ...state, dispatch}}>
      {children }
    </CartsContextProvider.Provider>
  )
}