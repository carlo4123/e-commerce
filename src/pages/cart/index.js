import { useContext } from "react";
import { Button } from "../../components/styles/Button.styles";
import { Heading2 } from "../../components/styles/Heading.styles";
import { OrderContext } from "../../context/OrderContext";
import CartItemWrapper from "./components/CartItemWrapper";
import styles from './styles/styles.module.scss';
const Cart = () => {


  const {orders} = useContext(OrderContext)
  console.log(orders)

 let totalPrice = 0
  const total = orders.map(order=>{
    const eachTotal = order.price * order.quantity
     totalPrice = totalPrice + eachTotal

    return totalPrice
  })

  return ( 
  <>
  <div className="container">


  
      <div className={styles.cart}>
      <Heading2>
          My Cart
        </Heading2>
    <div className={styles.cart_container}>
      <div className="cart_left_wrapper">
        <table className={styles.table}>
          <thead>
          <tr className="table_row">
            <th  className={styles.table_head}>
              Product
            </th>
            <th  className={styles.table_head}>
              Quatity
            </th>
            <th  className={styles.table_head}>
              Total
            </th>
          </tr>
          </thead>
          
          <tbody>
          <CartItemWrapper/>
          </tbody>
          
        </table>
      
        </div>

        <div className="cart_rigth_wrapper">
          <div className={styles.cart_total_box}>
            <div className={styles.cart_total_header} >
            <p>Total</p>
            <p>${totalPrice}</p>
            </div>

            <div className={styles.cart_box_instruction}>
            <p>Order Instructions</p> 
            </div>

            <div className={styles.cart_taxes_calculated}>
            Taxes and shipping calculated in checkout 
            </div>

            
           <Button>CHECKOUT</Button>
          </div>
        </div>
        </div>
      </div>

  
  </div>
  </>
   );
}
 
export default Cart;