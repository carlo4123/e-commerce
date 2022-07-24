import { useContext } from "react";
import { OrderContext } from "../context/OrderContext";
import { CounterWrapper } from "./styles/Counter.styles";

const Counter = ({id,quantity}) => {


  const { dispatch} = useContext(OrderContext)


  //increment quantity product item
  const handleIncrement = (id) => {

    dispatch({type: 'ITEM_INCREMENT', id})
    
  }


  //decrement quantity product item
  const handleDecrement =  (id) => {
   
    dispatch({type: 'ITEM_DECREMENT', id})

  }

//remove product from cart
  const handleRemove = (id) => {

    dispatch({type: 'ITEM_REMOVE', id})
  }

  //change item base on input 
 const handleChange = (e,id) =>{
    const quantity = e.target.value
  
    dispatch({type: 'UPDATE_QUANTITY_VALUE', id, quantity})

 } 
  return ( 

    <CounterWrapper>
      <div>
      <button onClick={()=>handleDecrement(id)} className="counter_decrement">-</button>
              <input type="number" onChange={(e) => handleChange(e,id)} value={quantity}  className="counter_input" min={0} />
      <button onClick={()=>handleIncrement(id)} className="counter_increment">+</button>
      </div>

      <button className="remove" onClick={()=> handleRemove(id)}>remove</button>

    
    </CounterWrapper>
   );
}
 
export default Counter;