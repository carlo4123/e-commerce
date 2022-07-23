import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { OrderContext } from './context/OrderContext';
import Cart from "./pages/cart";
import Home from "./pages/home";
import './styles/globals.scss';
function App() {

  const [orders,setOrders] = useState([])

  useEffect(()=>{
    if(localStorage.getItem('carts')){
      const orders = JSON.parse(localStorage.getItem('carts'))
      if(orders){
        setOrders(orders)
      }
    }else{
      localStorage.setItem('carts', JSON.stringify([]));
    }
    console.log(orders)

  },[])

 // console.log(orders)

  return (
    <BrowserRouter>
      <OrderContext.Provider value={{orders,setOrders}}>
     
    <Navbar/>
   
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    

    <Footer/>
    </OrderContext.Provider>
 
   </BrowserRouter>
  );
}

export default App;
