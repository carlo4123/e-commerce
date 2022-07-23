import { useContext } from 'react';
import ImgShoes from '../../../assets/shoes.svg';
import { Button } from "../../../components/styles/Button.styles";
import { OrderContext } from '../../../context/OrderContext';
//import { useCartsContext } from '../../../hooks/useCartsContext';

import { CardWrapper } from "../styles/card.styles";

const Card = ({products}) => {


const {orders,setOrders} = useContext(OrderContext)
  

  //adding item to the cart 
  const addToCartHandle =  (id, name, price) => {

  const productExist =  orders.some( element => {
      if(element.id == id){
        return true
      }
       
      return false
    })
    
 if(productExist){
  const newState =   orders.map(obj => {
    // 👇️ if id exist, update the quantity
    if (obj.id == id) {
      return {...obj, quantity: obj.quantity + 1 };
    }
  
    // 👇️ otherwise return object as is
    return obj;
  });

setOrders(newState)
  localStorage.setItem('carts',JSON.stringify(newState))
 }else{


  setOrders([...orders, {
    id,
    name,
    price,
    quantity: 1
  
  }])
  localStorage.setItem('carts',JSON.stringify([...orders, {
    id,
    name,
    price,
    quantity: 1

  }]))
  }
  }

  return ( 
  <>
  { products && 
    products.map((product,index)=>{
      return (
        <CardWrapper key={index}>
        <div className="card_image-wrapper">
          <img src={ImgShoes} alt="" />
        </div>
      <div className="card-body">
        <p>
            {product.name}
        </p>
        <span>
          ${product.price}
        </span>
        <Button hoverBGColor="#623A86" onClick={()=> addToCartHandle(product._id, product.name, product.price)}>Add To Cart</Button>
      </div>
    </CardWrapper>
      )
    })
  }

  </>
    
   );
}
 
export default Card;