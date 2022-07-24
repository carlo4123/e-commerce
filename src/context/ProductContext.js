import { createContext, useReducer } from "react";
import { ProductsReducer } from "../reducer/ProductsReducer";


export const ProductsContext = createContext()


const ProductContextProvider = ({children}) => {

  const [products, dispatch] = useReducer(ProductsReducer,{
    products: null
  })
  return ( 
    <ProductsContext value={{...products, dispatch}}>
      {children}
    </ProductsContext>
   );
}
 
export default ProductContextProvider;