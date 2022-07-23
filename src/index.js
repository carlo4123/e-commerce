import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { OrderContext } from './context/OrderContext';



const root = ReactDOM.createRoot(document.getElementById('root'));



root.render(
  <React.StrictMode>
    <OrderContext.Provider>

  
    <App />
    </OrderContext.Provider>
  </React.StrictMode>
);

