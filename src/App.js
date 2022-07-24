import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import Cart from "./pages/cart";
import Home from "./pages/home";
import './styles/globals.scss';
function App() {

  return (
    <BrowserRouter>
     
     
    <Navbar/>
   
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        
      </Routes>
    

    <Footer/>

 
   </BrowserRouter>
  );
}

export default App;
