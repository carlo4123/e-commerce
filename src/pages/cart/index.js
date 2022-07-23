import { Heading2 } from "../../components/styles/Heading.styles";
import CartItemWrapper from "./components/CartItemWrapper";
import styles from './styles/styles.module.scss';
const Cart = () => {
  return ( 
  <>
  <div className="container">
    <div className={styles.cart}>
      <Heading2>
          My Cart
        </Heading2>
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
  
  </div>
  </>
   );
}
 
export default Cart;