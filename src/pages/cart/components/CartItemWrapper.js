import { useContext } from 'react';
import ImgShoes from '../../../assets/shoes.svg';
import Counter from '../../../components/Counter';
import { OrderContext } from '../../../context/OrderContext';
import styles from '../styles/styles.module.scss';
const CartItemWrapper = () => {


 const {orders,setOrders} = useContext(OrderContext)

   

  

  return ( 
<>
  {orders && orders.map( (order, index) => {
    return (
      <tr key={index} className={styles.table_body_row}>
      <td className={styles.table_data}>

        <div className={styles.product_wrapper}>
        <div className={styles.image_wrapper}>
          <img src={ImgShoes} className={styles.image} alt="" />
        </div>
        <div className={styles.product_info}>
        <p>{order.name}</p>
        <span>${order.price}</span>
        </div>
        
        </div>
        
      </td>

      
       
     

      <td className={styles.table_data}>
        <Counter id={order.id} quantity={order.quantity}/>
      </td>

      <td className={styles.table_data}>
        <div className="total_price">{`$ ${order.price * order.quantity}`}</div>
      </td>
    </tr>
    )
  })
      
    }
 </>

   );
}
 
export default CartItemWrapper;