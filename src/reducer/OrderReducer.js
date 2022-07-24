export const OrdersReducer = (state, action) => {
  switch(action.type){
    
   
    case 'ADD_ITEM':
      return [
        ...state,{
        id: action.order.id,
        name: action.order.name,
        price: action.order.price,
        quantity: 1
        }
      ]
    case 'UPDATE_QUANTITY':
      const updated = state.map(obj => {
        // 👇️ if id exist, update the quantity
        if (obj.id === action.id) {
         
          return {...obj, quantity: obj.quantity + 1 };
        }
      
        // 👇️ otherwise return object as is
        return obj;
      });
  
      return updated
    case 'ITEM_INCREMENT':
       const incrementQuantity = state.map(order=> {
       if( order.id === action.id ){
        return {...order, quantity: order.quantity + 1}
       }
       return order
      })
      console.log(incrementQuantity)
      return incrementQuantity
      
    case 'ITEM_DECREMENT': 
    const newValue = []

        state.map((order)=>{
          if(order.id === action.id){    
     
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
        
   return newValue
    
    case 'ITEM_REMOVE':
      return  state.filter(order => order.id !== action.id)

    case 'UPDATE_QUANTITY_VALUE': 
    return state.map(order =>{
      if(order.id === action.id){

       return {...order, quantity: action.quantity}
      }
      return order
    })

    

      default:
        return state;
  }
}