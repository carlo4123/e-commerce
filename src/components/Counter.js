import { useContext } from "react";
import { OrderContext } from "../context/OrderContext";
import { CounterWrapper } from "./styles/Counter.styles";

const Counter = ({id,quantity}) => {


  const {orders, setOrders} = useContext(OrderContext)


  //increment quantity product item
  const handleIncrement = (id) => {

    const incrementOrder = orders.map((order)=>{
      if(order.id == id){
        return {...order, quantity: order.quantity + 1}
      }
      return order;
    })

    setOrders(incrementOrder)
    localStorage.setItem('carts',JSON.stringify(incrementOrder))
  }


  //decrement quantity product item
  const handleDecrement =  (id) => {
   
    const newValue = []

    const decrementOrder =  orders.map((order, index)=>{

      if(order.id == id){    
       
        
      //remove product item when lessthan or equal 1
       if(order.quantity <= 1) {

        console.log("item should be removed")
        return

         }
            //decrement quantity product item when product`s greater than 1
          else{
          
         newValue.push({...order, quantity: order.quantity - 1})
        
       }
  
      }else{
        newValue.push(order)
      }
      
    })
    
      console.log("newValue",newValue)
      
     
      setOrders(newValue)
      localStorage.setItem('carts',JSON.stringify(newValue))

  }

//remove product from cart
  const handleRemove = (id) => {
     const remove = orders.filter(order => order.id !== id)

     setOrders(remove)
     localStorage.setItem('carts',JSON.stringify(remove))
  }

  //change item base on input 
 const handleChange = (e,id) =>{
    const quantity = e.target.value
  
     const newValue = orders.map(order =>{
      if(order.id === id){

       return {...order, quantity}
       
      }
      return order
    })

    setOrders(newValue)
    localStorage.setItem('carts',JSON.stringify(newValue))
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