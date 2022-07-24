import { createContext, useEffect, useReducer } from "react";
import { OrdersReducer } from "../reducer/OrderReducer";

export const OrderContext = createContext()



const OrderContextProdvider = ({children}) => {
  const [orders,dispatch] = useReducer(OrdersReducer,
    [],
    ()=>{
      const localData = localStorage.getItem('orders')
      return localData ? JSON.parse(localData) : []
  })

  useEffect(()=>{
    localStorage.setItem('orders', JSON.stringify(orders))
  },[orders])

  return ( 
    <OrderContext.Provider value={{orders,dispatch}}>
      {children}
    </OrderContext.Provider>
   );
}
 
export default OrderContextProdvider;