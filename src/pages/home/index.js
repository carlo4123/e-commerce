import { useEffect, useState } from 'react';
import HeroImage from '../../assets/hero-image.png';
import { Button } from '../../components/styles/Button.styles';
import { Heading1, Heading2, Paragraph } from '../../components/styles/Heading.styles';

import Card from './components/Card';
import style from './styles/styles.module.scss';




const Home = () => {

// const {products, dispatch} = useContext(ProductsContext)
const [products,setProducts] = useState(null)
  useEffect(()=>{
    const fetchProduct = async () =>{
      const response = await fetch('http://localhost:4000/api/products/')
      const json = await response.json()
      console.log("json",json)
      if(response.ok){
        //dispatch({type: 'SET_PRODUCT', payload: json})
        setProducts(json)
      }

   
    }
    fetchProduct()
   
  },[])

 

  
  return ( 
      <div className="main">
        <div className="container">
          <section className={style.hero}>
            <div className={style.hero_content}>
              <div className={style.hero_leftWrapper}>
                <div className={style.headingWrapper}>
                <Heading1 colors='#FDBA21'>
                    KOBE
                </Heading1>
                <Heading1 >
                    SHOES
                </Heading1>
                <Heading1 >
                   COLLECTION
                </Heading1>
                </div>

                <Paragraph>
                the styles of shoe availavle to consumeers are 
                endless and profit alse endless
                </Paragraph>

                <Button>SHOP NOW</Button>

              </div>

              <div className={style.hero_rightWrapper}>

                <div className={style.hero_imageWrapper}>

                    <img src={HeroImage} alt="" />
                  
                </div>
                
              </div>
            </div>
          </section>

          <section className={style.product}>
            <Heading2>Products</Heading2>
            <div className={style.product_list}>
            <Card products={products}/>
            </div>
       
          </section>

        </div>
      </div>
   );
}
 
export default Home;