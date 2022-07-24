export const ProductsReducer = (state,action) => {

  switch(action.type){
    case 'SET_PRODUCT':
      return {
        products: action.payload
      }
    case 'ADD_PRODUCT':
      return {
        products:[...state.products, action.payload]
      }
    case 'DELETE_PRODUCT':
      return {
        products: state.products.filter(
          product => product._id !== action.payload._id
        )
      }
    case 'UPDATE_PRODUCT':
      return {
        products: state.map(product=>{
          if(product._id === action.payload._id){
            return {...product, 
              name:action.payload.name,
              price: action.payload.price,
              quantity: action.payload.quantity
            }
          }
        })
      }
    default:
      return state
  }
}