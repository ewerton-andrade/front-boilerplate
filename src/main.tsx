import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx';
import AppRoutes from './Routes/index.tsx';
import { Provider } from "react-redux";
import { store } from './store.ts';
import "./Styles/global.css";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <AppRoutes />
    </Provider>
  </React.StrictMode>,
)